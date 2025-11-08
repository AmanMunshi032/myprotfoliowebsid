import React from "react";
import { FaGithub, FaLinkedin, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          
          {/* ====== Brand Section ====== */}
          <div className="space-y-3">
            <h1 className="text-3xl font-bold text-white">Aman Munshi</h1>
            <p className="text-gray-400 text-sm leading-relaxed">
              Frontend Developer | MERN Stack Enthusiast <br />
              Crafting modern, responsive, and scalable web apps.
            </p>
            <a
              href="#contact"
              className="inline-block mt-3 px-5 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition duration-300 font-medium"
            >
              Contact Me
            </a>
          </div>

          {/* ====== Quick Links ====== */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
            <ul className="space-y-2">
              {["Projects", "About", "Skills", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-emerald-400 transition duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ====== Social & Contact ====== */}
          <div className="space-y-4 text-center md:text-right">
            <h2 className="text-xl font-semibold text-white mb-3">Follow Me</h2>
            <div className="flex justify-center md:justify-end gap-4">
              <a
                href="https://github.com/AmanMunshi032"
                target="_blank"
                rel="noreferrer"
                className="p-3 text-2xl rounded-full bg-gray-800 hover:bg-emerald-500 hover:text-white transition duration-300 shadow-lg"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/amanmunshi7/"
                target="_blank"
                rel="noreferrer"
                className="p-3 text-2xl rounded-full bg-gray-800 hover:bg-blue-600 hover:text-white transition duration-300 shadow-lg"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com/tanvirislam.aman.1"
                target="_blank"
                rel="noreferrer"
                className="p-3 text-2xl rounded-full bg-gray-800 hover:bg-blue-500 hover:text-white transition duration-300 shadow-lg"
              >
                <FaFacebookSquare />
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-2">
              Let's connect and build something amazing!
            </p>
          </div>
        </div>

        {/* ====== Footer Bottom ====== */}
        <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Aman Munshi — Built with{" "}
          <span className="text-emerald-400">React</span> &{" "}
          <span className="text-indigo-400">Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
