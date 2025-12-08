import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BsEnvelope,
  BsLock,
  BsPersonCircle,
  BsArrowRight,
} from "react-icons/bs";

function Login() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focusedInput, setFocusedInput] = useState("");
  const navigate = useNavigate();

  const demoAdminEmail = "admin@email.com";
  const demoAdminPassword = "admin123";
  const demoUserEmail = "user@email.com";
  const demoUserPassword = "user123";
  const demoDriverEmail = "driver@email.com";
  const demoDriverPassword = "driver123";

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === demoAdminEmail && password === demoAdminPassword) {
      navigate("/admin");
    } else if (email === demoUserEmail && password === demoUserPassword) {
      navigate("/placedorder");
    } else if (email === demoDriverEmail && password === demoDriverPassword) {
      navigate("/Driver");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: "url(src/components/uploads/orderNow_bg.png)",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 mt-10 min-h-screen flex items-center  justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          {/* Login Card */}
          <motion.div
            whileHover={{
              scale: 1.01,
            }}
            className="bg-white/10 duration-300 backdrop-blur-2xl transition ease-in-out rounded-3xl p-8 shadow-2xl border border-white/20"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1.2 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
                className="duration-400 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 rounded-full mb-4 shadow-lg shadow-orange-500/50"
              >
                <BsPersonCircle className="w-8 h-8 text-white" />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-extrabold   text-orange-600 mb-2"
              >
                Login
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-white/60 text-sm"
              >
                Welcome back!
              </motion.p>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email Input */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-2"
              >
                <label className="block text-white/80 text-sm font-medium ml-1">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center  pointer-events-none">
                    <BsEnvelope
                      className={`w-5 h-5 transition-colors duration-600 ${
                        focusedInput === "email"
                          ? "text-orange-400"
                          : "text-white/40"
                      }`}
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="example@email.com"
                    // value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocusedInput("email")}
                    onBlur={() => setFocusedInput(null)}
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-orange-500 focus:bg-white/10 transition-all duration-600"
                    required
                  />
                </div>
              </motion.div>

              {/* Password Input */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="space-y-2"
              >
                <label className="block text-white/80 text-sm font-medium ml-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <BsLock
                      className={`w-5 h-5 transition-colors duration-300 ${
                        focusedInput === "password"
                          ? "text-orange-400"
                          : "text-white/40"
                      }`}
                    />
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setFocusedInput("password")}
                    onBlur={() => setFocusedInput(null)}
                    placeholder="Enter your password"
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-orange-500 focus:bg-white/10 transition-all duration-600"
                    required
                  />
                </div>
              </motion.div>

              {/* Forgot Password */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex justify-end"
              >
                <a
                  href="#"
                  className="text-sm text-orange-400 hover:text-orange-300 transition-colors"
                >
                  Forgot Password?
                </a>
              </motion.div>

              {/* Login Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 rounded-xl shadow-lg shadow-orange-500/50 flex items-center justify-center gap-2 group"
              >
                <span>Login</span>
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <BsArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button>

              {/* Divider */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="relative my-6"
              >
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/20" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-transparent text-white/60">
                    Don't have an account?
                  </span>
                </div>
              </motion.div>

              {/* Register Button */}
              <Link to="/register" className="block">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  type="button"
                  className="w-full bg-white/5 border-2 border-white/20 text-white font-semibold py-3 rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Create New Account</span>
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <BsArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              </Link>
            </form>

            {/* Demo Credentials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10"
            >
              <p className="text-white/60 text-xs text-center mb-2">
                Demo Credentials:
              </p>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="text-center">
                  <p className="text-orange-400 font-semibold mb-1">Admin</p>
                  <p className="text-white/60">admin@email.com</p>
                  <p className="text-white/60">admin123</p>
                </div>
                <div className="text-center">
                  <p className="text-orange-400 font-semibold mb-1">User</p>
                  <p className="text-white/60">user@email.com</p>
                  <p className="text-white/60">user123</p>
                </div>
                <div className="text-center">
                  <p className="text-orange-400 font-semibold mb-1">Driver</p>
                  <p className="text-white/60">driver@email.com</p>
                  <p className="text-white/60">driver123</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Login;
