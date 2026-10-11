# Portfolio Content Refactor Implementation Plan

## Executive Summary

This plan addresses content inaccuracies in the portfolio website by aligning all sections with the verified resume. The refactor is **content-only** — no visual design, layout, animations, or component structure changes.

**Key Findings:**
- Multiple unsupported technologies found: MongoDB, PostgreSQL, Docker, Flutter (in some contexts), RAG Pipelines, LangChain, Redis (in Ascendra case study)
- ScamShield incorrectly labeled as "Winner" in some places when it's actually "Finalist (Top 12/87)"
- Skills section contains incorrect skill levels and technologies not in resume
- Featured skills on home page include unsupported technologies
- Internship descriptions need alignment with resume wording
- Project tech stacks contain inaccuracies (e.g., TensorFlow, React Native not in resume)
- One skill level claim: "expert" for Tailwind CSS (not justified by resume)
- IoT internship and Prodigy internship not mentioned in resume

---

## Implementation Plan

### Phase 1: Core Constants & Data Structure

- [ ] 1. Update SKILLS object in `client/src/lib/constants.ts` to match resume exactly.
      
      **Current Issues:**
      - `frontend` section has "Tailwind CSS" with level "expert" (not justified)
      - `backend` section includes "PostgreSQL" (advanced) and "MongoDB" (intermediate) — PostgreSQL/MongoDB not in resume, only MySQL
      - `devops` section includes "Docker / CI/CD" — Docker not in resume
      - `ai` section includes "LLM Integration", "RAG Pipelines", "LangChain" — none in resume
      
      **Required Changes:**
      Replace entire SKILLS object with:
      ```typescript
      export const SKILLS = {
        frontend: [
          { name: "JavaScript", level: "intermediate" },
          { name: "React.js", level: "advanced" },
        ],
        backend: [
          { name: "Node.js", level: "advanced" },
          { name: "Express.js", level: "advanced" },
          { name: "Python", level: "advanced" },
          { name: "Java", level: "intermediate" },
          { name: "MySQL", level: "intermediate" },
          { name: "Firebase", level: "intermediate" }
        ],
        blockchain: [
          { name: "HyperLedger Fabric", level: "intermediate" },
          { name: "Smart Contracts", level: "intermediate" },
          { name: "Pinata IPFS", level: "intermediate" }
        ],
        aiml: [
          { name: "XGBoost", level: "intermediate" },
          { name: "LightGBM", level: "intermediate" },
          { name: "SHAP", level: "intermediate" },
          { name: "NumPy", level: "intermediate" },
          { name: "Pandas", level: "intermediate" },
          { name: "Data Mining", level: "intermediate" },
          { name: "Generative AI", level: "beginner" }
        ],
        tools: [
          { name: "GitHub", level: "intermediate" },
          { name: "Figma", level: "beginner" },
          { name: "REST API Development", level: "intermediate" }
        ]
      };
      ```
      
      **Files:** `client/src/lib/constants.ts`
      
      **Verify:** Run `npm run check` in client directory to ensure TypeScript compiles without errors.

- [ ] 2. Update INTERNSHIPS array in `client/src/lib/constants.ts` to remove IoT and Prodigy internships (not in resume) and align descriptions with resume.
      
      **Current Issues:**
      - IoT Internship (id: "iot-intern") — NOT in resume
      - Prodigy Infotech (id: "prodigy") — NOT in resume
      - SprintXplore description is overly detailed and doesn't match resume wording
      - Wealth Empires description doesn't match resume exactly
      
      **Required Changes:**
      Replace INTERNSHIPS array with only two internships:
      
      ```typescript
      export const INTERNSHIPS: Internship[] = [
        {
          id: "sprintxplore",
          company: "SprintXplore Infotech Private Limited, Chennai",
          role: "Software Development Intern",
          duration: "January 2026 – April 2026",
          type: "Hybrid",
          description: [
            "Engineered DeFiScore for Coeffx Technologies, a privacy-preserving credit scoring protocol to evaluate wallet creditworthiness from behavioral data without exposing raw transaction details, enabling undercollateralized DeFi lending.",
            "Built an AI-powered lead conversion model using XGBoost and SHAP, surfacing the top five conversion drivers and improving sales team decision accuracy through explainable ML insights."
          ],
          projects: ["defiscore"]
        },
        {
          id: "wealth-empires-intern",
          company: "Wealth Empires – Tax & Compliance Advisory",
          role: "Web Development Intern",
          duration: "September 2025 – October 2025",
          type: "Remote",
          description: [
            "Designed and deployed the company website end-to-end within six weeks.",
            "Integrated compliance service modules.",
            "Delivered a responsive user experience across devices.",
            "Improved Core Web Vitals."
          ],
          projects: ["wealth-empires"]
        }
      ];
      ```
      
      **Files:** `client/src/lib/constants.ts`
      
      **Verify:** Run `npm run check` in client directory to ensure TypeScript compiles. Check that Internships page loads without errors.

