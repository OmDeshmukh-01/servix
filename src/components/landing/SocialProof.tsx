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

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.02 }}
    className="glass-card rounded-3xl p-6 relative overflow-hidden min-w-[350px] max-w-[350px] mx-4"
  >
    {/* Quote Icon */}
    <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/20" />

    {/* Rating */}
    <div className="flex gap-1 mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
      ))}
    </div>

    {/* Content */}
    <p className="text-foreground mb-6 leading-relaxed">
      "{testimonial.content}"
    </p>

    {/* Author */}
    <div className="flex items-center gap-3">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-12 h-12 rounded-full object-cover border-2 border-accent/20"
      />
      <div>
        <div className="font-semibold text-foreground">
          {testimonial.name}
        </div>
        <div className="text-sm text-muted-foreground">
          {testimonial.role}
        </div>
      </div>
    </div>
  </motion.div>
);

export const SocialProof = () => {
  // Create many duplicates for truly seamless infinite scroll
  const duplicatedTestimonials = [
    ...testimonials, ...testimonials, ...testimonials, ...testimonials, 
    ...testimonials, ...testimonials, ...testimonials, ...testimonials
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-transparent via-muted/30 to-transparent">
      <div className="container mx-auto px-4">
      {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Loved by <span className="gradient-text">Thousands</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See what our customers have to say about their experience
          </p>
        </motion.div>

        {/* Infinite Moving Cards */}
        <div className="relative mb-16 overflow-hidden">
          <div className="flex gap-4 animate-infinite-scroll">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div key={`${testimonial.name}-${index}`} className="bg-white rounded-2xl shadow-md p-8 w-80">
                <Quote className="absolute top-4 right-4 w-8 h-8"
                       style={{ color: 'var(--gray-400)' }} />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="mb-6 leading-relaxed"
                   style={{ color: '#000000' }}>
                  "{testimonial.content}"
                </p>
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
        </div>

        {/* Brand Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-6">
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
