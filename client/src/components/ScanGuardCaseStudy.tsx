import { TerminalLayout } from "@/components/layout/TerminalLayout";
import { ExternalLink, Github, ArrowUpRight, ChevronLeft, ChevronRight, Users } from "lucide-react";
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

// Terminal Gallery Component for ScanGuard
function ScanGuardGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Gallery images for ScanGuard - 5 snapshots (using .jpg extension)
  const galleryImages = [
    { name: "scanguard1.jpg", src: "/scanguard1.jpg" },
    { name: "scanguard2.jpg", src: "/scanguard2.jpg" },
    { name: "scanguard3.jpg", src: "/scanguard3.jpg" },
    { name: "scanguard4.jpg", src: "/scanguard4.jpg" },
    { name: "scanguard5.jpg", src: "/scanguard5.jpg" }
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
            <Typewriter text="Loading smart checkout interface..." delay={50} />
          </div>
        ) : (
          <div className="text-center space-y-6 animate-in fade-in duration-300 w-full">
            <div className="text-emerald-400 font-mono text-lg">
              Project Gallery
            </div>
            <div className="text-zinc-500 font-mono text-sm">
              Analyzing smart checkout system...
            </div>
            
            {/* Large Image Display */}
            <div className="w-full max-w-5xl mx-auto">
              <img 
                src={galleryImages[currentSlide].src}
                alt={`ScanGuard Screenshot ${currentSlide + 1}`}
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
                    <div>[AI_DETECTION_{String(currentSlide + 1).padStart(2, '0')}]</div>
                    <div className="text-xs text-zinc-700">
                      {galleryImages[currentSlide].name}
                    </div>
                    <div className="text-xs text-zinc-700 mt-4 max-w-md">
                      {currentSlide === 0 && "Mobile app interface for product scanning"}
                      {currentSlide === 1 && "Web dashboard for inventory and analytics"}
                      {currentSlide === 2 && "Weight sensor validation system"}
                      {currentSlide === 3 && "AI-assisted CCTV monitoring interface"}
                      {currentSlide === 4 && "Real-time checkout and payment processing"}
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

// ScanGuard Case Study Component
export function ScanGuardCaseStudy({ project }: { project: any }) {
  return (
    <TerminalLayout>
      <div className="space-y-12 animate-in fade-in duration-500 pb-12">
        
        {/* 1. Title */}
        <CommandBlock command="preview scanguard" delay={0}>
          <div className="space-y-2">
            <div className="text-zinc-300">
              <span className="text-zinc-500">Project Name:</span> ScanGuard
            </div>
            <div className="text-zinc-300">
              <span className="text-zinc-500">Subtitle:</span> Smart Checkout & Theft Prevention System
            </div>
          </div>
        </CommandBlock>

        {/* 2. Collaborators */}
        <CommandBlock command="collaborators scanguard" delay={200}>
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Users size={16} className="text-blue-400" />
              <span className="text-zinc-400 font-semibold">Team Members</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a 
                href="https://www.linkedin.com/in/nivekhithaatyourservice/" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 p-3 border border-zinc-800 rounded bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-blue-500/50 hover:text-blue-400 transition-all group"
              >
                <span className="text-emerald-500">›</span>
                <span className="font-medium">Nivekhitha R H</span>
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              
              <a 
                href="https://www.linkedin.com/in/ramya-selvam-279a772b6/" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 p-3 border border-zinc-800 rounded bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-blue-500/50 hover:text-blue-400 transition-all group"
              >
                <span className="text-emerald-500">›</span>
                <span className="font-medium">Ramya S</span>
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </CommandBlock>

        {/* 3. Description */}
        <CommandBlock command="describe scanguard" delay={400}>
          <div className="text-zinc-300 leading-relaxed space-y-4">
            <p>
              ScanGuard is a smart supermarket checkout system designed to improve customer convenience and store security. The system combines a mobile application, a web-based admin dashboard, and a weight-sensor-based validation mechanism to enable seamless and secure shopping.
            </p>
            <p>
              Customers can scan products using their mobile app, generate bills in real time, and complete payments without waiting in checkout queues. On the store side, the platform provides real-time inventory tracking, sales analytics, and operational insights.
            </p>
            <p>
              To enhance security, ScanGuard integrates AI-assisted CCTV monitoring and weight-based validation to detect mismatches, reducing theft while maintaining a smooth shopping experience.
            </p>
          </div>
        </CommandBlock>

        {/* 4. Project Gallery */}
        <div className="space-y-4">
          <div className="text-zinc-500 font-mono">
            <span className="text-emerald-500 font-bold mr-2">$</span>
            <Typewriter text="gallery scanguard" delay={30} />
          </div>
          <ScanGuardGallery />
        </div>

        {/* 5. My Role */}
        <CommandBlock command="role scanguard" delay={600}>
          <div className="space-y-2 text-zinc-300">
            <div className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">›</span>
              <span>Designed smart checkout system architecture</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">›</span>
              <span>Developed mobile app (React Native)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">›</span>
              <span>Built web dashboard (React + Node.js)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">›</span>
              <span>Implemented weight sensor validation logic</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">›</span>
              <span>Integrated AI-assisted CCTV monitoring</span>
            </div>
          </div>
        </CommandBlock>

        {/* 6. Problem Statement */}
        <CommandBlock command="problem scanguard" delay={800}>
          <div className="text-zinc-300 leading-relaxed space-y-4">
            <p>
              Organizations (supermarkets) face multiple operational challenges:
            </p>
            <div className="space-y-2 ml-4">
              <div className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">•</span>
                <span>Long checkout queues during peak hours</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">•</span>
                <span>Inefficient manual billing processes</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">•</span>
                <span>Inventory mismanagement</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">•</span>
                <span>Increasing shoplifting incidents</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">•</span>
                <span>Passive CCTV systems with no real-time detection</span>
              </div>
            </div>
            <p className="mt-4">
              These issues impact customer experience, revenue, and store efficiency.
            </p>
          </div>
        </CommandBlock>

        {/* 7. Approach & Implementation */}
        <CommandBlock command="approach scanguard" delay={1000}>
          <div className="space-y-6 text-zinc-300">
            {/* Core System */}
            <div className="space-y-3">
              <div className="text-blue-400 font-semibold">🔹 Core System:</div>
              <div className="ml-4">
                ScanGuard introduces an integrated smart checkout system:
              </div>
            </div>

            {/* Pipeline */}
            <div className="space-y-3">
              <div className="text-blue-400 font-semibold">🔹 System Components:</div>
              <div className="ml-4 space-y-1">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Mobile app for product scanning and instant billing</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Real-time cart and payment processing (UPI / Cash)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Weight sensor validation to prevent mismatch/theft</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>AI-assisted CCTV monitoring for behavior analysis</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Web dashboard for inventory tracking and analytics</span>
                </div>
              </div>
            </div>

            {/* Key Technologies */}
            <div className="space-y-3">
              <div className="text-blue-400 font-semibold">🔹 Key Technologies:</div>
              <div className="ml-4 space-y-1">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>React Native (Mobile App)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>React.js (Web Dashboard)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Node.js / Express (Backend)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Firebase / Cloud (Database & Storage)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Computer Vision (Basic AI Monitoring)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>IoT (Weight Sensor)</span>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              <div className="text-blue-400 font-semibold">🔹 Key Features:</div>
              <div className="ml-4 space-y-1">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Mobile-based self-checkout system</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Real-time billing and payment integration</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Weight-based theft detection</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>AI-assisted CCTV monitoring</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Inventory tracking and analytics dashboard</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>No expensive hardware overhaul required</span>
                </div>
              </div>
            </div>
          </div>
        </CommandBlock>

        {/* 8. Challenges & Solutions */}
        <CommandBlock command="challenges scanguard" delay={1200}>
          <div className="space-y-4 text-zinc-300">
            <div className="border-l-2 border-yellow-500/30 pl-4 bg-zinc-900/30 py-2 rounded-r">
              <div className="text-yellow-400 font-semibold mb-1">Challenge:</div>
              <div className="text-sm">Integrating mobile app with real-time inventory system</div>
              <div className="text-emerald-400 font-semibold mt-2 mb-1">Solution:</div>
              <div className="text-sm">Firebase real-time database for instant synchronization</div>
            </div>
            <div className="border-l-2 border-yellow-500/30 pl-4 bg-zinc-900/30 py-2 rounded-r">
              <div className="text-yellow-400 font-semibold mb-1">Challenge:</div>
              <div className="text-sm">Ensuring accurate weight-based validation</div>
              <div className="text-emerald-400 font-semibold mt-2 mb-1">Solution:</div>
              <div className="text-sm">IoT weight sensors with tolerance-based matching algorithms</div>
            </div>
            <div className="border-l-2 border-yellow-500/30 pl-4 bg-zinc-900/30 py-2 rounded-r">
              <div className="text-yellow-400 font-semibold mb-1">Challenge:</div>
              <div className="text-sm">Balancing security monitoring with customer privacy</div>
              <div className="text-emerald-400 font-semibold mt-2 mb-1">Solution:</div>
              <div className="text-sm">AI-assisted behavior analysis without facial recognition</div>
            </div>
            <div className="border-l-2 border-yellow-500/30 pl-4 bg-zinc-900/30 py-2 rounded-r">
              <div className="text-yellow-400 font-semibold mb-1">Challenge:</div>
              <div className="text-sm">Seamless payment integration across multiple methods</div>
              <div className="text-emerald-400 font-semibold mt-2 mb-1">Solution:</div>
              <div className="text-sm">Unified payment gateway supporting UPI, cards, and cash</div>
            </div>
          </div>
        </CommandBlock>

        {/* 9. Outcomes & Impact */}
        <CommandBlock command="impact scanguard" delay={1400}>
          <div className="space-y-4 text-zinc-300">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Eliminated checkout queue wait times</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Improved customer shopping experience</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Enhanced inventory tracking and management</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Reduced theft through weight validation and AI monitoring</span>
              </div>
            </div>

            {/* Technical Impact */}
            <div className="space-y-2">
              <div className="text-blue-400 font-semibold">✓ Technical Impact:</div>
              <div className="ml-4">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>End-to-end smart retail checkout system</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Real-time inventory and analytics platform</span>
                </div>
              </div>
            </div>

            {/* Business Impact */}
            <div className="space-y-2">
              <div className="text-blue-400 font-semibold">✓ Business Impact:</div>
              <div className="ml-4 space-y-1">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Faster checkout processes</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Reduced operational costs</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Improved customer satisfaction</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Enhanced store security and loss prevention</span>
                </div>
              </div>
            </div>
          </div>
        </CommandBlock>

        {/* 10. Links */}
        <CommandBlock command="links scanguard" delay={1600}>
          <div className="grid grid-cols-1 gap-4">
            <a 
              href="https://github.com/Madhesh005/Scanguard_Backend" 
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