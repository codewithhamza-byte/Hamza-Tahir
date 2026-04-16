import { motion } from "motion/react";
import { ArrowRight, Trophy, Linkedin, Facebook, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const logos = [
  "FocalPoint", "Screentime", "Segment", "Shutterframe", "Lightspeed", "Mastermind"
];

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-hamza-tahir/", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/Hamzatahir13/", label: "Facebook" },
  { icon: MessageSquare, href: "https://wa.me/message/LXOEJFHQLQHKK1", label: "WhatsApp" }
];

export default function Hero() {
  return (
    <section id="home" className="min-h-screen w-full relative flex flex-col items-center justify-center bg-background overflow-hidden pt-32 pb-20 transition-colors duration-300">
      {/* Social Rail (Floating Left) */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 z-50">
        <div className="w-px h-20 bg-border mx-auto mb-2" />
        {socials.map((social, i) => (
          <motion.a
            key={i}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 + i * 0.1 }}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:scale-110 transition-all duration-300 bg-card shadow-sm"
            title={social.label}
          >
            <social.icon className="w-4 h-4" />
          </motion.a>
        ))}
        <div className="w-px h-20 bg-border mx-auto mt-2" />
      </div>
      {/* Background Indigo Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)] blur-[100px]" />
      </div>

      {/* Top Badge */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative z-20 flex items-center gap-2 mb-12"
      >
        <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center">
          <Trophy className="w-4 h-4 text-primary" />
        </div>
        <span className="text-sm font-medium text-muted-foreground tracking-tight">Top Rated Shopify Specialist 2025</span>
      </motion.div>

      {/* Main Content Area */}
      <div className="relative w-full max-w-7xl px-6 flex flex-col items-center">
        
        {/* Heading Layer 1 (Top) */}
        <motion.h1 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-[100px] font-bold text-foreground tracking-tighter leading-none z-30 mb-[-20px] md:mb-[-40px]"
        >
          Hi I&apos;m Hamza
        </motion.h1>
                  <motion.h2 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="absolute top-[45%] md:top-[40%] w-full text-center text-6xl md:text-[140px] font-serif italic text-foreground/80 leading-none tracking-tight z-10 pointer-events-none"
          >
            Shopify Expert
          </motion.h2>


        {/* Central Image & Side Content Container */}
        <div className="relative w-full flex justify-center items-center">
          
          {/* Left Side Elements */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-32 z-40">
            <motion.div 
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-card rounded-full px-6 py-3 flex items-center gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border"
            >
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#6366f1]" />
              <span className="text-sm font-semibold text-foreground">Available for new projects</span>
            </motion.div>

            <motion.div 
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden bg-muted">
                    <img src="/hamza-tahir.webp" alt="Client" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <p className="text-[11px] leading-tight text-muted-foreground max-w-[180px]">
                Helping <span className="font-bold text-foreground">500+ Shopify brands</span> scale through technical SEO and optimization.
              </p>
            </motion.div>
          </div>

          {/* Portrait Image */}
          <motion.div 
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-20 w-[300px] md:w-[500px] aspect-[4/5] flex items-end justify-center"
          >
            <img 
              src="/hamza-tahir-v2.webp" 
              alt="Hamza Tahir" 
              className="w-full h-full object-contain grayscale dark:brightness-90"
              referrerPolicy="no-referrer"
            />
            {/* Bottom Fade */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
          </motion.div>

          {/* Right Side Elements */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-end gap-32 z-40">
            <motion.p 
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm font-medium text-muted-foreground max-w-[220px] text-right leading-relaxed"
            >
              specializing in high-performance Shopify stores that convert visitors into loyal customers.
            </motion.p>

            <motion.div
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-7 flex items-center gap-4 text-base font-bold shadow-2xl group">
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Start Scaling
              </Button>
            </motion.div>
          </div>

          {/* Heading Layer 2 (Bottom - Serif) */}
        </div>
      </div>

      {/* Bottom Logos */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="w-full max-w-7xl px-6 mt-auto pt-20"
      >
        <div className="flex flex-wrap items-center justify-between gap-8 opacity-30 grayscale dark:invert dark:opacity-20">
          {logos.map((logo) => (
            <div key={logo} className="text-xl font-black tracking-tighter text-foreground">
              {logo}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Mobile Content (Visible only on small screens) */}
      <div className="lg:hidden flex flex-col items-center gap-8 px-6 mt-12 text-center">
        <p className="text-sm text-muted-foreground max-w-[280px]">
          specializing in high-performance Shopify stores that convert visitors into loyal customers.
        </p>
        <Button className="bg-primary text-primary-foreground rounded-full px-8 py-6 w-full font-bold">
          Start Scaling
        </Button>
      </div>
    </section>
  );
}
