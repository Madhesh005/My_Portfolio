import { TerminalLayout } from "@/components/layout/TerminalLayout";
import { ExternalLink, Github, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
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

// Terminal Gallery Component for ChainVoice
function ChainVoiceGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Gallery images for ChainVoice - using chainvoice1-5.png
  const galleryImages = [
    { name: "chainvoice1.png", src: "/chainvoice1.png" },
    { name: "chainvoice2.png", src: "/chainvoice2.png" },
    { name: "chainvoice3.png", src: "/chainvoice3.png" },
    { name: "chainvoice4.png", src: "/chainvoice4.png" },
    { name: "chainvoice5.png", src: "/chainvoice5.png" },
    { name: "chainvoice6.png", src: "/chainvoice6.png" },
    { name: "chainvoice7.png", src: "/chainvoice7.png" },
    { name: "chainvoice8.png", src: "/chainvoice8.png" },
    { name: "chainvoice9.png", src: "/chainvoice9.png" },
    { name: "chainvoice10.png", src: "/chainvoice10.png" }
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
            <Typewriter text="Loading invoice verification system..." delay={50} />
          </div>
        ) : (
          <div className="text-center space-y-6 animate-in fade-in duration-300 w-full">
            <div className="text-emerald-400 font-mono text-lg">
              Project Gallery
            </div>
            <div className="text-zinc-500 font-mono text-sm">
              Rendering invoice verification system...
            </div>
            
            {/* Large Image Display */}
            <div className="w-full max-w-5xl mx-auto">
              <img 
                src={galleryImages[currentSlide].src}
                alt={`ChainVoice Screenshot ${currentSlide + 1}`}
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
                    <div>[INVOICE_SYSTEM_{String(currentSlide + 1).padStart(2, '0')}]</div>
                    <div className="text-xs text-zinc-700">
                      {galleryImages[currentSlide].name}
                    </div>
                    <div className="text-xs text-zinc-700 mt-4 max-w-md">
                      {currentSlide === 0 && "Landing page with system overview"}
                      {currentSlide === 1 && "Invoice upload and verification workflow"}
                      {currentSlide === 2 && "Dashboard and system monitoring"}
                      {currentSlide === 3 && "Blockchain verification interface"}
                      {currentSlide === 4 && "System flow and architecture visualization"}
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

// ChainVoice Case Study Component
export function ChainVoiceCaseStudy({ project }: { project: any }) {
  return (
    <TerminalLayout>
      <div className="space-y-12 animate-in fade-in duration-500 pb-12">
        
        {/* 1. Title */}
        <CommandBlock command="preview chainvoice" delay={0}>
          <div className="space-y-2">
            <div className="text-zinc-300">
              <span className="text-zinc-500">Project Name:</span> ChainVoice
            </div>
            <div className="text-zinc-300">
              <span className="text-zinc-500">Subtitle:</span> Blockchain-Based Invoice Financing & Verification Platform
            </div>
          </div>
        </CommandBlock>

        {/* 2. Description */}
        <CommandBlock command="describe chainvoice" delay={200}>
          <div className="text-zinc-300 leading-relaxed space-y-4">
            <p>
              ChainVoice is a hybrid blockchain infrastructure designed to enable secure invoice financing and cross-lender verification. The system creates a cryptographic single source of truth for invoices, preventing duplicate financing and ensuring transparency across financial institutions.
            </p>
            <p>
              Built using Hyperledger Fabric and IPFS, the platform integrates with ERP systems to generate verifiable invoice fingerprints, enabling real-time validation, tamper-evident audit trails, and secure multi-party collaboration across lenders and regulators.
            </p>
          </div>
        </CommandBlock>

        {/* 3. Project Gallery */}
        <div className="space-y-4">
          <div className="text-zinc-500 font-mono">
            <span className="text-emerald-500 font-bold mr-2">$</span>
            <Typewriter text="gallery chainvoice" delay={30} />
          </div>
          <ChainVoiceGallery />
        </div>

        {/* 4. My Role */}
        <CommandBlock command="role chainvoice" delay={400}>
          <div className="space-y-2 text-zinc-300">
            <div className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">›</span>
              <span>Designed and developed full system architecture</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">›</span>
              <span>Built frontend using React + TypeScript</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">›</span>
              <span>Integrated blockchain workflows using Hyperledger Fabric</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">›</span>
              <span>Designed invoice lifecycle and verification logic</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">›</span>
              <span>Implemented secure storage using IPFS</span>
            </div>
          </div>
        </CommandBlock>

        {/* 5. Problem Statement */}
        <CommandBlock command="problem chainvoice" delay={600}>
          <div className="text-zinc-300 leading-relaxed space-y-4">
            <p>
              India's invoice financing ecosystem suffers from fragmented verification systems and lack of coordination between lenders.
            </p>
            <div className="space-y-2 ml-4">
              <div className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">•</span>
                <span>Same invoice can be financed multiple times (duplicate financing)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">•</span>
                <span>Verification depends on manual checks and disconnected ERP systems</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">•</span>
                <span>No shared visibility across banks and NBFCs</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">•</span>
                <span>Lack of tamper-proof audit trail</span>
              </div>
            </div>
            <p className="mt-4">
              This leads to fraud risks, delays in financing, and cash-flow issues for MSMEs.
            </p>
          </div>
        </CommandBlock>

        {/* 6. Approach & Implementation */}
        <CommandBlock command="approach chainvoice" delay={800}>
          <div className="space-y-6 text-zinc-300">
            {/* Core Architecture */}
            <div className="space-y-3">
              <div className="text-blue-400 font-semibold">🔹 Core Architecture:</div>
              <div className="ml-4">
                <div className="mb-2">Hybrid Blockchain System combining:</div>
                <div className="space-y-1 ml-4">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span>Hyperledger Fabric (on-chain ledger)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span>IPFS (off-chain secure storage)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Invoice Lifecycle Flow */}
            <div className="space-y-3">
              <div className="text-blue-400 font-semibold">🔹 Invoice Lifecycle Flow:</div>
              <div className="ml-4 space-y-1">
                <div>1. Invoice Creation (from ERP systems)</div>
                <div>2. Data Extraction & Normalization</div>
                <div>3. Cryptographic Hash Generation (SHA-256)</div>
                <div>4. Blockchain Registration (tamper-proof record)</div>
                <div>5. Cross-Lender Verification</div>
                <div>6. Off-chain Storage (IPFS)</div>
                <div>7. Audit Logging</div>
              </div>
            </div>

            {/* Key Components */}
            <div className="space-y-3">
              <div className="text-blue-400 font-semibold">🔹 Key Components:</div>
              <div className="ml-4 space-y-1">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>ERP Integration for invoice ingestion</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Canonical data normalization engine</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Smart contracts for validation and approval</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Identity + signature validation system</span>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              <div className="text-blue-400 font-semibold">🔹 Key Features:</div>
              <div className="ml-4 space-y-1">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Real-time invoice verification</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Cross-lender interoperability</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Tamper-evident audit trail</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Fraud prevention via cryptographic fingerprinting</span>
                </div>
              </div>
            </div>
          </div>
        </CommandBlock>

        {/* 7. Challenges & Solutions */}
        <CommandBlock command="challenges chainvoice" delay={1000}>
          <div className="space-y-4 text-zinc-300">
            <div className="border-l-2 border-yellow-500/30 pl-4 bg-zinc-900/30 py-2 rounded-r">
              <div className="text-yellow-400 font-semibold mb-1">Challenge:</div>
              <div className="text-sm">Preventing duplicate financing across institutions</div>
              <div className="text-emerald-400 font-semibold mt-2 mb-1">Solution:</div>
              <div className="text-sm">Shared blockchain ledger for cross-lender verification</div>
            </div>
            <div className="border-l-2 border-yellow-500/30 pl-4 bg-zinc-900/30 py-2 rounded-r">
              <div className="text-yellow-400 font-semibold mb-1">Challenge:</div>
              <div className="text-sm">Ensuring invoice authenticity</div>
              <div className="text-emerald-400 font-semibold mt-2 mb-1">Solution:</div>
              <div className="text-sm">Cryptographic hashing + immutable records</div>
            </div>
            <div className="border-l-2 border-yellow-500/30 pl-4 bg-zinc-900/30 py-2 rounded-r">
              <div className="text-yellow-400 font-semibold mb-1">Challenge:</div>
              <div className="text-sm">Integrating multiple systems (ERP, banks)</div>
              <div className="text-emerald-400 font-semibold mt-2 mb-1">Solution:</div>
              <div className="text-sm">Standardized data normalization pipeline</div>
            </div>
            <div className="border-l-2 border-yellow-500/30 pl-4 bg-zinc-900/30 py-2 rounded-r">
              <div className="text-yellow-400 font-semibold mb-1">Challenge:</div>
              <div className="text-sm">Balancing scalability and security</div>
              <div className="text-emerald-400 font-semibold mt-2 mb-1">Solution:</div>
              <div className="text-sm">Hybrid architecture (on-chain + off-chain storage)</div>
            </div>
          </div>
        </CommandBlock>

        {/* 8. Outcomes & Impact */}
        <CommandBlock command="impact chainvoice" delay={1200}>
          <div className="space-y-4 text-zinc-300">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Eliminated duplicate financing through shared verification system</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Enabled real-time invoice validation</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Reduced manual verification delays</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Improved trust between lenders and MSMEs</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Created tamper-proof audit trail for compliance</span>
              </div>
            </div>

            {/* Technical Feasibility */}
            <div className="space-y-2">
              <div className="text-blue-400 font-semibold">✓ Technical Feasibility:</div>
              <div className="ml-4">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Hyperledger Fabric + IPFS based scalable system</span>
                </div>
              </div>
            </div>

            {/* Operational Impact */}
            <div className="space-y-2">
              <div className="text-blue-400 font-semibold">✓ Operational Impact:</div>
              <div className="ml-4">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Seamless integration with existing ERP and banking systems</span>
                </div>
              </div>
            </div>

            {/* Business Impact */}
            <div className="space-y-2">
              <div className="text-blue-400 font-semibold">✓ Business Impact:</div>
              <div className="ml-4 space-y-1">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Faster financing cycles</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Improved liquidity for MSMEs</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Reduced fraud risks</span>
                </div>
              </div>
            </div>
          </div>
        </CommandBlock>

        {/* 9. Links */}
        <CommandBlock command="links chainvoice" delay={1400}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a 
              href="https://chainvoice-one.vercel.app/" 
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
              href="https://github.com/Madhesh005/ChainVoice" 
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