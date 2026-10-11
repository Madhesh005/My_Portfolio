import { TerminalLayout } from "@/components/layout/TerminalLayout";
import { Github, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Typewriter } from "@/components/terminal/Typewriter";
import { useToast } from "@/hooks/use-toast";

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

// Ascendra Case Study Component
export function AscendraCaseStudy({ project }: { project: any }) {
  const { toast } = useToast();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    "/ascendra1.jpeg",
    "/ascendra2.jpeg", 
    "/ascendra3.jpeg",
    "/ascendra4.jpeg",
    "/ascendra5.jpeg",
    "/ascendra6.jpeg"
  ];

  const handleLiveDemoClick = () => {
    toast({
      title: "🚧 Currently Under Development",
      description: "Ascendra is in active development. The live demo will be available soon!",
      className: "font-mono bg-zinc-900 text-yellow-400 border-zinc-800",
      duration: 5000
    });
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <TerminalLayout>
      <div className="space-y-12 animate-in fade-in duration-500 pb-12">
        
        {/* 1. Title */}
        <CommandBlock command="preview ascendra" delay={0}>
          <div className="space-y-2">
            <div className="text-zinc-300">
              <span className="text-zinc-500">Project Name:</span> Ascendra
            </div>
            <div className="text-zinc-300">
              <span className="text-zinc-500">Subtitle:</span> Gamified Focus & Digital Well-being System
            </div>
          </div>
        </CommandBlock>

        {/* 2. Description */}
        <CommandBlock command="describe ascendra" delay={200}>
          <div className="text-zinc-300 leading-relaxed space-y-4">
            <p>
              Ascendra is a behavior-driven digital wellness platform designed to help students reduce screen addiction and build sustainable focus habits through gamification.
            </p>
            <p>
              The system transforms productivity into an engaging experience by allowing users to evolve a digital creature based on their focus sessions, wellness activities, and consistency. Instead of passive tracking, Ascendra actively reinforces positive habits using XP systems, streak logic, and real-time feedback.
            </p>
            <p>
              By combining focus management, wellness tracking, and team-based motivation, Ascendra creates a structured environment that improves attention span, reduces distraction cycles, and promotes long-term digital discipline.
            </p>
          </div>
        </CommandBlock>

        {/* 3. Project Gallery */}
        <CommandBlock command="gallery ascendra" delay={400}>
          <div className="space-y-4">
            <div className="text-blue-400 font-semibold">Project Gallery</div>
            
            <div className="relative">
              <div className="aspect-video bg-black rounded-lg overflow-hidden border border-zinc-700 flex items-center justify-center p-8">
                <img 
                  src={images[currentImageIndex]} 
                  alt={`Ascendra Screenshot ${currentImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              
              <div className="flex items-center justify-between mt-4">
                <button 
                  onClick={prevImage}
                  className="flex items-center gap-2 px-3 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-md transition-colors"
                >
                  <ChevronLeft size={16} />
                  <span className="text-sm">Previous</span>
                </button>
                
                <div className="flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-emerald-400' : 'bg-zinc-600'
                      }`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={nextImage}
                  className="flex items-center gap-2 px-3 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-md transition-colors"
                >
                  <span className="text-sm">Next</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </CommandBlock>

        {/* 4. Problem Statement */}
        <CommandBlock command="problem ascendra" delay={600}>
          <div className="text-zinc-300 leading-relaxed space-y-4">
            <p>
              Students today struggle with excessive phone usage, spending 4–5 hours daily on non-academic applications like social media and gaming.
            </p>
            <div className="space-y-2 ml-4">
              <div className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">•</span>
                <span>Constant notifications trigger repeated phone checking (50–80 times/day)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">•</span>
                <span>Habitual scrolling reduces focus and study time</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">•</span>
                <span>Late-night usage leads to poor sleep and fatigue</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">•</span>
                <span>Increased stress, anxiety, and lower academic performance</span>
              </div>
            </div>
            <p className="mt-4">
              This creates a continuous distraction cycle that is difficult to break using traditional tools.
            </p>
          </div>
        </CommandBlock>

        {/* 5. Solution */}
        <CommandBlock command="solution ascendra" delay={800}>
          <div className="text-zinc-300 leading-relaxed space-y-4">
            <p>
              Ascendra introduces a gamified behavior-change system:
            </p>
            <div className="space-y-2 ml-4">
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span>Converts focus sessions into XP-based progression</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span>Evolves a digital creature based on user consistency</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span>Integrates wellness habits (hydration, posture, eye care)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span>Uses streak systems to reinforce discipline</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span>Enables team-based motivation through shared progress</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span>Provides real-time feedback on focus and health metrics</span>
              </div>
            </div>
          </div>
        </CommandBlock>

        {/* 6. System Workflow */}
        <CommandBlock command="workflow ascendra" delay={1000}>
          <div className="space-y-4 text-zinc-300">
            <div className="text-blue-400 font-semibold">System Workflow:</div>
            <div className="ml-4 text-sm bg-zinc-900/20 p-3 rounded font-mono">
              User Setup → Creature Selection → Focus Sessions + Wellness Actions → XP & Health Score Update → Evolution Progression → Dashboard + Team Tracking → Weekly Reports & Feedback
            </div>
          </div>
        </CommandBlock>

        {/* 7. Core Modules */}
        <CommandBlock command="modules ascendra" delay={1200}>
          <div className="space-y-4 text-zinc-300">
            <div className="text-blue-400 font-semibold">Core Modules:</div>
            <div className="ml-4 space-y-1">
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span>Focus Timer System (3–120 min sessions)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span>Wellness Tracking (hydration, eye care, posture)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span>Gamification Engine (XP, streaks, evolution logic)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span>Team System (group streaks, shared progress)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span>Dashboard & Reports (weekly summaries, insights)</span>
              </div>
            </div>
          </div>
        </CommandBlock>

        {/* 8. Technical Architecture */}
        <CommandBlock command="architecture ascendra" delay={1400}>
          <div className="space-y-6 text-zinc-300">
            <div className="text-blue-400 font-semibold">Technical Architecture:</div>
            <div className="ml-4 space-y-3">
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span><strong>Frontend:</strong> Mobile app with gamification UI, Lottie animations</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span><strong>Backend:</strong> Firebase Cloud Functions / Node.js</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span><strong>Database:</strong> Firebase Firestore (XP, streaks, user data)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span><strong>Storage:</strong> Firebase Storage (assets, avatars)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span><strong>Analytics:</strong> Firebase Analytics + Python (focus insights)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span><strong>Optional:</strong> State caching layer</span>
              </div>
            </div>
          </div>
        </CommandBlock>

        {/* 9. Impact */}
        <CommandBlock command="impact ascendra" delay={1600}>
          <div className="space-y-4 text-zinc-300">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Improves focus and study consistency</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Reduces digital addiction and distraction cycles</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Enhances mental and physical well-being</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Builds long-term discipline through habit reinforcement</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Encourages teamwork and accountability</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Supports healthier academic environments</span>
              </div>
            </div>
          </div>
        </CommandBlock>

        {/* 10. Links */}
        <CommandBlock command="links ascendra" delay={1800}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button 
              onClick={handleLiveDemoClick}
              className="flex items-center justify-between px-4 py-3.5 border border-zinc-800 rounded-md bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-yellow-500/50 hover:text-yellow-400 transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">🚧</span>
                <span className="font-medium">Live Demo</span>
              </div>
              <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            
            <a 
              href="https://github.com/Madhesh005/Ascendra" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center justify-between px-4 py-3.5 border border-zinc-800 rounded-md bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-purple-500/50 hover:text-purple-400 transition-all group"
            >
              <div className="flex items-center gap-3">
                <Github size={16} />
                <span className="font-medium">Source Code</span>
              </div>
              <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </CommandBlock>

      </div>
    </TerminalLayout>
  );
}