import { motion } from "framer-motion";
import { Users, Handshake, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Users,
    title: "Provider Network",
    description: "Connect with skilled professionals in your area",
  },
  {
    icon: Handshake,
    title: "Sub-contracting",
    description: "Post and find sub-contract opportunities",
  },
  {
    icon: TrendingUp,
    title: "Grow Together",
    description: "Build partnerships and expand your business",
  },
];

const recentCollabs = [
  { provider: "John's Painting Co.", needs: "Carpentry work", budget: "$500-800" },
  { provider: "Elite Renovations", needs: "Electrical setup", budget: "$1,200-1,500" },
  { provider: "Green Home Services", needs: "Plumbing installation", budget: "$600-900" },
];

export const CollabHubPreview = () => {
  return (
    <section className="py-24 relative bg-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, var(--gray-300) 0%, var(--gray-200) 50%, transparent 70%)' }} />
        <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full blur-2xl opacity-15" style={{ background: 'var(--gray-400)' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-gray-300 text-sm font-medium mb-4 shadow-sm"
                  style={{ color: 'var(--gray-600)' }}>
              ✨ New Feature
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
                style={{ color: '#000000' }}>
              The <span className="gradient-text-teal">Collab Hub</span>
            </h2>
            <p className="text-lg mb-8 max-w-lg"
               style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
              A revolutionary space where service providers connect, collaborate, and grow together. 
              Find sub-contractors or offer your expertise to fellow pros.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5" style={{ color: 'var(--gray-600)' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{ color: '#000000' }}>{feature.title}</h4>
                    <p className="text-sm" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button variant="hero" size="lg" className="gap-2">
              Explore Collab Hub
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>

          {/* Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-300 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display font-bold text-xl" style={{ color: '#000000' }}>Recent Opportunities</h3>
                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-xs font-medium flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Live
                </span>
              </div>

              <div className="space-y-4">
                {recentCollabs.map((collab, index) => (
                  <motion.div
                    key={collab.provider}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-2xl bg-gray-50 border border-gray-300 hover:border-gray-400 transition-all cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold" style={{ color: '#000000' }}>{collab.provider}</span>
                      <span className="text-sm font-medium" style={{ color: 'var(--gray-600)' }}>{collab.budget}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                      <CheckCircle2 className="w-4 h-4" style={{ color: 'var(--gray-600)' }} />
                      Looking for: {collab.needs}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-300">
                <div className="flex items-center justify-between text-sm">
                  <span style={{ color: 'rgba(0, 0, 0, 0.6)' }}>245 active opportunities</span>
                  <button className="font-medium hover:underline flex items-center gap-1" style={{ color: 'var(--gray-600)' }}>
                    View all
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-2xl"
              style={{ background: 'var(--gray-400)' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
