import { motion } from "framer-motion";
import { Home, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Users, Award, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/landing/Footer";
import { FloatingDock, FloatingDockIcon } from "@/components/ui/FloatingDock";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const services = [
  { name: "Plumbing", href: "/services/plumbing" },
  { name: "Electrical", href: "/services/electrical" },
  { name: "Cleaning", href: "/services/cleaning" },
  { name: "Painting", href: "/services/painting" },
  { name: "HVAC", href: "/services/hvac" },
];

const companyLinks = [
  { name: "How It Works", href: "/how-it-works" },
  { name: "Become a Pro", href: "/become-pro" },
  { name: "Collab Hub", href: "/collab-hub" },
  { name: "Careers", href: "/careers" },
];

const supportLinks = [
  { name: "Help Center", href: "/help" },
  { name: "Contact Us", href: "/contact" },
  { name: "FAQs", href: "/faqs" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6" style={{ color: '#000000' }}>
              About HomeServe
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
              Connecting homeowners with trusted professionals for all home service needs. 
              Quality work, guaranteed satisfaction.
            </p>
          </motion.div>

          {/* Company Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>Trusted Network</h3>
              <p style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
                We connect you with verified and experienced professionals who are committed to delivering exceptional service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>Quality Guaranteed</h3>
              <p style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
                Every service provider is thoroughly vetted to ensure they meet our high standards for quality and professionalism.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>Quick Response</h3>
              <p style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
                Get connected with service providers quickly and efficiently, ensuring your home service needs are met promptly.
              </p>
            </motion.div>
          </div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-12 rounded-2xl shadow-lg mb-20"
          >
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: '#000000' }}>Get in Touch</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2" style={{ color: '#000000' }}>Email</h4>
                <p style={{ color: 'rgba(0, 0, 0, 0.7)' }}>support@homeserve.com</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2" style={{ color: '#000000' }}>Phone</h4>
                <p style={{ color: 'rgba(0, 0, 0, 0.7)' }}>1-800-HOMESERVE</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold mb-2" style={{ color: '#000000' }}>Location</h4>
                <p style={{ color: 'rgba(0, 0, 0, 0.7)' }}>Available Nationwide</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex justify-center">
              <FloatingDock className="bg-gray-100/80 backdrop-blur-sm border-gray-200/50">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                    style={{ color: '#000000' }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </FloatingDock>
            </div>
          </motion.div>

          {/* Quick Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="font-semibold text-xl mb-6" style={{ color: '#000000' }}>Our Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.href}
                      className="text-sm hover:text-gray-600 transition-colors flex items-center gap-2"
                      style={{ color: 'rgba(0, 0, 0, 0.7)' }}
                    >
                      <Award className="w-4 h-4" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="font-semibold text-xl mb-6" style={{ color: '#000000' }}>Company</h3>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm hover:text-gray-600 transition-colors flex items-center gap-2"
                      style={{ color: 'rgba(0, 0, 0, 0.7)' }}
                    >
                      <Home className="w-4 h-4" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h3 className="font-semibold text-xl mb-6" style={{ color: '#000000' }}>Support</h3>
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm hover:text-gray-600 transition-colors flex items-center gap-2"
                      style={{ color: 'rgba(0, 0, 0, 0.7)' }}
                    >
                      <Users className="w-4 h-4" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
