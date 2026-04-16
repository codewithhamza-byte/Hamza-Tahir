import { motion } from "motion/react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  User, 
  ChevronDown, 
  Send, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Zap,
  Linkedin,
  Facebook,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const socials = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-hamza-tahir/", label: "LinkedIn" },
    { icon: Facebook, href: "https://www.facebook.com/Hamzatahir13/", label: "Facebook" },
    { icon: MessageSquare, href: "https://wa.me/message/LXOEJFHQLQHKK1", label: "WhatsApp" }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
        {/* Left Column: Project Details Form */}
        <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Project Details</h2>
              <p className="text-muted-foreground text-sm mt-1">Tell me about your vision and goals.</p>
            </div>
          </div>

          <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Full Name */}
              <div className="space-y-4">
                <label className="text-sm font-semibold flex items-center gap-2 text-foreground">
                  <User className="w-4 h-4 text-primary" />
                  Full Name *
                </label>
                <input 
                  type="text" 
                  className="w-full bg-muted/50 border border-border rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm text-foreground placeholder:text-muted-foreground/50" 
                  placeholder="John Doe" 
                />
              </div>
              {/* Email Address */}
              <div className="space-y-4">
                <label className="text-sm font-semibold flex items-center gap-2 text-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  Email Address *
                </label>
                <input 
                  type="email" 
                  className="w-full bg-muted/50 border border-border rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm text-foreground placeholder:text-muted-foreground/50" 
                  placeholder="john@example.com" 
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="space-y-4">
              <label className="text-sm font-semibold text-foreground">Phone Number</label>
              <input 
                type="tel" 
                className="w-full bg-muted/50 border border-border rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm text-foreground placeholder:text-muted-foreground/50" 
                placeholder="+92 (308) 502-6488" 
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Service Needed */}
              <div className="space-y-4">
                <label className="text-sm font-semibold text-foreground">Service Needed *</label>
                <div className="relative">
                  <select defaultValue="" className="w-full bg-muted/50 border border-border rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm appearance-none cursor-pointer text-foreground">
                    <option value="" disabled>Select a service</option>
                    <option value="shopify">Shopify Optimization</option>
                    <option value="seo">Ecommerce SEO</option>
                    <option value="automation">Automation Workflows</option>
                  </select>
                  <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>
              {/* Project Type */}
              <div className="space-y-4">
                <label className="text-sm font-semibold text-foreground">Project Type</label>
                <div className="relative">
                  <select defaultValue="" className="w-full bg-muted/50 border border-border rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm appearance-none cursor-pointer text-foreground">
                    <option value="" disabled>Select project type</option>
                    <option value="new">New Store</option>
                    <option value="redesign">Redesign</option>
                    <option value="maintenance">Maintenance</option>
                  </select>
                  <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Project Description */}
            <div className="space-y-4">
              <label className="text-sm font-semibold text-foreground">Project Description *</label>
              <textarea 
                rows={6} 
                className="w-full bg-muted/50 border border-border rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm resize-none text-foreground placeholder:text-muted-foreground/50" 
                placeholder="Tell me about your project, goals, and any specific requirements..." 
              />
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-8 text-lg font-bold rounded-2xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-3">
              <Send className="w-5 h-5" />
              Send Message
            </Button>
          </form>
        </div>

        {/* Right Column: Sidebar */}
        <div className="space-y-8">
          {/* Contact Information */}
          <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
            <h3 className="text-lg font-bold mb-8">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground mb-1 uppercase tracking-[0.2em] font-bold">Email</div>
                  <div className="text-sm font-semibold">mhamzatahir048@gmail.com</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground mb-1 uppercase tracking-[0.2em] font-bold">Phone</div>
                  <div className="text-sm font-semibold">+92 (308) 502-6488</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground mb-1 uppercase tracking-[0.2em] font-bold">Location</div>
                  <div className="text-sm font-semibold">Lahore, Punjab, Pakistan</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="text-[10px] text-muted-foreground mb-6 uppercase tracking-[0.2em] font-bold">Connect With Me</div>
              <div className="flex gap-4">
                {socials.map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Why Choose Me? */}
          <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
            <h3 className="text-lg font-bold mb-8">Why Choose Me?</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                  <Clock className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">24h Response Time</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">100% Confidential</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">Free Consultation</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                  <Zap className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">Quick Turnaround</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
