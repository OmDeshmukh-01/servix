import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Sparkles, Star, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "100k+", label: "Happy Customers", icon: Star },
  { value: "2000+", label: "Verified Pros", icon: Shield },
  { value: "24/7", label: "Support", icon: Clock },
];

const heroTexts = [
  "Your Home Deserves Expert Care",
  "Smart Solutions for Modern Homes"
];

export const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % heroTexts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-100">
      {/* White Border Container */}
      <div className="absolute inset-4 sm:inset-8 lg:inset-12 bg-black border-4 border-white rounded-2xl"></div>
      
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">
              Trusted by 50,000+ homeowners
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={currentTextIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                {currentTextIndex === 0 ? (
                  <>
                    Your Home Deserves <span className="gradient-text text-white">Expert Care</span>
                  </>
                ) : (
                  <>
                    Smart Solutions for <span className="gradient-text text-white">Modern Homes</span>
                  </>
                )}
              </motion.span>
            </AnimatePresence>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 text-white/90"
          >
            Connect with verified professionals for all your home service needs. 
            From plumbing to painting, we've got you covered.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-2 flex flex-col sm:flex-row gap-2 shadow-lg">
              <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5">
                <Search className="w-5 h-5 text-white/70" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none placeholder-white/50 text-white"
                  placeholder="What do you need help with?"
                />
              </div>
              <Button variant="hero" size="lg" className="sm:w-auto w-full">
                Find Services
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {["Plumbing", "Cleaning", "Electrical", "Painting"].map((tag) => (
                <motion.button
                  key={tag}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-3 py-1.5 rounded-full bg-white/10 text-sm hover:bg-white/20 transition-colors text-white/80"
                >
                  {tag}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 max-w-xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-2">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-white">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/70">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
