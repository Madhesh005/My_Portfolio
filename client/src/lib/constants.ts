
import { LucideIcon, Code2, Database, Terminal, Cpu, Globe, Layout, Server, Brain, Shield } from "lucide-react";

export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  techStack: string[];
  problem: string;
  solution: string;
  highlights: string;
  status: string;
  links: {
    demo: string;
    repo: string;
    docs?: string;
  };
}

export const PROJECTS: Project[] = [
  {
    id: "wealth-empires",
    name: "Wealth Empires",
    shortDescription: "Startup Website",
    techStack: ["HTML", "CSS", "Github"],
    problem: "Need for a high-performance, accessible landing page for a fintech startup.",
    solution: "Responsive, semantic HTML5/CSS3 implementation with optimized assets.",
    highlights: "99/100 Lighthouse score, sub-second load time, fully accessible navigation.",
    status: "Live - v1.0.0 deployed",
    links: {
      demo: "https://example.com/wealth-empires",
      repo: "https://github.com/madheshr005/wealth-empires"
    }
  },
  {
    id: "theplug",
    name: "ThePlug",
    shortDescription: "Ecommerce Platform",
    techStack: ["React", "Express", "Postgres"],
    problem: "Scalable ecommerce solution needed with real-time inventory management.",
    solution: "Full-stack PERN application with socket.io for real-time updates.",
    highlights: "Handle 10k+ concurrent users, secure Stripe integration, admin dashboard.",
    status: "In Development - Beta Testing",
    links: {
      demo: "https://theplug.store",
      repo: "https://github.com/madheshr005/theplug"
    }
  },
  {
    id: "pathlens",
    name: "PathLens AI",
    shortDescription: "AI SWOT Analyzer",
    techStack: ["React", "Express", "AI Agent"],
    problem: "Students lack personalized career guidance based on their strengths.",
    solution: "AI-powered SWOT analysis tool that maps traits to career paths.",
    highlights: "Integrated OpenAI API, custom prompt engineering, PDF report generation.",
    status: "Private Beta - 6 teams onboarded",
    links: {
      demo: "https://pathlens.ai",
      repo: "https://github.com/madheshr005/pathlens",
      docs: "https://docs.pathlens.ai"
    }
  },
  {
    id: "jarvis",
    name: "Jarvis AI",
    shortDescription: "Personal Assistant",
    techStack: ["Python", "GIT", "Streamlit"],
    problem: "Need for a local, privacy-focused personal assistant for task automation.",
    solution: "Python-based voice assistant with local LLM integration.",
    highlights: "Voice recognition, system control, offline capabilities.",
    status: "Stable - v2.1 Released",
    links: {
      demo: "#",
      repo: "https://github.com/madheshr005/jarvis"
    }
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
  { cmd: "skills", desc: "List technical skills" },
  { cmd: "projects", desc: "View project portfolio" },
  { cmd: "resume", desc: "Download PDF resume" },
  { cmd: "contact", desc: "Send a message" },
  { cmd: "home", desc: "Return to start" }
];
