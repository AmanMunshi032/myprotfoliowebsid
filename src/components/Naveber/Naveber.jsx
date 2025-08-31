import React from "react";
import { Link,NaveLink, Element } from 'react-scroll';
import { IoMdDownload } from "react-icons/io";
const Naveber = () => {
  return (
    <div className="navbar shadow-sm fixed top-0 bg-gray-800">
      <div className=" max-w-7xl mx-auto flex w-full">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            {/* mobule  */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-700 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
             
         <li className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-indigo-500"><Link to="hero" smooth={true} duration={500}>Home</Link></li>
             <li className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-indigo-500"><Link to="about" smooth={true} duration={500}>About</Link></li>
             <li className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-indigo-500"><Link to="skills" smooth={true} duration={500} >Skiles</Link></li>
             <li className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-indigo-500"><Link to="projects"  smooth={true} duration={500}> Projects</Link></li>
            <li className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-indigo-500"> <Link to="contact"  smooth={true} duration={500}>Contact</Link></li>
            </ul>
          </div>
          <div className="flex gap-2">
            <img className="w-12" src="https://i.ibb.co.com/S4WCxcch/Logo.png" alt="" />
            <h1 className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-indigo-500">Aman</h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-4 gap-5">
           
             <li className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-indigo-500"><Link to="hero" smooth={true} duration={500}>Home</Link></li>
             <li className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-indigo-500"><Link to="about" smooth={true} duration={500}>About</Link></li>
             <li className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-indigo-500"><Link to="skills" smooth={true} duration={500} >Skiles</Link></li>
             <li className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-indigo-500"><Link to="projects"  smooth={true} duration={500}> Projects</Link></li>
            <li className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-indigo-500"> <Link to="contact"  smooth={true} duration={500}>Contact</Link></li>
          </ul>
        </div>
        <div className="navbar-end ">
         
         <div className="flex justify-center items-center">
          
            <a href="/Resume.pdf"
           download="Aman_Munshi_Resume.pdf"
           
           className="  px-6 py-2 rounded-md font-bold bg-gradient-to-r from-emerald-500 to-indigo-500">
 
  
            Resume
                      
          </a>
         
         </div>
       
          
        </div>
      </div>
    </div>
  );
};

export default Naveber;
