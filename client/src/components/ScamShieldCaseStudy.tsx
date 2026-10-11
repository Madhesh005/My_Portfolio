import { TerminalLayout } from "@/components/layout/TerminalLayout";
import { Github, ArrowUpRight, ChevronLeft, ChevronRight, Users, Trophy, Target, Cpu } from "lucide-react";
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

// Terminal Gallery Component for ScamShield
function ScamShieldGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Gallery images for ScamShield - 10 snapshots
  const galleryImages = [
    { name: "scam1.png", src: "/scam1.png" },
    { name: "scam2.png", src: "/scam2.png" },
    { name: "scam3.png", src: "/scam3.png" },
    { name: "scam4.png", src: "/scam4.png" },
    { name: "scam5.png", src: "/scam5.png" },
    { name: "scam6.png", src: "/scam6.png" },
    { name: "scam7.png", src: "/scam7.png" },
    { name: "scam8.png", src: "/scam8.png" },
    { name: "scam9.png", src: "/scam9.png" },
    { name: "scam10.png", src: "/scam10.png" }
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
            <Typewriter text="Loading fraud detection dashboard..." delay={50} />
          </div>
        ) : (
          <div className="text-center space-y-6 animate-in fade-in duration-300 w-full">
            <div className="text-emerald-400 font-mono text-lg">
              Project Gallery
            </div>
            <div className="text-zinc-500 font-mono text-sm">
              Rendering fraud detection dashboard...
            </div>
            
            {/* Large Image Display */}
            <div className="w-full max-w-5xl mx-auto">
              <img 
                src={galleryImages[currentSlide].src}
                alt={`ScamShield Screenshot ${currentSlide + 1}`}
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
                    <div>[FRAUD_DETECTION_{String(currentSlide + 1).padStart(2, '0')}]</div>
                    <div className="text-xs text-zinc-700">
                      {galleryImages[currentSlide].name}
                    </div>
                    <div className="text-xs text-zinc-700 mt-4 max-w-md">
                      {currentSlide === 0 && "Pipeline visualization and architecture"}
                      {currentSlide === 1 && "Metrics dashboard with performance stats"}
                      {currentSlide === 2 && "Graph network analysis visualization"}
                      {currentSlide === 3 && "FLSM engine state transitions"}
                      {currentSlide === 4 && "Feature engineering pipeline"}
                      {currentSlide === 5 && "RH Defense taxonomy system"}
                      {currentSlide === 6 && "Ensemble ML model outputs"}
                      {currentSlide === 7 && "Temporal IoU detection results"}
                      {currentSlide === 8 && "SHAP explainability interface"}
                      {currentSlide === 9 && "System monitoring and alerts"}
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

// ScamShield Case Study Component
export function ScamShieldCaseStudy({ project }: { project: any }) {
  return (
    <TerminalLayout>
      <div className="space-y-12 animate-in fade-in duration-500 pb-12">
        
        {/* 1. Title */}
        <CommandBlock command="preview scamshield" delay={0}>
          <div className="space-y-2">
            <div className="text-zinc-300">
              <span className="text-zinc-500">Project Name:</span> ScamShield
            </div>
            <div className="text-zinc-300">
              <span className="text-zinc-500">Subtitle:</span> AI-Powered Money Mule Detection System
            </div>
          </div>
        </CommandBlock>

        {/* 2. Collaborator */}
        <CommandBlock command="collaborators scamshield" delay={200}>
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Users size={16} className="text-blue-400" />
              <span className="text-zinc-400 font-semibold">Team Member</span>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <a 
                href="https://www.linkedin.com/in/tharun-kumar-developer/" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 p-3 border border-zinc-800 rounded bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-blue-500/50 hover:text-blue-400 transition-all group max-w-md"
              >
                <span className="text-emerald-500">›</span>
                <span className="font-medium">Tharun Kumar C</span>
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </CommandBlock>

        {/* 3. Description */}
        <CommandBlock command="describe scamshield" delay={400}>
          <div className="text-zinc-300 leading-relaxed space-y-4">
            <p>
              ScamShield is a multi-layer AI-powered fraud detection system designed to identify money mule accounts involved in laundering illicit funds. The system leverages graph intelligence, temporal behavior modeling, and ensemble machine learning to detect fraud patterns in real-time.
            </p>
            <p>
              Built for large-scale financial systems, ScamShield processes millions of transactions and identifies high-risk accounts based on behavioral signals, network structures, and lifecycle transitions. The solution emphasizes both detection accuracy and explainability for regulatory compliance.
            </p>
          </div>
        </CommandBlock>

        {/* 4. Project Gallery */}
        <div className="space-y-4">
          <div className="text-zinc-500 font-mono">
            <span className="text-emerald-500 font-bold mr-2">$</span>
            <Typewriter text="gallery scamshield" delay={30} />
          </div>
          <ScamShieldGallery />
        </div>

        {/* 5. Achievement (NEW SECTION) */}
        <CommandBlock command="achievement scamshield" delay={600}>
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Trophy size={16} className="text-yellow-400" />
              <span className="text-zinc-400 font-semibold">National Recognition</span>
            </div>
            <div className="space-y-3 bg-zinc-900/30 p-4 rounded border-l-4 border-yellow-400">
              <div className="text-yellow-400 font-bold text-lg">
                🏆 RBIH NFPC Finalist (Top 12/500+ teams)
              </div>
              <div className="text-zinc-300">
                RBIH × IIT Delhi National Fraud Prevention Challenge
              </div>
              <div className="text-emerald-400 font-medium">
                Qualified for Grand Final at RBI Innovation Hub, Bangalore
              </div>
            </div>
          </div>
        </CommandBlock>

        {/* 6. My Role */}
        <CommandBlock command="role scamshield" delay={800}>
          <div className="space-y-2 text-zinc-300">
            <div className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">›</span>
              <span>Designed data pipeline for large-scale transaction processing</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">›</span>
              <span>Developed RH Taxonomy (Red Herring Defense)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">›</span>
              <span>Implemented Temporal IoU for time-based fraud detection</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">›</span>
              <span>Engineered and curated critical features for ML models</span>
            </div>
          </div>
        </CommandBlock>

        {/* 7. Problem Statement */}
        <CommandBlock command="problem scamshield" delay={1000}>
          <div className="text-zinc-300 leading-relaxed space-y-4">
            <p>
              Money mule accounts are used to move illegal funds across the banking system, making fraud detection extremely complex. Traditional systems rely on delayed monitoring (monthly cycles), which fail to capture short-lived fraud activity.
            </p>
            <p>
              Most mule accounts operate within 1–2 weeks, making them invisible to conventional systems. There is a need for real-time, explainable fraud detection that can identify behavioral patterns early while minimizing false positives.
            </p>
          </div>
        </CommandBlock>

        {/* 8. Approach & Implementation (DETAILED) */}
        <CommandBlock command="approach scamshield" delay={1200}>
          <div className="space-y-6 text-zinc-300">
            {/* Achievement Header */}
            <div className="bg-zinc-900/30 p-4 rounded border-l-4 border-yellow-400">
              <div className="text-yellow-400 font-bold mb-2">🏆 Achievement: RBIH NFPC Finalist (Top 12/500+)</div>
            </div>

            {/* Performance Metrics */}
            <div className="space-y-3">
              <div className="text-blue-400 font-semibold">📊 Performance Metrics:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 ml-4">
                <div className="flex justify-between">
                  <span>• AUC-ROC:</span>
                  <span className="text-emerald-400 font-bold">0.9424</span>
                </div>
                <div className="flex justify-between">
                  <span>• F1 Score:</span>
                  <span className="text-emerald-400 font-bold">0.6816</span>
                </div>
                <div className="flex justify-between">
                  <span>• Transactions Processed:</span>
                  <span className="text-emerald-400 font-bold">400M+</span>
                </div>
                <div className="flex justify-between">
                  <span>• Features Engineered:</span>
                  <span className="text-emerald-400 font-bold">164</span>
                </div>
              </div>
            </div>

            {/* Pipeline Architecture */}
            <div className="space-y-2">
              <div className="text-purple-400 font-semibold">🔹 Pipeline Architecture:</div>
              <div className="ml-4 text-sm bg-zinc-900/20 p-3 rounded font-mono">
                Data Ingestion → FLSM Engine → Graph Features → RH Defense → Feature Engineering → Ensemble + Calibration → Temporal IoU
              </div>
            </div>

            {/* FLSM Engine */}
            <div className="space-y-2">
              <div className="text-purple-400 font-semibold">🔹 FLSM Engine (Fraud Lifecycle State Machine):</div>
              <div className="ml-4 space-y-1">
                <div className="flex items-center gap-2">
                  <span>•</span>
                  <span className="font-mono text-emerald-400">DORMANT → WARMING → BURST → EXPLOIT → EXIT</span>
                </div>
                <div>• Tracks fraud lifecycle progression</div>
                <div>• Detects suspicious transitions and timing patterns</div>
              </div>
            </div>

            {/* Graph Intelligence */}
            <div className="space-y-2">
              <div className="text-purple-400 font-semibold">🔹 Graph Intelligence:</div>
              <div className="ml-4 space-y-1">
                <div>• 2.8M+ edges analyzed</div>
                <div>• PageRank for mule detection</div>
                <div>• Bidirectional flow analysis</div>
                <div>• Mule overlap detection</div>
              </div>
            </div>

            {/* RH Defense */}
            <div className="space-y-2">
              <div className="text-purple-400 font-semibold">🔹 RH Defense:</div>
              <div className="ml-4 space-y-1">
                <div>• 7-category taxonomy</div>
                <div>• Prevents false positives</div>
                <div>• Protects legitimate accounts</div>
              </div>
            </div>

            {/* Ensemble ML System */}
            <div className="space-y-2">
              <div className="text-purple-400 font-semibold">🔹 Ensemble ML System:</div>
              <div className="ml-4 space-y-1">
                <div>• LightGBM + XGBoost + Platt Calibration</div>
                <div>• SHAP for explainability</div>
                <div>• Temporal IoU for time-based detection</div>
              </div>
            </div>
          </div>
        </CommandBlock>

        {/* 9. Challenges & Solutions */}
        <CommandBlock command="challenges scamshield" delay={1400}>
          <div className="space-y-3 text-zinc-300">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">•</span>
                <span>Processing 400M+ transactions efficiently at scale</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">•</span>
                <span>Detecting fraud as a lifecycle instead of isolated events</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">•</span>
                <span>Capturing short-window mule activity (1–2 weeks)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">•</span>
                <span>Ensuring explainability for regulatory compliance</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">•</span>
                <span>Minimizing false positives (protecting genuine users)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">•</span>
                <span>Handling class imbalance in fraud datasets</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">•</span>
                <span>Integrating graph, temporal, and transactional data</span>
              </div>
            </div>
          </div>
        </CommandBlock>

        {/* 10. Outcomes & Impact */}
        <CommandBlock command="impact scamshield" delay={1600}>
          <div className="space-y-3 text-zinc-300">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>RBIH NFPC Finalist (Top 12/500+)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Qualified for Grand Final (RBI Innovation Hub, Bangalore)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>AUC-ROC: 0.9424 | F1 Score: 0.6816</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Processed 400M+ transactions</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>164 engineered features</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>2.8M+ graph edges analyzed</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Production-ready for MuleHunter.ai™ platform</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Enabled explainable, real-time fraud detection</span>
              </div>
            </div>
          </div>
        </CommandBlock>

        {/* 11. Links */}
        <CommandBlock command="links scamshield" delay={1800}>
          <div className="grid grid-cols-1 gap-4">
            <a 
              href="https://github.com/sec23cb060/scamshield" 
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