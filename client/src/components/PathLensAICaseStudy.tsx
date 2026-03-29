import { TerminalLayout } from "@/components/layout/TerminalLayout";
import { Github, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Typewriter } from "@/components/terminal/Typewriter";
import { useToast } from "@/hooks/use-toast";

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

// PathLens AI Case Study Component
export function PathLensAICaseStudy({ project }: { project: any }) {
  const { toast } = useToast();

  const handleLiveDemoClick = () => {
    toast({
      title: "🚧 This feature is currently under development.",
      description: "The live demo will be available soon. Stay tuned for updates!",
      className: "font-mono bg-zinc-900 text-yellow-400 border-zinc-800",
      duration: 5000
    });
  };

  return (
    <TerminalLayout>
      <div className="space-y-12 animate-in fade-in duration-500 pb-12">
        
        {/* 1. Title */}
        <CommandBlock command="preview pathlens" delay={0}>
          <div className="space-y-2">
            <div className="text-zinc-300">
              <span className="text-zinc-500">Project Name:</span> PathLens AI
            </div>
            <div className="text-zinc-300">
              <span className="text-zinc-500">Subtitle:</span> AI-Powered Career Guidance using SWOT Analysis
            </div>
          </div>
        </CommandBlock>

        {/* 2. Description */}
        <CommandBlock command="describe pathlens" delay={200}>
          <div className="text-zinc-300 leading-relaxed space-y-4">
            <p>
              PathLens AI is an intelligent career guidance platform that leverages AI and Natural Language Processing to analyze an individual's SWOT profile and map it to suitable career paths.
            </p>
            <p>
              The system allows users to input their strengths, weaknesses, opportunities, and threats manually or via resume/document uploads. Using NLP and intelligent mapping algorithms, PathLens evaluates user traits, identifies skill gaps, and generates personalized career recommendations along with structured learning roadmaps.
            </p>
            <p>
              By combining self-assessment with AI-driven insights, PathLens helps users make informed career decisions, reduce uncertainty, and build a clear, goal-oriented professional path.
            </p>
          </div>
        </CommandBlock>

        {/* 3. Problem Statement */}
        <CommandBlock command="problem pathlens" delay={400}>
          <div className="text-zinc-300 leading-relaxed space-y-4">
            <p>
              Students and early-career individuals often struggle to choose the right career path due to lack of clarity about their strengths and skill gaps.
            </p>
            <div className="space-y-2 ml-4">
              <div className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">•</span>
                <span>No personalized career guidance</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">•</span>
                <span>Difficulty mapping skills to real-world roles</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">•</span>
                <span>Confusion due to overwhelming career options</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">•</span>
                <span>Lack of structured roadmap for upskilling</span>
              </div>
            </div>
          </div>
        </CommandBlock>

        {/* 4. Solution */}
        <CommandBlock command="solution pathlens" delay={600}>
          <div className="text-zinc-300 leading-relaxed space-y-4">
            <p>
              PathLens AI provides a structured, AI-driven career guidance system:
            </p>
            <div className="space-y-2 ml-4">
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span>Performs SWOT-based self-assessment analysis</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span>Uses NLP to extract insights from user inputs and resumes</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span>Maps user traits to relevant career domains</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span>Identifies skill gaps and improvement areas</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span>Generates personalized learning roadmaps</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span>Provides real-time AI recommendations</span>
              </div>
            </div>
          </div>
        </CommandBlock>

        {/* 5. System Workflow */}
        <CommandBlock command="workflow pathlens" delay={800}>
          <div className="space-y-4 text-zinc-300">
            <div className="text-blue-400 font-semibold">System Workflow:</div>
            <div className="ml-4 text-sm bg-zinc-900/20 p-3 rounded font-mono">
              User Input (SWOT / Resume Upload) → NLP Processing → Trait Extraction → Career Mapping Engine → Recommendation Generation → Skill Gap Analysis → Personalized Roadmap Output
            </div>
          </div>
        </CommandBlock>

        {/* 6. Core Features */}
        <CommandBlock command="features pathlens" delay={1000}>
          <div className="space-y-4 text-zinc-300">
            <div className="text-blue-400 font-semibold">Core Features:</div>
            <div className="ml-4 space-y-1">
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span>Manual SWOT input + resume upload support</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span>Intelligent career mapping engine</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span>AI-based recommendation generation</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span>Progress tracking system</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span>PDF report generation</span>
              </div>
            </div>
          </div>
        </CommandBlock>

        {/* 7. Technical Implementation */}
        <CommandBlock command="implementation pathlens" delay={1200}>
          <div className="space-y-6 text-zinc-300">
            {/* Key Technologies */}
            <div className="space-y-3">
              <div className="text-blue-400 font-semibold">🔹 Key Technologies:</div>
              <div className="ml-4 space-y-1">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>React (Frontend Interface)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Node.js / Express (Backend API)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>OpenAI API (AI Processing)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>NLP (Natural Language Processing)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>AI Agent (Intelligent Recommendations)</span>
                </div>
              </div>
            </div>

            {/* System Highlights */}
            <div className="space-y-3">
              <div className="text-blue-400 font-semibold">🔹 System Highlights:</div>
              <div className="ml-4 space-y-1">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>AI-powered SWOT analysis engine</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Resume/document parsing using NLP</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Career path recommendation system</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Skill gap analysis + personalized roadmap</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>OpenAI-powered prompt engineering</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Downloadable career reports</span>
                </div>
              </div>
            </div>
          </div>
        </CommandBlock>

        {/* 8. Outcomes & Impact */}
        <CommandBlock command="impact pathlens" delay={1400}>
          <div className="space-y-4 text-zinc-300">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Enabled personalized career guidance through AI analysis</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Reduced career decision uncertainty for users</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Automated skill gap identification and roadmap generation</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Improved career planning through structured AI insights</span>
              </div>
            </div>

            {/* Technical Impact */}
            <div className="space-y-2">
              <div className="text-blue-400 font-semibold">✓ Technical Impact:</div>
              <div className="ml-4">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>AI-driven career intelligence system based on SWOT + NLP + recommendation engine</span>
                </div>
              </div>
            </div>

            {/* Business Impact */}
            <div className="space-y-2">
              <div className="text-blue-400 font-semibold">✓ Business Impact:</div>
              <div className="ml-4 space-y-1">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Scalable career guidance platform</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Reduced manual counseling overhead</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Enhanced user career decision confidence</span>
                </div>
              </div>
            </div>
          </div>
        </CommandBlock>

        {/* 9. Links */}
        <CommandBlock command="links pathlens" delay={1600}>
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
              href="https://github.com/Madhesh005/PathLensAi" 
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