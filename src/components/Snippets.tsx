import { motion } from "motion/react";
import { TrendingUp, Zap, Users, ShoppingCart } from "lucide-react";

const results = [
  {
    title: "LCP Optimization",
    metric: "4.2s → 1.8s",
    description: "Reduced Largest Contentful Paint by 60% for a high-traffic Shopify store.",
    icon: Zap,
    color: "text-primary"
  },
  {
    title: "Organic Traffic",
    metric: "+75%",
    description: "Increased organic sessions within 6 months through technical SEO and content.",
    icon: TrendingUp,
    color: "text-secondary"
  },
  {
    title: "Add-to-Cart Rate",
    metric: "+22%",
    description: "Improved conversion funnel through UX optimization and A/B testing.",
    icon: ShoppingCart,
    color: "text-primary"
  },
  {
    title: "Customer Retention",
    metric: "+35%",
    description: "Implemented automated email flows and loyalty programs.",
    icon: Users,
    color: "text-secondary"
  }
];

export default function Snippets() {
  return (
    <section id="results" className="py-20">
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Metric-Driven <span className="text-primary">Results</span>
        </h2>
        <p className="text-muted-foreground max-w-xl">
          Quantifiable improvements delivered for ecommerce brands across various 
          performance indicators.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {results.map((result, index) => (
          <motion.div
            key={result.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-card border border-white/5 p-8 rounded-2xl hover-glow group"
          >
            <div className={`w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              <result.icon className={`w-6 h-6 ${result.color}`} />
            </div>
            <div className="text-3xl font-bold mb-2 tracking-tight">{result.metric}</div>
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              {result.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {result.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
