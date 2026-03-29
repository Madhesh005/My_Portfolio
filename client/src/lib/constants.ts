
import { LucideIcon, Code2, Database, Terminal, Cpu, Globe, Layout, Server, Brain, Shield } from "lucide-react";

export interface Collaborator {
  name: string;
  linkedin: string;
}

export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  techStack: string[];
  problem: string;
  solution: string;
  highlights: string;
  status: string;
  category: "hobby" | "internship" | "featured" | "upcoming";
  company?: string; // For internship projects
  collaborators?: Collaborator[];
  links: {
    demo: string;
    repo: string;
    docs?: string;
  };
}

export interface Internship {
  id: string;
  company: string;
  role: string;
  duration: string;
  type: "Remote" | "On-site" | "Hybrid";
  description: string[];
  projects: string[]; // Project IDs
}

export const INTERNSHIPS: Internship[] = [
  {
    id: "sprintxplore",
    company: "SprintXplore Infotech Private Limited",
    role: "Software Development Intern",
    duration: "January 2026 – April 2026",
    type: "Hybrid",
    description: [
      "Worked on a production-level DeFi project (DeFiScore) focused on privacy-first credit scoring using on-chain data.",
      "Contributed to a multi-layer architecture combining blockchain indexing, feature engineering, and ML-based scoring.",
      "Designed and implemented components related to Zero-Knowledge (ZK) proof workflows for privacy-preserving eligibility verification.",
      "Built data pipelines for extracting and processing on-chain transaction patterns across DeFi protocols.",
      "Engineered features based on wallet activity, protocol interactions, and behavioral signals.",
      "Collaborated in a team-based product environment following structured development workflows."
    ],
    projects: ["defiscore"]
  },
  {
    id: "wealth-empires-intern",
    company: "Wealth Empires",
    role: "Web Developer Intern",
    duration: "September 2025 – October 2025",
    type: "Remote",
    description: [
      "Developed a responsive business website for Wealth Empires.",
      "Integrated digital startup tools and compliance automation.",
      "Collaborated with startup stakeholders to ensure a seamless user experience."
    ],
    projects: ["wealth-empires"]
  },
  {
    id: "iot-intern",
    company: "IoT Internship",
    role: "Team-based IoT Development",
    duration: "June 2025 – July 2025",
    type: "On-site",
    description: [
      "Worked in an offline 19-member team, developing core IoT understanding.",
      "Implemented real-time embedded systems.",
      "Mentored school students, improving communication and leadership skills."
    ],
    projects: [] // No specific web projects listed for this one yet
  },
  {
    id: "prodigy",
    company: "Prodigy Infotech",
    role: "Web Development Intern",
    duration: "June 2024 – July 2024",
    type: "Remote",
    description: [
      "Successfully completed internship as a Web Developer, enhancing front-end and back-end skills.",
      "Developed a personal portfolio website showcasing projects and skills.",
      "Built several JavaScript-based applications improving understanding of DOM manipulation.",
      "Designed and developed a responsive landing page."
    ],
    projects: [] // Removed all project references
  }
];

