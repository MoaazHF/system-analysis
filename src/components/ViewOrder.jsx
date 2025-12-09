import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  BsMapFill,
  BsTelephone,
  BsSpeedometer2,
  BsCurrencyDollar,
  BsBoxSeam,
} from "react-icons/bs";
import { motion } from "framer-motion";

function ViewOrder() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* ---------------- Animated Background Blobs (Framer Motion) ---------------- */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ scale: [1, 1.25, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* ---------------- Background Image ---------------- */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: "url(src/components/uploads/admin-bg.png)" }}
      ></div>

      {/* ---------------- Page Wrapper ---------------- */}
      <div className="relative mt-10 z-10 container mx-auto px-6 py-16">
        {/* ---------------- Header ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex justify-center"
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 rounded-2xl shadow-2xl shadow-orange-500/50"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              <BsBoxSeam className="w-8 h-8 text-white" />
            </motion.div>

            <h1 className="text-3xl font-bold text-white tracking-tight">
              View Order Details
            </h1>
          </motion.div>
        </motion.div>

        {/* ---------------- Main Content ---------------- */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-gradient-to-br from-orange-500/90 to-orange-600/90 
                       backdrop-blur-xl rounded-3xl p-10 shadow-2xl 
                       border border-orange-400/50 max-w-xl w-full"
          >
            {/* Receipt Header */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6 pb-6 border-b-2 border-dashed border-white/40 text-center"
            >
              <h2 className="text-3xl font-bold text-white">Receipt</h2>
              <p className="text-white/80 text-sm">Order Confirmation</p>
            </motion.div>

            {/* Receipt Info */}
            <div className="space-y-4 text-white">
              {/* Item */}
              {[
                { label: "Name", value: "Abdo Sayed" },
                { label: "Location", value: "Helwan", icon: <BsMapFill /> },
                {
                  label: "Destination",
                  value: "Alexandria",
                  icon: <BsMapFill />,
                },
                {
                  label: "Delivery Number",
                  value: "010369908",
                  icon: <BsTelephone />,
                },
                {
                  label: "Order Weight",
                  value: "4.9 kg",
                  icon: <BsSpeedometer2 />,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="bg-white/10 rounded-xl p-4 border border-white/20
                             hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 text-white/70 text-sm mb-1">
                    {item.icon && (
                      <span className="text-white/70">{item.icon}</span>
                    )}
                    <p>{item.label}</p>
                  </div>
                  <p className="text-xl font-semibold">{item.value}</p>
                </motion.div>
              ))}

              {/* Pricing Section */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-white/10 rounded-xl p-4 border border-white/20"
              >
                <div className="flex items-center gap-2 mb-3 text-white/70">
                  <BsCurrencyDollar />
                  <p className="text-sm">Cost Breakdown</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-white">
                    <span>Order Cost</span>
                    <span>1500.00 EGP</span>
                  </div>

                  <div className="flex justify-between text-white pb-3 border-b border-white/30">
                    <span>Transportation</span>
                    <span>900.00 EGP</span>
                  </div>

                  <div className="flex justify-between text-white pt-2">
                    <span className="text-lg font-bold">Total Cost</span>
                    <span className="text-2xl font-bold">2400.00 EGP</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* ---------------- Action Buttons ---------------- */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-8 flex gap-4"
            >
              {/* Keep Order */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => navigate("/placedorder")}
                className="w-1/2 bg-white text-orange-600 
                           font-bold py-4 rounded-xl 
                           shadow-lg hover:shadow-xl transition"
              >
                Keep Order
              </motion.button>

              {/* Send Order */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => {
                  alert("The Order Will Reach The Destination Soon!");
                  navigate("/track");
                }}
                className="w-1/2 bg-green-600 text-white 
                           font-bold py-4 rounded-xl
                           shadow-lg hover:bg-green-500 transition"
              >
                Send Order
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ViewOrder;
