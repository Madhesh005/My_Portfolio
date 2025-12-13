
import { TerminalLayout } from "@/components/layout/TerminalLayout";
import { SOCIALS } from "@/lib/constants";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef, useEffect } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import emailjs from '@emailjs/browser';

type Step = "NAME" | "EMAIL" | "LINKEDIN" | "MESSAGE" | "CONFIRM";

export default function Contact() {
    const { toast } = useToast();
    const [step, setStep] = useState<Step>("NAME");
    const [history, setHistory] = useState<{ label: string; value: string }[]>([]);
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    // Data store
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        linkedin: "",
        message: ""
    });

    useEffect(() => {
        // Focus input whenever step changes
        inputRef.current?.focus();
    }, [step]);

    const sendEmail = async (formData: { name: string; email: string; linkedin: string; message: string }) => {
        try {
            // Check if EmailJS is configured
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                console.warn("EmailJS environment variables missing");
                return false;
            }

            // Initialize EmailJS with your public key
            emailjs.init(publicKey);

            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                linkedin_profile: formData.linkedin,
                message: formData.message,
                to_email: 'madheshr005@gmail.com',
                reply_to: formData.email,
                // Add timestamp for better tracking
                timestamp: new Date().toLocaleString(),
            };

            const result = await emailjs.send(serviceId, templateId, templateParams);
            return result.status === 200;
        } catch (error) {
            console.error('Email sending failed:', error);
            return false;
        }
    };

    const handleKeyDown = async (e: React.KeyboardEvent) => {
        // Stop propagation so global command input doesn't see this enter key
        e.stopPropagation();

        if (e.key === "Enter") {
            if (!inputValue.trim()) return;

            const value = inputValue.trim();
            setInputValue("");

            if (step === "NAME") {
                setHistory(prev => [...prev, { label: "type your name ...", value }]);
                setFormData(prev => ({ ...prev, name: value }));
                setStep("EMAIL");
            } else if (step === "EMAIL") {
                setHistory(prev => [...prev, { label: "type your email ...", value }]);
                setFormData(prev => ({ ...prev, email: value }));
                setStep("LINKEDIN");
            } else if (step === "LINKEDIN") {
                setHistory(prev => [...prev, { label: "type your linkedin_id ...", value }]);
                setFormData(prev => ({ ...prev, linkedin: value }));
                setStep("MESSAGE");
            } else if (step === "MESSAGE") {
                setHistory(prev => [...prev, { label: "type message", value }]);
                const updatedFormData = { ...formData, message: value };
                setFormData(updatedFormData);
                setStep("CONFIRM");

                // Show processing message
                toast({
                    title: "Processing...",
                    description: "Encrypting and sending payload.",
                    className: "font-mono bg-zinc-900 text-yellow-400 border-zinc-800",
                    duration: 2000
                });

                // Send actual email
                try {
                    const emailSent = await sendEmail(updatedFormData);

                    if (emailSent) {
                        toast({
                            title: "Message Sent Successfully!",
                            description: `Delivered to ${SOCIALS.email}`,
                            className: "font-mono bg-zinc-900 text-emerald-400 border-zinc-800",
                            duration: 5000
                        });
                    } else {
                        toast({
                            title: "Sending Failed",
                            description: "Please try again or contact directly via email.",
                            className: "font-mono bg-zinc-900 text-red-400 border-zinc-800",
                            duration: 5000
                        });
                    }
                } catch (error) {
                    toast({
                        title: "Network Error",
                        description: "Please check your connection and try again.",
                        className: "font-mono bg-zinc-900 text-red-400 border-zinc-800",
                        duration: 5000
                    });
                }

                // Reset after delay
                setTimeout(() => {
                    setStep("NAME");
                    setHistory([]);
                    setFormData({ name: "", email: "", linkedin: "", message: "" });
                }, 5000);
            }
        }
    };

    return (
        <TerminalLayout>
            <div className="space-y-8 animate-in fade-in duration-500 pb-12">

                <div className="text-zinc-500">
                    <span className="text-emerald-500 font-bold mr-2">$</span>
                    <span className="text-zinc-100">contact</span>
                </div>

                <div className="text-zinc-500 text-sm italic">
                    → Reach out using any method below or initialize secure channel.
                </div>

                {/* Interactive CLI Form */}
                <div
                    className="border border-zinc-800 rounded-lg p-6 bg-black/50 font-mono text-sm shadow-inner min-h-[300px] flex flex-col cursor-text"
                    onClick={(e) => {
                        e.stopPropagation(); // Stop propagation to prevent global input focus
                        inputRef.current?.focus();
                    }}
                >
                    <div className="text-zinc-500 mb-6 text-xs border-b border-zinc-800 pb-2">
                        <span className="text-emerald-500 font-bold mr-2">$</span>
                        <span>secure-channel --init</span>
                    </div>

                    <div className="flex-1 space-y-4">
                        {/* History */}
                        {history.map((item, i) => (
                            <div key={i} className="space-y-1">
                                <div className="text-zinc-500 flex items-center gap-2">
                                    <span className="text-emerald-500 font-bold">?</span>
                                    <span>{item.label}</span>
                                </div>
                                <div className="text-zinc-100 pl-6">{item.value}</div>
                            </div>
                        ))}

                        {/* Current Prompt */}
                        {step !== "CONFIRM" && (
                            <div className="space-y-1">
                                <div className="text-emerald-400 flex items-center gap-2">
                                    <span className="text-emerald-500 font-bold">?</span>
                                    <span>
                                        {step === "NAME" && "type your name ..."}
                                        {step === "EMAIL" && "type your email ..."}
                                        {step === "LINKEDIN" && "type your linkedin_id ..."}
                                        {step === "MESSAGE" && "type message"}
                                    </span>
                                </div>
                                <div className="relative pl-6">
                                    <span className="text-white whitespace-pre">{inputValue}</span>
                                    <span className="cursor-block align-middle ml-1"></span>
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={inputValue}
                                        onChange={e => setInputValue(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-text"
                                        autoFocus
                                    />
                                </div>
                            </div>
                        )}

                        {step === "CONFIRM" && (
                            <div className="text-emerald-500 mt-4">
                                <p>&gt; Transmission complete.</p>
                                <p>&gt; Resetting channel in 5s...</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Info Cards (Existing) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-zinc-900">

                    {/* Direct */}
                    <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/10">
                        <div className="text-zinc-500 mb-4 text-xs">
                            <span className="text-emerald-500 font-bold mr-2">$</span>
                            <span>direct</span>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-sm text-zinc-300 border border-zinc-800 p-2 rounded bg-black/50">
                                <Mail size={14} className="text-zinc-500" />
                                <a href={`mailto:${SOCIALS.email}`} className="hover:text-emerald-400 transition-colors">{SOCIALS.email}</a>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-zinc-300 border border-zinc-800 p-2 rounded bg-black/50">
                                <Phone size={14} className="text-zinc-500" />
                                <span>{SOCIALS.phone}</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-zinc-300 border border-zinc-800 p-2 rounded bg-black/50">
                                <MapPin size={14} className="text-zinc-500" />
                                <span>{SOCIALS.location}</span>
                            </div>
                        </div>
                    </div>

                    {/* Socials */}
                    <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/10">
                        <div className="text-zinc-500 mb-4 text-xs">
                            <span className="text-emerald-500 font-bold mr-2">$</span>
                            <span>socials</span>
                        </div>
                        <div className="space-y-4">
                            <a href={SOCIALS.github} target="_blank" className="flex items-center gap-3 text-sm text-zinc-300 border border-zinc-800 p-2 rounded bg-black/50 hover:border-zinc-600 transition-all">
                                <Github size={14} className="text-zinc-500" />
                                <span className="font-mono">github.com/madhesh005</span>
                            </a>
                            <a href={SOCIALS.linkedin} target="_blank" className="flex items-center gap-3 text-sm text-zinc-300 border border-zinc-800 p-2 rounded bg-black/50 hover:border-blue-900 transition-all">
                                <Linkedin size={14} className="text-blue-500" />
                                <span className="font-mono">linkedin.com/in/madheshr005</span>
                            </a>
                            <a href={SOCIALS.instagram} target="_blank" className="flex items-center gap-3 text-sm text-zinc-300 border border-zinc-800 p-2 rounded bg-black/50 hover:border-sky-900 transition-all">
                                <Instagram size={14} className="text-sky-500" />
                                <span className="font-mono">@Madhesh_2005</span>
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </TerminalLayout>
    );
}
