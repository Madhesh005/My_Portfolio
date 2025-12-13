
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

  // Auto-focus on mount and keep focus
  useEffect(() => {
    const handleClick = () => inputRef.current?.focus();
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

    switch (command) {
      case "help":
      case "ls":
        // Help is usually shown in UI, but we can toast or handle globally
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
        window.open("/resume.pdf", "_blank"); // Mock resume download
        toast({ title: "Downloading resume...", className: "font-mono bg-zinc-900 text-white border-zinc-800" });
        break;
      case "preview":
      case "open":
      case "view":
        if (arg) {
            const project = PROJECTS.find(p => p.id === arg || p.name.toLowerCase().includes(arg));
            if (project) {
                setLocation(`/project/${project.id}`);
            } else {
                toast({ title: `Project '${arg}' not found`, variant: "destructive", className: "font-mono" });
            }
        } else {
            toast({ title: "Usage: preview <project_name>", className: "font-mono bg-zinc-900 text-white border-zinc-800" });
        }
        break;
      case "repo":
        if (arg) {
            const project = PROJECTS.find(p => p.id === arg || p.name.toLowerCase().includes(arg));
            if (project) {
                window.open(project.links.repo, "_blank");
            } else {
                toast({ title: `Project '${arg}' not found`, variant: "destructive", className: "font-mono" });
            }
        }
        break;
      case "ai":
        setLocation("/projects"); // Or a specific AI page if needed
        break;
      default:
        toast({ title: `Command not found: ${command}`, variant: "destructive", className: "font-mono" });
    }
  };

  // Suggestion bar content based on current page could be cool, but sticking to static for now as per design
  
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex items-center gap-2 text-zinc-500 text-sm font-mono px-4 opacity-50">
        <span>$ try:</span>
        {COMMANDS.slice(0, 5).map(c => (
            <span key={c.cmd} className="hover:text-white cursor-pointer transition-colors" onClick={() => setInput(c.cmd)}>
                {c.cmd}
            </span>
        ))}
        <span>|</span>
        <span className="animate-pulse">█</span>
      </div>
      
      <div className="flex items-center w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 shadow-lg backdrop-blur-sm focus-within:ring-1 focus-within:ring-zinc-700 transition-all">
        <span className="text-emerald-500 font-bold mr-3 font-mono">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent border-none outline-none font-mono text-zinc-100 placeholder:text-zinc-600"
          placeholder="type a command..."
          autoComplete="off"
          autoFocus
        />
      </div>
      
      {/* Quick Nav Buttons (Bottom Bar) */}
      <div className="flex justify-center gap-4 mt-2 font-mono text-xs text-zinc-500">
        {["projects", "skills", "ai", "resume", "contact"].map(cmd => (
            <button 
                key={cmd}
                onClick={() => processCommand(cmd)}
                className="hover:text-emerald-400 transition-colors uppercase tracking-widest"
            >
                {cmd}
            </button>
        ))}
      </div>
    </div>
  );
}
