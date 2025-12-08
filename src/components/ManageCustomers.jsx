import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { BsTelephoneFill, BsExclamationCircle } from "react-icons/bs";

const complaints = [
  {
    name: "Abdo Mohammad",
    img: "src/components/uploads/abdo-Mohammad.jpg",
    text: '"The representative I spoke with sounded impatient and didn\'t provide clear guidance."',
  },
  {
    name: "Cristiano Ronaldo",
    img: "src/components/uploads/cr7.jpg",
    text: '"I contacted support three days ago but still haven\'t received a reply. I expected faster customer service."',
  },
  {
    name: "Tomas Alpha",
    img: "src/components/uploads/personIsSad.jpg",
    text: '"I waited over 20 minutes on live chat before anyone answered. This is too long."',
  },
];

function ManageCustomers() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage:
            "url(src/components/uploads/manage-customers-background.png)",
        }}
      />

      {/* Main Content */}
      <div className="relative mt-10 z-10 min-h-screen px-4 py-12">
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
              <BsExclamationCircle className="w-10 h-10 text-white" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent mb-3"
            >
              Customer Troubleshooting
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-white/60 text-lg"
            >
              Review and respond to customer complaints
            </motion.p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complaints.map((complaint, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5 + index * 0.2,
                  duration: 0.6,
                  ease: [0.42, 0, 0.58, 1],
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="bg-white/10 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl border border-white/20 hover:border-orange-400/50 transition-all duration-300 h-full flex flex-col"
                >
                  {/* Customer Info */}
                  <div className="flex items-center gap-4 mb-4">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={complaint.img}
                      alt={complaint.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-orange-500/50 shadow-lg"
                    />
                    <div>
                      <h2 className="text-xl font-bold text-white">
                        {complaint.name}
                      </h2>
                      <p className="text-white/60 text-sm">Customer</p>
                    </div>
                  </div>

                  {/* Complaint Text */}
                  <div className="flex-grow bg-white/5 rounded-xl p-4 mb-4 border border-white/10">
                    <p className="text-white/80 text-sm leading-relaxed italic">
                      {complaint.text}
                    </p>
                  </div>

                  {/* Contact Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 rounded-xl shadow-lg shadow-orange-500/50 flex items-center justify-center gap-2 group"
                  >
                    <span>Contact Customer</span>
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 15 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <BsTelephoneFill className="w-4 h-4" />
                    </motion.div>
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageCustomers;
