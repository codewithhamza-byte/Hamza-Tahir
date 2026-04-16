import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Understanding your goals, users, and challenges through research and strategy.",
    rotation: "-rotate-6",
  },
  {
    number: "02",
    title: "Design",
    description: "Transforming insights into intuitive, beautiful, and functional product experiences.",
    rotation: "rotate-3",
  },
  {
    number: "03",
    title: "Deliver",
    description: "Testing, refining, and launching the final product with clarity and precision.",
    rotation: "-rotate-2",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-black text-center mb-24 tracking-tighter">
          Here's how it works
        </h2>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
          {/* Connecting Line (SVG) */}
          <div className="absolute top-1/4 left-0 w-full h-1/2 pointer-events-none hidden md:block z-0">
            <svg width="100%" height="100%" viewBox="0 0 1000 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
              <path 
                d="M150 100 C 300 0, 400 0, 500 100 C 600 200, 700 200, 850 100" 
                stroke="#6366f1" 
                strokeWidth="2" 
                strokeDasharray="8 8"
              />
              <circle cx="150" cy="100" r="6" fill="#6366f1" />
              <circle cx="500" cy="100" r="6" fill="#6366f1" />
              <circle cx="850" cy="100" r="6" fill="#6366f1" />
            </svg>
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative bg-card rounded-[32px] p-10 shadow-xl border border-border md:${step.rotation} hover:rotate-0 transition-transform duration-500 z-10`}
            >
              <div className="text-6xl font-black text-primary mb-12 opacity-90">
                {step.number}
              </div>
              <h3 className="text-3xl font-black text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#6366f1]/10 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
