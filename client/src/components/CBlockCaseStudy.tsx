import { TerminalLayout } from "@/components/layout/TerminalLayout";
import { ExternalLink, Github, ArrowUpRight, ChevronLeft, ChevronRight, Users, Trophy } from "lucide-react";
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

// Terminal Gallery Component for CBlock
function CBlockGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Gallery images for CBlock - 5 snapshots (cblock5.png may need to be added)
  const galleryImages = [
    { name: "cblock1.png", src: "/cblock1.png" },
    { name: "cblock2.png", src: "/cblock2.png" },
    { name: "cblock3.png", src: "/cblock3.png" },
    { name: "cblock4.png", src: "/cblock4.png" },
    { name: "cblock5.png", src: "/cblock5.png" }
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
            <Typewriter text="Loading blockchain interface..." delay={50} />
          </div>
        ) : (
          <div className="text-center space-y-6 animate-in fade-in duration-300 w-full">
            <div className="text-emerald-400 font-mono text-lg">
              Project Gallery
            </div>
            <div className="text-zinc-500 font-mono text-sm">
              Rendering blockchain interface...
            </div>
            
            {/* Large Image Display */}
            <div className="w-full max-w-5xl mx-auto">
              <img 
                src={galleryImages[currentSlide].src}
                alt={`CBlock Screenshot ${currentSlide + 1}`}
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
                    <div>[BLOCKCHAIN_UI_{String(currentSlide + 1).padStart(2, '0')}]</div>
                    <div className="text-xs text-zinc-700">
                      {galleryImages[currentSlide].name}
                    </div>
                    <div className="text-xs text-zinc-700 mt-4 max-w-md">
                      {currentSlide === 0 && "Landing page with carbon trading features"}
                      {currentSlide === 1 && "Carbon credit marketplace and listings"}
                      {currentSlide === 2 && "Portfolio dashboard and analytics"}
                      {currentSlide === 3 && "Environmental impact tracking"}
                      {currentSlide === 4 && "Blockchain verification interface"}
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

// CBlock Case Study Component
export function CBlockCaseStudy({ project }: { project: any }) {
  return (
    <TerminalLayout>
      <div className="space-y-12 animate-in fade-in duration-500 pb-12">
        
        {/* 1. Title */}
        <CommandBlock command="preview cblock" delay={0}>
          <div className="space-y-2">
            <div className="text-zinc-300">
              <span className="text-zinc-500">Project Name:</span> CBlock
            </div>
            <div className="text-zinc-300">
              <span className="text-zinc-500">Subtitle:</span> Blockchain Carbon Trading Platform
            </div>
          </div>
        </CommandBlock>

        {/* 2. Collaborators (NEW SECTION) */}
        <CommandBlock command="collaborators cblock" delay={200}>
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Users size={16} className="text-blue-400" />
              <span className="text-zinc-400 font-semibold">Team Members</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a 
                href="https://www.linkedin.com/in/rsvkb/" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 p-3 border border-zinc-800 rounded bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-blue-500/50 hover:text-blue-400 transition-all group"
              >
                <span className="text-emerald-500">›</span>
                <span className="font-medium">Venkata Krishna Balaji</span>
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              
              <a 
                href="https://www.linkedin.com/in/yogesh-odayar-p-s-8a2077293/" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 p-3 border border-zinc-800 rounded bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-blue-500/50 hover:text-blue-400 transition-all group"
              >
                <span className="text-emerald-500">›</span>
                <span className="font-medium">Yogesh Odayar PS</span>
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              
              <a 
                href="https://www.linkedin.com/in/lokesh-ta1511/" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 p-3 border border-zinc-800 rounded bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-blue-500/50 hover:text-blue-400 transition-all group"
              >
                <span className="text-emerald-500">›</span>
                <span className="font-medium">Lokesh T A</span>
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </CommandBlock>

        {/* 3. Description */}
        <CommandBlock command="describe cblock" delay={400}>
          <div className="text-zinc-300 leading-relaxed space-y-4">
            <p>
              CBlock is a blockchain-powered carbon trading platform that enables users to trade verified carbon credits in a transparent and secure marketplace. The platform focuses on sustainability by connecting individuals and organizations with global environmental projects.
            </p>
            <p>
              It leverages blockchain technology to ensure authenticity, traceability, and trust in every transaction, while providing real-time insights into carbon offset impact and portfolio performance.
            </p>
          </div>
        </CommandBlock>

        {/* 4. Project Gallery */}
        <div className="space-y-4">
          <div className="text-zinc-500 font-mono">
            <span className="text-emerald-500 font-bold mr-2">$</span>
            <Typewriter text="gallery cblock" delay={30} />
          </div>
          <CBlockGallery />
        </div>

        {/* 5. Hackathon Context (NEW SECTION) */}
        <CommandBlock command="hackathon cblock" delay={600}>
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Trophy size={16} className="text-yellow-400" />
              <span className="text-zinc-400 font-semibold">Hackathon Achievement</span>
            </div>
            <div className="space-y-3">
              <div className="grid grid-cols-[100px_1fr] gap-4">
                <span className="text-zinc-500">Event:</span>
                <span className="text-zinc-300">Smart India Hackathon (SIH)</span>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-4">
                <span className="text-zinc-500">Selection:</span>
                <span className="text-yellow-400 font-medium">College Level Finalist (SaiHackFest)</span>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-4 items-start">
                <span className="text-zinc-500">Description:</span>
                <span className="text-zinc-300 leading-relaxed">
                  This project was developed as part of a hackathon initiative, focusing on solving real-world challenges using blockchain technology. The team collaborated to design a scalable and impactful Web3-based solution within a limited time frame.
                </span>
              </div>
            </div>
          </div>
        </CommandBlock>

        {/* 6. My Role */}
        <CommandBlock command="role cblock" delay={800}>
          <div className="space-y-2 text-zinc-300">
            <div className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">›</span>
              <span>Contributed to frontend development using React</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">›</span>
              <span>Worked on Web3 integration using Web3.js</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">›</span>
              <span>Assisted in smart contract interaction workflows</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">›</span>
              <span>Collaborated on UI/UX and system design</span>
            </div>
          </div>
        </CommandBlock>

        {/* 7. Problem Statement */}
        <CommandBlock command="problem cblock" delay={1000}>
          <div className="text-zinc-300 leading-relaxed">
            Carbon credit markets often lack transparency, trust, and accessibility. Users face challenges in verifying the authenticity of credits, tracking impact, and participating in a reliable global marketplace.
          </div>
        </CommandBlock>

        {/* 8. Approach & Implementation */}
        <CommandBlock command="approach cblock" delay={1200}>
          <div className="space-y-2 text-zinc-300">
            <div className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">›</span>
              <span>Built a blockchain-integrated platform for carbon credit trading</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">›</span>
              <span>Enabled verification of credits using decentralized systems</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">›</span>
              <span>Developed a dashboard for portfolio tracking and analytics</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">›</span>
              <span>Integrated real-time market insights and performance metrics</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">›</span>
              <span>Designed scalable frontend using React and Web3 technologies</span>
            </div>
          </div>
        </CommandBlock>

        {/* 9. Challenges & Solutions */}
        <CommandBlock command="challenges cblock" delay={1400}>
          <div className="space-y-4 text-zinc-300">
            <div className="border-l-2 border-yellow-500/30 pl-4 bg-zinc-900/30 py-2 rounded-r">
              <div className="text-yellow-400 font-semibold mb-1">Challenge:</div>
              <div className="text-sm">Ensuring transparency and trust in carbon credit transactions</div>
              <div className="text-emerald-400 font-semibold mt-2 mb-1">Solution:</div>
              <div className="text-sm">Leveraged blockchain for verification and traceability</div>
            </div>
            <div className="border-l-2 border-yellow-500/30 pl-4 bg-zinc-900/30 py-2 rounded-r">
              <div className="text-yellow-400 font-semibold mb-1">Challenge:</div>
              <div className="text-sm">Handling real-time data for analytics and portfolio updates</div>
              <div className="text-emerald-400 font-semibold mt-2 mb-1">Solution:</div>
              <div className="text-sm">Designed efficient data flow and state management</div>
            </div>
          </div>
        </CommandBlock>

        {/* 10. Outcomes & Impact */}
        <CommandBlock command="impact cblock" delay={1600}>
          <div className="space-y-2 text-zinc-300">
            <div className="flex items-start gap-2">
              <span className="text-purple-400 mt-1">›</span>
              <span>Enabled transparent carbon credit trading platform</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-purple-400 mt-1">›</span>
              <span>Supported climate impact tracking through verified data</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-purple-400 mt-1">›</span>
              <span>Built a scalable system for global environmental participation</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-purple-400 mt-1">›</span>
              <span>Strengthened understanding of Web3 and blockchain systems</span>
            </div>
          </div>
        </CommandBlock>

        {/* 11. Links */}
        <CommandBlock command="links cblock" delay={1800}>
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