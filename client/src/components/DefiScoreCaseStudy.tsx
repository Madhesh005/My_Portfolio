import { TerminalLayout } from "@/components/layout/TerminalLayout";
import { Github, ArrowUpRight, Users, Building2, Calendar, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { Typewriter } from "@/components/terminal/Typewriter";

// Terminal Command Block Component (reused from other case studies)
interface CommandBlockProps {
  command: string;
  children: React.ReactNode;
  delay?: number;
}

function CommandBlock({ command, children, delay = 0 }: CommandBlockProps) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="space-y-4">
      <div className="text-zinc-500 font-mono">
        <span className="text-emerald-500 font-bold mr-2">$</span>
        <Typewriter text={command} delay={30} />
      </div>
      
      <div className={`border border-zinc-800 rounded-lg p-6 bg-zinc-900/10 font-mono text-sm transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>
    </div>
  );
}

// DefiScore Case Study Component
export function DefiScoreCaseStudy({ project }: { project: any }) {
  return (
    <TerminalLayout>
      <div className="space-y-12 animate-in fade-in duration-500 pb-12">
        
        {/* 1. Title */}
        <CommandBlock command="preview defiscore" delay={0}>
          <div className="space-y-2">
            <div className="text-zinc-300">
              <span className="text-zinc-500">Project Name:</span> DefiScore
            </div>
            <div className="text-zinc-300">
              <span className="text-zinc-500">Subtitle:</span> Privacy-Preserving On-Chain Credit Scoring System
            </div>
          </div>
        </CommandBlock>

        {/* 2. Collaborators */}
        <CommandBlock command="collaborators defiscore" delay={200}>
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Users size={16} className="text-blue-400" />
              <span className="text-zinc-400 font-semibold">Team Members</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a 
                href="https://www.linkedin.com/in/rsvkb/" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 p-3 border border-zinc-800 rounded bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-blue-500/50 hover:text-blue-400 transition-all group"
              >
                <span className="text-emerald-500">›</span>
                <span className="font-medium">Venkata Krishna Balaji</span>
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              
              <a 
                href="https://www.linkedin.com/in/akshitha-jyothi-d-65b092290/" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 p-3 border border-zinc-800 rounded bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-blue-500/50 hover:text-blue-400 transition-all group"
              >
                <span className="text-emerald-500">›</span>
                <span className="font-medium">Akshitha Jyothi D</span>
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              
              <a 
                href="https://www.linkedin.com/in/gokeeel/" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 p-3 border border-zinc-800 rounded bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-blue-500/50 hover:text-blue-400 transition-all group"
              >
                <span className="text-emerald-500">›</span>
                <span className="font-medium">Gokul Jayachandran</span>
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </CommandBlock>

        {/* 3. Description */}
        <CommandBlock command="describe defiscore" delay={400}>
          <div className="text-zinc-300 leading-relaxed space-y-4">
            <p>
              DefiScore is a decentralized, privacy-first credit scoring protocol designed to evaluate the creditworthiness of blockchain wallets using on-chain behavioral data.
            </p>
            <p>
              Unlike traditional credit systems, DefiScore eliminates the need for personal identity, centralized credit bureaus, and off-chain verification. The system leverages smart contracts, blockchain transparency, and zero-knowledge proofs to generate a verifiable credit score while preserving complete user privacy.
            </p>
            <p>
              The platform enables DeFi protocols to support undercollateralized lending, risk-based interest rates, and trust-based access control—without exposing sensitive transaction data.
            </p>
          </div>
        </CommandBlock>

        {/* 4. Internship Context */}
        <CommandBlock command="internship defiscore" delay={600}>
          <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-zinc-800 pb-4">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Building2 size={18} className="text-emerald-500" />
                  Blockchain Development Intern
                </h3>
                <div className="text-zinc-400 font-mono text-sm mt-1">
                  SprintXplore (Startup)
                </div>
              </div>
              <div className="flex flex-col items-end text-xs text-zinc-500 font-mono gap-1">
                <div className="flex items-center gap-2">
                  <Calendar size={12} />
                  Jan - April 2026
                </div>
                <div className="flex items-center gap-2 px-2 py-1 rounded bg-zinc-900 border border-zinc-800">
                  <MapPin size={12} />
                  Remote
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <div className="text-zinc-300 leading-relaxed">
                Worked as a blockchain development intern to design and implement a privacy-preserving credit scoring protocol for DeFi ecosystems. Responsible for zero-knowledge proof integration, smart contract development, and ensuring complete user privacy while maintaining verifiable creditworthiness.
              </div>
              
              {/* Contributions */}
              <div>
                <div className="text-zinc-500 font-semibold mb-2 text-xs uppercase tracking-widest">Key Contributions</div>
                <div className="space-y-2 text-zinc-300">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>Designed ZK circuits for credit score validation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>Implemented proof generation logic (zk-SNARKs)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>Managed proving & verification keys</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>Integrated ZK proofs with smart contract verification</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CommandBlock>

        {/* 5. Problem Statement */}
        <CommandBlock command="problem defiscore" delay={800}>
          <div className="text-zinc-300 leading-relaxed space-y-4">
            <p>
              Current DeFi and traditional credit systems suffer from critical limitations:
            </p>
            <div className="space-y-2 ml-4">
              <div className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">•</span>
                <span>Mandatory over-collateralization in DeFi lending</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">•</span>
                <span>No wallet-level reputation system</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">•</span>
                <span>Lack of standardized trust layer across protocols</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">•</span>
                <span>Vulnerability to Sybil attacks (multiple wallet manipulation)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">•</span>
                <span>No privacy in reputation sharing</span>
              </div>
            </div>
            <p className="mt-4">
              Traditional systems are: Centralized, Identity-dependent, Region-restricted, Non-transparent
            </p>
          </div>
        </CommandBlock>

        {/* 6. System Architecture */}
        <CommandBlock command="architecture defiscore" delay={800}>
          <div className="space-y-4 text-zinc-300">
            <div className="text-blue-400 font-semibold">System Workflow:</div>
            <div className="ml-4 text-sm bg-zinc-900/20 p-3 rounded font-mono">
              User Wallet → Authentication → Data Ingestion → Feature Extraction → Credit Scoring Engine → Score Storage + ZK Proof Generation → Smart Contract Verification → Lender Decision
            </div>
            
            <div className="text-blue-400 font-semibold mt-6">System Components:</div>
            <div className="ml-4 space-y-1">
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span>Smart Contracts (Score + Verification)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span>Blockchain Indexer</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span>ZK Proof Generator</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span>Backend Scoring Engine</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span>React Frontend (Borrower & Lender dashboards)</span>
              </div>
            </div>
          </div>
        </CommandBlock>

        {/* 7. Solution & Implementation */}
        <CommandBlock command="solution defiscore" delay={1000}>
          <div className="space-y-6 text-zinc-300">
            <div className="space-y-3">
              <div className="text-blue-400 font-semibold">DefiScore introduces a universal on-chain credit scoring mechanism:</div>
              <div className="ml-4 space-y-1">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Analyzes wallet transaction history and behavioral patterns</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Computes a score based on repayment behavior, activity consistency, and protocol interactions</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Uses zero-knowledge proofs to verify creditworthiness without exposing raw data</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Enables on-chain verification via smart contracts</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Provides a portable reputation layer across DeFi ecosystems</span>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/30 p-4 rounded border-l-4 border-emerald-400">
              <div className="text-emerald-400 font-semibold mb-2">This allows protocols to make trust-based decisions without compromising user privacy.</div>
            </div>
          </div>
        </CommandBlock>

        {/* 8. My Role (Zero-Knowledge Engineering) */}
        <CommandBlock command="role defiscore" delay={1200}>
          <div className="space-y-4 text-zinc-300">
            <div className="text-purple-400 font-semibold">My Role (Zero-Knowledge Engineering):</div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-emerald-500 mt-1">›</span>
                <span>Designed ZK circuits for credit score validation</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-500 mt-1">›</span>
                <span>Implemented proof generation logic (zk-SNARKs)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-500 mt-1">›</span>
                <span>Managed proving & verification keys</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-500 mt-1">›</span>
                <span>Integrated ZK proofs with smart contract verification</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-500 mt-1">›</span>
                <span>Ensured privacy-preserving score validation without data exposure</span>
              </div>
            </div>
          </div>
        </CommandBlock>

        {/* 9. Outcomes & Impact */}
        <CommandBlock command="impact defiscore" delay={1400}>
          <div className="space-y-4 text-zinc-300">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Created privacy-preserving credit scoring infrastructure</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Enabled undercollateralized lending in DeFi protocols</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Implemented cross-protocol reputation system</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Achieved complete user privacy through ZK proofs</span>
              </div>
            </div>

            {/* Technical Impact */}
            <div className="space-y-2">
              <div className="text-blue-400 font-semibold">✓ Technical Impact:</div>
              <div className="ml-4">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>DeFi trust layer powered by Zero-Knowledge Proof-based credit scoring</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Fully decentralized and trustless architecture</span>
                </div>
              </div>
            </div>

            {/* Business Impact */}
            <div className="space-y-2">
              <div className="text-blue-400 font-semibold">✓ Business Impact:</div>
              <div className="ml-4 space-y-1">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Reduced capital requirements for DeFi lending</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Improved access to credit for underbanked populations</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Enhanced protocol security through reputation-based access</span>
                </div>
              </div>
            </div>
          </div>
        </CommandBlock>

        {/* 10. Links */}
        <CommandBlock command="links defiscore" delay={1600}>
          <div className="grid grid-cols-1 gap-4">
            <a 
              href="https://github.com/RVKB2005/DeFiScore-Final" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center justify-between px-4 py-3.5 border border-zinc-800 rounded-md bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-purple-500/50 hover:text-purple-400 transition-all group"
            >
              <div className="flex items-center gap-3">
                <Github size={16} />
                <span className="font-medium">GitHub Repository</span>
              </div>
              <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </CommandBlock>

      </div>
    </TerminalLayout>
  );
}