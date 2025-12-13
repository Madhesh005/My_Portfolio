
import { TerminalLayout } from "@/components/layout/TerminalLayout";
import { COMMANDS, PROJECTS } from "@/lib/constants";
import { useLocation } from "wouter";

export default function ListCommands() {
  const [_, setLocation] = useLocation();

  const handleCommandClick = (cmd: string) => {
    const event = new CustomEvent('terminal:type', { 
        detail: { 
            text: cmd, 
            submit: false 
        } 
    });
    window.dispatchEvent(event);
  };

  return (
    <TerminalLayout>
      <div className="space-y-6">
        <div className="text-zinc-500">
          <span className="text-emerald-500 font-bold mr-2">$</span>
          <span className="text-zinc-100">ls -la</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {COMMANDS.map((command) => (
            <div 
              key={command.cmd}
              onClick={() => handleCommandClick(command.cmd)}
              className="group border border-zinc-800 bg-zinc-900/10 p-4 rounded hover:bg-zinc-900 hover:border-emerald-500/50 cursor-pointer transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-emerald-500 font-bold">$</span>
                <span className="text-zinc-100 font-mono text-lg group-hover:text-emerald-400 transition-colors">{command.cmd}</span>
              </div>
              <div className="text-zinc-500 text-sm font-mono pl-6">
                {command.desc}
              </div>
            </div>
          ))}
        </div>
        
        {/* Project Commands Section */}
        <div className="mt-8 border-t border-zinc-800 pt-6 pb-12">
             <h3 className="text-zinc-400 mb-4 text-sm font-bold">Project Shortcuts</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {PROJECTS.map((project) => {
                    // Normalize command to match what CommandInput expects
                    const cmd = project.id.replace(/-/g, "");
                    return (
                        <div 
                          key={project.id}
                          onClick={() => handleCommandClick(cmd)}
                          className="group border border-zinc-800 bg-zinc-900/10 p-4 rounded hover:bg-zinc-900 hover:border-blue-500/50 cursor-pointer transition-all"
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-emerald-500 font-bold">$</span>
                            <span className="text-zinc-100 font-mono text-lg group-hover:text-blue-400 transition-colors">{cmd}</span>
                          </div>
                          <div className="text-zinc-500 text-sm font-mono pl-6">
                            Open {project.name}
                          </div>
                        </div>
                    );
                })}
             </div>
        </div>

      </div>
    </TerminalLayout>
  );
}
