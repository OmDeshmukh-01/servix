import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Wrench, Sparkles, Zap, PaintBucket, Wind, Hammer, Search, Star, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "plumbing",
    title: "Plumbing",
    description: "Expert pipe repairs, installations & leak fixes",
    icon: Wrench,
    color: "from-blue-500 to-cyan-500",
    features: ["Emergency repairs", "Installations", "Maintenance"],
    rating: 4.9,
    providers: 245
  },
  {
    id: "cleaning",
    title: "Cleaning",
    description: "Professional home & office cleaning services",
    icon: Sparkles,
    color: "from-green-500 to-emerald-500",
    features: ["Deep cleaning", "Regular maintenance", "Sanitization"],
    rating: 4.8,
    providers: 189
  },
  {
    id: "electrical",
    title: "Electrical",
    description: "Licensed electricians for all electrical needs",
    icon: Zap,
    color: "from-yellow-500 to-orange-500",
    features: ["Wiring", "Panel upgrades", "Lighting"],
    rating: 4.9,
    providers: 156
  },
  {
    id: "painting",
    title: "Painting",
    description: "Interior & exterior painting professionals",
    icon: PaintBucket,
    color: "from-purple-500 to-pink-500",
    features: ["Interior painting", "Exterior painting", "Decorative finishes"],
    rating: 4.7,
    providers: 203
  },
  {
    id: "hvac",
    title: "HVAC",
    description: "Heating, cooling & ventilation experts",
    icon: Wind,
    color: "from-cyan-500 to-blue-500",
    features: ["Installation", "Repair", "Maintenance"],
    rating: 4.8,
    providers: 134
  },
  {
    id: "carpentry",
    title: "Carpentry",
    description: "Custom woodworking & furniture solutions",
    icon: Hammer,
    color: "from-amber-500 to-orange-500",
    features: ["Custom furniture", "Repairs", "Installation"],
    rating: 4.9,
    providers: 98
  }
];

const ServicesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredServices = services.filter(service =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="font-display text-2xl font-bold text-gray-900">Choose a Service</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-accent text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl font-bold mb-4"
          >
            What service do you need?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Connect with verified professionals for all your home service needs
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-md mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services..."
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Service Card */}
              <Link to={`/providers/${service.id}`} className="block h-full">
                <div className="p-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.slice(0, 2).map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-medium text-gray-900">{service.rating}</span>
                    </div>
                    <span className="text-gray-500">{service.providers} providers</span>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No services found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search terms
            </p>
          </motion.div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
            Don't see what you're looking for?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're constantly adding new services. Contact us to let us know what you need.
          </p>
          <Button variant="hero" size="lg" className="gap-2">
            Contact Support
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
