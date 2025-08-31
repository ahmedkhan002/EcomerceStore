import React, { useEffect, useState } from "react";
import { User, Lock, Mail, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const Auth = () => {
  const [mode, setMode] = useState("login"); // "login" or "signup"
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState("");
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField("");
  };


  const saveUser = (user) => {
    if (!window.appUsers) window.appUsers = [];
    window.appUsers.push(user);
  };

  const findUser = (email) => {
    if (!window.appUsers) return null;
    return window.appUsers.find((u) => u.email === email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mode === "signup") {
      if (!form.name || !form.email || !form.password) {
        setMessage("⚠️ All fields are required!");
        return;
      }
      if (findUser(form.email)) {
        setMessage("❌ User already exists!");
        return;
      }
      saveUser(form);
      setMessage("✅ Sign up successful! Please log in.");
      setMode("login");
      setForm({ name: "", email: "", password: "" });
    } else {
      if (!form.email || !form.password) {
        setMessage("⚠️ Email and password required!");
        return;
      }
      const user = findUser(form.email);
      if (!user || user.password !== form.password) {
        setMessage("❌ Invalid email or password!");
        return;
      }
      setMessage(`🎉 Welcome back, ${user.name || "User"}!`);
      window.currentUser = user;
      navigate('/')
    }
  };

  const shouldElevateLabel = (fieldName, fieldValue) => {
    return focusedField === fieldName || fieldValue !== "";
  };

  useEffect(() => {
    if(window.currentUser){
      toast.success('User already logged in!')
      navigate('/')
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md backdrop-blur-xl bg-white/90 shadow-2xl rounded-3xl overflow-hidden border border-white/60 hover:shadow-3xl transition-all duration-300">
        {/* Header Tabs */}
        <div className="flex p-2 m-4 bg-gray-100/50 rounded-2xl">
          <button
            className={`flex-1 py-3 px-4 font-semibold rounded-xl transition-all duration-300 ${
              mode === "login"
                ? "bg-white text-blue-600 shadow-lg transform scale-105"
                : "text-gray-600 hover:text-gray-800 hover:bg-white/50"
            }`}
            onClick={() => {
              setMode("login");
              setMessage("");
              setForm({ name: "", email: "", password: "" });
            }}
          >
            Login
          </button>
          <button
            className={`flex-1 py-3 px-4 font-semibold rounded-xl transition-all duration-300 ${
              mode === "signup"
                ? "bg-white text-blue-600 shadow-lg transform scale-105"
                : "text-gray-600 hover:text-gray-800 hover:bg-white/50"
            }`}
            onClick={() => {
              setMode("signup");
              setMessage("");
              setForm({ name: "", email: "", password: "" });
            }}
          >
            Sign Up
          </button>
        </div>

        <div className="p-8 space-y-6">
          {mode === "signup" && (
            <div className="relative group">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors z-10" />
              <input
                type="text"
                name="name"
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl bg-white/80 focus:ring-4 focus:ring-blue-100 focus:border-blue-400 outline-none text-sm transition-all duration-300 hover:border-gray-300"
                value={form.name}
                onChange={handleChange}
                onFocus={() => handleFocus("name")}
                onBlur={handleBlur}
              />
              <label className={`absolute left-12 text-sm transition-all duration-300 pointer-events-none bg-white/80 px-1 ${
                shouldElevateLabel("name", form.name)
                  ? 'top-0 text-xs text-blue-600 transform -translate-y-1/2' 
                  : 'top-1/2 transform -translate-y-1/2 text-gray-400'
              }`}>
                Full Name
              </label>
            </div>
          )}

          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors z-10" />
            <input
              type="email"
              name="email"
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl bg-white/80 focus:ring-4 focus:ring-blue-100 focus:border-blue-400 outline-none text-sm transition-all duration-300 hover:border-gray-300"
              value={form.email}
              onChange={handleChange}
              onFocus={() => handleFocus("email")}
              onBlur={handleBlur}
            />
            <label className={`absolute left-12 text-sm transition-all duration-300 pointer-events-none bg-white/80 px-1 ${
              shouldElevateLabel("email", form.email)
                ? 'top-0 text-xs text-blue-600 transform -translate-y-1/2' 
                : 'top-1/2 transform -translate-y-1/2 text-gray-400'
            }`}>
              Email
            </label>
          </div>

          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors z-10" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-xl bg-white/80 focus:ring-4 focus:ring-blue-100 focus:border-blue-400 outline-none text-sm transition-all duration-300 hover:border-gray-300"
              value={form.password}
              onChange={handleChange}
              onFocus={() => handleFocus("password")}
              onBlur={handleBlur}
            />
            <label className={`absolute left-12 text-sm transition-all duration-300 pointer-events-none bg-white/80 px-1 ${
              shouldElevateLabel("password", form.password)
                ? 'top-0 text-xs text-blue-600 transform -translate-y-1/2' 
                : 'top-1/2 transform -translate-y-1/2 text-gray-400'
            }`}>
              Password
            </label>
            <button
              type="button"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500 transition-colors z-10"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          {message && (
            <p
              className={`text-sm text-center font-medium p-3 rounded-xl transition-all duration-300 ${
                message.includes("✅") || message.includes("🎉")
                  ? "text-green-700 bg-green-50 border border-green-200"
                  : "text-red-700 bg-red-50 border border-red-200"
              }`}
            >
              {message}
            </p>
          )}

          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] focus:ring-4 focus:ring-blue-200"
          >
            {mode === "login" ? "Login" : "Sign Up"}
          </button>

          {mode === "login" && (
            <div className="text-center">
              <button
                type="button"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors underline-offset-4 hover:underline"
                onClick={() => setMessage("💡 Password reset feature coming soon!")}
              >
                Forgot your password?
              </button>
            </div>
          )}
        </div>

        <div className="px-8 pb-6 text-center">
          <p className="text-gray-500 text-sm">
            {mode === "login" ? "Don't have an account? " : "Already have an account? "}
            <button
              className="text-blue-600 font-semibold hover:text-blue-800 transition-colors underline-offset-4 hover:underline"
              onClick={() => {
                setMode(mode === "login" ? "signup" : "login");
                setMessage("");
                setForm({ name: "", email: "", password: "" });
              }}
            >
              {mode === "login" ? "Sign up here" : "Sign in here"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;