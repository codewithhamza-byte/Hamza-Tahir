import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work / Portfolio", href: "#portfolio" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-center px-4 py-4 md:px-6 md:py-6">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={cn(
          "flex items-center gap-0.5 md:gap-1 p-1 rounded-full transition-all duration-300",
          isScrolled ? "bg-white/80 backdrop-blur-xl shadow-2xl" : "bg-white backdrop-blur-md border border-gray-100 shadow-lg"
        )}
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setActiveTab(item.label)}
            className={cn(
              "px-3 md:px-6 py-2 md:py-2.5 rounded-full text-[10px] md:text-sm font-semibold transition-all duration-300 relative whitespace-nowrap",
              activeTab === item.label 
                ? "bg-[#6366f1] text-white shadow-[0_4px_12px_rgba(99,102,241,0.4)]" 
                : "text-[#4b5563] hover:bg-gray-50"
            )}
          >
            {item.label}
          </a>
        ))}
      </motion.div>
    </nav>
  );
}
