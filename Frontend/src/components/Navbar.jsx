import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.jpeg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      {/* Premium Glass Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex items-center justify-between h-16">

            {/* Left Logo */}
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Merchant Agri Foods"
                className="h-9 object-contain"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10 text-gray-700 text-[15px] font-medium">
              {["Home", "About", "Products", "Gallery"].map((item) => (
                <Link
                  key={item}
                  to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                  className="relative group"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-700 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}

              <Link
                to="/contact"
                className="bg-green-700 text-white px-6 py-2 rounded-xl shadow-sm hover:bg-green-800 transition"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Drawer Button */}
            <button
              className="md:hidden text-gray-800"
              onClick={() => setIsOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={26} />
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer with Light Gradient */}
            <motion.div
              className="fixed top-0 left-0 h-full w-72 bg-gradient-to-br from-white via-green-50 to-green-100 z-50 shadow-2xl flex flex-col"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.35 }}
            >
              {/* Drawer Header */}
              <div className="flex justify-between items-start p-6 border-b">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 tracking-wide">
                    Merchant Agri Foods
                  </h2>
                  <p className="text-xs text-gray-500 tracking-wider uppercase mt-1">
                    Premium Poultry Solutions
                  </p>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-600 hover:text-black transition"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Mobile Menu Links with Underline Animation */}
              <div className="flex flex-col gap-6 p-6 text-[17px] font-medium text-gray-700">
                {["Home", "About", "Products", "Gallery"].map((item) => (
                  <Link
                    key={item}
                    to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="relative group w-fit"
                  >
                    {item}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-700 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}

                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-6 bg-green-700 text-white py-3 text-center rounded-xl shadow-md hover:bg-green-800 transition"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;