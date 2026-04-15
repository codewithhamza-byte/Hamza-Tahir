import { motion } from "motion/react";
import { Database, Layout, Server, Shield, Smartphone, Zap, ShoppingBag, Search, Workflow, BarChart3, FileCode, Cpu } from "lucide-react";

const expertise = [
  {
    title: "Shopify Optimization",
    description: "Theme customization, app integration, and speed optimization for high-conversion stores.",
    icon: ShoppingBag,
    size: "col-span-2 row-span-1",
  },
  {
    title: "Ecommerce SEO",
    description: "Technical SEO, keyword research, and content strategy to drive organic traffic.",
    icon: Search,
    size: "col-span-1 row-span-2",
  },
  {
    title: "Automation Workflows",
    description: "Streamlining operations with n8n, Zapier, and custom automation scripts.",
    icon: Workflow,
    size: "col-span-1 row-span-1",
  },
  {
    title: "Data-Driven Marketing",
    description: "Analyzing consumer behavior to optimize marketing spend and ROI.",
    icon: BarChart3,
    size: "col-span-1 row-span-1",
  },
  {
    title: "Google Apps Script",
    description: "Custom Google Sheets automation and internal tool development.",
    icon: FileCode,
    size: "col-span-2 row-span-1",
  }
];

export default function BentoGrid() {
  return (
    <section id="skills" className="py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Core <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-xl">
            A specialized skill set designed to help ecommerce brands grow through 
            technical excellence and strategic marketing.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[220px]">
        {expertise.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`group relative p-8 rounded-2xl border border-white/5 overflow-hidden col-span-1 md:${item.size.split(' ')[0]} md:${item.size.split(' ')[1]} bg-card hover:border-primary/30 transition-all duration-500 hover-glow`}
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
              <item.icon className="w-32 h-32" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
