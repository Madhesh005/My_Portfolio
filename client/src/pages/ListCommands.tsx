
import { TerminalLayout } from "@/components/layout/TerminalLayout";
import { COMMANDS } from "@/lib/constants";
import { useLocation } from "wouter";

export default function ListCommands() {
  const [_, setLocation] = useLocation();

  const handleCommandClick = (cmd: string) => {
    // "automatically type in the below search bar and it has to not redirect"
    // So we just type it, we don't submit it.
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

      </div>
    </TerminalLayout>
  );
}
