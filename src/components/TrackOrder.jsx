import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BsMapFill,
  BsBoxSeam,
  BsCurrencyDollar,
  BsSpeedometer2,
  BsTelephone,
  Bs0CircleFill,
} from "react-icons/bs";

function TrackOrder() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const navigate = useNavigate();
  const [hoveredSection, setHoveredSection] = useState(null);

  return (
    <div className=" min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className=" absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-500"></div>
      </div>

      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: "url(src/components/uploads/admin-bg.png)" }}
      ></div>

      <div className="mt-10 relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 rounded-2xl shadow-2xl shadow-orange-500/50 backdrop-blur-sm border border-orange-400/30 hover:scale-105 transition-transform duration-300">
            <BsBoxSeam className="w-8 h-8 text-white animate-bounce" />
            <h1 className="text-3xl font-bold text-white tracking-tight">
              Tracking Orders
            </h1>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <div
            className="lg:col-span-2 group"
            onMouseEnter={() => setHoveredSection("map")}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-2 border border-white/20 shadow-2xl hover:shadow-orange-500/30 transition-all duration-500 hover:scale-[1.02]">
              <div className="relative overflow-hidden rounded-2xl">
                <video
                  autoPlay
                  loop
                  muted
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                  src="src/components/uploads/Animated_Delivery_Tracking_Map.mp4"
                  alt="Delivery Map"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Map Overlay Info */}
                <div className="absolute bottom-6 left-6 right-6 bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/20 transform transition-all duration-500 hover:bg-black/60">
                  <div className="flex items-center gap-3 text-white">
                    <BsMapFill className="w-6 h-6 text-orange-400 animate-bounce" />
                    <div>
                      <p className="text-sm opacity-80">Current Status</p>
                      <p className="font-semibold text-lg">
                        In Transit - On Schedule
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Receipt Section */}
          <div
            className="lg:col-span-1"
            onMouseEnter={() => setHoveredSection("receipt")}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <div className="bg-gradient-to-br from-orange-500/90 to-orange-600/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-orange-400/50 hover:shadow-orange-500/50 transition-all duration-500 hover:scale-[1.02]">
              {/* Receipt Header */}
              <div className="mb-6 pb-6 border-b-2 border-dashed border-white/40">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Bs0CircleFill className="w-8 h-8 text-white" />
                  <h2 className="text-3xl font-bold text-white text-center">
                    Receipt
                  </h2>
                </div>
                <p className="text-white/80 text-center text-sm">
                  Order Confirmation
                </p>
              </div>

              {/* Receipt Details */}
              <div className="space-y-4">
                {/* Customer Name */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <p className="text-white/70 text-sm mb-1">Name</p>
                  <p className="text-white text-xl font-semibold">Abdo Sayed</p>
                </div>

                {/* Location */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <div className="flex items-center gap-2 mb-1">
                    <BsMapFill className="w-4 h-4 text-white/70" />
                    <p className="text-white/70 text-sm">Location</p>
                  </div>
                  <p className="text-white text-xl font-semibold">Helwan</p>
                </div>

                {/* Destination */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <div className="flex items-center gap-2 mb-1">
                    <BsMapFill className="w-4 h-4 text-white/70" />
                    <p className="text-white/70 text-sm">Destination</p>
                  </div>
                  <p className="text-white text-xl font-semibold">Alexandria</p>
                </div>

                {/* Delivery Number */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <div className="flex items-center gap-2 mb-1">
                    <BsTelephone className="w-4 h-4 text-white/70" />
                    <p className="text-white/70 text-sm">Delivery Number</p>
                  </div>
                  <p className="text-white text-xl font-semibold">010369908</p>
                </div>

                {/* Order Weight */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <div className="flex items-center gap-2 mb-1">
                    <BsSpeedometer2 className="w-4 h-4 text-white/70" />
                    <p className="text-white/70 text-sm">Order Weight</p>
                  </div>
                  <p className="text-white text-xl font-semibold">4.9 kg</p>
                </div>

                {/* Cost Breakdown */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-center gap-2 mb-3">
                    <BsCurrencyDollar className="w-4 h-4 text-white/70" />
                    <p className="text-white/70 text-sm">Cost Breakdown</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-white">
                      <span>Order Cost</span>
                      <span className="font-semibold">1,500.00 EGP</span>
                    </div>
                    <div className="flex justify-between text-white pb-3 border-b border-white/30">
                      <span>Transportation</span>
                      <span className="font-semibold">900.00 EGP</span>
                    </div>
                    <div className="flex justify-between text-white pt-2">
                      <span className="text-lg font-bold">Total Cost</span>
                      <span className="text-2xl font-bold">2,400.00 EGP</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-6 border-t-2 border-dashed border-white/40">
                <button className="w-full bg-white text-orange-600 font-bold py-4 rounded-xl hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                  Download Receipt
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Status Timeline */}
        <div className="mt-8 bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <BsBoxSeam className="w-6 h-6 text-orange-400" />
            Delivery Timeline
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { status: "Order Placed", active: true },
              { status: "In Transit", active: true },
              { status: "Out for Delivery", active: false },
              { status: "Delivered", active: false },
            ].map((step, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border-2 transition-all duration-500 ${
                  step.active
                    ? "bg-orange-500/20 border-orange-400 shadow-lg shadow-orange-500/30"
                    : "bg-white/5 border-white/20"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 mx-auto ${
                    step.active ? "bg-orange-500" : "bg-white/10"
                  }`}
                >
                  <span className="text-white font-bold">{idx + 1}</span>
                </div>
                <p
                  className={`text-center font-semibold ${
                    step.active ? "text-white" : "text-white/50"
                  }`}
                >
                  {step.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }
        .animate-pulse {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .delay-500 {
          animation-delay: 500ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce {
          animation: bounce 1s infinite;
        }
      `}</style>
    </div>
  );
}

export default TrackOrder;
