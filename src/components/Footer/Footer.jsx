import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-orange-400">Coding Ninjas</h3>
          <p className="text-gray-300 text-sm">
            Empowering learners to become coding experts with world-class courses,
            mentorship, and hands-on learning.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            {["Courses", "Practice", "Events", "Careers", "Blogs"].map((item) => (
              <li key={item}>
                <a href={`/${item.toLowerCase()}`} className="hover:text-orange-400 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <p className="text-gray-300 text-sm mb-2">📍 Gurgaon, India</p>
          <p className="text-gray-300 text-sm mb-2">📞 +91 9876543210</p>
          <p className="text-gray-300 text-sm">✉️ support@codingninjas.com</p>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex space-x-4">
            {["facebook", "twitter", "instagram", "linkedin"].map((platform) => (
              <a
                key={platform}
                href={`https://${platform}.com`}
                target="_blank"
                rel="noreferrer"
                className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition"
              >
                <img
                  src={`https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/${platform}.svg`}
                  alt={platform}
                  className="w-4 h-4 invert"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 text-sm mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Coding Ninjas Clone | Built with ❤️ using React + TailwindCSS
      </div>
    </footer>
  );
};

export default Footer;
