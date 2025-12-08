import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BsBoxSeam, BsTruck, BsPeopleFill, BsArrowRight } from "react-icons/bs";

function Admin() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const cards = [
    {
      title: "Manage Orders",
      description: "Track and manage all customer orders",
      icon: BsBoxSeam,
      image: "src/components/uploads/admin-manage-order.png",
      link: "/managestatus",
      buttonText: "Manage",
      delay: 0.5,
    },
    {
      title: "Manage Delivery",
      description: "Assign drivers and track deliveries",
      icon: BsTruck,
      image:
        "src/components/uploads/Manage Deliverycourier-delivery-couriers-using-map-cars-and_22841070.png",
      link: "/managedriver",
      buttonText: "Set Driver",
      delay: 0.7,
    },
    {
      title: "Manage Customers",
      description: "View and manage customer accounts",
      icon: BsPeopleFill,
      image:
        "src/components/uploads/two-hands-that-say-ok-top-yellow-button_1082479-26365.png",
      link: "/managecustomers",
      buttonText: "Manage",
      delay: 0.9,
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: "url(src/components/uploads/admin-bg.png)",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen mt-10 px-4 py-12">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-6 shadow-lg shadow-orange-500/50"
            >
              <BsBoxSeam className="w-10 h-10 text-white" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent mb-3"
            >
              Admin Dashboard
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-white/60 text-lg"
            >
              Manage your delivery system efficiently
            </motion.p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: card.delay,
                    duration: 0.6,
                    ease: [0.42, 0, 0.58, 1],
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white/10 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl border border-white/20 hover:border-orange-400/50 transition-all duration-300 h-full flex flex-col"
                  >
                    {/* Card Header with Icon */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-xl font-bold text-white">
                        {card.title}
                      </h2>
                    </div>

                    {/* Image */}
                    <div className="relative overflow-hidden rounded-2xl mb-4 bg-white/5">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>

                    {/* Description */}
                    <p className="text-white/60 text-sm mb-6 flex-grow">
                      {card.description}
                    </p>

                    {/* Button */}
                    <Link to={card.link} className="block">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 rounded-xl shadow-lg shadow-orange-500/50 flex items-center justify-center gap-2 group"
                      >
                        <span>{card.buttonText}</span>
                        <motion.div
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <BsArrowRight className="w-5 h-5" />
                        </motion.div>
                      </motion.button>
                    </Link>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { label: "Active Orders", value: "24", color: "orange" },
              { label: "Active Drivers", value: "12", color: "purple" },
              { label: "Total Customers", value: "156", color: "pink" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center"
              >
                <p className="text-white/60 text-sm mb-2">{stat.label}</p>
                <p className={`text-4xl font-bold text-${stat.color}-400`}>
                  {stat.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
