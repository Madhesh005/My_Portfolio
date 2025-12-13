
import { TerminalLayout } from "@/components/layout/TerminalLayout";
import { PROJECTS } from "@/lib/constants";
import { useLocation } from "wouter";

export default function Projects() {
  const [_, setLocation] = useLocation();

  const handleProjectClick = (projectId: string) => {
    const command = projectId.replace(/-/g, "");
    
    const event = new CustomEvent('terminal:type', { 
        detail: { 
            text: command, 
            submit: true 
        } 
    });
    window.dispatchEvent(event);
  };

  const renderProjectCard = (project: any) => (
      <div 
          key={project.id}
          className="group border border-zinc-800 bg-zinc-900/10 rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-zinc-700 hover:bg-zinc-900/30 transition-all cursor-pointer"
          onClick={() => handleProjectClick(project.id)}
      >
          <div className="flex items-start gap-4">
              <div className="mt-1 text-emerald-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="12" x2="12" y1="8" y2="16"/><line x1="8" x2="16" y1="12" y2="12"/></svg>
              </div>
              <div>
                  <h3 className="font-bold text-zinc-200 group-hover:text-emerald-400 transition-colors flex items-center gap-2">
                      {project.name} 
                      {project.company && <span className="text-[10px] bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-400 font-normal">@{project.company}</span>}
                  </h3>
                  <div className="text-zinc-400 text-sm mt-1">{project.shortDescription}</div>
                  {project.collaborators && (
                      <div className="text-[10px] text-zinc-500 mt-2">
                          with {project.collaborators.map((c: any) => c.name).join(", ")}
                      </div>
                  )}
              </div>
          </div>

          <div className="flex gap-2 flex-wrap justify-end">
              {project.techStack.slice(0, 3).map((tech: string) => (
                  <span key={tech} className="text-[10px] px-2 py-1 rounded-full border border-zinc-800 text-zinc-500 group-hover:border-zinc-700 group-hover:text-zinc-400">
                      {tech}
                  </span>
              ))}
          </div>
      </div>
  );

  const featured = PROJECTS.filter(p => p.category === "featured");
  const internship = PROJECTS.filter(p => p.category === "internship");
  const hobby = PROJECTS.filter(p => p.category === "hobby");

  return (
    <TerminalLayout>
      <div className="space-y-12 animate-in fade-in duration-500 pb-12">
        
        <div className="text-zinc-500">
          <span className="text-emerald-500 font-bold mr-2">$</span>
          <span className="text-zinc-100">projects</span>
        </div>

        <div className="text-zinc-500 text-sm italic mb-8">
            # Listing all projects categorized by type...
        </div>

        {/* Featured Projects */}
        <div className="space-y-4">
            <div className="text-zinc-500 text-sm mb-2 flex items-center gap-2">
                <span className="text-emerald-500 font-bold">$</span>
                <span className="text-yellow-400 font-bold">ls --featured</span>
            </div>
            <div className="grid gap-4">
                {featured.map(renderProjectCard)}
            </div>
        </div>

        {/* Internship Projects */}
        <div className="space-y-4">
            <div className="text-zinc-500 text-sm mb-2 flex items-center gap-2">
                <span className="text-emerald-500 font-bold">$</span>
                <span className="text-blue-400 font-bold">ls --internship</span>
            </div>
            <div className="grid gap-4">
                {internship.map(renderProjectCard)}
            </div>
        </div>

        {/* Hobby Projects */}
        <div className="space-y-4">
            <div className="text-zinc-500 text-sm mb-2 flex items-center gap-2">
                <span className="text-emerald-500 font-bold">$</span>
                <span className="text-purple-400 font-bold">ls --hobby</span>
            </div>
            <div className="grid gap-4">
                {hobby.map(renderProjectCard)}
            </div>
        </div>

      </div>
    </TerminalLayout>
  );
}
