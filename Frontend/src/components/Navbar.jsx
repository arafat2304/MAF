import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpeg";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);
  return (
    <>
      {/* Top Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">

              {/* Logo */}
              <Link to="/">
                <img
                  src={logo}
                  alt="Company Logo"
                  className="h-10 object-contain"
                />
              </Link>

              {/* Left side: Hamburger + Logo */}
            <div className="flex items-center gap-4">
              {/* Hamburger (Mobile) */}
              <button
                className="md:hidden"
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={28} />
              </button>
            </div>

            

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 font-medium">
              <Link to="/" className="hover:text-green-700">Home</Link>
              <Link to="/about" className="hover:text-green-700">About</Link>
              <Link to="/products" className="hover:text-green-700">Products</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/contact" className="hover:text-green-700">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Side Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <img
            src={logo}
            alt="Company Logo"
            className="h-8 object-contain"
          />
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col p-6 space-y-6 font-medium">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/products" onClick={() => setIsOpen(false)}>Products</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;