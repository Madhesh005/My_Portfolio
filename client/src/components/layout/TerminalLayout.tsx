
import { ReactNode, useEffect, useState } from "react";
import { CommandInput } from "../terminal/CommandInput";
import { useLocation } from "wouter";
import { Download, Linkedin, Home as HomeIcon } from "lucide-react";
import { SOCIALS } from "@/lib/constants";
import { Typewriter } from "../terminal/Typewriter";

interface TerminalLayoutProps {
  children: ReactNode;
}

export function TerminalLayout({ children }: TerminalLayoutProps) {
  const [location, setLocation] = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showContent, setShowContent] = useState(true);

  // Transition Logic
  useEffect(() => {
    // When location changes, trigger transition
    setIsTransitioning(true);
    setShowContent(false);

    // Simulate "loading" phase
    const timer = setTimeout(() => {
        setIsTransitioning(false);
        setShowContent(true);
    }, 1500); // 1.5s transition time

    return () => clearTimeout(timer);
  }, [location]);

  const getPathBreadcrumb = () => {
    if (location === "/") return "~";
    return `~${location}`;
  };

  return (
    <div className="min-h-screen bg-black text-zinc-300 font-mono flex flex-col p-4 md:p-6 lg:p-12 relative overflow-hidden">
      {/* Top Bar */}
      <div className="w-full flex justify-between items-center mb-8 z-10">
        <div className="flex items-center gap-2 text-sm text-zinc-500">
          <span className="text-emerald-500 font-bold">Madheshr@portfolio:</span>
          <span className="text-blue-400">{getPathBreadcrumb()}</span>
        </div>
        
        <div className="flex gap-4">
            {location !== "/" && (
                <button 
                    onClick={() => setLocation("/")}
                    className="flex items-center gap-2 px-3 py-1.5 rounded border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900 transition-all text-xs"
                >
                    <HomeIcon size={14} />
                    <span className="hidden sm:inline">Home</span>
                </button>
            )}
            <a 
                href={SOCIALS.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900 transition-all text-xs"
            >
                <Linkedin size={14} />
                <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a 
                href="/resume.pdf" 
                target="_blank"
                className="flex items-center gap-2 px-3 py-1.5 rounded border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900 transition-all text-xs text-emerald-400"
            >
                <Download size={14} />
                <span className="hidden sm:inline">Resume</span>
            </a>
        </div>
      </div>

      {/* Main Terminal Window */}
      <div className="flex-1 w-full max-w-5xl mx-auto relative flex flex-col">
        {/* Window Header */}
        <div className="w-full bg-zinc-900/80 border border-zinc-800 rounded-t-lg p-2 flex items-center justify-between text-xs text-zinc-500 select-none backdrop-blur-md">
            <div className="flex gap-2 ml-2">
                <button onClick={() => setLocation("/")} className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50 hover:bg-red-500/50 transition-colors"></button>
                <button onClick={() => setLocation("/ls")} className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50 hover:bg-yellow-500/50 transition-colors"></button>
                <button className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50 cursor-default"></button>
            </div>
            <div className="opacity-50">bash — 80x24</div>
            <div className="mr-2 opacity-50 hidden sm:block">type: help | skills | projects</div>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-black/50 border-x border-b border-zinc-800 rounded-b-lg p-4 md:p-8 overflow-y-auto scrollbar-hide min-h-[60vh] relative shadow-2xl shadow-black">
            
            {/* Transition Overlay */}
            {isTransitioning && (
                <div className="absolute inset-0 bg-black/90 z-50 p-8 font-mono text-sm space-y-2">
                    <div className="text-emerald-500">
                        <span className="mr-2">$</span>
                        <Typewriter text={`cd ${location === "/" ? "~" : location.substring(1)}`} delay={50} />
                    </div>
                    <div className="text-emerald-500 opacity-80">
                         <span className="mr-2">&gt;</span>
                         <Typewriter text="Loading modules..." delay={30} />
                    </div>
                    <div className="text-emerald-500 opacity-60">
                         <span className="mr-2">&gt;</span>
                         <Typewriter text="Fetching data from /dev/null..." delay={20} />
                    </div>
                    <div className="text-emerald-500 opacity-40">
                         <span className="mr-2">&gt;</span>
                         <Typewriter text="Rendering UI components..." delay={10} />
                    </div>
                    <div className="mt-4">
                        <span className="cursor-block"></span>
                    </div>
                </div>
            )}

            {/* Actual Content (Fades in) */}
            <div className={`transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
                {children}
            </div>
            
            {/* Input Area Sticky Bottom */}
            <div className="mt-12 mb-4">
                <CommandInput />
            </div>
        </div>
      </div>
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/20 via-black to-black opacity-50" />
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent opacity-50" />
    </div>
  );
}
