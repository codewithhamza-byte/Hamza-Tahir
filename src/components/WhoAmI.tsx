import { motion } from "motion/react";
import { Twitter, Linkedin, Instagram } from "lucide-react";

const timeline = [
  {
    role: "Senior Full Stack Developer",
    company: "Freelance",
    period: "2024",
  },
  {
    role: "WordPress & Shopify Specialist",
    company: "Digital Agency",
    period: "2023",
  },
  {
    role: "Full Stack Web Developer",
    company: "Tech Startup",
    period: "2022",
  },
  {
    role: "Computer Science Degree",
    company: "University",
    period: "2021",
  },
];

export default function WhoAmI() {
  return (
    <section id="who-am-i" className="py-32 bg-gray-50 dark:bg-[#050505] border-y border-gray-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-serif italic text-primary block mb-4"
          >
            / Who Am I
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-8xl font-black text-gray-900 dark:text-white tracking-tighter leading-none"
          >
            Pushing Boundaries <br />
            <span className="text-gray-400/50 font-light italic">since 2011</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          {/* Left Column: Image & Bio */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="aspect-[4/5] rounded-[48px] overflow-hidden bg-white dark:bg-gray-900 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] dark:shadow-none border border-gray-100 dark:border-white/5">
                <img 
                  src="/hamza-tahir-who-am-i.webp" 
                  alt="Hamza Tahir" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out scale-105 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "/hamza-tahir-who-am-i.webp";
                  }}
                />
              </div>
              
              <div className="mt-10 flex justify-between items-center">
                <div className="flex gap-6">
                  {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                    <a key={i} href="#" className="text-gray-400 hover:text-primary transition-all hover:-translate-y-1">
                      <Icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
                <div className="text-right">
                  <h4 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">Hamza Tahir</h4>
                  <p className="text-primary font-medium text-sm tracking-widest uppercase">Shopify Expert</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Description & Timeline */}
          <div className="lg:col-span-7 pt-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 leading-tight font-medium tracking-tight">
                Hi, I’m Hamza Tahir, a passionate web developer who enjoys building modern web applications and automation tools that help businesses grow online.
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400 mt-6 leading-relaxed">
                I specialize in creating fast, responsive, and user-friendly websites using technologies like JavaScript, TypeScript, React, Next.js, HTML, CSS, and Tailwind CSS. My focus is not only on building good-looking interfaces but also on developing reliable systems that improve business workflows and save time.
              </p>
            </motion.div>

            <div className="space-y-0 border-t border-gray-200 dark:border-white/10">
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col md:grid md:grid-cols-3 py-8 md:py-10 border-b border-gray-200 dark:border-white/10 items-start md:items-center group hover:bg-white dark:hover:bg-white/5 transition-all px-6 -mx-6 rounded-2xl gap-2 md:gap-0"
                >
                  <span className="text-lg md:text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">{item.role}</span>
                  <span className="text-gray-500 dark:text-gray-400 md:text-center font-medium">{item.company}</span>
                  <span className="text-gray-400 dark:text-gray-500 md:text-right font-mono text-xs md:text-sm">{item.period}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
