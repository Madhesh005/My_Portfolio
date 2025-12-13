
import { TerminalLayout } from "@/components/layout/TerminalLayout";
import { PROJECTS } from "@/lib/constants";
import { useLocation } from "wouter";

export default function Projects() {
  const [_, setLocation] = useLocation();

  const handleProjectClick = (projectId: string) => {
    // Dispatch event to type the command into the terminal input
    // Using the project ID as the command alias (we defined aliases in CommandInput)
    // Or we can use "preview <id>"
    // The user requirement: "automatically type the keyword of each project... to search"
    // And "when I type the wealthempires command it has to go to..."
    
    // We'll use the ID directly as the command, assuming aliases are set up or ID works
    const command = projectId; 
    
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
      <div className="space-y-6 animate-in fade-in duration-500">
        
        <div className="text-zinc-500">
          <span className="text-emerald-500 font-bold mr-2">$</span>
          <span className="text-zinc-100">projects</span>
        </div>

        <div className="text-zinc-500 text-sm italic mb-8">
            # Listing projects... Click to run command.
        </div>

        <div className="space-y-4">
            <div className="text-zinc-500 text-sm mb-2">
                <span className="text-emerald-500 font-bold mr-2">$</span>
                <span>list</span>
            </div>

            <div className="grid gap-4">
                {PROJECTS.map((project) => (
                    <div 
                        key={project.id}
                        className="group border border-zinc-800 bg-zinc-900/10 rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-zinc-700 hover:bg-zinc-900/30 transition-all cursor-pointer"
                        onClick={() => handleProjectClick(project.id)}
                    >
                        <div className="flex items-start gap-4">
                            <div className="mt-1 text-emerald-500">
                                {project.id === "pathlens" || project.id === "theplug" ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="12" x2="12" y1="8" y2="16"/><line x1="8" x2="16" y1="12" y2="12"/></svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
                                )}
                            </div>
                            <div>
                                <h3 className="font-bold text-zinc-200 group-hover:text-emerald-400 transition-colors">{project.name} <span className="text-zinc-600 font-normal mx-2">-</span> <span className="text-zinc-400 font-normal">{project.shortDescription}</span></h3>
                            </div>
                        </div>

                        <div className="flex gap-2 flex-wrap justify-end">
                            {project.techStack.slice(0, 3).map(tech => (
                                <span key={tech} className="text-[10px] px-2 py-1 rounded-full border border-zinc-800 text-zinc-500 group-hover:border-zinc-700 group-hover:text-zinc-400">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </TerminalLayout>
  );
}
