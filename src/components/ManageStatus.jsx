import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsClipboardCheck, BsCheckCircleFill } from "react-icons/bs";

function ManageStatus() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [orders, setOrders] = useState([]);

  const progressImages = {
    qualityAssurance:
      "src/components/uploads/quality-progress-bars-2259687.png",
    warehouse: "src/components/uploads/warehouse--progress-bars-2259687.png",
    driver: "src/components/uploads/driver-progress-bars-2259687.png",
    delivered: "src/components/uploads/delivered-progress-bars-2259687.png",
    default: "src/components/uploads/empty-progress-bars-2259687.png",
  };

  const progressLabels = {
    qualityAssurance: "Quality Assurance",
    warehouse: "Warehouse",
    driver: "Driver",
    delivered: "Delivered",
  };

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  const updateProgress = (index, newStatus) => {
    const updated = [...orders];
    updated[index].progress = newStatus;

    setOrders(updated);
    localStorage.setItem("orders", JSON.stringify(updated));
  };

  if (!orders.length) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-6 shadow-lg shadow-orange-500/50">
            <BsClipboardCheck className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            No Orders Available
          </h1>
          <p className="text-white/60">
            There are no orders to manage at the moment.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: "url(src/components/uploads/manage-background.png)",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 mt-10 min-h-screen px-4 py-12">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-6 shadow-lg shadow-orange-500/50"
            >
              <BsClipboardCheck className="w-10 h-10 text-white" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent mb-3"
            >
              Manage Orders Status
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-white/60 text-lg"
            >
              Track and update order progress
            </motion.p>
          </motion.div>

          {/* Orders Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {orders.map((order, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5 + index * 0.1,
                  duration: 0.6,
                  ease: [0.42, 0, 0.58, 1],
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="bg-white/10 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl border border-white/20 hover:border-orange-400/50 transition-all duration-300"
                >
                  {/* Status Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 rounded-full shadow-lg">
                      <span className="text-white font-bold">
                        Order #{index + 1}
                      </span>
                    </div>
                    {order.progress && (
                      <div className="flex items-center gap-2 bg-green-500/20 px-3 py-1 rounded-full border border-green-500/50">
                        <BsCheckCircleFill className="text-green-400" />
                        <span className="text-green-400 text-xs font-semibold">
                          {progressLabels[order.progress]}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Order Details */}
                  <div className="space-y-3 mb-6">
                    {[
                      {
                        label: "Name",
                        value: `${order.firstName} ${order.lastName}`,
                      },
                      { label: "Email", value: order.email },
                      { label: "Phone", value: order.phone },
                      { label: "Location", value: order.location },
                      { label: "Destination", value: order.destination },
                    ].map((field, idx) => (
                      <div
                        key={idx}
                        className="bg-white/5 rounded-xl p-3 border border-white/10"
                      >
                        <p className="text-white/60 text-xs mb-1">
                          {field.label}
                        </p>
                        <p className="text-white font-medium text-sm">
                          {field.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Progress Selection */}
                  <div className="space-y-3 mb-4">
                    <label className="text-white/80 text-sm font-medium">
                      Update Progress
                    </label>
                    <select
                      value={order.progress || ""}
                      onChange={(e) => updateProgress(index, e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-xl text-white focus:outline-none focus:border-orange-500 focus:bg-white/10 transition-all duration-300 cursor-pointer"
                    >
                      <option value="" className="bg-slate-900">
                        --Select Status--
                      </option>
                      <option value="qualityAssurance" className="bg-slate-900">
                        Quality Assurance
                      </option>
                      <option value="warehouse" className="bg-slate-900">
                        Warehouse
                      </option>
                      <option value="driver" className="bg-slate-900">
                        Driver
                      </option>
                      <option value="delivered" className="bg-slate-900">
                        Delivered
                      </option>
                    </select>
                  </div>

                  {/* Progress Image */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden rounded-xl border border-white/10"
                  >
                    <img
                      src={
                        progressImages[order.progress] || progressImages.default
                      }
                      alt="Progress"
                      className="w-full h-auto"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageStatus;
