import { motion } from "framer-motion";
import { 
  Wrench, 
  Sparkles, 
  Zap, 
  PaintBucket, 
  Bug, 
  Wind,
  ArrowRight,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Wrench,
    title: "Plumbing",
    description: "Expert pipe repairs, installations & leak fixes",
    color: "from-blue-500 to-cyan-500",
    rating: 4.9,
    providers: 150,
    featured: true,
  },
  {
    icon: Sparkles,
    title: "Cleaning",
    description: "Deep cleaning, regular maintenance & sanitization",
    color: "from-emerald-500 to-teal-500",
    rating: 4.8,
    providers: 320,
    featured: false,
  },
  {
    icon: Zap,
    title: "Electrical",
    description: "Wiring, installations & safety inspections",
    color: "from-yellow-500 to-orange-500",
    rating: 4.9,
    providers: 120,
    featured: true,
  },
  {
    icon: PaintBucket,
    title: "Painting",
    description: "Interior & exterior painting services",
    color: "from-purple-500 to-pink-500",
    rating: 4.7,
    providers: 85,
    featured: false,
  },
  {
    icon: Bug,
    title: "Pest Control",
    description: "Safe & effective pest elimination",
    color: "from-red-500 to-rose-500",
    rating: 4.8,
    providers: 60,
    featured: false,
  },
  {
    icon: Wind,
    title: "AC & Heating",
    description: "HVAC maintenance, repair & installation",
    color: "from-sky-500 to-indigo-500",
    rating: 4.9,
    providers: 95,
    featured: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const ServicesSection = () => {
  return (
    <section className="py-24 relative bg-white">
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-64 h-64 rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, var(--gray-300) 0%, var(--gray-200) 50%, transparent 70%)' }} />
        <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full blur-2xl opacity-15" style={{ background: 'var(--gray-400)' }} />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-gray-300 text-sm font-medium mb-4 shadow-sm"
                style={{ color: 'var(--gray-600)' }}>
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ color: '#000000' }}>
            What We <span className="gradient-text">Offer</span>
          </h2>
          <p className="max-w-2xl mx-auto font-medium"
             style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
            Professional home services at your fingertips. Choose from our wide range of verified experts.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group relative bg-white rounded-3xl p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl border border-gray-300 hover:border-gray-400 ${
                service.featured ? "lg:row-span-1" : ""
              }`}
            >
              {/* Featured Badge */}
              {service.featured && (
                <div className="absolute top-4 right-4 px-2 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  Popular
                </div>
              )}

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold mb-2 group-hover:text-gray-600 transition-colors"
                  style={{ color: '#000000' }}>
                {service.title}
              </h3>
              <p className="mb-4"
                 style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
                {service.description}
              </p>

              {/* Stats */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1"
                     style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="font-medium">{service.rating}</span>
                </div>
                <span style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                  {service.providers} providers
                </span>
              </div>

              {/* Hover Arrow */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ArrowRight className="w-5 h-5" style={{ color: 'var(--gray-600)' }} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button variant="hero" size="lg" className="gap-2">
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
