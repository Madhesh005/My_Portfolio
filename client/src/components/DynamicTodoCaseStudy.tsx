import { TerminalLayout } from "@/components/layout/TerminalLayout";
import { ExternalLink, Github, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Typewriter } from "@/components/terminal/Typewriter";

// Terminal Command Block Component
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

// Terminal Gallery Component
function TerminalGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Gallery images for Dynamic ToDo with actual image paths
  const galleryImages = [
    { 
      name: "dynamic-todo-main.png", 
      src: "/dynamic-todo-main.png"
    },
    { 
      name: "dynamic-todo-signup.png", 
      src: "/dynamic-todo-signup.png"
    },
    { 
      name: "dynamic-todo-signin.png", 
      src: "/dynamic-todo-signin.png"
    },
    { 
      name: "dynamic-todo-dashboard.png", 
      src: "/dynamic-todo-dashboard.png"
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
            <Typewriter text="Loading image..." delay={50} />
          </div>
        ) : (
          <div className="text-center space-y-6 animate-in fade-in duration-300 w-full">
            <div className="text-emerald-400 font-mono text-lg">
              Project Gallery
            </div>
            <div className="text-zinc-500 font-mono text-sm">
              Rendering UI snapshot...
            </div>
            
            {/* Large Image Display */}
            <div className="w-full max-w-5xl mx-auto">
              <img 
                src={galleryImages[currentSlide].src}
                alt={`Dynamic ToDo Screenshot ${currentSlide + 1}`}
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
                    <div>[UI_SNAPSHOT_{String(currentSlide + 1).padStart(2, '0')}]</div>
                    <div className="text-xs text-zinc-700">
                      {galleryImages[currentSlide].name}
                    </div>
                    <div className="text-xs text-zinc-700 mt-4 max-w-md">
                      {currentSlide === 0 && "Main dashboard with drag-and-drop task management"}
                      {currentSlide === 1 && "User registration interface with form validation"}
                      {currentSlide === 2 && "Sign-in page with clean, minimal design"}
                      {currentSlide === 3 && "Task completion tracking and statistics"}
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

// Dynamic ToDo Case Study Component
export function DynamicTodoCaseStudy({ project }: { project: any }) {
  return (
    <TerminalLayout>
      <div className="space-y-12 animate-in fade-in duration-500 pb-12">
        
        {/* 1. Title */}
        <CommandBlock command="preview dynamic-todo" delay={0}>
          <div className="space-y-2">
            <div className="text-zinc-300">
              <span className="text-zinc-500">Project Name:</span> Dynamic ToDo
            </div>
            <div className="text-zinc-300">
              <span className="text-zinc-500">Subtitle:</span> Smart Task Manager
            </div>
          </div>
        </CommandBlock>

        {/* 2. Description */}
        <CommandBlock command="describe dynamic-todo" delay={200}>
          <div className="text-zinc-300 leading-relaxed space-y-4">
            <p>
              A modern task management application designed to simplify daily productivity through intuitive interactions. This system enables users to create, organize, and dynamically reprioritize tasks using a drag-and-drop interface, eliminating rigid task hierarchies.
            </p>
            <p>
              Built with a focus on usability and responsiveness, the application ensures seamless task tracking with persistent local storage and real-time UI updates.
            </p>
          </div>
        </CommandBlock>

        {/* 3. Project Gallery */}
        <div className="space-y-4">
          <div className="text-zinc-500 font-mono">
            <span className="text-emerald-500 font-bold mr-2">$</span>
            <Typewriter text="gallery dynamic-todo" delay={30} />
          </div>
          <TerminalGallery />
        </div>

        {/* 4. My Role */}
        <CommandBlock command="role dynamic-todo" delay={400}>
          <div className="space-y-2 text-zinc-300">
            <div className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">›</span>
              <span>Designed UI/UX for task interaction</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">›</span>
              <span>Implemented drag-and-drop logic</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">›</span>
              <span>Built frontend using React + TypeScript</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">›</span>
              <span>Managed state and local persistence</span>
            </div>
          </div>
        </CommandBlock>

        {/* 5. Problem Statement */}
        <CommandBlock command="problem dynamic-todo" delay={600}>
          <div className="text-zinc-300 leading-relaxed">
            Standard to-do applications lack flexibility in prioritizing tasks dynamically. Users often rely on static lists, making it difficult to reorganize tasks efficiently as priorities change.
          </div>
        </CommandBlock>

        {/* 6. Approach & Implementation */}
        <CommandBlock command="approach dynamic-todo" delay={800}>
          <div className="space-y-2 text-zinc-300">
            <div className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">›</span>
              <span>Implemented drag-and-drop interaction for real-time reordering</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">›</span>
              <span>Used localStorage for persistence</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">›</span>
              <span>Designed component-based architecture in React</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">›</span>
              <span>Ensured responsive UI for mobile and desktop</span>
            </div>
          </div>
        </CommandBlock>

        {/* 7. Challenges & Solutions */}
        <CommandBlock command="challenges dynamic-todo" delay={1000}>
          <div className="space-y-4 text-zinc-300">
            <div className="border-l-2 border-yellow-500/30 pl-4 bg-zinc-900/30 py-2 rounded-r">
              <div className="text-yellow-400 font-semibold mb-1">Challenge:</div>
              <div className="text-sm">Managing drag state without UI glitches</div>
              <div className="text-emerald-400 font-semibold mt-2 mb-1">Solution:</div>
              <div className="text-sm">Optimized re-rendering and state updates</div>
            </div>
            <div className="border-l-2 border-yellow-500/30 pl-4 bg-zinc-900/30 py-2 rounded-r">
              <div className="text-yellow-400 font-semibold mb-1">Challenge:</div>
              <div className="text-sm">Maintaining order persistence</div>
              <div className="text-emerald-400 font-semibold mt-2 mb-1">Solution:</div>
              <div className="text-sm">Indexed storage structure in localStorage</div>
            </div>
          </div>
        </CommandBlock>

        {/* 8. Outcomes & Impact */}
        <CommandBlock command="impact dynamic-todo" delay={1200}>
          <div className="space-y-2 text-zinc-300">
            <div className="flex items-start gap-2">
              <span className="text-purple-400 mt-1">›</span>
              <span>Improved usability through intuitive interactions</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-purple-400 mt-1">›</span>
              <span>Faster task organization compared to traditional lists</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-purple-400 mt-1">›</span>
              <span>Clean and responsive UI for better user experience</span>
            </div>
          </div>
        </CommandBlock>

        {/* 9. Links */}
        <CommandBlock command="links dynamic-todo" delay={1400}>
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