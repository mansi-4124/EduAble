import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = false; // Replace with your auth logic

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-6 px-8 rounded-b-lg shadow-lg">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <svg
            className="w-10 h-10 text-white"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 4.5L2 9.5L12 14.5L22 9.5L12 4.5Z" fill="currentColor" />
            <path
              d="M2 14.5L12 19.5L22 14.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h1 className="text-2xl font-bold tracking-tight cursor-pointer" onClick={() => navigate("/")}>
            EduAble
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="hover:text-primary-200 transition-colors duration-300">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-primary-200 transition-colors duration-300">
            How It Works
          </a>
          <a href="#testimonials" className="hover:text-primary-200 transition-colors duration-300">
            Testimonials
          </a>
          <a href="#pricing" className="hover:text-primary-200 transition-colors duration-300">
            Pricing
          </a>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            className="bg-white text-primary-700 px-4 py-2 rounded-lg font-medium hover:bg-primary-100 transition-colors duration-300"
            onClick={() => navigate("/login")}
          >
            Log In
          </button>
          <button
            className="bg-primary-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-800 transition-colors duration-300"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>

      {/* Mobile menu items */}
      {isMobileMenuOpen && (
        <nav className="md:hidden mt-4 flex flex-col space-y-4 text-white">
          <a href="#features" className="hover:text-primary-200 transition-colors duration-300">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-primary-200 transition-colors duration-300">
            How It Works
          </a>
          <a href="#testimonials" className="hover:text-primary-200 transition-colors duration-300">
            Testimonials
          </a>
          <a href="#pricing" className="hover:text-primary-200 transition-colors duration-300">
            Pricing
          </a>
          <button
            className="bg-white text-primary-700 px-4 py-2 rounded-lg font-medium hover:bg-primary-100 transition-colors duration-300"
            onClick={() => {
              toggleMobileMenu();
              navigate("/login");
            }}
          >
            Log In
          </button>
          <button
            className="bg-primary-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-800 transition-colors duration-300"
            onClick={() => {
              toggleMobileMenu();
              navigate("/signup");
            }}
          >
            Sign Up
          </button>
        </nav>
      )}
    </header>
  );
}

export default Header;
