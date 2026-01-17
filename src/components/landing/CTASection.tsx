import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="py-24 relative bg-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-96 h-96 rounded-full blur-3xl opacity-25" style={{ background: 'radial-gradient(circle, var(--gray-300) 0%, var(--gray-200) 50%, transparent 70%)' }} />
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full blur-3xl opacity-20" style={{ background: 'var(--gray-400)' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full blur-2xl opacity-15" style={{ background: 'var(--gray-300)' }} />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 30% 20%, rgba(45, 212, 191, 0.3), transparent 50%)' }} />
            <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 70% 80%, rgba(45, 212, 191, 0.2), transparent 50%)' }} />
          </div>

          {/* Content */}
          <div className="relative z-10 py-16 sm:py-24 px-6 sm:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8"
            >
              <Sparkles className="w-4 h-4" style={{ color: 'var(--gray-300)' }} />
              <span className="text-sm font-medium text-white/90">
                Join 50,000+ happy customers
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto"
            >
              Ready to Transform Your Home Service Experience?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg text-white/80 max-w-2xl mx-auto mb-10"
            >
              Whether you're a homeowner looking for reliable services or a professional 
              ready to grow your business, we've got you covered.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/signup">
                <Button variant="glass" size="xl" className="gap-2 w-full sm:w-auto">
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button 
                  variant="heroOutline" 
                  size="xl" 
                  className="gap-2 w-full sm:w-auto border-white/30 text-white hover:bg-white/10"
                >
                  Browse Services
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Floating elements */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-10 left-10 w-16 h-16 rounded-full blur-xl"
            style={{ background: 'var(--gray-600)' }}
          />
          <motion.div
            animate={{ y: [5, -5, 5] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-10 right-10 w-24 h-24 rounded-full blur-xl"
            style={{ background: 'var(--gray-500)' }}
          />
        </motion.div>
      </div>
    </section>
  );
};
