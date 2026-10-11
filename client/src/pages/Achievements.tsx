import { TerminalLayout } from "@/components/layout/TerminalLayout";
import { Trophy, Award, Code, Users, Calendar, ExternalLink } from "lucide-react";

export default function Achievements() {
  return (
    <TerminalLayout>
      <div className="space-y-8 animate-in fade-in duration-500 pb-12">
        
        <div className="text-zinc-500">
          <span className="text-emerald-500 font-bold mr-2">$</span>
          <span className="text-zinc-100">achievements</span>
        </div>

        <div className="text-zinc-500 text-sm italic">
          → Showcasing milestones, competitions, and certifications achieved.
        </div>

        {/* Stats Overview */}
        <div className="space-y-4">
          <div className="text-zinc-500">
            <span className="text-emerald-500 font-bold mr-2">$</span>
            <span className="text-zinc-100">stats --overview</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="border border-zinc-800 rounded-lg p-4 bg-zinc-900/20 text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">Top 12</div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider">RBIH NFPC Finalist</div>
            </div>
            <div className="border border-zinc-800 rounded-lg p-4 bg-zinc-900/20 text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">MasterMind</div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider">IEEE Reliability Society</div>
            </div>
            <div className="border border-zinc-800 rounded-lg p-4 bg-zinc-900/20 text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">5+</div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider">Real-Time Projects Completed</div>
            </div>
            <div className="border border-zinc-800 rounded-lg p-4 bg-zinc-900/20 text-center">
              <div className="text-2xl font-bold text-yellow-400 mb-1">1500+</div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider">Skillrack Problems Solved</div>
            </div>
          </div>
        </div>

        {/* Hackathons & Competitions */}
        <div className="space-y-6">
          <div className="text-zinc-500">
            <span className="text-emerald-500 font-bold mr-2">$</span>
            <span className="text-zinc-100">hackathons --list</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* RBI NFPC Hackathon - FINALIST */}
            <div className="border border-zinc-800 rounded-lg p-5 bg-zinc-900/10 hover:bg-zinc-900/20 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Award className="text-blue-500" size={20} />
                  <div>
                    <h3 className="font-bold text-zinc-200">RBIH NFPC 2026 - Finalist (Top 12/500+)</h3>
                    <p className="text-xs text-zinc-500">Reserve Bank Innovation Hub</p>
                  </div>
                </div>
                <div className="text-xs text-zinc-400 flex items-center gap-1">
                  <Calendar size={12} />
                  2026
                </div>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Qualified as one of the top 12 finalists out of 500+ teams in the Reserve Bank Innovation Hub National Fraud Prevention Challenge. Built ScamShield, a multi-layer AI-powered fraud detection system for identifying money mule accounts.
              </p>
            </div>

            {/* DeltaBuild 2026 - WINNER */}
            <div className="border border-zinc-800 rounded-lg p-5 bg-zinc-900/10 hover:bg-zinc-900/20 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Trophy className="text-yellow-500" size={20} />
                  <div>
                    <h3 className="font-bold text-zinc-200">DeltaBuild 2026 - Winner</h3>
                    <p className="text-xs text-zinc-500">Blockchain Hackathon</p>
                  </div>
                </div>
                <div className="text-xs text-zinc-400 flex items-center gap-1">
                  <Calendar size={12} />
                  2026
                </div>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Won DeltaBuild 2026 with ChainVoice, a hybrid blockchain infrastructure for invoice financing using HyperLedger Fabric and IPFS. Led team TechTitans to design a system preventing duplicate financing fraud for MSMEs.
              </p>
            </div>

            {/* Sai Hackfest 2025 - WINNER */}
            <div className="border border-zinc-800 rounded-lg p-5 bg-zinc-900/10 hover:bg-zinc-900/20 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Trophy className="text-yellow-500" size={20} />
                  <div>
                    <h3 className="font-bold text-zinc-200">Sai Hackfest 2025 - Winner</h3>
                    <p className="text-xs text-zinc-500">Sri Sairam Engineering College</p>
                  </div>
                </div>
                <div className="text-xs text-zinc-400 flex items-center gap-1">
                  <Calendar size={12} />
                  2025
                </div>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Secured 1st place in Sai Hackfest 2025, demonstrating innovative problem-solving and technical excellence.
              </p>
            </div>

            {/* SDG Ideathon - WINNER */}
            <div className="border border-zinc-800 rounded-lg p-5 bg-zinc-900/10 hover:bg-zinc-900/20 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Trophy className="text-yellow-500" size={20} />
                  <div>
                    <h3 className="font-bold text-zinc-200">SDG Ideathon - Winner</h3>
                    <p className="text-xs text-zinc-500">Sustainable Development Goals Challenge</p>
                  </div>
                </div>
                <div className="text-xs text-zinc-400 flex items-center gap-1">
                  <Calendar size={12} />
                  2025
                </div>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Won the SDG Ideathon by presenting a solution addressing sustainable development challenges.
              </p>
            </div>

            {/* Hack the Horizon 2.0 - FINALIST */}
            <div className="border border-zinc-800 rounded-lg p-5 bg-zinc-900/10 hover:bg-zinc-900/20 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Award className="text-gray-400" size={20} />
                  <div>
                    <h3 className="font-bold text-zinc-200">Hack the Horizon 2.0 - Finalist</h3>
                    <p className="text-xs text-zinc-500">Inter-College Hackathon</p>
                  </div>
                </div>
                <div className="text-xs text-zinc-400 flex items-center gap-1">
                  <Calendar size={12} />
                  2025
                </div>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Reached finalist stage at Hack the Horizon 2.0, showcasing strong technical competency and innovative solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Certifications & Coding Achievements */}
        <div className="space-y-6">
          <div className="text-zinc-500">
            <span className="text-emerald-500 font-bold mr-2">$</span>
            <span className="text-zinc-100">certifications --list</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Professional Certifications */}
            <div className="border border-zinc-800 rounded-lg p-5 bg-zinc-900/10">
              <div className="text-zinc-500 mb-4 text-sm font-bold uppercase tracking-widest">
                Professional Certifications
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <ExternalLink size={14} className="text-emerald-500 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-zinc-300">Full-Stack Web Development</div>
                    <div className="text-xs text-zinc-500">Udemy - Dr. Angela Yu</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ExternalLink size={14} className="text-emerald-500 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-zinc-300">Introduction to AI & Deep Learning</div>
                    <div className="text-xs text-zinc-500">Infosys Springboard</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ExternalLink size={14} className="text-emerald-500 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-zinc-300">Java & DBMS</div>
                    <div className="text-xs text-zinc-500">NPTEL</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ExternalLink size={14} className="text-emerald-500 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-zinc-300">Introduction to Blockchain</div>
                    <div className="text-xs text-zinc-500">IEEE BLP</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coding Achievements */}
            <div className="border border-zinc-800 rounded-lg p-5 bg-zinc-900/10">
              <div className="text-zinc-500 mb-4 text-sm font-bold uppercase tracking-widest">
                Coding Achievements
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Code size={14} className="text-blue-500 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-zinc-300">1500+ Problems Solved</div>
                    <div className="text-xs text-zinc-500">SkillRack Platform</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Trophy size={14} className="text-yellow-500 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-zinc-300">Algorithmic Skills</div>
                    <div className="text-xs text-zinc-500">Strong problem-solving abilities</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users size={14} className="text-purple-500 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-zinc-300">Inter-College Competitions</div>
                    <div className="text-xs text-zinc-500">Various business & coding competitions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coordination & Volunteering */}
        <div className="space-y-6">
          <div className="text-zinc-500">
            <span className="text-emerald-500 font-bold mr-2">$</span>
            <span className="text-zinc-100">leadership --activities</span>
          </div>
          
          <div className="space-y-4">
            <div className="border border-zinc-800 rounded-lg p-5 bg-zinc-900/10 hover:bg-zinc-900/20 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Users className="text-emerald-500" size={20} />
                  <div>
                    <h3 className="font-bold text-zinc-200">IEEE Reliability Society Sairam Chapter – MasterMind</h3>
                    <p className="text-xs text-zinc-500">Co-Organizer & Technical Lead</p>
                  </div>
                </div>
                <div className="text-xs text-zinc-400 flex items-center gap-1">
                  <Calendar size={12} />
                  2025 – Present
                </div>
              </div>
              <div className="text-sm text-zinc-400 leading-relaxed space-y-2">
                <p>• Co-organized SustainTech 2026, a two-day technical bootcamp.</p>
                <p>• Co-organized Intellect Hack 2026, a 6-hour hackathon with around 60 participating teams.</p>
              </div>
            </div>

            <div className="border border-zinc-800 rounded-lg p-5 bg-zinc-900/10 hover:bg-zinc-900/20 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Users className="text-blue-500" size={20} />
                  <div>
                    <h3 className="font-bold text-zinc-200">IEEE TEMS Society – Website & Event Member</h3>
                    <p className="text-xs text-zinc-500">Web Maintenance & Event Volunteer</p>
                  </div>
                </div>
                <div className="text-xs text-zinc-400 flex items-center gap-1">
                  <Calendar size={12} />
                  2024 – 2025
                </div>
              </div>
              <div className="text-sm text-zinc-400 leading-relaxed space-y-2">
                <p>• Maintained and managed the IEEE TEMS official website.</p>
                <p>• Volunteered in organizing chapter events.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </TerminalLayout>
  );
}