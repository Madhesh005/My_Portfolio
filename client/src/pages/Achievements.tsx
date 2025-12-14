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
              <div className="text-2xl font-bold text-emerald-400 mb-1">1500+</div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider">Problems Solved</div>
            </div>
            <div className="border border-zinc-800 rounded-lg p-4 bg-zinc-900/20 text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">5+</div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider">Projects Completed</div>
            </div>
            <div className="border border-zinc-800 rounded-lg p-4 bg-zinc-900/20 text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">5+</div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider">Hackathons</div>
            </div>
            <div className="border border-zinc-800 rounded-lg p-4 bg-zinc-900/20 text-center">
              <div className="text-2xl font-bold text-yellow-400 mb-1">8+</div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider">Certifications</div>
            </div>
          </div>
        </div>

        {/* Hackathons & Competitions */}
        <div className="space-y-6">
          <div className="text-zinc-500">
            <span className="text-emerald-500 font-bold mr-2">$</span>
            <span className="text-zinc-100">hackathons --list</span>
          </div>
          
          <div className="space-y-4">
            {/* Saihackfest Winner */}
            <div className="border border-zinc-800 rounded-lg p-5 bg-zinc-900/10 hover:bg-zinc-900/20 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Trophy className="text-yellow-500" size={20} />
                  <div>
                    <h3 className="font-bold text-zinc-200">Saihackfest Winner</h3>
                    <p className="text-xs text-zinc-500">College Internal Hackathon</p>
                  </div>
                </div>
                <div className="text-xs text-zinc-400 flex items-center gap-1">
                  <Calendar size={12} />
                  2025
                </div>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Secured 1st place in college internal hackathon, demonstrating innovative problem-solving and technical excellence among competing teams.
              </p>
            </div>

            {/* Phoenix'25 */}
            <div className="border border-zinc-800 rounded-lg p-5 bg-zinc-900/10 hover:bg-zinc-900/20 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Trophy className="text-yellow-500" size={20} />
                  <div>
                    <h3 className="font-bold text-zinc-200">Phoenix'25 - 1st Place</h3>
                    <p className="text-xs text-zinc-500">SRM Institute of Science and Technology</p>
                  </div>
                </div>
                <div className="text-xs text-zinc-400 flex items-center gap-1">
                  <Calendar size={12} />
                  2025
                </div>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Achieved first place at Phoenix'25 hackathon hosted by SRM Institute, showcasing exceptional technical skills and innovation.
              </p>
            </div>

            {/* i-tekron */}
            <div className="border border-zinc-800 rounded-lg p-5 bg-zinc-900/10 hover:bg-zinc-900/20 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Award className="text-gray-400" size={20} />
                  <div>
                    <h3 className="font-bold text-zinc-200">i-tekron - 2nd Place</h3>
                    <p className="text-xs text-zinc-500">New Prince Shri Bhavani Engineering College</p>
                  </div>
                </div>
                <div className="text-xs text-zinc-400 flex items-center gap-1">
                  <Calendar size={12} />
                  2025
                </div>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Secured 2nd place at i-tekron hackathon, demonstrating strong technical competency and collaborative problem-solving skills.
              </p>
            </div>

            {/* CPS Summit */}
            <div className="border border-zinc-800 rounded-lg p-5 bg-zinc-900/10 hover:bg-zinc-900/20 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Award className="text-gray-400" size={20} />
                  <div>
                    <h3 className="font-bold text-zinc-200">CPS Summit 2k25 Ideathon - 2nd Prize</h3>
                    <p className="text-xs text-zinc-500">MGR University - IT Department</p>
                  </div>
                </div>
                <div className="text-xs text-zinc-400 flex items-center gap-1">
                  <Calendar size={12} />
                  2025
                </div>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Won 2nd prize in ideathon conducted by Information Technology Department of MGR University, showcasing innovative thinking and presentation skills.
              </p>
            </div>

            {/* Fikra'23 */}
            <div className="border border-zinc-800 rounded-lg p-5 bg-zinc-900/10 hover:bg-zinc-900/20 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Award className="text-orange-400" size={20} />
                  <div>
                    <h3 className="font-bold text-zinc-200">Fikra'23 - 5th Place</h3>
                    <p className="text-xs text-zinc-500">Entrepreneurship Summit</p>
                  </div>
                </div>
                <div className="text-xs text-zinc-400 flex items-center gap-1">
                  <Calendar size={12} />
                  2023
                </div>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Achieved 5th place among 32 teams at Fikra'23 Entrepreneurship Summit, demonstrating business acumen and innovative solutions.
              </p>
            </div>

            {/* Hackera'25 */}
            <div className="border border-zinc-800 rounded-lg p-5 bg-zinc-900/10 hover:bg-zinc-900/20 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Code className="text-blue-400" size={20} />
                  <div>
                    <h3 className="font-bold text-zinc-200">Hackera'25 Participant</h3>
                    <p className="text-xs text-zinc-500">Sathyabama University - National Level</p>
                  </div>
                </div>
                <div className="text-xs text-zinc-400 flex items-center gap-1">
                  <Calendar size={12} />
                  2025
                </div>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Participated in national level hackathon organized by Sathyabama University, gaining valuable experience in competitive programming.
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
                    <div className="text-sm font-medium text-zinc-300">Networking Basics</div>
                    <div className="text-xs text-zinc-500">Cisco Network Academy</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ExternalLink size={14} className="text-emerald-500 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-zinc-300">FullStack Web Development</div>
                    <div className="text-xs text-zinc-500">Zero Solutions</div>
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
                    <div className="text-sm font-medium text-zinc-300">College Competitions</div>
                    <div className="text-xs text-zinc-500">Various coding competitions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NPTEL Certifications */}
        <div className="space-y-6">
          <div className="text-zinc-500">
            <span className="text-emerald-500 font-bold mr-2">$</span>
            <span className="text-zinc-100">nptel --certifications</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-zinc-800 rounded-lg p-4 bg-zinc-900/10 text-center">
              <div className="text-lg font-bold text-blue-400 mb-2">Cloud Computing</div>
              <div className="text-sm text-zinc-400 mb-1">Completed Certification</div>
              <div className="text-xs text-emerald-400 font-mono">Score: 61%</div>
            </div>
            <div className="border border-zinc-800 rounded-lg p-4 bg-zinc-900/10 text-center">
              <div className="text-lg font-bold text-yellow-400 mb-2">Programming in Java</div>
              <div className="text-sm text-zinc-400 mb-1">Elite Certification</div>
              <div className="text-xs text-emerald-400 font-mono">Score: 62%</div>
            </div>
            <div className="border border-zinc-800 rounded-lg p-4 bg-zinc-900/10 text-center">
              <div className="text-lg font-bold text-purple-400 mb-2">Database Systems</div>
              <div className="text-sm text-zinc-400 mb-1">Completed Certification</div>
              <div className="text-xs text-emerald-400 font-mono">Score: 55%</div>
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
                    <h3 className="font-bold text-zinc-200">Brain2Business Coordinator</h3>
                    <p className="text-xs text-zinc-500">IEEE TEMS SEC SB - Entrepreneurial Visions</p>
                  </div>
                </div>
                <div className="text-xs text-zinc-400 flex items-center gap-1">
                  <Calendar size={12} />
                  2025
                </div>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Coordinated Brain2Business event focusing on entrepreneurial visions, organized by IEEE TEMS SEC SB.
              </p>
            </div>

            <div className="border border-zinc-800 rounded-lg p-5 bg-zinc-900/10 hover:bg-zinc-900/20 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Users className="text-emerald-500" size={20} />
                  <div>
                    <h3 className="font-bold text-zinc-200">Winspire 1.0 Coordinator</h3>
                    <p className="text-xs text-zinc-500">IEEE TEMS SEC SB</p>
                  </div>
                </div>
                <div className="text-xs text-zinc-400 flex items-center gap-1">
                  <Calendar size={12} />
                  2025
                </div>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Served as coordinator for Winspire 1.0 event conducted by IEEE TEMS SEC SB, managing event logistics and participant engagement.
              </p>
            </div>

            <div className="border border-zinc-800 rounded-lg p-5 bg-zinc-900/10 hover:bg-zinc-900/20 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Users className="text-blue-500" size={20} />
                  <div>
                    <h3 className="font-bold text-zinc-200">Business Pitch Volunteer</h3>
                    <p className="text-xs text-zinc-500">Cognizant (CTS) - Industry Experts</p>
                  </div>
                </div>
                <div className="text-xs text-zinc-400 flex items-center gap-1">
                  <Calendar size={12} />
                  2025
                </div>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Volunteered in business pitch event for industry experts across various organizations, organized by Cognizant Technology Solutions.
              </p>
            </div>
          </div>
        </div>

      </div>
    </TerminalLayout>
  );
}