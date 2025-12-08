import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsList, BsX, BsDot, BsDash } from "react-icons/bs";
import { motion } from "framer-motion";

function Navbar() {
  const location = useLocation(); // to detect current page

  // Navigation items
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Order Now", to: "/login" },
    { name: "Track Orders", to: "/track" },
    { name: "Contact", to: "/contact" },
    { name: "Doc", to: "/doc" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="fixed top-1  w-1/2 translate-x-100 mx-auto z-50   
                    py-2 rounded-full backdrop-blur-2xl shadow-xl 
                   border border-white/20 bg-black/30"
      >
        <nav className="hidden lg:block">
          <ul className="flex justify-center items-center gap-8 text-white font-semibold">
            {/* Logo */}
            <li>
              <Link to="/">
                <img
                  className="w-20 h-13 rounded-md brightness-200"
                  src="src/components/uploads/Logo.png"
                  alt="Logo"
                />
              </Link>
            </li>

            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <li key={link.to} className="relative">
                  <Link
                    to={link.to}
                    className={`transition duration-300
                     ${isActive ? "text-orange-400" : "hover:text-orange-400"}`}
                  >
                    {link.name}
                  </Link>

                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute left-1/2 -bottom-2 -translate-x-1/2 text-orange-400"
                    >
                      <BsDash size={40} className="translate-y-4 " />
                    </motion.div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </motion.div>
    </>
  );
}

export default Navbar;