- [ ] 3. Update PROJECTS array in `client/src/lib/constants.ts` to fix tech stacks and descriptions.
      
      **Current Issues:**
      - ScamShield: techStack includes "TensorFlow" and "React" — should be ["Python", "LightGBM", "XGBoost", "SHAP", "Graph Intelligence"]
      - ScamShield: highlights says "RBI NFPC Finalist (Top 12/87)" but needs to be consistent as "Top 12/500+"
      - ChainVoice: techStack says "Blockchain" — should be "HyperLedger Fabric"
      - Wealth Empires: techStack includes "MERN" and "TypeScript" — should be simpler, resume doesn't specify these
      - DefiScore: techStack includes "Web3" and "Zero-Knowledge Proofs" — resume mentions ZK proofs but in description, not as primary tech
      - Ascendra: techStack includes "Flutter" — Flutter NOT in resume skills
      - Dynamic ToDo: techStack says "LocalStorage, Typescript" — LocalStorage is not a tech stack item
      
      **Required Changes:**
      
      **ScamShield:**
      ```typescript
      techStack: ["Python", "LightGBM", "XGBoost", "SHAP", "Graph Intelligence"],
      highlights: "RBIH NFPC Finalist (Top 12/500+), AUC-ROC: 0.9424, 400M+ transactions processed, 164 engineered features, real-time fraud detection.",
      ```
      
      **ChainVoice:**
      ```typescript
      techStack: ["HyperLedger Fabric", "Node.js", "React.js", "IPFS", "Smart Contracts"],
      ```
      
      **Wealth Empires:**
      ```typescript
      techStack: ["React.js", "Node.js"],
      ```
      
      **DefiScore:**
      ```typescript
      techStack: ["Blockchain", "Smart Contracts", "React.js", "Node.js", "XGBoost", "SHAP"],
      solution: "Decentralized, privacy-first credit scoring protocol using on-chain behavioral data, smart contracts, and zero-knowledge proofs for verifiable creditworthiness.",
      highlights: "Privacy-preserving credit scoring using ZK proofs, on-chain behavioral analysis, smart contract-based verification, support for undercollateralized lending, cross-protocol reputation system, fully decentralized architecture.",
      ```
      
      **Ascendra:**
      Remove "Flutter" from techStack or mark as "under development" tech:
      ```typescript
      techStack: ["Firebase", "Node.js", "Gamification Engine", "Analytics"],
      ```
      
      **Dynamic ToDo:**
      ```typescript
      techStack: ["React.js", "TypeScript"],
      ```
      
      **Files:** `client/src/lib/constants.ts`
      
      **Verify:** Run `npm run check` in client directory. Load Projects page and verify tech stacks display correctly.

### Phase 2: Home Page Updates

- [ ] 4. Update featured skills list in `client/src/pages/Home.tsx` to match resume.
      
      **Current Issue:**
      Line 91 contains: `["React.js", "Express", "Node.js", "Postgres", "Python", "Docker", "GitHub Actions", "MySQL", "Flutter", "Java", "MongoDB", "Blockchain", "Decentralized Applications(DApps)"]`
      
      Incorrect technologies: Postgres → not in resume (MySQL is), Docker → not in resume, GitHub Actions → not specific in resume (GitHub is), Flutter → not in resume as a skill (only mentioned in Ascendra project context), MongoDB → not in resume, "Decentralized Applications(DApps)" → awkward wording.
      
      **Required Change:**
      Replace line 91 with resume-aligned featured skills:
      ```typescript
      {["React.js", "Node.js", "Express.js", "Python", "JavaScript", "Java", "HyperLedger Fabric", "Smart Contracts", "XGBoost", "LightGBM", "SHAP", "MySQL", "GitHub"].map((skill) => (
      ```
      
      **Files:** `client/src/pages/Home.tsx`
      
      **Verify:** Run `npm run dev` in client directory, load home page, confirm featured skills section displays correctly with no unsupported technologies.

