
import { TerminalLayout } from "@/components/layout/TerminalLayout";
import { SKILLS } from "@/lib/constants";

export default function Skills() {
    // Combine all skills for the main list
    const allSkills = [
        ...SKILLS.languages,
        ...SKILLS.web,
        ...SKILLS.aiml,
        ...SKILLS.blockchain,
        ...SKILLS.fundamentals,
        ...SKILLS.tools
    ];

    return (
        <TerminalLayout>
            <div className="space-y-8 animate-in fade-in duration-500 pb-12">

                <div className="text-zinc-500">
                    <span className="text-emerald-500 font-bold mr-2">$</span>
                    <span className="text-zinc-100">skills</span>
                </div>

                {/* Main List */}
                <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/20">
                    <ul className="space-y-4">
                        {allSkills.slice(0, 12).map((skill, i) => (
                            <li key={i} className="flex justify-between items-center group">
                                <div className="flex items-center gap-3">
                                    <span className="text-zinc-600 group-hover:text-emerald-500 transition-colors">•</span>
                                    <span className="text-zinc-300 group-hover:text-white transition-colors">{skill.name}</span>
                                </div>
                                <span className={`text-xs px-2 py-1 rounded border border-zinc-800 ${
                                    skill.level === 'intermediate' ? 'text-blue-400 border-blue-900/30' :
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

                    {/* Languages */}
                    <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/10">
                        <div className="text-zinc-500 mb-4 text-xs">
                            <span className="text-emerald-500 font-bold mr-2">$</span>
                            <span>languages</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {SKILLS.languages.map(s => (
                                <span key={s.name} className="px-3 py-1.5 border border-zinc-800 rounded-md bg-black text-xs text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all cursor-default">
                                    {s.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Web Development */}
                    <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/10">
                        <div className="text-zinc-500 mb-4 text-xs">
                            <span className="text-emerald-500 font-bold mr-2">$</span>
                            <span>web</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {SKILLS.web.map(s => (
                                <span key={s.name} className="px-3 py-1.5 border border-zinc-800 rounded-md bg-black text-xs text-zinc-400 hover:text-blue-400 hover:border-blue-500/30 transition-all cursor-default">
                                    {s.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* AI/ML */}
                    <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/10">
                        <div className="text-zinc-500 mb-4 text-xs">
                            <span className="text-emerald-500 font-bold mr-2">$</span>
                            <span>ai & ml</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {SKILLS.aiml.map(s => (
                                <span key={s.name} className="px-3 py-1.5 border border-zinc-800 rounded-md bg-black text-xs text-zinc-400 hover:text-purple-400 hover:border-purple-500/30 transition-all cursor-default">
                                    {s.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Blockchain */}
                    <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/10">
                        <div className="text-zinc-500 mb-4 text-xs">
                            <span className="text-emerald-500 font-bold mr-2">$</span>
                            <span>blockchain</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {SKILLS.blockchain.map(s => (
                                <span key={s.name} className="px-3 py-1.5 border border-zinc-800 rounded-md bg-black text-xs text-zinc-400 hover:text-yellow-400 hover:border-yellow-500/30 transition-all cursor-default">
                                    {s.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* CS Fundamentals */}
                    <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/10">
                        <div className="text-zinc-500 mb-4 text-xs">
                            <span className="text-emerald-500 font-bold mr-2">$</span>
                            <span>cs fundamentals</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {SKILLS.fundamentals.map(s => (
                                <span key={s.name} className="px-3 py-1.5 border border-zinc-800 rounded-md bg-black text-xs text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all cursor-default">
                                    {s.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Tools & Database */}
                    <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/10">
                        <div className="text-zinc-500 mb-4 text-xs">
                            <span className="text-emerald-500 font-bold mr-2">$</span>
                            <span>tools & database</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {SKILLS.tools.map(s => (
                                <span key={s.name} className="px-3 py-1.5 border border-zinc-800 rounded-md bg-black text-xs text-zinc-400 hover:text-orange-400 hover:border-orange-500/30 transition-all cursor-default">
                                    {s.name}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </TerminalLayout>
    );
}
