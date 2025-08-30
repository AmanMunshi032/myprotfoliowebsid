import React from 'react';
import { FaGithub } from "react-icons/fa6";
  import { FaLinkedin } from "react-icons/fa";
  import { FaFacebookSquare } from "react-icons/fa";
const Footer = () => {
    return (
         <footer className="bg-slate-700 text-white py-6 shadow-lg">
          <div className=' flex  justify-center items-center m-4 '>
            <div className="mt-6 flex gap-3">
                        <a className=" p-2 rounded-lg text-2xl bg-linear-to-r from-emerald-500 to-blue-500"
                          href="https://github.com/AmanMunshi032"
                          target="_blank"
                          rel="noreferrer"
                        >
                       <FaGithub />
                        </a>
                        <a className="p-2 rounded-lg text-2xl bg-linear-to-r from-emerald-500 to-blue-500"
                          href="https://www.linkedin.com/in/amanmunshi7/"
                          target="_blank"
                          rel="noreferrer"
                        >
                         <FaLinkedin />
                        </a>
                        <a className="p-2 rounded-lg text-2xl bg-linear-to-r from-emerald-500 to-blue-500"
                          href="https://www.facebook.com/tanvirislam.aman.1"
                          target="_blank"
                          rel="noreferrer"
                        >
                         <FaFacebookSquare />
                        </a>
                      </div>
          </div>
      <div className="max-w-6xl mx-auto px-6 text-center text-sm">© {new Date().getFullYear()} Aman Munshi · Built with React & Tailwind</div>
    </footer>
    );
};

export default Footer;