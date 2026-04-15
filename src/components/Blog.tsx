import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    date: "APR 10, 2024",
    title: "How to Reduce Shopify LCP to Under 2 Seconds",
    category: "Optimization",
    readTime: "6 min read"
  },
  {
    date: "MAR 28, 2024",
    title: "Ecommerce SEO: The 2024 Keyword Strategy Guide",
    category: "SEO",
    readTime: "10 min read"
  },
  {
    date: "MAR 15, 2024",
    title: "Automating Shopify Orders with n8n and Google Sheets",
    category: "Automation",
    readTime: "8 min read"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Latest <span className="text-primary">Insights</span>
        </h2>
        <p className="text-muted-foreground max-w-xl">
          Sharing my thoughts on ecommerce growth, technical SEO, and the 
          future of automated marketing.
        </p>
      </div>

      <div className="flex flex-col">
        {posts.map((post, index) => (
          <motion.a
            key={post.title}
            href="#"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-white/5 hover:bg-white/5 transition-all px-4 -mx-4 rounded-xl"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-8 mb-4 md:mb-0">
              <span className="font-mono text-xs text-muted-foreground tracking-widest">
                {post.date}
              </span>
              <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">
                {post.title}
              </h3>
            </div>
            
            <div className="flex items-center gap-8">
              <div className="flex flex-col items-end">
                <span className="text-xs uppercase tracking-widest text-primary font-bold mb-1">
                  {post.category}
                </span>
                <span className="text-xs text-muted-foreground">
                  {post.readTime}
                </span>
              </div>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-background transition-all">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
