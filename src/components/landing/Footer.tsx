import { motion } from "framer-motion";
import { Home, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  services: [
    { name: "Plumbing", href: "/services/plumbing" },
    { name: "Electrical", href: "/services/electrical" },
    { name: "Cleaning", href: "/services/cleaning" },
    { name: "Painting", href: "/services/painting" },
    { name: "HVAC", href: "/services/hvac" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Become a Pro", href: "/become-pro" },
    { name: "Collab Hub", href: "/collab-hub" },
    { name: "Careers", href: "/careers" },
  ],
  support: [
    { name: "Help Center", href: "/help" },
    { name: "Contact Us", href: "/contact" },
    { name: "FAQs", href: "/faqs" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                   style={{ background: 'var(--gray-800)' }}>
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl" style={{ color: '#000000' }}>HomeServe</span>
            </Link>
            <p className="mb-6 max-w-sm"
               style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
              Connecting homeowners with trusted professionals for all home service needs. 
              Quality work, guaranteed satisfaction.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3"
                   style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
                <Mail className="w-4 h-4" />
                <span className="text-sm">support@homeserve.com</span>
              </div>
              <div className="flex items-center gap-3"
                   style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
                <Phone className="w-4 h-4" />
                <span className="text-sm">1-800-HOMESERVE</span>
              </div>
              <div className="flex items-center gap-3"
                   style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Available Nationwide</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: '#000000' }}>Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm hover:text-gray-600 transition-colors"
                    style={{ color: 'rgba(0, 0, 0, 0.7)' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ color: '#000000' }}>Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm hover:text-gray-600 transition-colors"
                    style={{ color: 'rgba(0, 0, 0, 0.7)' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ color: '#000000' }}>Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm hover:text-gray-600 transition-colors"
                    style={{ color: 'rgba(0, 0, 0, 0.7)' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-300 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
            © 2024 HomeServe. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                style={{ color: '#000000' }}
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