- [ ] 5. Update professional summary in `client/src/pages/Home.tsx` to align with resume.
      
      **Current Issues:**
      - Role says "Aspiring Full-Stack Developer • Software Engineer" — lacks precision
      - Summary says "I am a passionate Full-Stack Developer pursuing B.Tech in Computer Science and Business Systems. Building scalable systems and intuitive interfaces." — doesn't match resume tone
      - Focus says "MERN Stack Development, AI Integration & Automation" — MERN not explicitly in resume
      
      **Required Changes:**
      
      Line 53 (Role):
      ```typescript
      <Typewriter text="Software Engineering Student • Full-Stack & AI Developer" delay={20} />
      ```
      
      Lines 63-66 (Summary):
      ```typescript
      <span className="text-zinc-400 leading-relaxed">
        Final-year B.Tech Computer Science and Business Systems student with hands-on experience in full-stack applications, AI-driven solutions, and blockchain systems through internships and hackathons.
      </span>
      ```
      
      Line 71 (Focus):
      ```typescript
      <span className="text-emerald-400">Full-Stack Development, AI/ML, Blockchain Systems</span>
      ```
      
      **Files:** `client/src/pages/Home.tsx`
      
      **Verify:** Run `npm run dev`, navigate to home page, confirm intro section reflects resume professional summary accurately.

### Phase 3: Skills Page Updates

- [ ] 6. Refactor `client/src/pages/Skills.tsx` to display new skill categories from updated constants.
      
      **Current Issues:**
      - Page displays old skill categories: frontend, backend, devops, ai
      - Hardcoded additional skills: "WordPress", "Shadcn", "Auth (JWT)", "Vector DBs", "Selenium" — none in resume
      
      **Required Changes:**
      
      Replace the categorized grid section (starting around line 30) with new categories matching the updated SKILLS object:
      
      ```typescript
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
              <span key={s.name} className="px-3 py-1.5 border border-zinc-800 rounded-md bg-black text-xs text-zinc-400 hover:text-purple-400 hover:border-purple-500/30 transition-all cursor-default">
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
              <span key={s.name} className="px-3 py-1.5 border border-zinc-800 rounded-md bg-black text-xs text-zinc-400 hover:text-yellow-400 hover:border-yellow-500/30 transition-all cursor-default">
                {s.name}
              </span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/10">
          <div className="text-zinc-500 mb-4 text-xs">
            <span className="text-emerald-500 font-bold mr-2">$</span>
            <span>tools & database</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {SKILLS.tools.map(s => (
              <span key={s.name} className="px-3 py-1.5 border border-zinc-800 rounded-md bg-black text-xs text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all cursor-default">
                {s.name}
              </span>
            ))}
          </div>
        </div>

      </div>
      ```
      
      Also update the "Main List" section (line 18) to use new combined skill arrays:
      ```typescript
      {[...SKILLS.frontend, ...SKILLS.backend, ...SKILLS.blockchain, ...SKILLS.aiml].slice(0, 10).map((skill, i) => (
      ```
      
      **Files:** `client/src/pages/Skills.tsx`
      
      **Verify:** Run `npm run dev`, navigate to /skills, confirm all skill categories display correctly and no unsupported technologies appear.

### Phase 4: Achievements Page Updates

