
import { TerminalLayout } from "@/components/layout/TerminalLayout";
import { PROJECTS } from "@/lib/constants";
import { useRoute } from "wouter";
import { ExternalLink, Github, Eye, Terminal as TerminalIcon, ArrowUpRight, Users } from "lucide-react";
import previewImage from "@assets/generated_images/abstract_wireframe_tech_background.png";

export default function ProjectDetails() {
  const [match, params] = useRoute("/project/:id");
  const projectId = params?.id;
  const project = PROJECTS.find(p => p.id === projectId);

  if (!project) {
    return (
        <TerminalLayout>
            <div className="text-red-500">Error: Project not found.</div>
        </TerminalLayout>
    );
  }

  return (
    <TerminalLayout>
      <div className="space-y-8 animate-in fade-in duration-500 pb-20">
        
        <div className="text-zinc-500">
          <span className="text-emerald-500 font-bold mr-2">$</span>
          <span className="text-zinc-100">preview {project.name}</span>
        </div>

        {/* Project Header Card */}
        <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/20 grid md:grid-cols-[200px_1fr] gap-6">
            <div className="w-full aspect-video md:aspect-square bg-zinc-900 rounded border border-zinc-800 overflow-hidden relative group">
                 <img 
                    src={previewImage} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                    alt="Project Preview"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-2">
                    <span className="text-[10px] text-emerald-400 font-mono">v1.0.0-stable</span>
                 </div>
            </div>
            
            <div className="space-y-4">
                <div>
                    <h1 className="text-xl font-bold text-white flex items-center gap-3">
                        {project.name}
                        {project.company && <span className="text-xs font-normal px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">@{project.company}</span>}
                    </h1>
                    <div className="text-sm font-normal text-zinc-400 mt-1">{project.shortDescription}</div>
                </div>
                
                <p className="text-zinc-400 text-sm leading-relaxed border-l-2 border-zinc-800 pl-4">
                    {project.solution}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-black border border-zinc-800 rounded-full text-xs text-emerald-500/80">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>

        {/* Collaborators Section */}
        {project.collaborators && project.collaborators.length > 0 && (
            <div className="border border-zinc-800 rounded-lg p-4 bg-zinc-900/10 flex items-center gap-4">
                <div className="text-zinc-500 shrink-0 flex items-center gap-2">
                    <Users size={14} className="text-blue-400" />
                    <span className="font-bold text-xs uppercase tracking-widest">Team</span>
                </div>
                <div className="flex flex-wrap gap-3">
                    {project.collaborators.map((collab, i) => (
                        <a 
                            key={i} 
                            href={collab.linkedin} 
                            target="_blank" 
                            rel="noreferrer"
                            className="text-sm text-zinc-300 hover:text-white hover:underline decoration-zinc-600 underline-offset-4"
                        >
                            {collab.name}
                        </a>
                    ))}
                </div>
            </div>
        )}

        {/* Details Section */}
        <div className="space-y-6">
             <div className="text-zinc-500">
                <span className="text-emerald-500 font-bold mr-2">$</span>
                <span className="text-zinc-100">readme {project.id}</span>
            </div>
            
            <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/10 font-mono text-sm space-y-6">
                <div className="grid grid-cols-[100px_1fr] gap-4">
                    <span className="text-zinc-500">Problem</span>
                    <span className="text-zinc-300">{project.problem}</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-4">
                    <span className="text-zinc-500">Solution</span>
                    <span className="text-zinc-300">{project.solution}</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-4">
                    <span className="text-zinc-500">Highlights</span>
                    <span className="text-zinc-300">{project.highlights}</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-4">
                    <span className="text-zinc-500">Status</span>
                    <span className="text-emerald-400">{project.status}</span>
                </div>
            </div>
        </div>

        {/* Actions */}
         <div className="space-y-4">
             <div className="text-zinc-500">
                <span className="text-emerald-500 font-bold mr-2">$</span>
                <span className="text-zinc-100">links {project.id}</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href={project.links.demo} target="_blank" rel="noreferrer" className="flex items-center justify-between px-4 py-3 border border-zinc-800 rounded bg-zinc-900/20 hover:bg-zinc-900 hover:border-emerald-500/50 hover:text-emerald-400 transition-all group">
                    <div className="flex items-center gap-3">
                        <ExternalLink size={16} />
                        <span>Open Live Demo</span>
                    </div>
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a href={project.links.docs || "#"} target="_blank" rel="noreferrer" className="flex items-center justify-between px-4 py-3 border border-zinc-800 rounded bg-zinc-900/20 hover:bg-zinc-900 hover:border-blue-500/50 hover:text-blue-400 transition-all group">
                    <div className="flex items-center gap-3">
                        <Eye size={16} />
                        <span>Read Docs</span>
                    </div>
                     <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                 <a href={project.links.repo} target="_blank" rel="noreferrer" className="flex items-center justify-between px-4 py-3 border border-zinc-800 rounded bg-zinc-900/20 hover:bg-zinc-900 hover:border-purple-500/50 hover:text-purple-400 transition-all group">
                    <div className="flex items-center gap-3">
                        <Github size={16} />
                        <span>View Repo</span>
                    </div>
                     <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                 <button className="flex items-center justify-between px-4 py-3 border border-zinc-800 rounded bg-zinc-900/20 hover:bg-zinc-900 hover:border-yellow-500/50 hover:text-yellow-400 transition-all group opacity-50 cursor-not-allowed">
                    <div className="flex items-center gap-3">
                        <TerminalIcon size={16} />
                        <span>Request Access</span>
                    </div>
                     <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
            </div>
        </div>

      </div>
    </TerminalLayout>
  );
}
