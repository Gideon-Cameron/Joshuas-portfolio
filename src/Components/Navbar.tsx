// Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo / Name */}
        <div className="text-xl font-semibold text-blue-600">
          Josh
        </div>

        {/* Right: Navigation Links */}
        <ul className="flex space-x-8 text-gray-700 font-medium">
          <li>
            <a
              href="#about"
              className="hover:text-orange-500 transition-colors duration-200"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#work"
              className="hover:text-orange-500 transition-colors duration-200"
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-orange-500 transition-colors duration-200"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-orange-500 transition-colors duration-200"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
