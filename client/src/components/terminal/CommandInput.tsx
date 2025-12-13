
import { useState, useRef, useEffect } from "react";
import { useLocation } from "wouter";
import { COMMANDS, PROJECTS } from "@/lib/constants";
import { useToast } from "@/hooks/use-toast";

interface CommandInputProps {
  onCommand?: (cmd: string) => void;
}

export function CommandInput({ onCommand }: CommandInputProps) {
  const [input, setInput] = useState("");
  const [location, setLocation] = useLocation();
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  // Handle external "type" events
  useEffect(() => {
    const handleType = (e: CustomEvent) => {
        const text = e.detail.text;
        const submit = e.detail.submit;
        
        setInput(text);
        inputRef.current?.focus();
        
        if (submit) {
            setTimeout(() => {
                processCommand(text);
                setHistory((prev) => [...prev, text]);
                setHistoryIndex(-1);
                setInput("");
            }, 300);
        }
    };

    window.addEventListener('terminal:type', handleType as EventListener);
    return () => window.removeEventListener('terminal:type', handleType as EventListener);
  }, [location]); 

  // Smart Auto-focus
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (
            target.tagName === 'INPUT' || 
            target.tagName === 'TEXTAREA' || 
            target.tagName === 'A' || 
            target.tagName === 'BUTTON' ||
            target.closest('a') || 
            target.closest('button') || 
            target.closest('input') ||
            target.closest('textarea')
        ) return;
        
        inputRef.current?.focus();
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const newIndex = historyIndex < history.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      } else {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  const handleSubmit = () => {
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    setHistory((prev) => [...prev, trimmedInput]);
    setHistoryIndex(-1);
    setInput("");

    if (onCommand) onCommand(trimmedInput);
    processCommand(trimmedInput);
  };

  const processCommand = (cmd: string) => {
    const parts = cmd.toLowerCase().split(" ");
    const command = parts[0];
    const arg = parts.slice(1).join(" ");

    // Check for project shortcuts first
    // We normalize by removing hyphens to match what we did in Projects.tsx and ListCommands.tsx
    // The user wants 'wealthempires' to work for 'wealth-empires'
    const normalizedCmd = command.replace(/-/g, "");

    // Find if this command matches any project ID (also normalized)
    const project = PROJECTS.find(p => p.id.replace(/-/g, "") === normalizedCmd);
    
    if (project) {
        setLocation(`/project/${project.id}`);
        return;
    }

    switch (command) {
      case "help":
      case "ls":
        setLocation("/ls");
        break;
      case "home":
      case "intro":
      case "clear":
        setLocation("/");
        break;
      case "projects":
      case "work":
        setLocation("/projects");
        break;
      case "internships":
      case "experience":
        setLocation("/internships");
        break;
      case "skills":
      case "stack":
        setLocation("/skills");
        break;
      case "contact":
      case "email":
        setLocation("/contact");
        break;
      case "about":
        setLocation("/");
        break;
      case "resume":
      case "cv":
        // Create a temporary link element to trigger download
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'Madhesh_R_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast({ title: "Downloading resume...", className: "font-mono bg-zinc-900 text-white border-zinc-800", duration: 3000 });
        break;
      case "preview":
      case "open":
      case "view":
        if (arg) {
            const project = PROJECTS.find(p => p.id === arg || p.name.toLowerCase().includes(arg));
            if (project) {
                setLocation(`/project/${project.id}`);
            } else {
                toast({ title: `Project '${arg}' not found`, variant: "destructive", className: "font-mono", duration: 5000 });
            }
        } else {
            toast({ title: "Usage: preview <project_name>", className: "font-mono bg-zinc-900 text-white border-zinc-800", duration: 5000 });
        }
        break;
      case "repo":
        if (arg) {
            const project = PROJECTS.find(p => p.id === arg || p.name.toLowerCase().includes(arg));
            if (project) {
                window.open(project.links.repo, "_blank");
            } else {
                toast({ title: `Project '${arg}' not found`, variant: "destructive", className: "font-mono", duration: 5000 });
            }
        }
        break;
      default:
        toast({ title: `Command not found: ${command}`, variant: "destructive", className: "font-mono", duration: 5000 });
    }
  };

  const getPromptPath = () => {
    if (location === "/") return "Portfolio:\\Home>";
    
    // Convert /projects -> \Home\Projects>
    // Convert /project/pathlens -> \Home\Projects\PathLens>
    
    const cleanPath = location.substring(1).split("/");
    let pathStr = "Portfolio:\\Home";
    
    if (location === "/projects") return `${pathStr}\\Projects>`;
    if (location === "/skills") return `${pathStr}\\Skills>`;
    if (location === "/contact") return `${pathStr}\\Contact>`;
    if (location === "/ls") return `${pathStr}\\Ls>`;
    if (location === "/internships") return `${pathStr}\\Internships>`;
    
    if (cleanPath[0] === "project" && cleanPath[1]) {
        // Find project name for prettier display
        const p = PROJECTS.find(p => p.id === cleanPath[1]);
        const pName = p ? p.name.replace(/\s+/g, "") : cleanPath[1];
        return `${pathStr}\\Projects\\${pName}>`;
    }

    return `${pathStr}\\${cleanPath[0].charAt(0).toUpperCase() + cleanPath[0].slice(1)}>`;
  };
  
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="relative flex items-center w-full bg-zinc-900/80 border border-zinc-700 rounded-lg px-4 py-3 mb-3 shadow-2xl backdrop-blur-md focus-within:ring-1 focus-within:ring-emerald-500/50 focus-within:border-emerald-500/50 transition-all cursor-text overflow-hidden" onClick={() => inputRef.current?.focus()}>
        <span className="text-emerald-500 font-bold mr-3 font-mono shrink-0 whitespace-nowrap hidden sm:inline">{getPromptPath()}</span>
        <span className="text-emerald-500 font-bold mr-3 font-mono shrink-0 whitespace-nowrap sm:hidden">$</span>
        
        {/* Custom Input Display with Block Cursor */}
        <div className="flex-1 font-mono text-zinc-100 whitespace-pre overflow-hidden flex items-center">
             <span>{input}</span>
             <span className="cursor-block align-middle ml-1"></span>
        </div>

        {/* Hidden Input for functionality */}
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="absolute inset-0 w-full h-full opacity-0 cursor-text"
          autoComplete="off"
          autoFocus
        />
      </div>
    </div>
  );
}
