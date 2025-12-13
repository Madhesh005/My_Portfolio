
import { TerminalLayout } from "@/components/layout/TerminalLayout";
import { COMMANDS } from "@/lib/constants";
import { useLocation } from "wouter";

export default function ListCommands() {
  const [_, setLocation] = useLocation();

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
              onClick={() => {
                 if (command.cmd === "resume") {
                     window.open("/resume.pdf", "_blank");
                 } else {
                     setLocation(command.cmd === "ls" ? "/ls" : command.cmd === "home" ? "/" : `/${command.cmd}`);
                 }
              }}
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
        
        <div className="mt-8 border-t border-zinc-800 pt-6">
            <h3 className="text-zinc-400 mb-4 text-sm font-bold">File System</h3>
            <div className="font-mono text-sm space-y-2">
                <div className="grid grid-cols-[100px_1fr] text-zinc-500">
                    <span>drwxr-xr-x</span>
                    <span className="text-blue-400">projects/</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] text-zinc-500">
                    <span>drwxr-xr-x</span>
                    <span className="text-blue-400">skills/</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] text-zinc-500">
                    <span>-rw-r--r--</span>
                    <span className="text-zinc-300">resume.pdf</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] text-zinc-500">
                    <span>-rw-r--r--</span>
                    <span className="text-zinc-300">contact.sh</span>
                </div>
            </div>
        </div>

      </div>
    </TerminalLayout>
  );
}
