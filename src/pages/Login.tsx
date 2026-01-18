import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, ArrowRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email.trim() || !password.trim()) {
      alert('Please enter both email and password');
      return;
    }
    
    // Simulate login logic
    console.log("Login attempt:", { email, password });
    
    // For demo purposes, accept any email/password
    const userData = {
      email: email,
      name: email.split('@')[0], // Extract name from email
      role: email.includes('provider') ? 'provider' : 'user', // Simple role detection
      loginTime: new Date().toISOString()
    };
    
    // Store user data in localStorage
    localStorage.setItem('user', JSON.stringify(userData));
    
    console.log("Login successful:", userData);
    
    // Show success message and navigate
    alert('Login successful! Redirecting to dashboard...');
    
    // Navigate based on role after a short delay
    setTimeout(() => {
      if (userData.role === 'provider') {
        navigate('/dashboard');
      } else {
        navigate('/');
      }
    }, 1000);
    
    // In a real app, you would:
    // 1. Validate credentials against backend
    // 2. Get user data including role
    // 3. Create session/token
    // 4. Redirect to appropriate dashboard
  };

  const handleGoogleLogin = () => {
    // Google OAuth implementation
    try {
      // For development, use a mock Google login
      // In production, you would integrate with Google OAuth 2.0
      console.log("Initiating Google login...");
      
      // Mock Google OAuth flow
      const googleAuthUrl = `https://accounts.google.com/oauth/authorize?` +
        `client_id=${process.env.VITE_GOOGLE_CLIENT_ID || 'your-google-client-id'}&` +
        `redirect_uri=${encodeURIComponent(window.location.origin + '/auth/google/callback')}&` +
        `response_type=code&` +
        `scope=email%20profile&` +
        `access_type=offline`;
      
      // For demo purposes, simulate successful Google login
      setTimeout(() => {
        const mockGoogleUser = {
          email: 'user@gmail.com',
          name: 'Google User',
          picture: 'https://via.placeholder.com/150',
          role: 'user', // Default Google users as regular users
          loginTime: new Date().toISOString()
        };
        
        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify(mockGoogleUser));
        
        console.log('Google login successful:', mockGoogleUser);
        
        // Show success message
        alert('Google login successful! Redirecting to dashboard...');
        
        // In a real app, you would:
        // 1. Redirect to Google OAuth: window.location.href = googleAuthUrl
        // 2. Handle the callback in your backend
        // 3. Exchange code for tokens
        // 4. Create user session
        // 5. Redirect to dashboard
      }, 1000);
      
    } catch (error) {
      console.error('Google login error:', error);
      alert('Google login failed. Please try again.');
    }
  };

  const handleGitHubLogin = () => {
    // GitHub OAuth implementation
    try {
      console.log("Initiating GitHub login...");
      
      // Mock GitHub OAuth flow
      const githubAuthUrl = `https://github.com/login/oauth/authorize?` +
        `client_id=${process.env.VITE_GITHUB_CLIENT_ID || 'your-github-client-id'}&` +
        `redirect_uri=${encodeURIComponent(window.location.origin + '/auth/github/callback')}&` +
        `scope=user:email`;
      
      // For demo purposes, simulate successful GitHub login
      setTimeout(() => {
        const mockGitHubUser = {
          email: 'user@github.com',
          name: 'GitHub User',
          picture: 'https://via.placeholder.com/150'
        };
        console.log('GitHub login successful:', mockGitHubUser);
        alert('GitHub login simulated successfully! Check console for user data.');
      }, 1000);
      
    } catch (error) {
      console.error('GitHub login error:', error);
      alert('GitHub login failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full mx-auto p-8"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 mb-8 justify-center">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Home className="w-5 h-5 text-white" />
          </div>
          <span className="font-display font-bold text-xl">HomeServe</span>
        </Link>

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="font-display text-3xl font-bold mb-2">Welcome back</h1>
          <p className="text-muted-foreground">
            Sign in to your account to continue
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium">Password</label>
              <Link to="/forgot-password" className="text-sm text-accent hover:underline">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full pl-12 pr-12 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <div className="relative z-10">
            <Button type="submit" variant="hero" size="lg" className="w-full gap-2">
              Sign In
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-border" />
          <span className="text-sm text-muted-foreground">or continue with</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Social Login */}
        <div className="grid grid-cols-2 gap-4">
          <Button 
            variant="outline" 
            size="lg" 
            className="gap-2"
            onClick={handleGoogleLogin}
            type="button"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Google
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="gap-2"
            onClick={handleGitHubLogin}
            type="button"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            GitHub
          </Button>
        </div>

        {/* Sign Up Link */}
        <p className="text-center mt-8 text-muted-foreground">
          Don't have an account?{" "}
          <Link to="/signup" className="text-accent font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
