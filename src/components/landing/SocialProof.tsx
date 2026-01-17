import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    content: "Found an amazing electrician within minutes! The whole process was seamless and professional.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Property Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    content: "Managing multiple properties became so much easier. The provider quality is consistently excellent.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    content: "The Collab Hub feature helped me find subcontractors for my renovation project. Game changer!",
    rating: 5,
  },
];

const brands = [
  "HomeAdvisor",
  "Thumbtack",
  "TaskRabbit",
  "Handy",
  "Porch",
];

export const SocialProof = () => {
  return (
    <section className="py-24 relative bg-white">
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-72 h-72 rounded-full blur-3xl opacity-15" style={{ background: 'radial-gradient(circle, var(--gray-300) 0%, var(--gray-200) 50%, transparent 70%)' }} />
        <div className="absolute bottom-10 right-10 w-56 h-56 rounded-full blur-2xl opacity-10" style={{ background: 'var(--gray-400)' }} />
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
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ color: '#000000' }}>
            Loved by <span className="gradient-text">Thousands</span>
          </h2>
          <p className="max-w-2xl mx-auto"
             style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
            See what our customers have to say about their experience
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-6 relative overflow-hidden border border-gray-300 shadow-lg"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8"
                     style={{ color: 'var(--gray-400)' }} />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              {/* Content */}
              <p className="mb-6 leading-relaxed"
                 style={{ color: '#000000' }}>
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2"
                  style={{ borderColor: '#000000' }}
                />
                <div>
                  <div className="font-semibold"
                       style={{ color: '#000000' }}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm"
                       style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm mb-6"
             style={{ color: 'rgba(14, 14, 16, 0.6)' }}>
            Trusted by professionals who've worked with
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
            {brands.map((brand, index) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-xl font-display font-bold hover:scale-105 transition-transform cursor-pointer"
                style={{ color: 'rgba(0, 0, 0, 0.5)' }}
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
