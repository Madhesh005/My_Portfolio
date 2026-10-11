
import { TerminalLayout } from "@/components/layout/TerminalLayout";
import { Typewriter } from "@/components/terminal/Typewriter";
import { ArrowUpRight } from "lucide-react";

import { PROJECTS } from "@/lib/constants";
const avatarImage = "/assets/images/pixel_art_developer_avatar.png";

export default function Home() {

  const featuredProjects = PROJECTS.slice(0, 4);

  const handleProjectClick = (projectId: string) => {
    // "when I click the projects in the highlights it has to type the keyword"
    const command = projectId.replace(/-/g, "");
    
    const event = new CustomEvent('terminal:type', { 
        detail: { 
            text: command, 
            submit: true 
        } 
    });
    window.dispatchEvent(event);
  };

  return (
    <TerminalLayout>
      <div className="space-y-8 animate-in fade-in duration-500 pb-12">
        
        {/* Command Echo */}
        <div className="text-zinc-500 mb-6">
          <span className="text-emerald-500 font-bold mr-2">$</span>
          <span className="text-zinc-100">intro</span>
        </div>

        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6 lg:gap-8 items-start border border-zinc-800 rounded-lg p-4 sm:p-6 bg-zinc-900/20">
            {/* Avatar / ASCII Placeholder */}
            <div className="w-full max-w-[200px] mx-auto lg:mx-0 aspect-square bg-zinc-900 border border-zinc-800 rounded-md overflow-hidden relative group">
                <img 
                    src={avatarImage}
                    alt="Profile" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 pixelated"
                />
                <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Info Table */}
            <div className="space-y-3 sm:space-y-4 font-mono text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-1 sm:gap-2">
                    <span className="text-zinc-500 font-semibold sm:font-normal">Name</span>
                    <span className="text-zinc-100 font-bold tracking-wide">Madhesh R</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-1 sm:gap-2">
                    <span className="text-zinc-500 font-semibold sm:font-normal">Role</span>
                    <span className="text-zinc-300">
                        <Typewriter text="Software Engineering Student • Full-Stack & AI Developer" delay={20} />
                    </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-1 sm:gap-2">
                    <span className="text-zinc-500 font-semibold sm:font-normal">Location</span>
                    <span className="text-zinc-300">Chennai / India</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-1 sm:gap-2">
                    <span className="text-zinc-500 font-semibold sm:font-normal">Summary</span>
                    <span className="text-zinc-400 leading-relaxed">
                        Final-year B.Tech Computer Science and Business Systems student with hands-on experience in developing full-stack applications, AI-driven solutions, and blockchain-based systems through internships, hackathons, and real-world projects.
                    </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-1 sm:gap-2">
                    <span className="text-zinc-500 font-semibold sm:font-normal">Focus</span>
                    <span className="text-emerald-400">Full-Stack Development, AI/ML Solutions, Blockchain Systems</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-1 sm:gap-2">
                    <span className="text-zinc-500 font-semibold sm:font-normal">Open To</span>
                    <span className="text-zinc-300">Software Engineering Internships, Full-Stack Development Roles, Collaborations</span>
                </div>
            </div>
        </div>

        {/* Two Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            
            {/* Featured Skills */}
            <div className="border border-zinc-800 rounded-lg p-4 sm:p-6 bg-zinc-900/20">
                <div className="text-zinc-500 mb-4 flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">$</span>
                    <span>featured-skills</span>
                </div>
                <div className="flex flex-wrap gap-2">
                    {["React.js", "Node.js", "Express.js", "Python", "Java", "JavaScript", "XGBoost", "LightGBM", "SHAP", "HyperLedger Fabric", "IPFS", "Smart Contracts", "MySQL", "Firebase", "GitHub"].map((skill) => (
                        <span key={skill} className="px-2 sm:px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs text-zinc-300 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors cursor-default">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Highlights (Projects) */}
            <div className="border border-zinc-800 rounded-lg p-4 sm:p-6 bg-zinc-900/20">
                 <div className="text-zinc-500 mb-4 flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">$</span>
                    <span>highlights</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {featuredProjects.map(project => (
                        <button 
                            key={project.id}
                            onClick={() => handleProjectClick(project.id)}
                            className="group flex flex-col gap-1 p-3 border border-zinc-800 rounded bg-black hover:bg-zinc-900 hover:border-zinc-700 transition-all text-left"
                        >
                            <div className="flex justify-between items-center w-full">
                                <span className="text-xs font-bold text-zinc-200 group-hover:text-emerald-400 truncate pr-2">{project.name}</span>
                                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 text-emerald-500 transition-opacity shrink-0" />
                            </div>
                            <span className="text-[10px] text-zinc-500 truncate">{project.shortDescription}</span>
                        </button>
                    ))}
                </div>
            </div>

        </div>

        {/* Contact Snippet */}
        <div className="border border-zinc-800 rounded-lg p-4 bg-zinc-900/20 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <div className="text-zinc-500 shrink-0">
                <span className="text-emerald-500 font-bold mr-2">$</span>
                <span>contact</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 text-sm text-zinc-400 overflow-hidden">
                <div className="w-8 h-8 rounded-full bg-zinc-800 overflow-hidden shrink-0">
                    <img src={avatarImage} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-6 min-w-0 flex-1">
                    <span className="hover:text-white transition-colors cursor-pointer truncate">madheshr005@gmail.com</span>
                    <span className="hidden sm:inline text-zinc-700">|</span>
                    <span className="hover:text-white transition-colors cursor-pointer truncate">github.com/madhesh005</span>
                </div>
            </div>
        </div>

      </div>
    </TerminalLayout>
  );
}
