import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h1 className="text-2xl font-bold text-orange-500 mb-2">Coding Ninjas</h1>
          <p className="text-gray-400">Learn coding online with expert mentors and hands-on courses.</p>
        </div>
        <div>
          <h2 className="font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-orange-500">Home</a></li>
            <li><a href="/courses" className="hover:text-orange-500">Courses</a></li>
            <li><a href="/practice" className="hover:text-orange-500">Practice</a></li>
            <li><a href="/events" className="hover:text-orange-500">Events</a></li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mb-3">Resources</h2>
          <ul className="space-y-2">
            <li><a href="/blogs" className="hover:text-orange-500">Blogs</a></li>
            <li><a href="/careers" className="hover:text-orange-500">Careers</a></li>
            <li><a href="/contact" className="hover:text-orange-500">Contact</a></li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mb-3">Contact</h2>
          <p>Email: support@codingninjas.com</p>
          <p>Phone: +91 12345 67890</p>
        </div>
      </div>
      <div className="border-t border-gray-700 text-center py-4 text-gray-500">
        &copy; {new Date().getFullYear()} Coding Ninjas. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