- [ ] 7. Update hackathon listings in `client/src/pages/Achievements.tsx` to reflect accurate status.
      
      **Current Issues:**
      - Resume lists WINNERS as: Sai Hackfest 2025, DeltaBuild 2026, SDG Ideathon
      - Resume lists FINALISTS as: RBIH NFPC 2026 (Top 12/500+), Hack the Horizon 2.0
      - Page currently shows: "RBI NFPC Hackathon 2026 - Finalist" correctly, but description says "Shortlisted as a Finalist among 500+ teams" — needs consistency
      - "Saihackfest Winner" is correct
      - Missing: DeltaBuild 2026 Winner, SDG Ideathon Winner, Hack the Horizon 2.0 Finalist
      - Phoenix'25, i-tekron, CPS Summit, Fikra'23 are shown but NOT in resume — REMOVE these
      
      **Required Changes:**
      
      Replace entire hackathons section (starting around line 47) with ONLY resume-verified hackathons:
      
      ```typescript
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* RBI NFPC Hackathon - FINALIST */}
        <div className="border border-zinc-800 rounded-lg p-5 bg-zinc-900/10 hover:bg-zinc-900/20 transition-colors">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <Trophy className="text-yellow-500" size={20} />
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
      ```
      
      **Files:** `client/src/pages/Achievements.tsx`
      
      **Verify:** Run `npm run dev`, navigate to /achievements, confirm only resume-verified hackathons appear with correct titles and statuses.

- [ ] 8. Update certifications section in `client/src/pages/Achievements.tsx` to match resume.
      
      **Current Issues:**
      - Shows "Networking Basics - Cisco Network Academy" — NOT in resume
      - Shows "FullStack Web Development - Zero Solutions" — NOT in resume
      - Shows "NPTEL Certifications: Cloud Computing (61%), Programming in Java (Elite 62%), Database Systems (55%)" — resume says "NPTEL: Java & DBMS" without scores
      
      **Required Changes:**
      
      Replace Professional Certifications section (around line 120):
      ```typescript
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
      ```
      
      Remove entire NPTEL Certifications section (the grid with Cloud Computing, Programming in Java, Database Systems scores) — this is NOT in resume format.
      
      **Files:** `client/src/pages/Achievements.tsx`
      
      **Verify:** Run `npm run dev`, navigate to /achievements, confirm certifications section shows only resume-listed certifications without fabricated details.

- [ ] 9. Update Leadership/Coordination section in `client/src/pages/Achievements.tsx` to match resume.
      
      **Current Issues:**
      - Shows "Brain2Business Coordinator" and "Winspire 1.0 Coordinator" and "Business Pitch Volunteer" — NOT in resume
      - Resume shows: IEEE Reliability Society Sairam Chapter – MasterMind (2025–Present), IEEE TEMS Society – Website & Event Member (2024–2025)
      
      **Required Changes:**
      
      Replace entire "Leadership & Coordination" section (around line 180) with:
      
      ```typescript
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
      ```
      
      **Files:** `client/src/pages/Achievements.tsx`
      
      **Verify:** Run `npm run dev`, navigate to /achievements, confirm leadership section shows only IEEE positions from resume.

### Phase 5: Case Study Component Updates

- [ ] 10. Update ScamShieldCaseStudy.tsx to correct achievement status and tech stack.
      
      **Current Issues:**
      - Multiple places say "RBI NFPC Finalist (Top 12/87)" but resume says "Top 12/500+"
      - Tech stack in description mentions "React" which is not in resume for ScamShield
      - Project gallery placeholder mentions "TensorFlow" implicitly through ML context
      
      **Required Changes:**
      
      In `client/src/components/ScamShieldCaseStudy.tsx`:
      - Line 190 (Achievement section): Change "RBI NFPC Finalist (Top 12 out of 87 teams)" to "RBI NFPC Finalist (Top 12/500+ teams)"
      - Line 225 (Achievement Header in Approach): Change "🏆 Achievement: RBI NFPC Finalist (Top 12/87)" to "🏆 Achievement: RBIH NFPC Finalist (Top 12/500+)"
      - Line 351 (Outcomes): Change "RBI NFPC Finalist (Top 12/87)" to "RBIH NFPC Finalist (Top 12/500+)"
      - Confirm description (line 199) doesn't mention unsupported tech
      
      **Files:** `client/src/components/ScamShieldCaseStudy.tsx`
      
      **Verify:** Run `npm run dev`, type `scamshield` in terminal, confirm case study shows correct finalist numbers.

