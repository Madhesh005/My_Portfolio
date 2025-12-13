
import { TerminalLayout } from "@/components/layout/TerminalLayout";
import { SKILLS } from "@/lib/constants";

export default function Skills() {
  return (
    <TerminalLayout>
      <div className="space-y-8 animate-in fade-in duration-500">
        
        <div className="text-zinc-500">
          <span className="text-emerald-500 font-bold mr-2">$</span>
          <span className="text-zinc-100">skills</span>
        </div>

        {/* Main List */}
        <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/20">
            <ul className="space-y-4">
                {[...SKILLS.frontend, ...SKILLS.backend].slice(0, 8).map((skill, i) => (
                    <li key={i} className="flex justify-between items-center group">
                        <div className="flex items-center gap-3">
                            <span className="text-zinc-600 group-hover:text-emerald-500 transition-colors">•</span>
                            <span className="text-zinc-300 group-hover:text-white transition-colors">{skill.name}</span>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded border border-zinc-800 ${
                            skill.level === 'expert' ? 'text-emerald-400 border-emerald-900/30' : 
                            skill.level === 'advanced' ? 'text-blue-400 border-blue-900/30' : 
                            'text-zinc-500'
                        }`}>
                            {skill.level}
                        </span>
                    </li>
                ))}
            </ul>
        </div>

        {/* Categorized Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Frontend */}
            <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/10">
                <div className="text-zinc-500 mb-4 text-xs">
                    <span className="text-emerald-500 font-bold mr-2">$</span>
                    <span>frontend</span>
                </div>
                <div className="flex flex-wrap gap-2">
                    {SKILLS.frontend.map(s => (
                        <span key={s.name} className="px-3 py-1.5 border border-zinc-800 rounded-md bg-black text-xs text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all cursor-default">
                            {s.name}
                        </span>
                    ))}
                    <span className="px-3 py-1.5 border border-zinc-800 rounded-md bg-black text-xs text-zinc-600 border-dashed">WordPress</span>
                    <span className="px-3 py-1.5 border border-zinc-800 rounded-md bg-black text-xs text-zinc-600 border-dashed">Shadcn</span>
                </div>
            </div>

             {/* Backend */}
            <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/10">
                <div className="text-zinc-500 mb-4 text-xs">
                    <span className="text-emerald-500 font-bold mr-2">$</span>
                    <span>backend</span>
                </div>
                <div className="flex flex-wrap gap-2">
                    {SKILLS.backend.map(s => (
                        <span key={s.name} className="px-3 py-1.5 border border-zinc-800 rounded-md bg-black text-xs text-zinc-400 hover:text-blue-400 hover:border-blue-500/30 transition-all cursor-default">
                            {s.name}
                        </span>
                    ))}
                     <span className="px-3 py-1.5 border border-zinc-800 rounded-md bg-black text-xs text-zinc-600 border-dashed">Prisma</span>
                     <span className="px-3 py-1.5 border border-zinc-800 rounded-md bg-black text-xs text-zinc-600 border-dashed">Auth (JWT)</span>
                </div>
            </div>

             {/* Data */}
            <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/10">
                <div className="text-zinc-500 mb-4 text-xs">
                    <span className="text-emerald-500 font-bold mr-2">$</span>
                    <span>data & infra</span>
                </div>
                <div className="flex flex-wrap gap-2">
                    {SKILLS.devops.map(s => (
                        <span key={s.name} className="px-3 py-1.5 border border-zinc-800 rounded-md bg-black text-xs text-zinc-400 hover:text-yellow-400 hover:border-yellow-500/30 transition-all cursor-default">
                            {s.name}
                        </span>
                    ))}
                </div>
            </div>

             {/* AI */}
            <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/10">
                <div className="text-zinc-500 mb-4 text-xs">
                    <span className="text-emerald-500 font-bold mr-2">$</span>
                    <span>ai & automation</span>
                </div>
                <div className="flex flex-wrap gap-2">
                    {SKILLS.ai.map(s => (
                        <span key={s.name} className="px-3 py-1.5 border border-zinc-800 rounded-md bg-black text-xs text-zinc-400 hover:text-purple-400 hover:border-purple-500/30 transition-all cursor-default">
                            {s.name}
                        </span>
                    ))}
                    <span className="px-3 py-1.5 border border-zinc-800 rounded-md bg-black text-xs text-zinc-600 border-dashed">Vector DBs</span>
                    <span className="px-3 py-1.5 border border-zinc-800 rounded-md bg-black text-xs text-zinc-600 border-dashed">Selenium</span>
                </div>
            </div>

        </div>

      </div>
    </TerminalLayout>
  );
}
