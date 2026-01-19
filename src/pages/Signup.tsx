import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  User, 
  ArrowRight, 
  ArrowLeft, 
  Home, 
  Briefcase,
  CheckCircle2,
  MapPin,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { register } from "@/services/api";

const steps = [
  { id: 1, title: "Role", description: "Choose your role" },
  { id: 2, title: "Details", description: "Personal info" },
  { id: 3, title: "Complete", description: "All set!" },
];

const Signup = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<"user" | "provider" | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    location: "",
    specialty: "",
  });
  const [errors, setErrors] = useState<{
    name: string;
    email: string;
    phone: string;
    password: string;
    location: string;
    general?: string;
  }>({
    name: "",
    email: "",
    phone: "",
    password: "",
    location: "",
  });
  const [loading, setLoading] = useState(false);

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Validate form
  const newErrors = {
    name: formData.name.trim() ? "" : "Name is required",
    email:
      formData.email.trim() && formData.email.includes("@")
        ? ""
        : "Valid email is required",
    phone: formData.phone.trim() ? "" : "Phone is required",
    password:
      formData.password.length >= 6
        ? ""
        : "Password must be at least 6 characters",
    location:
      role === "provider" && !formData.location.trim()
        ? "Location is required for providers"
        : "",
  };

  setErrors(newErrors);

  const hasErrors = Object.values(newErrors).some(
    (error) => error !== ""
  );

  if (hasErrors) return;

  setLoading(true);

  try {
    const payload = {
      ...formData,
      role,
      location:
        formData.location.trim() ||
        (role === "user" ? "N/A" : formData.location),
    };

    const result = await register(payload);

    if (result.success) {
      handleNext();
    } else {
      setErrors((prev) => ({
        ...prev,
        general: result.error || "Registration failed",
      }));
    }
  } catch (error) {
    setErrors((prev) => ({
      ...prev,
      general: "Network error. Please try again.",
    }));
  } finally {
    setLoading(false);
  }
};


  const handleFinalNavigation = () => {
    // Navigate based on role
    if (role === "provider") {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md mx-auto p-8"
      >
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl">HomeServe</span>
          </Link>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center gap-2">
              <motion.div
                initial={false}
                animate={{
                  backgroundColor: currentStep >= step.id ? "hsl(var(--accent))" : "hsl(var(--muted))",
                }}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  currentStep >= step.id ? "text-accent-foreground" : "text-muted-foreground"
                }`}
              >
                {currentStep > step.id ? <CheckCircle2 className="w-5 h-5" /> : step.id}
              </motion.div>
              {index < steps.length - 1 && (
                <motion.div
                  initial={false}
                  animate={{
                    backgroundColor: currentStep > step.id ? "hsl(var(--accent))" : "hsl(var(--muted))",
                  }}
                  className="w-12 h-1 rounded-full"
                />
              )}
            </div>
          ))}
        </div>

          <AnimatePresence mode="wait">
            {/* Step 1: Role Selection */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <h1 className="font-display text-3xl font-bold mb-2">Join HomeServe</h1>
                <p className="text-muted-foreground mb-8">
                  How do you want to use HomeServe?
                </p>

                <div className="space-y-4 mb-8">
                  {/* User Option */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setRole("user")}
                    className={`w-full p-6 rounded-2xl border-2 text-left transition-all ${
                      role === "user"
                        ? "border-accent bg-accent/5"
                        : "border-border hover:border-accent/50"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        role === "user" ? "bg-accent text-accent-foreground" : "bg-muted"
                      }`}>
                        <User className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">I need home services</h3>
                        <p className="text-sm text-muted-foreground">
                          Find and book trusted professionals for your home
                        </p>
                      </div>
                      {role === "user" && <CheckCircle2 className="w-6 h-6 text-accent" />}
                    </div>
                  </motion.button>

                  {/* Provider Option */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setRole("provider")}
                    className={`w-full p-6 rounded-2xl border-2 text-left transition-all ${
                      role === "provider"
                        ? "border-accent bg-accent/5"
                        : "border-border hover:border-accent/50"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        role === "provider" ? "bg-accent text-accent-foreground" : "bg-muted"
                      }`}>
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">I'm a service provider</h3>
                        <p className="text-sm text-muted-foreground">
                          Grow your business and find new customers
                        </p>
                      </div>
                      {role === "provider" && <CheckCircle2 className="w-6 h-6 text-accent" />}
                    </div>
                  </motion.button>
                </div>

                <Button
                  variant="hero"
                  size="lg"
                  className="w-full gap-2"
                  onClick={handleNext}
                  disabled={!role}
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            )}

            {/* Step 2: Personal Details */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 mx-auto"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>

                <h1 className="font-display text-3xl font-bold mb-2">
                  {role === "provider" ? "Provider Details" : "Your Details"}
                </h1>
                <p className="text-muted-foreground mb-8">
                  Tell us a bit about yourself
                </p>

                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        disabled={loading}
                        className={`w-full pl-12 pr-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent ${
                          errors.name ? "border-red-500" : "border-border"
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        disabled={loading}
                        className={`w-full pl-12 pr-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent ${
                          errors.email ? "border-red-500" : "border-border"
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 123-4567"
                        disabled={loading}
                        className={`w-full pl-12 pr-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent ${
                          errors.phone ? "border-red-500" : "border-border"
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* Location (for providers) */}
                  {role === "provider" && (
                    <div>
                      <label className="block text-sm font-medium mb-2">Service Area</label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="New York, NY"
                          disabled={loading}
                          className={`w-full pl-12 pr-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent ${
                            errors.location ? "border-red-500" : "border-border"
                          }`}
                        />
                      </div>
                      {errors.location && (
                        <p className="text-red-500 text-sm mt-1">{errors.location}</p>
                      )}
                    </div>
                  )}

                  {/* Password */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        placeholder="Create a strong password"
                        disabled={loading}
                        className={`w-full pl-12 pr-12 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent ${
                          errors.password ? "border-red-500" : "border-border"
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        disabled={loading}
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                    )}
                  </div>

                  {/* General Error */}
                  {errors.general && (
                    <div className="mb-4 p-3 rounded-lg bg-red-100 border border-red-400 text-red-700">
                      {errors.general}
                    </div>
                  )}

                  <Button type="submit" variant="hero" size="lg" className="w-full gap-2" disabled={loading}>
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-transparent animate-spin rounded-full"></div>
                        Creating Account...
                      </>
                    ) : (
                      <>
                        Create Account
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>
            )}

            {/* Step 3: Complete */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.1 }}
                  className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 className="w-10 h-10 text-accent" />
                </motion.div>

                <h1 className="font-display text-3xl font-bold mb-2">Welcome aboard!</h1>
                <p className="text-muted-foreground mb-8">
                  Your account has been created successfully.
                  {role === "provider"
                    ? " Start setting up your profile to attract customers."
                    : " Start exploring our services."}
                </p>

                <button 
                  onClick={handleFinalNavigation}
                  className="w-full"
                >
                  <Button variant="hero" size="lg" className="gap-2">
                    {role === "provider" ? "Set Up Profile" : "Explore Services"}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Sign In Link */}
          {currentStep < 3 && (
            <p className="text-center mt-8 text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="text-accent font-medium hover:underline">
                Sign in
              </Link>
            </p>
          )}
        </motion.div>
    </div>
  );
};

export default Signup;