export const PROJECTS: Project[] = [
  // --- FEATURED PROJECTS (REORDERED) ---
  {
    id: "scamshield",
    name: "ScamShield",
    shortDescription: "AI-Powered Money Mule Detection System",
    techStack: ["Python", "Machine Learning", "React", "TensorFlow"],
    problem: "Money mule accounts are used to move illegal funds across banking systems, making fraud detection extremely complex.",
    solution: "Multi-layer AI-powered fraud detection system using graph intelligence, temporal behavior modeling, and ensemble ML.",
    highlights: "RBI NFPC Finalist (Top 12/87), AUC-ROC: 0.9424, 400M+ transactions processed, real-time fraud detection.",
    status: "Live",
    category: "featured",
    collaborators: [
      { name: "Tharun Kumar C", linkedin: "https://www.linkedin.com/in/tharun-kumar-developer/" }
    ],
    links: { demo: "#", repo: "https://github.com/sec23cb060/scamshield", docs: "https://github.com/sec23cb060/scamshield" }
  },
  {
    id: "chainvoice",
    name: "ChainVoice",
    shortDescription: "Blockchain-Based Invoice Financing & Verification Platform",
    techStack: ["Blockchain", "React", "IPFS", "Smart Contracts"],
    problem: "India's invoice financing ecosystem suffers from fragmented verification systems and lack of coordination between lenders.",
    solution: "Hybrid blockchain infrastructure using Hyperledger Fabric and IPFS for secure invoice financing and cross-lender verification.",
    highlights: "Cryptographic single source of truth, prevents duplicate financing, real-time validation, tamper-evident audit trails.",
    status: "Live",
    category: "featured",
    links: { demo: "https://chainvoice-one.vercel.app/", repo: "https://github.com/Madhesh005/ChainVoice", docs: "https://github.com/Madhesh005/ChainVoice" }
  },
  {
    id: "cblock",
    name: "CBlock",
    shortDescription: "Blockchain Carbon Trading Platform",
    techStack: ["Solidity", "React", "Web3.js", "Ethereum"],
    problem: "Carbon credit markets often lack transparency, trust, and accessibility.",
    solution: "Blockchain-powered carbon trading platform with verified credits and transparent marketplace.",
    highlights: "Blockchain-verified carbon credits, zero hidden fees, global marketplace, real-time analytics, secure smart contracts.",
    status: "Live",
    category: "featured",
    collaborators: [
      { name: "Venkata Krishna Balaji", linkedin: "https://www.linkedin.com/in/rsvkb/" },
      { name: "Yogesh Odayar PS", linkedin: "https://www.linkedin.com/in/yogesh-odayar-p-s-8a2077293/" },
      { name: "Lokesh T A", linkedin: "https://www.linkedin.com/in/lokesh-ta1511/" }
    ],
    links: { demo: "https://cblock.vercel.app/", repo: "https://github.com/RVKB2005/CBlock", docs: "https://github.com/RVKB2005/CBlock" }
  },
  {
    id: "scanguard",
    name: "ScanGuard",
    shortDescription: "Smart Checkout & Theft Prevention System",
    techStack: ["React Native", "React.js", "Node.js", "Firebase", "Computer Vision", "IoT"],
    problem: "Supermarkets face long checkout queues, inefficient billing processes, inventory mismanagement, and increasing shoplifting incidents.",
    solution: "Smart supermarket checkout system combining mobile app, web dashboard, weight-sensor validation, and AI-assisted CCTV monitoring.",
    highlights: "Mobile-based self-checkout system, real-time billing and payment integration, weight-based theft detection, AI-assisted CCTV monitoring, inventory tracking and analytics dashboard, no expensive hardware overhaul required.",
    status: "In Development",
    category: "featured",
    collaborators: [
      { name: "Nivekhitha R H", linkedin: "https://www.linkedin.com/in/nivekhithaatyourservice/" },
      { name: "Ramya S", linkedin: "https://www.linkedin.com/in/ramya-selvam-279a772b6/" }
    ],
    links: { demo: "#", repo: "https://github.com/Madhesh005/Scanguard_Backend", docs: "https://github.com/Madhesh005/Scanguard_Backend" }
  },

  // --- INTERNSHIP PROJECTS ---
  {
    id: "wealth-empires",
    name: "Wealth Empires",
    shortDescription: "Corporate Website",
    techStack: ["React", "MERN", "TypeScript"],
    problem: "Need for a high-performance landing page.",
    solution: "Responsive, Professional Website",
    highlights: "99/100 Lighthouse score, sub-second load time.",
    status: "Live",
    category: "internship",
    company: "Wealth Empires",
    collaborators: [{ name: "Lokesh TA", linkedin: "https://www.linkedin.com/in/lokesh-t-a-36b1512a6" }],
    links: { demo: "https://wealthempires.in/", repo: "https://github.com/Madhesh005/wealth_empires_final", docs: "https://github.com/Madhesh005/wealth_empires_final" }
  },
  {
    id: "defiscore",
    name: "DefiScore",
    shortDescription: "Privacy-Preserving On-Chain Credit Scoring System",
    techStack: ["Blockchain", "Solidity", "React", "Node.js", "Web3", "Zero-Knowledge Proofs"],
    problem: "Current DeFi and traditional credit systems suffer from mandatory over-collateralization, lack of wallet-level reputation, and privacy vulnerabilities.",
    solution: "Decentralized, privacy-first credit scoring protocol using on-chain behavioral data, smart contracts, and zero-knowledge proofs for verifiable creditworthiness.",
    highlights: "Privacy-preserving credit scoring using ZK proofs, on-chain behavioral analysis, smart contract-based verification, support for undercollateralized lending, cross-protocol reputation system, fully decentralized architecture.",
    status: "In Development",
    category: "internship",
    company: "SprintXplore",
    collaborators: [
      { name: "Venkata Krishna Balaji", linkedin: "https://www.linkedin.com/in/rsvkb/" },
      { name: "Akshitha Jyothi D", linkedin: "https://www.linkedin.com/in/akshitha-jyothi-d-65b092290/" },
      { name: "Gokul Jayachandran", linkedin: "https://www.linkedin.com/in/gokeeel/" }
    ],
    links: { demo: "#", repo: "https://github.com/RVKB2005/DeFiScore-Final", docs: "https://github.com/RVKB2005/DeFiScore-Final" }
  },

  // --- HOBBY PROJECTS ---
  {
    id: "jarvis",
    name: "Jarvis AI",
    shortDescription: "Personal Assistant",
    techStack: ["Python", "GIT", "Streamlit"],
    problem: "Need for a local, privacy-focused personal assistant.",
    solution: "Python-based Personal assistant with local LLM integration.",
    highlights: "Personalization, system control, Decision making capabilities.",
    status: "Stable",
    category: "hobby",
    collaborators: [{ name: "Sajeetha P", linkedin: "#" }],
    links: { demo: "https://jarvispersonalai.streamlit.app/", repo: "https://github.com/Madhesh005/Jarvis_AI", docs: "https://github.com/Madhesh005/Jarvis_AI" }
  },
  {
    id: "dynamic-todo",
    name: "Dynamic ToDo",
    shortDescription: "Smart Task Manager",
    techStack: ["React", "LocalStorage", "Typescript"],
    problem: "Standard todo apps lack flexibility in prioritization.",
    solution: "Drag-and-drop interface with dynamic priority sorting.",
    highlights: "Intuitive UX, persistent local storage, Mobile Responsive.",
    status: "Completed",
    category: "hobby",
    links: { demo: "https://todoapp-kappa-flax-66.vercel.app/", repo: "https://github.com/Madhesh005/TodoAppFrontend", docs: "https://github.com/Madhesh005/TodoAppBackend"}
  },

  // --- UNDER DEVELOPMENT PROJECTS ---
  {
    id: "ascendra",
    name: "Ascendra",
    shortDescription: "Gamified Focus & Digital Well-being System",
    techStack: ["Flutter", "Firebase", "Node.js", "Gamification Engine", "Analytics"],
    problem: "Students today struggle with excessive phone usage, spending 4–5 hours daily on non-academic applications like social media and gaming. Constant notifications trigger repeated phone checking (50–80 times/day), habitual scrolling reduces focus and study time, late-night usage leads to poor sleep and fatigue, increased stress, anxiety, and lower academic performance. This creates a continuous distraction cycle that is difficult to break using traditional tools.",
    solution: "Ascendra is a behavior-driven digital wellness platform designed to help students reduce screen addiction and build sustainable focus habits through gamification. The system transforms productivity into an engaging experience by allowing users to evolve a digital creature based on their focus sessions, wellness activities, and consistency. Instead of passive tracking, Ascendra actively reinforces positive habits using XP systems, streak logic, and real-time feedback. By combining focus management, wellness tracking, and team-based motivation, Ascendra creates a structured environment that improves attention span, reduces distraction cycles, and promotes long-term digital discipline.",
    highlights: "Evolution-based gamification system, focus + wellness integrated tracking, XP system, streak tracking, and progression logic, team-based streak and motivation system, privacy-first, offline-friendly architecture, real-time productivity and habit feedback.",
    status: "Alpha",
    category: "upcoming",
    links: {
      demo: "#",
      repo: "https://github.com/Madhesh005/Ascendra"
    }
  },
  {
    id: "pathlens",
    name: "PathLens AI",
    shortDescription: "AI-Powered Career Guidance using SWOT Analysis",
    techStack: ["React", "Node.js", "Express", "OpenAI API", "NLP", "AI Agent"],
    problem: "Students and early-career individuals struggle to choose the right career path due to lack of clarity about their strengths and skill gaps.",
    solution: "AI-driven career guidance system that performs SWOT-based analysis, uses NLP to extract insights, and generates personalized career recommendations with learning roadmaps.",
    highlights: "AI-powered SWOT analysis engine, resume/document parsing using NLP, career path recommendation system, skill gap analysis + personalized roadmap, OpenAI-powered prompt engineering, downloadable career reports.",
    status: "Private Beta",
    category: "upcoming",
    links: { demo: "https://pathlens.ai", repo: "https://github.com/Madhesh005/PathLensAi", docs: "https://github.com/Madhesh005/PathLensAi" }
  }
];

