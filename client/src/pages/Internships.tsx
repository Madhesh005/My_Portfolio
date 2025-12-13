
import { TerminalLayout } from "@/components/layout/TerminalLayout";
import { INTERNSHIPS, PROJECTS } from "@/lib/constants";
import { useLocation } from "wouter";
import { Building2, Calendar, MapPin, Briefcase } from "lucide-react";

export default function Internships() {
  const [_, setLocation] = useLocation();

  const handleProjectClick = (projectId: string) => {
    const command = projectId.replace(/-/g, "");
    const event = new CustomEvent('terminal:type', { 
        detail: { text: command, submit: true } 
    });
    window.dispatchEvent(event);
  };

  return (
    <TerminalLayout>
      <div className="space-y-8 animate-in fade-in duration-500 pb-12">
        
        <div className="text-zinc-500">
          <span className="text-emerald-500 font-bold mr-2">$</span>
          <span className="text-zinc-100">internships</span>
        </div>

        <div className="text-zinc-500 text-sm italic mb-8">
            # Loading work experience history...
        </div>

        <div className="space-y-12">
            {INTERNSHIPS.map((internship) => (
                <div key={internship.id} className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/20">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 border-b border-zinc-800 pb-4">
                        <div>
                            <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                <Building2 size={18} className="text-emerald-500" />
                                {internship.company}
                            </h2>
                            <div className="text-zinc-400 font-mono text-sm mt-1 flex items-center gap-2">
                                <Briefcase size={14} />
                                {internship.role}
                            </div>
                        </div>
                        <div className="flex flex-col items-end text-xs text-zinc-500 font-mono gap-1">
                            <div className="flex items-center gap-2">
                                <Calendar size={12} />
                                {internship.duration}
                            </div>
                            <div className="flex items-center gap-2 px-2 py-1 rounded bg-zinc-900 border border-zinc-800">
                                <MapPin size={12} />
                                {internship.type}
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6 space-y-2">
                        <div className="text-xs text-zinc-500 font-bold mb-2 uppercase tracking-widest">Responsibilities</div>
                        <ul className="space-y-2">
                            {internship.description.map((desc, i) => (
                                <li key={i} className="text-sm text-zinc-300 flex items-start gap-2">
                                    <span className="text-emerald-500 mt-1">›</span>
                                    {desc}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Associated Projects */}
                    {internship.projects.length > 0 && (
                        <div>
                            <div className="text-xs text-zinc-500 font-bold mb-3 uppercase tracking-widest">Internship Projects</div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {internship.projects.map(pid => {
                                    const project = PROJECTS.find(p => p.id === pid);
                                    if (!project) return null;
                                    return (
                                        <div 
                                            key={pid}
                                            onClick={() => handleProjectClick(pid)}
                                            className="group border border-zinc-800 bg-black p-3 rounded hover:border-blue-500/50 cursor-pointer transition-all flex items-center justify-between"
                                        >
                                            <div>
                                                <div className="text-sm font-bold text-zinc-300 group-hover:text-blue-400">{project.name}</div>
                                                <div className="text-[10px] text-zinc-500">{project.shortDescription}</div>
                                            </div>
                                            <div className="text-zinc-600 group-hover:text-blue-400 text-xs">open ↗</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>

      </div>
    </TerminalLayout>
  );
}
