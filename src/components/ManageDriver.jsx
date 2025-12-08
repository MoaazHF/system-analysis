import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsTruck, BsPersonCheckFill } from "react-icons/bs";

function ManageDriver() {
  const [orders, setOrders] = useState([]);
  const drivers = ["Tommy", "Michel", "Kareem"];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  const assignDriver = (index, driverName) => {
    const updated = [...orders];
    updated[index].driver = driverName;
    setOrders(updated);
    localStorage.setItem("orders", JSON.stringify(updated));
  };

  if (!orders.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-6 shadow-lg shadow-orange-500/50">
            <BsTruck className="w-12 h-12 text-white" />
          </div>

          <h1 className="text-3xl font-bold text-white mb-2">
            No Assigned Orders
          </h1>
          <p className="text-white/60">
            No orders available to assign drivers.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Soft background texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('src/components/uploads/manage-background.png')] bg-cover bg-center" />

      {/* Main Content */}
      <div className="relative mt-10 z-10 px-4 py-16 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 180 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-6 shadow-lg shadow-orange-500/50"
          >
            <BsPersonCheckFill className="w-10 h-10 text-white" />
          </motion.div>

          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent drop-shadow-lg">
            Assign Drivers
          </h1>

          <p className="text-white/60 mt-2 text-lg">
            Manage driver assignments for each order
          </p>
        </motion.div>

        {/* Orders Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {orders.map((order, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.1,
              }}
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20 hover:border-orange-500/40"
              >
                {/* Badge */}
                <div className="flex justify-between mb-5">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 rounded-full shadow-lg">
                    <span className="text-white font-bold">
                      Order #{index + 1}
                    </span>
                  </div>

                  {order.driver && (
                    <div className="bg-green-600/20 px-3 py-1 rounded-full border border-green-400/40 flex items-center gap-2">
                      <BsPersonCheckFill className="text-green-400" />
                      <span className="text-green-400 text-xs font-semibold">
                        {order.driver}
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
                  ].map((field, i) => (
                    <div
                      key={i}
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

                {/* Driver Select */}
                <div>
                  <label className="text-white/80 text-sm font-medium">
                    Assign Driver
                  </label>

                  <select
                    value={order.driver || ""}
                    onChange={(e) => assignDriver(index, e.target.value)}
                    className="mt-2 w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-xl text-white focus:outline-none focus:border-orange-500 focus:bg-white/10 transition-all duration-300 cursor-pointer"
                  >
                    <option value="" className="bg-slate-900">
                      -- Select Driver --
                    </option>

                    {drivers.map((driver) => (
                      <option
                        key={driver}
                        value={driver}
                        className="bg-slate-900"
                      >
                        {driver}
                      </option>
                    ))}
                  </select>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ManageDriver;