export const SKILLS = {
  frontend: [
    { name: "JavaScript / TypeScript", level: "intermediate" },
    { name: "React.js", level: "advanced" },
    { name: "Tailwind CSS", level: "expert" },
  ],
  backend: [
    { name: "Node.js / Express", level: "advanced" },
    { name: "Python", level: "advanced" },
    { name: "PostgreSQL", level: "advanced" },
    { name: "MongoDB", level: "intermediate" }
  ],
  devops: [
    { name: "Docker / CI/CD", level: "strong" },
    { name: "Vercel", level: "strong" },
    { name: "Render", level: "strong" },
    { name: "Netlify", level: "strong" }
  ],
  ai: [
    { name: "LLM Integration", level: "strong" },
    { name: "RAG Pipelines", level: "beginner" },
    { name: "LangChain", level: "beginner" }
  ]
};

export const SOCIALS = {
  github: "https://github.com/madhesh005",
  linkedin: "https://linkedin.com/in/madheshr005",
  instagram: "https://www.instagram.com/madhesh_2005/",
  email: "madheshr005@gmail.com",
  phone: "+91 9176378183",
  location: "Chennai, India"
};

export const COMMANDS = [
  { cmd: "ls", desc: "List all available commands" },
  { cmd: "projects", desc: "View project portfolio" },
  { cmd: "internships", desc: "View work experience" },
  { cmd: "skills", desc: "List technical skills" },
  { cmd: "achievements", desc: "View accomplishments and certifications" },
  { cmd: "resume", desc: "Download PDF resume" },
  { cmd: "contact", desc: "Send a message" },
  { cmd: "home", desc: "Return to start" }
];
