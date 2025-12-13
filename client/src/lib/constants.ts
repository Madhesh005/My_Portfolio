
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
    projects: ["nostra", "temp-conv", "tictactoe", "stopwatch"]
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
  }
];

export const PROJECTS: Project[] = [
  // --- FEATURED PROJECTS ---
  {
    id: "pathlens",
    name: "PathLens AI",
    shortDescription: "AI SWOT Analyzer",
    techStack: ["React", "Express", "AI Agent"],
    problem: "Students lack personalized career guidance based on their strengths.",
    solution: "AI-powered SWOT analysis tool that maps traits to career paths.",
    highlights: "Integrated OpenAI API, custom prompt engineering, PDF report generation.",
    status: "Private Beta",
    category: "featured",
    collaborators: [{ name: "Lokesh TA", linkedin: "#" }],
    links: { demo: "https://pathlens.ai", repo: "#", docs: "#" }
  },
  {
    id: "velammal-training",
    name: "Velammal Training",
    shortDescription: "Institute Website",
    techStack: ["React", "Tailwind", "Framer Motion"],
    problem: "Outdated digital presence for a training institute.",
    solution: "Modern, responsive website with course catalogs and registration.",
    highlights: "Increased enrollment inquiries by 40%.",
    status: "Live",
    category: "featured",
    collaborators: [{ name: "Yuvaraj M", linkedin: "#" }],
    links: { demo: "#", repo: "#" }
  },
  {
    id: "velammal-ecommerce",
    name: "Velammal Store",
    shortDescription: "Ecommerce Platform",
    techStack: ["Next.js", "Stripe", "Sanity"],
    problem: "Need for an online store to sell institute materials.",
    solution: "Full-stack ecommerce with secure payments and inventory sync.",
    highlights: "Seamless checkout flow, admin dashboard.",
    status: "In Development",
    category: "featured",
    collaborators: [{ name: "Yuvaraj M", linkedin: "#" }],
    links: { demo: "#", repo: "#" }
  },

  // --- HOBBY PROJECTS ---
  {
    id: "jarvis",
    name: "Jarvis AI",
    shortDescription: "Personal Assistant",
    techStack: ["Python", "GIT", "Streamlit"],
    problem: "Need for a local, privacy-focused personal assistant.",
    solution: "Python-based voice assistant with local LLM integration.",
    highlights: "Voice recognition, system control, offline capabilities.",
    status: "Stable",
    category: "hobby",
    collaborators: [{ name: "Sajeetha P", linkedin: "#" }],
    links: { demo: "#", repo: "https://github.com/madheshr005/jarvis" }
  },
  {
    id: "dynamic-todo",
    name: "Dynamic ToDo",
    shortDescription: "Smart Task Manager",
    techStack: ["React", "LocalStorage", "DnD"],
    problem: "Standard todo apps lack flexibility in prioritization.",
    solution: "Drag-and-drop interface with dynamic priority sorting.",
    highlights: "Intuitive UX, persistent local storage, dark mode.",
    status: "Completed",
    category: "hobby",
    links: { demo: "#", repo: "#" }
  },
  {
    id: "ascendra",
    name: "Ascendra",
    shortDescription: "Project Management",
    techStack: ["MERN", "Socket.io", "Redux"],
    problem: "Team collaboration tools are often too complex or expensive.",
    solution: "Streamlined project management tool for small agile teams.",
    highlights: "Real-time updates, kanban board, team chat.",
    status: "Alpha",
    category: "hobby",
    collaborators: [
      { name: "Gokul Jayachandran", linkedin: "#" },
      { name: "Yogesh Odayar P S", linkedin: "#" },
      { name: "Nithiashree M", linkedin: "#" },
      { name: "Lokesh T A", linkedin: "#" }
    ],
    links: { demo: "#", repo: "#" }
  },

  // --- INTERNSHIP PROJECTS (Prodigy) ---
  {
    id: "nostra",
    name: "Nostra",
    shortDescription: "Ecommerce Frontend",
    techStack: ["HTML", "CSS", "JS"],
    problem: "Demonstrating frontend skills for ecommerce UI.",
    solution: "Responsive product listing and cart interface.",
    highlights: "Clean UI, mobile responsive, smooth interactions.",
    status: "Completed",
    category: "internship",
    company: "Prodigy Infotech",
    links: { demo: "#", repo: "#" }
  },
  {
    id: "temp-conv",
    name: "Temp Converter",
    shortDescription: "Utility App",
    techStack: ["JS", "DOM"],
    problem: "Simple tool needed for quick unit conversions.",
    solution: "Instant conversion between Celsius, Fahrenheit, Kelvin.",
    highlights: "Real-time calculation, input validation.",
    status: "Completed",
    category: "internship",
    company: "Prodigy Infotech",
    links: { demo: "#", repo: "#" }
  },
  {
    id: "tictactoe",
    name: "TicTacToe",
    shortDescription: "Browser Game",
    techStack: ["JS", "Game Logic"],
    problem: "Understanding game state management in vanilla JS.",
    solution: "Classic game with win detection and reset functionality.",
    highlights: "Minimax algorithm for AI opponent (optional).",
    status: "Completed",
    category: "internship",
    company: "Prodigy Infotech",
    links: { demo: "#", repo: "#" }
  },
  {
    id: "stopwatch",
    name: "Stopwatch",
    shortDescription: "Time Tracking",
    techStack: ["JS", "Intervals"],
    problem: "Precise time tracking requirement.",
    solution: "Accurate stopwatch with lap functionality.",
    highlights: "Millisecond precision, lap history.",
    status: "Completed",
    category: "internship",
    company: "Prodigy Infotech",
    links: { demo: "#", repo: "#" }
  },

  // --- INTERNSHIP PROJECTS (Wealth Empires) ---
  {
    id: "wealth-empires",
    name: "Wealth Empires",
    shortDescription: "Company Website",
    techStack: ["HTML", "CSS", "JS"],
    problem: "Need for a high-performance landing page.",
    solution: "Responsive, semantic HTML5/CSS3 implementation.",
    highlights: "99/100 Lighthouse score, sub-second load time.",
    status: "Live",
    category: "internship",
    company: "Wealth Empires",
    collaborators: [{ name: "Lokesh TA", linkedin: "#" }],
    links: { demo: "#", repo: "#" }
  }
];

