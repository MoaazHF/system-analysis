import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className=" fixed mt-2 top-0 w-full z-100 lg:w-[50vw] p-1 backdrop-brightness-50  lg:translate-x-1/2 backdrop-blur-3xl  border-white/50 shadow-2xl  rounded-full px-10 ">
        <nav className=" hidden lg:block  p-1 rounded-full ">
          <ul className="flex justify-center space-x-8  text-white font-semibold cursor-pointer items-center">
            <li className="hover:text-orange-500">
              <Link to="/">
                <img
                  className="w-15 h-10 backdrop-blur-3xl"
                  src="src/components/uploads/Logo.png"
                  alt="Logo"
                ></img>
              </Link>
            </li>
            <li className="hover:text-orange-500">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link className="hover:text-orange-500" to="/login">
                Order Now
              </Link>
            </li>
            <li>
              <Link className="hover:text-orange-500" to="/track">
                Track Orders
              </Link>
            </li>
            <li>
              <Link className="hover:text-orange-500" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-orange-500" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="hover:text-orange-500" to="/doc">
                Doc
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden fixed top-4 right-4 z-50 bg-blue-500 text-white p-3 rounded-lg shadow-lg"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 backdrop-blur-2xl backdrop-brightness-100 bg-opacity-10 z-40 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleMenu}
        >
          <nav
            className={`fixed top-0 right-0 h-full w-64 bg-blue-600 shadow-2xl p-8 transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="flex flex-col space-y-6 text-white font-semibold mt-16">
              <li>
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/idea" onClick={toggleMenu}>
                  Idea
                </Link>
              </li>
              <li>
                <Link to="/main" onClick={toggleMenu}>
                  Main
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
