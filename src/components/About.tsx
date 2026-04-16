import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const values = [
    "Data-driven decision making for maximum ROI",
    "Deep technical understanding of Shopify architecture",
    "SEO strategies that focus on revenue, not just traffic",
    "Custom automation to save 10+ hours of manual work weekly"
  ];

  return (
    <section id="about" className="py-32 bg-background transition-colors duration-300">
      <div className="flex flex-col items-center mb-24">
        <div className="text-primary font-serif italic text-xl mb-12 self-start px-6 md:px-12">// About</div>
        
        <div className="relative inline-flex items-center bg-gray-800 dark:bg-gray-800 rounded-full p-1.5 pr-8 gap-4 shadow-2xl mb-16 group hover:scale-105 transition-transform">
          <div className="w-14 h-14 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-3xl shadow-inner">
            🚀
          </div>
          <span className="text-white text-xl font-bold tracking-tight">Shopify Expert</span>
        </div>

        <h2 className="text-4xl md:text-9xl font-black text-center leading-[0.9] tracking-tighter max-w-6xl text-foreground px-4">
          Beyond the Lens, <br />
          <span className="text-muted-foreground/30">A Storyteller at Heart</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[3/4] rounded-3xl overflow-hidden border border-white/5 teal-glow">
            <img 
              src="/about-me.webp" 
              alt="Hamza Tahir" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-card border border-white/5 p-8 rounded-2xl purple-glow hidden md:block shadow-2xl">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <div className="text-3xl font-bold text-primary">8+</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">Years Experience</div>
              </div>
              <div className="h-px bg-border/50" />
              <div>
                <div className="text-3xl font-bold text-primary">80+</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">Projects Delivered</div>
              </div>
              <div className="h-px bg-border/50" />
              <div>
                <div className="text-3xl font-bold text-primary">40+</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">Satisfied Clients</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Over time, I have worked on several projects including Shopify applications, automation systems, WhatsApp integrations, and custom web tools. I enjoy solving real problems with technology and building solutions that make daily operations easier for businesses.
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            One of my main areas of interest is Shopify app development and automation. I work on tools that help store owners automate notifications, manage customer communication, and improve their store operations. I also explore new technologies such as AI tools, APIs, and SaaS platforms to create smarter digital products.
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            I believe in continuous learning and always try to improve my skills by working on new ideas and challenging projects. My goal is to build useful products, provide high-quality solutions to clients, and grow as a developer.
          </p>
          <div className="space-y-4">
            {values.map((value, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
