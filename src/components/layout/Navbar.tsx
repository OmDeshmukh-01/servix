import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Wrench, Users, LogIn, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "/services", icon: Wrench },
  { name: "Collab Hub", href: "/collab-hub", icon: Users },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-1 bg-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center"
            >
              <Home className="w-5 h-5 text-white" />
            </motion.div>
            <span className="font-display font-bold text-xl" style={{ color: '#000000' }}>
              HomeServe
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-2 rounded-xl hover:text-gray-600 hover:bg-gray-100 transition-colors font-medium flex items-center gap-2"
                  style={{ color: '#000000' }}
                >
                  <link.icon className="w-4 h-4" />
                  {link.name}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login">
              <Button variant="outline" size="sm" className="gap-2">
                <LogIn className="w-4 h-4" />
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="outline" size="sm" className="gap-2">
                <UserPlus className="w-4 h-4" />
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 rounded-xl hover:bg-accent/10"
            onClick={() => setIsOpen(!isOpen)}
            style={{ color: '#000000' }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 bg-white border border-gray-200 rounded-2xl p-4 space-y-2 shadow-lg"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-accent/10 transition-colors"
                    onClick={() => setIsOpen(false)}
                    style={{ color: '#000000' }}
                  >
                    <link.icon className="w-5 h-5 text-accent" />
                    <span className="font-medium">{link.name}</span>
                  </Link>
                </motion.div>
              ))}
              <div className="pt-2 border-t border-border space-y-2">
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full gap-2">
                    <LogIn className="w-4 h-4" />
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full gap-2">
                    <UserPlus className="w-4 h-4" />
                    Get Started
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
