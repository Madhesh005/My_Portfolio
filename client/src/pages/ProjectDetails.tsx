
import { TerminalLayout } from "@/components/layout/TerminalLayout";
import { PROJECTS } from "@/lib/constants";
import { useRoute } from "wouter";
import { ExternalLink, Github, ArrowUpRight, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

// Images no longer needed - all preview images removed

export default function ProjectDetails() {
  const [match, params] = useRoute("/project/:id");
  const projectId = params?.id;
  const project = PROJECTS.find(p => p.id === projectId);
  const { toast } = useToast();
  
  // Remove preview images for ALL projects
  const shouldShowImage = false;

  // Handle disabled button clicks with toast messages
  const handleDisabledLiveDemoClick = () => {
    toast({
      title: "Currently in Development",
      description: "This project's live demo is not yet available. Stay tuned for updates!",
      className: "font-mono bg-zinc-900 text-yellow-400 border-zinc-800",
      duration: 7000
    });
  };

  const handleDisabledSourceCodeClick = () => {
    toast({
      title: "Source Code Restricted",
      description: "The source code for this project is currently private and under development.",
      className: "font-mono bg-zinc-900 text-purple-400 border-zinc-800",
      duration: 7000
    });
  };

  if (!project) {
    return (
        <TerminalLayout>
            <div className="text-red-500">Error: Project not found.</div>
        </TerminalLayout>
    );
  }

  return (
    <TerminalLayout>
      <div className="space-y-8 animate-in fade-in duration-500 pb-12">
        
        <div className="text-zinc-500">
          <span className="text-emerald-500 font-bold mr-2">$</span>
          <span className="text-zinc-100">preview {project.name}</span>
        </div>

        {/* Project Header Card */}
        <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/20">
            
            <div className="space-y-4">
                <div>
                    <h1 className="text-2xl font-bold text-white flex items-center gap-3 flex-wrap">
                        {project.name}
                        {project.company && (
                            <span className="text-xs font-normal px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700">
                                @{project.company}
                            </span>
                        )}
                    </h1>
                    <div className="text-base font-normal text-zinc-400 mt-2">{project.shortDescription}</div>
                </div>
                
                <p className="text-zinc-400 text-sm leading-relaxed border-l-2 border-emerald-500/30 pl-4 bg-zinc-900/30 py-3 rounded-r">
                    {project.solution}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map(tech => (
                        <span key={tech} className="px-3 py-1.5 bg-black border border-zinc-800 rounded-md text-xs text-emerald-400 hover:border-emerald-500/50 transition-colors">
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
            
            <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/10 font-mono text-sm space-y-5">
                <div className="grid grid-cols-[120px_1fr] gap-4 items-start">
                    <span className="text-zinc-500 font-semibold">Problem</span>
                    <span className="text-zinc-300 leading-relaxed">{project.problem}</span>
                </div>
                <div className="border-t border-zinc-800/50 pt-4">
                    <div className="grid grid-cols-[120px_1fr] gap-4 items-start">
                        <span className="text-zinc-500 font-semibold">Solution</span>
                        <span className="text-zinc-300 leading-relaxed">{project.solution}</span>
                    </div>
                </div>
                <div className="border-t border-zinc-800/50 pt-4">
                    <div className="grid grid-cols-[120px_1fr] gap-4 items-start">
                        <span className="text-zinc-500 font-semibold">Highlights</span>
                        <span className="text-zinc-300 leading-relaxed">{project.highlights}</span>
                    </div>
                </div>
                <div className="border-t border-zinc-800/50 pt-4">
                    <div className="grid grid-cols-[120px_1fr] gap-4 items-center">
                        <span className="text-zinc-500 font-semibold">Status</span>
                        <span className="text-emerald-400 font-medium">{project.status}</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Actions */}
         <div className="space-y-5">
             <div className="text-zinc-500">
                <span className="text-emerald-500 font-bold mr-2">$</span>
                <span className="text-zinc-100">links {project.id}</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Live Demo Button */}
                {project.category === "featured" ? (
                    <button 
                        onClick={handleDisabledLiveDemoClick}
                        className="flex items-center justify-between px-4 py-3.5 border border-zinc-800 rounded-md bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-emerald-500/50 hover:text-emerald-400 transition-all group opacity-50 cursor-pointer"
                    >
                        <div className="flex items-center gap-3">
                            <ExternalLink size={16} />
                            <span className="font-medium">Live Demo</span>
                        </div>
                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                ) : (
                    <a href={project.links.demo} target="_blank" rel="noreferrer" className="flex items-center justify-between px-4 py-3.5 border border-zinc-800 rounded-md bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-emerald-500/50 hover:text-emerald-400 transition-all group">
                        <div className="flex items-center gap-3">
                            <ExternalLink size={16} />
                            <span className="font-medium">Live Demo</span>
                        </div>
                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                )}

                {/* Source Code Button */}
                {project.category === "featured" || project.id === "temp-conv" ? (
                    <button 
                        onClick={handleDisabledSourceCodeClick}
                        className="flex items-center justify-between px-4 py-3.5 border border-zinc-800 rounded-md bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-purple-500/50 hover:text-purple-400 transition-all group opacity-50 cursor-pointer"
                    >
                        <div className="flex items-center gap-3">
                            <Github size={16} />
                            <span className="font-medium">Source Code</span>
                        </div>
                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                ) : (
                    <a href={project.links.repo} target="_blank" rel="noreferrer" className="flex items-center justify-between px-4 py-3.5 border border-zinc-800 rounded-md bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-purple-500/50 hover:text-purple-400 transition-all group">
                        <div className="flex items-center gap-3">
                            <Github size={16} />
                            <span className="font-medium">Source Code</span>
                        </div>
                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                )}
            </div>
        </div>

      </div>
    </TerminalLayout>
  );
}
