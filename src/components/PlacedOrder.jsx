import React, { useEffect, useState } from "react";
import { Link, Links } from "react-router-dom";
import {
  BsPerson,
  BsEnvelope,
  BsTelephone,
  BsGeoAlt,
  BsArrowRightCircle,
} from "react-icons/bs";
import { motion } from "framer-motion";

function PlacedOrder() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    destination: "",
    progress: "pending",
    driver: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleForm = (e) => {
    e.preventDefault();

    const arrayOrder = JSON.parse(localStorage.getItem("orders")) || [];
    arrayOrder.push(formData);
    localStorage.setItem("orders", JSON.stringify(arrayOrder));
    if (formData !== null) {
      alert("Order Saved!");
    } else {
      alert("Please Fill the form!");
    }
  };

  // --- Focus Animation Variant ---
  const focusVariant = {
    focus: {
      scale: 1.02,
      boxShadow: "0px 0px 15px rgba(255, 123, 0, 0.45)",
      transition: { type: "spring", stiffness: 180, damping: 12 },
    },
    blur: {
      scale: 1,
      boxShadow: "0px 0px 0px rgba(0,0,0,0)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-300 py-20 px-6">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-5xl font-extrabold text-center bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent drop-shadow-xl"
      >
        Place Your Delivery Order
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="text-center text-gray-700 mt-3 text-lg"
      >
        Fast • Secure • Reliable — Enter your details to schedule your delivery
      </motion.p>

      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45 }}
        className="max-w-3xl mx-auto mt-14 bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/40"
      >
        <form onSubmit={handleForm} className="space-y-7">
          {/* First + Last name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label className="text-sm font-semibold">First Name</label>
              <motion.div
                variants={focusVariant}
                whileFocus="focus"
                whileBlur="blur"
                className="group mt-2 flex items-center gap-3 bg-white rounded-xl px-4 py-3 
                           border border-gray-300 shadow-md 
                           focus-within:border-orange-600 focus-within:ring-2 focus-within:ring-orange-400 
                           transition-all duration-300"
              >
                <BsPerson className="text-orange-600 text-xl" />
                <input
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  required
                  placeholder="John"
                  className="w-full bg-transparent outline-none text-gray-700"
                />
              </motion.div>
            </div>

            {/* Last Name */}
            <div>
              <label className="text-sm font-semibold">Last Name</label>
              <motion.div
                variants={focusVariant}
                whileFocus="focus"
                whileBlur="blur"
                className="group mt-2 flex items-center gap-3 bg-white rounded-xl px-4 py-3 
                           border border-gray-300 shadow-md 
                           focus-within:border-orange-600 focus-within:ring-2 focus-within:ring-orange-400 
                           transition-all duration-300"
              >
                <BsPerson className="text-orange-600 text-xl" />
                <input
                  type="text"
                  name="lastName"
                  required
                  onChange={handleChange}
                  placeholder="Doe"
                  className="w-full bg-transparent outline-none text-gray-700"
                />
              </motion.div>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-semibold">Email Address</label>
            <motion.div
              variants={focusVariant}
              whileFocus="focus"
              whileBlur="blur"
              className="group mt-2 flex items-center gap-3 bg-white rounded-xl px-4 py-3 
                         border border-gray-300 shadow-md 
                         focus-within:border-orange-600 focus-within:ring-2 focus-within:ring-orange-400 
                         transition-all duration-300"
            >
              <BsEnvelope className="text-orange-600 text-xl" />
              <input
                type="email"
                name="email"
                required
                onChange={handleChange}
                placeholder="example@email.com"
                className="w-full bg-transparent outline-none text-gray-700"
              />
            </motion.div>
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-semibold">Phone Number</label>
            <motion.div
              variants={focusVariant}
              whileFocus="focus"
              whileBlur="blur"
              className="group mt-2 flex items-center gap-3 bg-white rounded-xl px-4 py-3 
                         border border-gray-300 shadow-md 
                         focus-within:border-orange-600 focus-within:ring-2 focus-within:ring-orange-400 
                         transition-all duration-300"
            >
              <BsTelephone className="text-orange-600 text-xl" />
              <input
                type="tel"
                name="phone"
                onChange={handleChange}
                placeholder="+20 11xxxxxxx"
                className="w-full bg-transparent outline-none text-gray-700"
              />
            </motion.div>
          </div>

          {/* Location */}
          <div>
            <label className="text-sm font-semibold">Pickup Location</label>
            <motion.div
              variants={focusVariant}
              whileFocus="focus"
              whileBlur="blur"
              className="group mt-2 flex items-center gap-3 bg-white rounded-xl px-4 py-3 
                         border border-gray-300 shadow-md 
                         focus-within:border-orange-600 focus-within:ring-2 focus-within:ring-orange-400 
                         transition-all duration-300"
            >
              <BsGeoAlt className="text-orange-600 text-xl" />
              <select
                required
                name="location"
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-gray-700"
              >
                <option value="">Choose...</option>
                <option value="Giza">Giza</option>
                <option value="Cairo">Cairo</option>
                <option value="Helwan">Helwan</option>
                <option value="Alexandria">Alexandria</option>
                <option value="Qena">Qena</option>
                <option value="Sharm EL- Sheikh">Sharm EL- Sheikh</option>
              </select>
            </motion.div>
          </div>

          {/* Destination */}
          <div>
            <label className="text-sm font-semibold">Destination</label>
            <motion.div
              variants={focusVariant}
              whileFocus="focus"
              whileBlur="blur"
              className="group mt-2 flex items-center gap-3 bg-white rounded-xl px-4 py-3 
                         border border-gray-300 shadow-md 
                         focus-within:border-orange-600 focus-within:ring-2 focus-within:ring-orange-400 
                         transition-all duration-300"
            >
              <BsGeoAlt className="text-orange-600 text-xl" />
              <select
                required
                name="destination"
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-gray-700"
              >
                <option value="">Choose...</option>
                <option value="Giza">Giza</option>
                <option value="Cairo">Cairo</option>
                <option value="Helwan">Helwan</option>
                <option value="Alexandria">Alexandria</option>
                <option value="Qena">Qena</option>
                <option value="Sharm EL- Sheikh">Sharm EL- Sheikh</option>
              </select>
            </motion.div>
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
            className="mt-6 flex items-center gap-3 mx-auto px-8 py-3 bg-orange-600 text-white 
                       rounded-full shadow-lg hover:bg-orange-700 transition text-xl"
          >
            <Link to={"/vieworder"}>Submit Order</Link>
            <BsArrowRightCircle size={28} />
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default PlacedOrder;
