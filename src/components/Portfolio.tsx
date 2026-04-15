import { motion } from "motion/react";
import { ExternalLink, Github, Layers, TrendingUp, ShoppingCart, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Luxe Decor Store",
    description: "Full Shopify optimization and SEO strategy for a premium home decor brand.",
    result: "+45% Organic Traffic",
    metric: "Conversion Rate: 3.2%",
    tags: ["Shopify", "SEO", "Optimization"],
    image: "https://picsum.photos/seed/luxe/800/600",
  },
  {
    title: "Eco-Friendly Apparel",
    description: "Automated marketing workflows and content strategy for a sustainable fashion brand.",
    result: "+22% Add-to-Cart",
    metric: "ROI: 4.5x",
    tags: ["n8n", "Marketing", "Automation"],
    image: "https://picsum.photos/seed/eco/800/600",
  },
  {
    title: "Tech Gadgets Hub",
    description: "Technical SEO and speed optimization reducing LCP by 60%.",
    result: "LCP: 1.2s",
    metric: "Traffic: +80k/mo",
    tags: ["Technical SEO", "Speed", "Shopify"],
    image: "https://picsum.photos/seed/tech/800/600",
  },
  {
    title: "Organic Skincare",
    description: "Data-driven marketing and behavioral analysis for a beauty brand.",
    result: "+35% Retention",
    metric: "AOV: +$15",
    tags: ["Analytics", "Marketing", "Data"],
    image: "https://picsum.photos/seed/skin/800/600",
  },
  {
    title: "Fitness Equipment",
    description: "Scaling a fitness brand through aggressive SEO and custom Shopify apps.",
    result: "$500k Revenue/mo",
    metric: "Growth: 200%",
    tags: ["Scaling", "Shopify", "SEO"],
    image: "https://picsum.photos/seed/fit/800/600",
  },
  {
    title: "Gourmet Coffee",
    description: "Subscription model automation and SEO for a specialty coffee roaster.",
    result: "+120% Subs",
    metric: "LTV: +40%",
    tags: ["Automation", "SEO", "Shopify"],
    image: "https://picsum.photos/seed/coffee/800/600",
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Case <span className="text-primary">Studies</span>
        </h2>
        <p className="text-muted-foreground max-w-xl">
          Real results for real brands. Explore how I've helped ecommerce stores 
          scale their operations and revenue.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card border-white/5 overflow-hidden group hover:border-primary/30 transition-all duration-500 hover-glow rounded-2xl">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
                  <TrendingUp className="w-8 h-8 text-primary mb-4" />
                  <span className="text-2xl font-bold text-primary mb-2">{project.result}</span>
                  <span className="text-sm text-muted-foreground mb-6">{project.metric}</span>
                  <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary hover:text-background rounded-xl">
                    View Case Study
                  </Button>
                </div>
              </div>
              <CardHeader className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-[10px] uppercase tracking-wider bg-primary/5 text-primary border-none">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                  {project.description}
                </p>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
