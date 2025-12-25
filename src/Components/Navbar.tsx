// Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img
            src="/favicon.png"
            alt="Josh logo"
            className="h-8 w-8 object-contain"
          />
        </div>

        {/* Right: Navigation Links */}
        <ul className="flex space-x-8 font-medium text-slate-700">
          <li>
            <a
              href="#about"
              className="transition-colors hover:text-teal-600"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#work"
              className="transition-colors hover:text-teal-600"
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="transition-colors hover:text-teal-600"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="transition-colors hover:text-teal-600"
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
