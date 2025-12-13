
import { TerminalLayout } from "@/components/layout/TerminalLayout";
import { SOCIALS } from "@/lib/constants";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

interface ContactForm {
  from: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message queued successfully",
      description: "Output: 200 OK. Message sent to /dev/null (simulated).",
      className: "font-mono bg-zinc-900 text-emerald-400 border-zinc-800"
    });
    
    reset();
    setIsSubmitting(false);
  };

  return (
    <TerminalLayout>
      <div className="space-y-8 animate-in fade-in duration-500">
        
        <div className="text-zinc-500">
          <span className="text-emerald-500 font-bold mr-2">$</span>
          <span className="text-zinc-100">contact</span>
        </div>
        
        <div className="text-zinc-500 text-sm italic">
             → Reach out using any method below or compose a message.
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
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
                        <span className="font-mono">github.com/madheshr005</span>
                    </a>
                    <a href={SOCIALS.linkedin} target="_blank" className="flex items-center gap-3 text-sm text-zinc-300 border border-zinc-800 p-2 rounded bg-black/50 hover:border-blue-900 transition-all">
                        <Linkedin size={14} className="text-blue-500" />
                        <span className="font-mono">linkedin.com/in/madheshr005</span>
                    </a>
                    <a href={SOCIALS.twitter} target="_blank" className="flex items-center gap-3 text-sm text-zinc-300 border border-zinc-800 p-2 rounded bg-black/50 hover:border-sky-900 transition-all">
                        <Twitter size={14} className="text-sky-500" />
                        <span className="font-mono">@alex_builds</span>
                    </a>
                </div>
            </div>

        </div>

        {/* Compose Form */}
        <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/10">
            <div className="text-zinc-500 mb-4 text-xs">
                <span className="text-emerald-500 font-bold mr-2">$</span>
                <span>compose</span>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 font-mono text-sm">
                
                <div className="space-y-1">
                    <label className="text-zinc-500 text-xs ml-1">from</label>
                    <input 
                        {...register("from", { required: true })}
                        className="w-full bg-black border border-zinc-800 rounded p-3 text-zinc-300 focus:border-emerald-500/50 focus:outline-none transition-colors"
                        placeholder="your@email.com"
                    />
                    {errors.from && <span className="text-red-500 text-xs">Required</span>}
                </div>

                <div className="space-y-1">
                    <label className="text-zinc-500 text-xs ml-1">subject</label>
                    <input 
                        {...register("subject", { required: true })}
                        className="w-full bg-black border border-zinc-800 rounded p-3 text-zinc-300 focus:border-emerald-500/50 focus:outline-none transition-colors"
                        placeholder="Wanna Collab?"
                    />
                     {errors.subject && <span className="text-red-500 text-xs">Required</span>}
                </div>

                <div className="space-y-1">
                    <label className="text-zinc-500 text-xs ml-1">message</label>
                    <textarea 
                        {...register("message", { required: true })}
                        rows={5}
                        className="w-full bg-black border border-zinc-800 rounded p-3 text-zinc-300 focus:border-emerald-500/50 focus:outline-none transition-colors resize-none"
                        placeholder="Hi Madhesh, I'd like to discuss a project..."
                    />
                     {errors.message && <span className="text-red-500 text-xs">Required</span>}
                </div>

                <div className="flex justify-end gap-3 pt-2">
                    <button type="button" onClick={() => reset()} className="px-4 py-2 text-xs text-zinc-500 hover:text-white transition-colors">
                        clear
                    </button>
                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="px-6 py-2 bg-zinc-100 text-black font-bold text-xs rounded hover:bg-emerald-400 transition-colors disabled:opacity-50"
                    >
                        {isSubmitting ? "sending..." : "send"}
                    </button>
                </div>

            </form>
        </div>

        {/* Availability Footer */}
        <div className="border border-zinc-800 rounded-lg p-4 bg-zinc-900/10 flex flex-col md:flex-row gap-4 justify-between items-center text-xs text-zinc-500">
             <div className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold">$</span>
                <span>availability</span>
             </div>
             <div className="flex gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span>New projects from Jan 2026</span>
                </div>
                 <div className="flex items-center gap-2">
                    <span>Typical response: &lt; 24h</span>
                </div>
             </div>
        </div>

      </div>
    </TerminalLayout>
  );
}
