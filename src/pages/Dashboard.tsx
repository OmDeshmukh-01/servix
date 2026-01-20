import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Calendar,
  Clock,
  Settings,
  User,
  Bell,
  Search,
  ChevronRight,
  Star,
  MapPin,
  CheckCircle2,
  XCircle,
  MoreHorizontal,
  TrendingUp,
  CreditCard,
  MessageSquare,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { getUser } from "@/services/api";

const upcomingBookings = [
  {
    id: 1,
    service: "Plumbing Repair",
    provider: "John's Plumbing",
    date: "Jan 18, 2024",
    time: "10:00 AM",
    status: "confirmed",
    price: "$120",
  },
  {
    id: 2,
    service: "House Cleaning",
    provider: "Clean Experts",
    date: "Jan 20, 2024",
    time: "2:00 PM",
    status: "pending",
    price: "$85",
  },
  {
    id: 3,
    service: "Electrical Work",
    provider: "PowerFix Pro",
    date: "Jan 22, 2024",
    time: "9:00 AM",
    status: "confirmed",
    price: "$200",
  },
];

const recentActivity = [
  { action: "Completed booking with Clean Experts", time: "2 hours ago", type: "success" },
  { action: "Payment processed for Plumbing Repair", time: "1 day ago", type: "info" },
  { action: "Left review for AC Maintenance", time: "3 days ago", type: "success" },
];

const quickStats = [
  { label: "Total Bookings", value: "24", icon: Calendar, change: "+3 this month" },
  { label: "Active Services", value: "3", icon: Clock, change: "2 pending" },
  { label: "Saved Providers", value: "8", icon: Star, change: "+2 new" },
  { label: "Total Spent", value: "$1,240", icon: CreditCard, change: "This year" },
];

const sidebarItems = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: Calendar, label: "Bookings", active: false },
  { icon: MessageSquare, label: "Messages", active: false, badge: 3 },
  { icon: Star, label: "Reviews", active: false },
  { icon: CreditCard, label: "Payments", active: false },
  { icon: Settings, label: "Settings", active: false },
];

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = getUser();
    setUser(currentUser);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="flex pt-20">
        {/* Sidebar */}
        <motion.aside
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className={`fixed left-0 top-20 h-[calc(100vh-5rem)] ${
            sidebarOpen ? "w-64" : "w-20"
          } bg-card border-r border-border p-4 transition-all duration-300 z-40 hidden lg:block`}
        >
          <div className="flex flex-col h-full">
            {/* Nav Items */}
            <nav className="flex-1 space-y-1 mt-6">
              {sidebarItems.map((item) => (
                <motion.button
                  key={item.label}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors ${
                    item.active
                      ? "bg-accent/10 text-accent"
                      : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                  } ${!sidebarOpen && "justify-center"}`}
                >
                  <item.icon className="w-5 h-5" />
                  {sidebarOpen && (
                    <>
                      <span className="flex-1 text-left text-sm font-medium">{item.label}</span>
                      {item.badge && (
                        <span className="px-2 py-0.5 rounded-full bg-accent text-accent-foreground text-xs">
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                </motion.button>
              ))}
            </nav>

            {/* Logout */}
            <button className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors ${!sidebarOpen && "justify-center"}`}>
              <LogOut className="w-5 h-5" />
              {sidebarOpen && <span className="text-sm font-medium">Logout</span>}
            </button>
          </div>
        </motion.aside>

        {/* Main Content */}
        <main className={`flex-1 ${sidebarOpen ? "lg:ml-64" : "lg:ml-20"} p-4 sm:p-6 lg:p-8 transition-all duration-300`}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8"
          >
            <div>
              <h1 className="font-display text-2xl sm:text-3xl font-bold">
                Welcome back, {user?.name || 'User'}
              </h1>
              <p className="text-muted-foreground">Here's what's happening with your home services</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center">
                  2
                </span>
              </Button>
              <Button variant="hero" className="gap-2">
                <Search className="w-4 h-4" />
                Find Available Work
              </Button>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
          >
            {quickStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                whileHover={{ y: -4 }}
                className="glass-card rounded-2xl p-5"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-accent" />
                  </div>
                  <TrendingUp className="w-4 h-4 text-green-500" />
                </div>
                <p className="font-display text-2xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-xs text-accent mt-1">{stat.change}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Upcoming Bookings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 glass-card rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-xl font-bold">Upcoming Bookings</h2>
                <Button variant="ghost" size="sm" className="gap-1 text-accent">
                  View All
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-4">
                {upcomingBookings.map((booking, index) => (
                  <motion.div
                    key={booking.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.01 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-border/50 hover:border-accent/30 transition-all cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{booking.service}</h3>
                      <p className="text-sm text-muted-foreground">{booking.provider}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{booking.date}</p>
                      <p className="text-xs text-muted-foreground">{booking.time}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          booking.status === "confirmed"
                            ? "bg-green-500/10 text-green-600"
                            : "bg-yellow-500/10 text-yellow-600"
                        }`}
                      >
                        {booking.status}
                      </span>
                      <span className="font-semibold text-accent">{booking.price}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-2xl p-6"
            >
              <h2 className="font-display text-xl font-bold mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        activity.type === "success"
                          ? "bg-green-500/10"
                          : "bg-accent/10"
                      }`}
                    >
                      <CheckCircle2
                        className={`w-4 h-4 ${
                          activity.type === "success" ? "text-green-500" : "text-accent"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
