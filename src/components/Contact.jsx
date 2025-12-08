import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim()) newErrors.email = "Email is required.";
    if (!message.trim()) newErrors.message = "Message cannot be empty.";

    setErrors(newErrors);

    // Stop submit if errors exist
    if (Object.keys(newErrors).length > 0) return;

    // Otherwise, submit logic here
    console.log("Form submitted:", { name, email, message });
  };

  return (
    <div className="w-full flex justify-center items-center py-16 px-4 bg-gray-50 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg w-full bg-white shadow-xl rounded-2xl p-8"
      >
        <div className="text-center mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">
            Submit An Issue
          </h2>
          <p className="text-gray-600 mt-2">
            Contact our support team and tell us about your problem.
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="text-gray-700 font-medium">Your Name</label>
            <input
              type="text"
              className={`w-full mt-1 px-4 py-2 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-orange-500 duration-500 outline-none`}
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-700 font-medium">Email</label>
            <input
              type="email"
              className={`w-full mt-1 px-4 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-orange-500 duration-500 outline-none`}
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="text-gray-700 font-medium">Your Message</label>
            <textarea
              rows="4"
              className={`w-full mt-1 px-4 py-2 border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-orange-500 duration-500 outline-none`}
              placeholder="Tell us about your problem..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold shadow hover:bg-black duration-500 transition"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default Contact;