- [ ] 11. Update AscendraCaseStudy.tsx to remove unsupported technologies.
      
      **Current Issues:**
      - Line 256: mentions "Flutter (cross-platform UI)" — Flutter NOT in resume skills
      - Line 276: mentions "Redis for session/state caching" — Redis NOT in resume
      
      **Required Changes:**
      
      In `client/src/components/AscendraCaseStudy.tsx`:
      - Line 256: Change `<span><strong>Frontend:</strong> Flutter (cross-platform UI), Lottie animations</span>` to `<span><strong>Frontend:</strong> Mobile app with gamification UI, Lottie animations</span>`
      - Line 276: Remove the Redis line entirely or change to `<span><strong>Optional:</strong> State caching layer</span>`
      
      **Note:** Ascendra is marked as "Alpha" / "upcoming", so some tech flexibility is acceptable, but should not claim expertise in tech not in resume.
      
      **Files:** `client/src/components/AscendraCaseStudy.tsx`
      
      **Verify:** Run `npm run dev`, type `ascendra` in terminal, confirm case study doesn't list Flutter or Redis as core tech.

- [ ] 12. Update DefiScoreCaseStudy.tsx to align tech stack with resume.
      
      **Current Issue:**
      - Case study mentions complex ZK proof architecture, but resume simply says "privacy-preserving credit scoring protocol"
      - Tech mentions might be overly detailed beyond resume scope
      
      **Required Changes:**
      
      In `client/src/components/DefiScoreCaseStudy.tsx`:
      - Review description sections (around lines 100-110) to ensure they don't claim technologies not in resume
      - Simplify if needed to match resume's level of detail: "privacy-preserving credit scoring protocol to evaluate wallet creditworthiness from behavioral data"
      - Ensure System Workflow (around line 209) doesn't contradict resume
      
      **Files:** `client/src/components/DefiScoreCaseStudy.tsx`
      
      **Verify:** Run `npm run dev`, type `defiscore` in terminal, review case study for accuracy against resume internship description.

- [ ] 13. Update ChainVoiceCaseStudy.tsx to ensure accurate tech stack representation.
      
      **Current Issue:**
      - Resume says: "HyperLedger Fabric, Node.js, React.js, IPFS, Smart Contracts"
      - Case study should align with this exact tech list
      
      **Required Changes:**
      
      In `client/src/components/ChainVoiceCaseStudy.tsx`:
      - Review tech stack mentions throughout to ensure only resume-listed technologies appear
      - Confirm problem statement (around line 219) matches resume: "eliminating duplicate financing fraud for MSMEs"
      - Ensure 7-step pipeline is accurately described as in resume
      
      **Files:** `client/src/components/ChainVoiceCaseStudy.tsx`
      
      **Verify:** Run `npm run dev`, type `chainvoice` in terminal, review case study for tech stack accuracy.

### Phase 6: Final Verification & Testing

- [ ] 14. Run comprehensive TypeScript type check across entire client codebase.
      
      **Command:** `cd client && npm run check`
      
      **Expected Outcome:** No TypeScript errors. All skill references, project types, and constants properly typed.
      
      **If errors occur:** Fix type mismatches in constants.ts or component files.
      
      **Files:** All TypeScript files in `client/src/`
      
      **Verify:** TypeScript compiler reports 0 errors.

- [ ] 15. Run dev server and manually test all pages for content accuracy.
      
      **Command:** `cd client && npm run dev`
      
      **Test Checklist:**
      - [ ] Home page: Featured skills show only resume technologies
      - [ ] Home page: Professional summary matches resume
      - [ ] Skills page: All skill categories display correctly, no unsupported tech
      - [ ] Projects page: All project tech stacks accurate
      - [ ] Internships page: Only 2 internships (SprintXplore, Wealth Empires)
      - [ ] Achievements page: Only resume-verified hackathons (5 total)
      - [ ] Achievements page: Only resume-listed certifications (4 total)
      - [ ] Achievements page: Only IEEE positions in leadership
      - [ ] ScamShield case study: "Top 12/500+" everywhere
      - [ ] All case studies: No MongoDB, RAG, LangChain, Docker, PostgreSQL, or unsupported tech mentioned
      
      **Expected Outcome:** All pages load without errors, content matches resume exactly, no fabricated technologies or achievements.
      
      **Verify:** Manual inspection of each page confirms accuracy.

