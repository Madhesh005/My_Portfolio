import { TerminalLayout } from "@/components/layout/TerminalLayout";
import { ExternalLink, Github, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Typewriter } from "@/components/terminal/Typewriter";

// Terminal Command Block Component (reused from Dynamic ToDo)
interface CommandBlockProps {
  command: string;
  children: React.ReactNode;
  delay?: number;
}

function CommandBlock({ command, children, delay = 0 }: CommandBlockProps) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="space-y-4">
      <div className="text-zinc-500 font-mono">
        <span className="text-emerald-500 font-bold mr-2">$</span>
        <Typewriter text={command} delay={30} />
      </div>
      
      <div className={`border border-zinc-800 rounded-lg p-6 bg-zinc-900/10 font-mono text-sm transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>
    </div>
  );
}

// Terminal Gallery Component for Jarvis AI
function JarvisGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Gallery images for Jarvis AI - 3 snapshots only
  const galleryImages = [
    { 
      name: "jarvis1.png", 
      src: "/jarvis1.png"
    },
    { 
      name: "jarvis2.png", 
      src: "/jarvis2.png"
    },
    { 
      name: "jarvis3.png", 
      src: "/jarvis3.png"
    }
  ];

  const nextSlide = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
      setIsLoading(false);
    }, 300);
  };

  const prevSlide = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
      setIsLoading(false);
    }, 300);
  };

  return (
    <div className="space-y-4">
      {/* Gallery Display */}
      <div className="border border-zinc-800 rounded-lg bg-black p-8 min-h-[600px] flex items-center justify-center relative overflow-hidden">
        {isLoading ? (
          <div className="text-emerald-500 font-mono text-sm">
            <Typewriter text="Loading assistant interface..." delay={50} />
          </div>
        ) : (
          <div className="text-center space-y-6 animate-in fade-in duration-300 w-full">
            <div className="text-emerald-400 font-mono text-lg">
              Project Gallery
            </div>
            <div className="text-zinc-500 font-mono text-sm">
              Rendering assistant interface...
            </div>
            
            {/* Large Image Display */}
            <div className="w-full max-w-5xl mx-auto">
              <img 
                src={galleryImages[currentSlide].src}
                alt={`Jarvis AI Screenshot ${currentSlide + 1}`}
                className="w-full h-auto max-h-[450px] object-contain border border-zinc-700 rounded shadow-2xl bg-black"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              {/* Fallback placeholder */}
              <div className="hidden w-full h-[450px] bg-zinc-900 border border-zinc-700 rounded">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-zinc-600 font-mono text-sm text-center space-y-2">
                    <div>[AI_INTERFACE_{String(currentSlide + 1).padStart(2, '0')}]</div>
                    <div className="text-xs text-zinc-700">
                      {galleryImages[currentSlide].name}
                    </div>
                    <div className="text-xs text-zinc-700 mt-4 max-w-md">
                      {currentSlide === 0 && "Chat interface with AI conversation flow"}
                      {currentSlide === 1 && "Sidebar with features and navigation panel"}
                      {currentSlide === 2 && "Real-time interaction example with responses"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between text-zinc-500 font-mono text-sm">
        <button 
          onClick={prevSlide}
          className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
          disabled={isLoading}
        >
          <ChevronLeft size={16} />
          previous
        </button>
        
        <div className="text-zinc-600">
          {currentSlide + 1} / {galleryImages.length}
        </div>
        
        <button 
          onClick={nextSlide}
          className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
          disabled={isLoading}
        >
          next
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}

// Jarvis AI Case Study Component
export function JarvisAICaseStudy({ project }: { project: any }) {
  return (
    <TerminalLayout>
      <div className="space-y-12 animate-in fade-in duration-500 pb-12">
        
        {/* 1. Title */}
        <CommandBlock command="preview jarvis-ai" delay={0}>
          <div className="space-y-2">
            <div className="text-zinc-300">
              <span className="text-zinc-500">Project Name:</span> Jarvis AI
            </div>
            <div className="text-zinc-300">
              <span className="text-zinc-500">Subtitle:</span> Personal AI Assistant
            </div>
          </div>
        </CommandBlock>

        {/* 2. Description */}
        <CommandBlock command="describe jarvis-ai" delay={200}>
          <div className="text-zinc-300 leading-relaxed space-y-4">
            <p>
              Jarvis AI is a personalized assistant designed to provide intelligent, context-aware support for everyday tasks ranging from coding assistance to idea generation. Built with a focus on accessibility and real-time interaction, it enables users to engage with an AI system tailored to their personal workflow.
            </p>
            <p>
              The system integrates LLM capabilities with a lightweight interface, allowing seamless conversations, quick responses, and extensible functionality for future automation and productivity enhancements.
            </p>
          </div>
        </CommandBlock>

        {/* 3. Project Gallery */}
        <div className="space-y-4">
          <div className="text-zinc-500 font-mono">
            <span className="text-emerald-500 font-bold mr-2">$</span>
            <Typewriter text="gallery jarvis-ai" delay={30} />
          </div>
          <JarvisGallery />
        </div>

        {/* 4. My Role */}
        <CommandBlock command="role jarvis-ai" delay={400}>
          <div className="space-y-2 text-zinc-300">
            <div className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">›</span>
              <span>Designed and developed AI assistant interface</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">›</span>
              <span>Integrated LLM-based response system</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">›</span>
              <span>Built interactive chat UI using Streamlit</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">›</span>
              <span>Structured prompts and response handling logic</span>
            </div>
          </div>
        </CommandBlock>

        {/* 5. Problem Statement */}
        <CommandBlock command="problem jarvis-ai" delay={600}>
          <div className="text-zinc-300 leading-relaxed">
            Users often rely on multiple tools for different tasks such as coding help, idea generation, and quick information retrieval. There is a lack of a unified, personalized assistant that can handle diverse queries efficiently in a single interface.
          </div>
        </CommandBlock>

        {/* 6. Approach & Implementation */}
        <CommandBlock command="approach jarvis-ai" delay={800}>
          <div className="space-y-2 text-zinc-300">
            <div className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">›</span>
              <span>Developed a conversational interface using Streamlit</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">›</span>
              <span>Integrated LLM for generating contextual responses</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">›</span>
              <span>Designed modular prompt handling system</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">›</span>
              <span>Built lightweight UI for fast interaction</span>
            </div>
          </div>
        </CommandBlock>

        {/* 7. Challenges & Solutions */}
        <CommandBlock command="challenges jarvis-ai" delay={1000}>
          <div className="space-y-4 text-zinc-300">
            <div className="border-l-2 border-yellow-500/30 pl-4 bg-zinc-900/30 py-2 rounded-r">
              <div className="text-yellow-400 font-semibold mb-1">Challenge:</div>
              <div className="text-sm">Maintaining relevant AI responses</div>
              <div className="text-emerald-400 font-semibold mt-2 mb-1">Solution:</div>
              <div className="text-sm">Improved prompt structuring and context handling</div>
            </div>
            <div className="border-l-2 border-yellow-500/30 pl-4 bg-zinc-900/30 py-2 rounded-r">
              <div className="text-yellow-400 font-semibold mb-1">Challenge:</div>
              <div className="text-sm">UI responsiveness during interaction</div>
              <div className="text-emerald-400 font-semibold mt-2 mb-1">Solution:</div>
              <div className="text-sm">Optimized rendering and async response flow</div>
            </div>
          </div>
        </CommandBlock>

        {/* 8. Outcomes & Impact */}
        <CommandBlock command="impact jarvis-ai" delay={1200}>
          <div className="space-y-2 text-zinc-300">
            <div className="flex items-start gap-2">
              <span className="text-purple-400 mt-1">›</span>
              <span>Centralized AI assistance for multiple use cases</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-purple-400 mt-1">›</span>
              <span>Improved productivity through quick interactions</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-purple-400 mt-1">›</span>
              <span>Scalable base for future AI integrations</span>
            </div>
          </div>
        </CommandBlock>

        {/* 9. Links */}
        <CommandBlock command="links jarvis-ai" delay={1400}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a 
              href={project.links.demo} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center justify-between px-4 py-3.5 border border-zinc-800 rounded-md bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-emerald-500/50 hover:text-emerald-400 transition-all group"
            >
              <div className="flex items-center gap-3">
                <ExternalLink size={16} />
                <span className="font-medium">Live Demo</span>
              </div>
              <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            
            <a 
              href={project.links.repo} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center justify-between px-4 py-3.5 border border-zinc-800 rounded-md bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-purple-500/50 hover:text-purple-400 transition-all group"
            >
              <div className="flex items-center gap-3">
                <Github size={16} />
                <span className="font-medium">GitHub Repository</span>
              </div>
              <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </CommandBlock>

      </div>
    </TerminalLayout>
  );
}