import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-full shadow-md bg-white fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/">
          <h1 className="text-2xl font-bold text-orange-500">Coding Ninjas</h1>
        </Link>

        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li className="relative group">
            <Link to="/courses" className="hover:text-orange-500">Courses</Link>
            <ul className="absolute hidden group-hover:block bg-white shadow mt-2 py-2 w-48 rounded">
              <li className="px-4 py-2 hover:bg-gray-100"><Link to="/courses/web">Web Dev</Link></li>
              <li className="px-4 py-2 hover:bg-gray-100"><Link to="/courses/ds">Data Science</Link></li>
            </ul>
          </li>
          <li><Link to="/practice" className="hover:text-orange-500">Practice</Link></li>
          <li><Link to="/events" className="hover:text-orange-500">Events</Link></li>
          <li><Link to="/careers" className="hover:text-orange-500">Careers</Link></li>
          <li><Link to="/blogs" className="hover:text-orange-500">Blogs</Link></li>
        </ul>

        <div className="hidden md:flex gap-4">
          <Link to="/login" className="px-4 py-2 border border-orange-500 text-orange-500 rounded-md hover:bg-orange-500 hover:text-white transition">Login</Link>
          <Link to="/signup" className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition">Signup</Link>
        </div>

        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          <span className="text-2xl">&#9776;</span>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-2 px-6 py-4">
            <li><Link to="/courses" className="hover:text-orange-500">Courses</Link></li>
            <li><Link to="/practice" className="hover:text-orange-500">Practice</Link></li>
            <li><Link to="/events" className="hover:text-orange-500">Events</Link></li>
            <li><Link to="/careers" className="hover:text-orange-500">Careers</Link></li>
            <li><Link to="/blogs" className="hover:text-orange-500">Blogs</Link></li>
            <li className="flex gap-2 mt-2">
              <Link to="/login" className="px-4 py-2 border border-orange-500 text-orange-500 rounded-md hover:bg-orange-500 hover:text-white transition">Login</Link>
              <Link to="/signup" className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition">Signup</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