export const SKILLS = {
  frontend: [
    { name: "JavaScript / TypeScript", level: "expert" },
    { name: "React.js / Next.js", level: "advanced" },
    { name: "Tailwind CSS", level: "expert" },
    { name: "Framer Motion", level: "advanced" }
  ],
  backend: [
    { name: "Node.js / Express", level: "advanced" },
    { name: "Python", level: "advanced" },
    { name: "PostgreSQL / MongoDB", level: "advanced" },
    { name: "Go", level: "intermediate" }
  ],
  devops: [
    { name: "Docker / CI/CD", level: "strong" },
    { name: "AWS / Vercel", level: "strong" },
    { name: "Linux / Bash", level: "expert" }
  ],
  ai: [
    { name: "LLM Integration", level: "strong" },
    { name: "RAG Pipelines", level: "strong" },
    { name: "LangChain", level: "intermediate" }
  ]
};

export const SOCIALS = {
  github: "https://github.com/madheshr005",
  linkedin: "https://linkedin.com/in/madheshr005",
  twitter: "https://twitter.com/alex_builds",
  email: "madheshr005@gmail.com",
  phone: "+91 9176378183",
  location: "Chennai, India"
};

export const COMMANDS = [
  { cmd: "ls", desc: "List all available commands" },
  { cmd: "projects", desc: "View project portfolio" },
  { cmd: "internships", desc: "View work experience" },
  { cmd: "skills", desc: "List technical skills" },
  { cmd: "resume", desc: "Download PDF resume" },
  { cmd: "contact", desc: "Send a message" },
  { cmd: "home", desc: "Return to start" }
];
