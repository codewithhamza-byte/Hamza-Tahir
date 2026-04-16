"use client";

import Navbar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Snippets from "@/components/Snippets";
import Blog from "@/components/Blog";
import BentoGrid from "@/components/BentoGrid";
import About from "@/components/About";
import WhoAmI from "@/components/WhoAmI";
import HowItWorks from "@/components/HowItWorks";
import Contact from "@/components/Contact";
import { motion, useScroll, useSpring } from "motion/react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-background">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[110] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main className="pt-0">
        <Hero />
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <BentoGrid />
          <Portfolio />
          <HowItWorks />
        </div>

        <WhoAmI />

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Snippets />
          <About />
          <Blog />
          <Contact />
        </div>
        
        <footer className="max-w-7xl mx-auto px-6 md:px-12 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold tracking-tighter">
              HAMZA<span className="text-primary">.TAHIR</span>
            </h2>
            <p className="text-muted-foreground text-xs">
              © 2024 Shopify & Ecommerce SEO Specialist. Based in Lahore.
            </p>
          </div>

          <div className="flex gap-8 text-xs font-medium text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-primary transition-colors">TERMS OF SERVICE</a>
            <a href="mailto:hello@hamza.dev" className="hover:text-primary transition-colors">CONTACT</a>
          </div>
        </footer>
      </main>

      {/* Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/5 blur-[120px] rounded-full" />
      </div>
    </div>
  );
}
