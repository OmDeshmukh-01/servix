import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Wrench, Users, LogIn, UserPlus, User, LogOut, Circle, ChevronDown, Info, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { getUser, logout, isAuthenticated, getUserRole } from "@/services/api";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "/services", icon: Wrench },
  { name: "Collab Hub", href: "/collab-hub", icon: Users },
  { name: "About Us", href: "/about", icon: Info },
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentUser = getUser();
    setUser(currentUser);
  }, []);

  const handleLogout = async () => {
    await logout();
    setUser(null);
    setUserMenuOpen(false);
    navigate('/');
  };

  // Check if current page is dashboard
  const isDashboardPage = location.pathname === '/dashboard';
  
  // Check if current page is collab hub
  const isCollabHubPage = location.pathname === '/collab-hub';
  
  // Check if current page is about us
  const isAboutPage = location.pathname === '/about';
  
  // Check if logo should be disabled (non-clickable)
  const shouldDisableLogo = isDashboardPage || isCollabHubPage || isAboutPage;

  // Filter nav links based on user role
  const getFilteredNavLinks = () => {
    if (!user) return navLinks;
    
    if (user.role === 'user') {
      // Customers can see Home, Services, and About Us
      return navLinks.filter(link => link.name === 'Home' || link.name === 'Services' || link.name === 'About Us');
    } else if (user.role === 'provider') {
      // Providers can see Collab Hub, About Us, and Dashboard (when on Collab Hub or About Us)
      if (isCollabHubPage || isAboutPage) {
        return navLinks.filter(link => link.name === 'Collab Hub' || link.name === 'About Us' || link.name === 'Dashboard');
      } else {
        // Providers can see only Collab Hub and About Us (no Home)
        return navLinks.filter(link => link.name === 'Collab Hub' || link.name === 'About Us');
      }
    }
    
    return navLinks;
  };

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
          {shouldDisableLogo ? (
            <div className="flex items-center gap-2 cursor-default">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center"
              >
                <Home className="w-5 h-5 text-white" />
              </motion.div>
              <span className="font-display font-bold text-xl">
                HomeServe
              </span>
            </div>
          ) : (
            <Link to="/" className="flex items-center gap-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center"
              >
                <Home className="w-5 h-5 text-white" />
              </motion.div>
              <span className="font-display font-bold text-xl">
                HomeServe
              </span>
            </Link>
          )}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {getFilteredNavLinks().map((link) => (
              <Link key={link.name} to={link.href}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-2 rounded-xl hover:text-gray-600 hover:bg-gray-100 transition-colors font-medium flex items-center gap-2 text-lg"
                  style={{ color: '#000000' }}
                >
                  <link.icon className="w-4 h-4" />
                  {link.name}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Auth Section - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                >
                  {user.avatar ? (
                    <div className="relative">
                      <img 
                        src={user.avatar} 
                        alt={user.name} 
                        className="w-9 h-9 rounded-full object-cover ring-2 ring-white shadow-sm"
                      />
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                  ) : (
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center ring-2 ring-white shadow-sm">
                      <User className="w-5 h-5 text-white" />
                    </div>
                  )}
                  <div className="flex flex-col items-start">
                    <span className="font-semibold text-gray-800 text-sm">{user.name}</span>
                    <span className="text-xs text-gray-500 capitalize">{user.role}</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${userMenuOpen ? 'rotate-180' : ''}`} />
                </motion.button>
                
                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute right-0 top-full mt-3 w-56 bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-2xl py-2 z-50"
                    >
                      <div className="px-3 py-2 border-b border-gray-100">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Account</p>
                      </div>
                      <Link
                        to={user.role === 'provider' ? '/dashboard' : '/profile'}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 group"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-colors">
                          <User className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-medium text-gray-800">My Account</span>
                          <span className="text-xs text-gray-500">Manage profile settings</span>
                        </div>
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-red-50 hover:to-orange-50 transition-all duration-200 group w-full text-left"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center group-hover:from-red-200 group-hover:to-orange-200 transition-colors">
                          <LogOut className="w-4 h-4 text-red-600" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-medium text-gray-800">Logout</span>
                          <span className="text-xs text-gray-500">Sign out of account</span>
                        </div>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline" size="sm" className="gap-2 hover:border-blue-200 hover:bg-blue-50 transition-all duration-200">
                    <LogIn className="w-4 h-4" />
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="outline" size="sm" className="gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                    <UserPlus className="w-4 h-4" />
                    Get Started
                  </Button>
                </Link>
              </>
            )}
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
              {getFilteredNavLinks().map((link, index) => (
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
                {user ? (
                  <>
                    <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
                      {user.avatar ? (
                        <div className="relative">
                          <img 
                            src={user.avatar} 
                            alt={user.name} 
                            className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm"
                          />
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center ring-2 ring-white shadow-sm">
                          <User className="w-5 h-5 text-white" />
                        </div>
                      )}
                      <div className="flex flex-col items-start">
                        <span className="font-semibold text-gray-800">{user.name}</span>
                        <span className="text-xs text-gray-500 capitalize">{user.role}</span>
                      </div>
                    </div>
                    <Link
                      to={user.role === 'provider' ? '/dashboard' : '/profile'}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                        <User className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium text-gray-800">My Account</span>
                        <span className="text-xs text-gray-500">Manage profile</span>
                      </div>
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsOpen(false);
                      }}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-red-50 hover:to-orange-50 transition-all duration-200 w-full text-left"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center">
                        <LogOut className="w-4 h-4 text-red-600" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium text-gray-800">Logout</span>
                        <span className="text-xs text-gray-500">Sign out</span>
                      </div>
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/login" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full gap-2 hover:border-blue-200 hover:bg-blue-50 transition-all duration-200">
                        <LogIn className="w-4 h-4" />
                        Sign In
                      </Button>
                    </Link>
                    <Link to="/signup" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                        <UserPlus className="w-4 h-4" />
                        Get Started
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
