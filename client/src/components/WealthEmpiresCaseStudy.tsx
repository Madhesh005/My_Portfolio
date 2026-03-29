import { TerminalLayout } from "@/components/layout/TerminalLayout";
import { ExternalLink, Github, ArrowUpRight, ChevronLeft, ChevronRight, Building2, Calendar, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { Typewriter } from "@/components/terminal/Typewriter";

// Terminal Command Block Component (reused from other case studies)
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

// Terminal Gallery Component for Wealth Empires
function WealthEmpiresGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Gallery images for Wealth Empires - 10 snapshots
  const galleryImages = [
    { name: "wealth1.png", src: "/wealth1.png" },
    { name: "wealth2.png", src: "/wealth2.png" },
    { name: "wealth3.png", src: "/wealth3.png" },
    { name: "wealth4.png", src: "/wealth4.png" },
    { name: "wealth5.png", src: "/wealth5.png" },
    { name: "wealth6.png", src: "/wealth6.png" },
    { name: "wealth7.png", src: "/wealth7.png" },
    { name: "wealth8.png", src: "/wealth8.png" },
    { name: "wealth9.png", src: "/wealth9.png" },
    { name: "wealth10.png", src: "/wealth10.png" }
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
            <Typewriter text="Loading section preview..." delay={50} />
          </div>
        ) : (
          <div className="text-center space-y-6 animate-in fade-in duration-300 w-full">
            <div className="text-emerald-400 font-mono text-lg">
              Project Preview
            </div>
            <div className="text-zinc-500 font-mono text-sm">
              Rendering section preview...
            </div>
            
            {/* Large Image Display */}
            <div className="w-full max-w-5xl mx-auto">
              <img 
                src={galleryImages[currentSlide].src}
                alt={`Wealth Empires Screenshot ${currentSlide + 1}`}
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
                    <div>[SECTION_PREVIEW_{String(currentSlide + 1).padStart(2, '0')}]</div>
                    <div className="text-xs text-zinc-700">
                      {galleryImages[currentSlide].name}
                    </div>
                    <div className="text-xs text-zinc-700 mt-4 max-w-md">
                      {currentSlide === 0 && "Hero section with company branding"}
                      {currentSlide === 1 && "Services overview and offerings"}
                      {currentSlide === 2 && "Why choose us section"}
                      {currentSlide === 3 && "Call-to-action sections"}
                      {currentSlide === 4 && "About company information"}
                      {currentSlide === 5 && "Contact and location details"}
                      {currentSlide === 6 && "Footer and additional links"}
                      {currentSlide === 7 && "Mobile responsive design"}
                      {currentSlide === 8 && "Performance optimization"}
                      {currentSlide === 9 && "Complete website overview"}
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

// Wealth Empires Case Study Component
export function WealthEmpiresCaseStudy({ project }: { project: any }) {
  return (
    <TerminalLayout>
      <div className="space-y-12 animate-in fade-in duration-500 pb-12">
        
        {/* 1. Title */}
        <CommandBlock command="preview wealth-empires" delay={0}>
          <div className="space-y-2">
            <div className="text-zinc-300">
              <span className="text-zinc-500">Project Name:</span> Wealth Empires
            </div>
            <div className="text-zinc-300">
              <span className="text-zinc-500">Subtitle:</span> Corporate Website / Digital Presence
            </div>
          </div>
        </CommandBlock>

        {/* 2. Description */}
        <CommandBlock command="describe wealth-empires" delay={200}>
          <div className="text-zinc-300 leading-relaxed space-y-4">
            <p>
              Wealth Empires is a corporate website developed to establish a strong digital presence for a startup offering business incorporation and financial services. The platform is designed to clearly communicate services, build trust, and guide users through structured conversion flows.
            </p>
            <p>
              The system focuses on performance, responsiveness, and modern UI design, ensuring a seamless experience across devices while maintaining a professional brand identity.
            </p>
          </div>
        </CommandBlock>

        {/* 3. Project Gallery */}
        <div className="space-y-4">
          <div className="text-zinc-500 font-mono">
            <span className="text-emerald-500 font-bold mr-2">$</span>
            <Typewriter text="gallery wealth-empires" delay={30} />
          </div>
          <WealthEmpiresGallery />
        </div>

        {/* 4. Internship Experience (NEW SECTION) */}
        <CommandBlock command="internship wealth-empires" delay={400}>
          <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-zinc-800 pb-4">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Building2 size={18} className="text-emerald-500" />
                  Software Development Intern
                </h3>
                <div className="text-zinc-400 font-mono text-sm mt-1">
                  Wealth Empires (Startup)
                </div>
              </div>
              <div className="flex flex-col items-end text-xs text-zinc-500 font-mono gap-1">
                <div className="flex items-center gap-2">
                  <Calendar size={12} />
                  Aug 2025 – Sept 2025
                </div>
                <div className="flex items-center gap-2 px-2 py-1 rounded bg-zinc-900 border border-zinc-800">
                  <MapPin size={12} />
                  Remote
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <div className="text-zinc-300 leading-relaxed">
                Worked as a software intern to design and develop the complete digital presence of the company. Responsible for building a responsive, high-performance corporate website that communicates services clearly and improves user engagement.
              </div>
              
              {/* Contributions */}
              <div>
                <div className="text-zinc-500 font-semibold mb-2 text-xs uppercase tracking-widest">Key Contributions</div>
                <div className="space-y-2 text-zinc-300">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>Developed full frontend architecture</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>Designed UI/UX for conversion-focused landing pages</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>Implemented responsive layouts for all devices</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>Optimized performance (high Lighthouse score)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CommandBlock>

        {/* 5. My Role */}
        <CommandBlock command="role wealth-empires" delay={600}>
          <div className="space-y-2 text-zinc-300">
            <div className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">›</span>
              <span>Designed complete website UI/UX</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">›</span>
              <span>Developed frontend using React + Tailwind</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">›</span>
              <span>Implemented responsive and accessible layouts</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">›</span>
              <span>Collaborated with team for content and structure</span>
            </div>
          </div>
        </CommandBlock>

        {/* 6. Problem Statement */}
        <CommandBlock command="problem wealth-empires" delay={800}>
          <div className="text-zinc-300 leading-relaxed">
            The company lacked a professional digital presence to effectively communicate its services and attract potential clients. Existing solutions were not optimized for user engagement or conversion.
          </div>
        </CommandBlock>

        {/* 7. Approach & Implementation */}
        <CommandBlock command="approach wealth-empires" delay={1000}>
          <div className="space-y-2 text-zinc-300">
            <div className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">›</span>
              <span>Designed modern, clean UI aligned with brand identity</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">›</span>
              <span>Structured pages for clear service communication</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">›</span>
              <span>Built reusable components for scalability</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">›</span>
              <span>Optimized performance and loading speed</span>
            </div>
          </div>
        </CommandBlock>

        {/* 8. Challenges & Solutions */}
        <CommandBlock command="challenges wealth-empires" delay={1200}>
          <div className="space-y-4 text-zinc-300">
            <div className="border-l-2 border-yellow-500/30 pl-4 bg-zinc-900/30 py-2 rounded-r">
              <div className="text-yellow-400 font-semibold mb-1">Challenge:</div>
              <div className="text-sm">Balancing design and performance</div>
              <div className="text-emerald-400 font-semibold mt-2 mb-1">Solution:</div>
              <div className="text-sm">Optimized assets and minimized render blocking</div>
            </div>
            <div className="border-l-2 border-yellow-500/30 pl-4 bg-zinc-900/30 py-2 rounded-r">
              <div className="text-yellow-400 font-semibold mb-1">Challenge:</div>
              <div className="text-sm">Creating conversion-focused layout</div>
              <div className="text-emerald-400 font-semibold mt-2 mb-1">Solution:</div>
              <div className="text-sm">Structured CTAs and clear information hierarchy</div>
            </div>
          </div>
        </CommandBlock>

        {/* 9. Outcomes & Impact */}
        <CommandBlock command="impact wealth-empires" delay={1400}>
          <div className="space-y-2 text-zinc-300">
            <div className="flex items-start gap-2">
              <span className="text-purple-400 mt-1">›</span>
              <span>Established strong digital presence for the startup</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-purple-400 mt-1">›</span>
              <span>Improved user engagement and clarity of services</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-purple-400 mt-1">›</span>
              <span>Achieved high performance scores (Lighthouse optimized)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-purple-400 mt-1">›</span>
              <span>Delivered a production-ready corporate website</span>
            </div>
          </div>
        </CommandBlock>

        {/* 10. Links */}
        <CommandBlock command="links wealth-empires" delay={1600}>
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