- [ ] 16. Search entire client codebase for removed technologies to ensure none remain.
      
      **Commands:**
      ```powershell
      cd client
      grep -r "MongoDB" src/ || echo "MongoDB: Clean"
      grep -r "PostgreSQL" src/ || echo "PostgreSQL: Clean"
      grep -r "Docker" src/ || echo "Docker: Clean"
      grep -r "RAG Pipeline" src/ || echo "RAG: Clean"
      grep -r "LangChain" src/ || echo "LangChain: Clean"
      grep -r "Redis" src/ || echo "Redis: Clean"
      grep -r "Flutter" src/ || echo "Flutter: Clean (except Ascendra context)"
      grep -r "Next\.js" src/ || echo "Next.js: Clean"
      ```
      
      **Expected Outcome:** No matches found (or only acceptable contextual mentions).
      
      **Files:** All files in `client/src/`
      
      **Verify:** Grep searches return no results for unsupported technologies.

---

## Summary of Changes

### Technologies Removed:
- MongoDB (from constants.ts SKILLS.backend, Home.tsx featured skills)
- PostgreSQL (from constants.ts SKILLS.backend)
- Docker (from constants.ts SKILLS.devops, Home.tsx featured skills)
- RAG Pipelines (from constants.ts SKILLS.ai)
- LangChain (from constants.ts SKILLS.ai)
- Redis (from AscendraCaseStudy.tsx)
- Flutter (from Home.tsx featured skills; kept in Ascendra project as it's under-dev)
- TensorFlow (from ScamShield project techStack)
- React Native (from ScanGuard project if present)
- "Tailwind CSS expert" claim (changed to removed skill level)
- "Vector DBs", "Selenium", "WordPress", "Shadcn", "Auth (JWT)" (hardcoded extras in Skills.tsx)

### Internships Removed:
- IoT Internship (Jun 2025 – Jul 2025) — NOT in resume
- Prodigy Infotech (Jun 2024 – Jul 2024) — NOT in resume

### Hackathons Removed:
- Phoenix'25 (1st Place) — NOT in resume
- i-tekron (2nd Place) — NOT in resume
- CPS Summit 2k25 (2nd Prize) — NOT in resume
- Fikra'23 (5th Place) — NOT in resume

### Certifications Removed:
- Networking Basics - Cisco Network Academy — NOT in resume
- FullStack Web Development - Zero Solutions — NOT in resume
- NPTEL detailed scores section — NOT in resume format

### Leadership Activities Removed:
- Brain2Business Coordinator — NOT in resume
- Winspire 1.0 Coordinator — NOT in resume
- Business Pitch Volunteer (Cognizant) — NOT in resume

### Key Corrections:
- ScamShield status: "Top 12/87" → "Top 12/500+" everywhere
- Skills reorganized into: frontend, backend, blockchain, aiml, tools (matching resume categories)
- Professional summary aligned with resume wording
- Internship descriptions match resume exactly
- Only 4 certifications: Udemy Full-Stack, Infosys Springboard AI, NPTEL Java & DBMS, IEEE BLP Blockchain

---

## Build & Test Commands

**TypeScript Check:**
```bash
cd client
npm run check
```

**Development Server:**
```bash
cd client
npm run dev
```

**Production Build:**
```bash
cd client
npm run build
```

**Expected Build Output:** No errors, all pages render correctly.

---

## Notes

1. **No Design Changes:** This refactor is content-only. All visual design, layouts, animations, colors, and component structure remain unchanged.

2. **Resume as Single Source of Truth:** Every change is justified by explicit presence (or absence) in the resume. No assumptions made.

3. **Verification Strategy:** After each phase, run TypeScript check and visually inspect affected pages in dev mode.

4. **Rollback Safety:** All changes are in version control. Each step is independently verifiable.

5. **Future Maintenance:** When resume updates, compare against this plan's "removed technologies" list to ensure no reintroduction of unsupported claims.

---

**Plan Status:** Ready for Implementation  
**Estimated Implementation Time:** 3-4 hours  
**Risk Level:** Low (content-only changes, no architectural modifications)  
**Rollback Complexity:** Low (git revert per commit)
