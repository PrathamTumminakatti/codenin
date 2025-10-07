import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-orange-500 hover:text-orange-600 transition"
        >
          Coding Ninjas
        </Link>

        {/* Menu Button (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 text-2xl focus:outline-none"
        >
          ☰
        </button>

        {/* Menu Links */}
        <ul
          className={`md:flex md:items-center md:space-x-8 absolute md:static bg-white md:bg-transparent left-0 w-full md:w-auto transition-all duration-300 ease-in ${
            isOpen ? "top-16 opacity-100" : "top-[-400px] opacity-0"
          } md:opacity-100`}
        >
          {["Courses", "Practice", "Events", "Careers", "Blogs"].map((item) => (
            <li key={item} className="text-center md:text-left">
              <Link
                to={`/${item.toLowerCase()}`}
                className={`block py-2 px-4 text-gray-700 hover:text-orange-500 transition font-medium ${
                  isScrolled ? "" : "md:text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
          <li className="text-center md:text-left">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
              Login / Signup
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
