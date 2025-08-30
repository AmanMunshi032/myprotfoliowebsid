import React from "react";
  import { FaGithub } from "react-icons/fa6";
  import { FaLinkedin } from "react-icons/fa";
  import { FaFacebookSquare } from "react-icons/fa";
import {  Element } from 'react-scroll';
  import { motion } from "motion/react"

const Hero = () => {
  return (
        <Element name="hero">
    <header  id="hero" className="hero bg-gray-800">
      <div className=" max-w-7xl mx-auto w-full min-h-full px-6 py-20 flex  justify-center items-center flex-col-reverse lg:flex-row  gap-12">
        <div className="flex-1 ">
          <h1 className="text-3xl font-extrabold "> Hi, I&apos;m
           <span className=" text-5xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-indigo-500"> Aman Munshi </span>
          </h1>
          <p className="mt-4 max-w-xl leading-relaxed text-2xl ">
           I build polished and responsive web applications
            using React and the MERN stack. I focus on clean UI, good
            performance, and a developer-friendly codebase.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="/Resume.pdf"
              download="Aman_Munshi_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className=" font-semibold  bg-gradient-to-r from-emerald-500 to-indigo-500 px-4 py-2 rounded "
            >
              Download Resume
            </a>
            <a href="#projects" className="px-4 py-2 border rounded">
              View Projects
            </a>
          </div>
          <div className="mt-6 flex gap-3">
            <a className=" p-2 rounded-lg text-2xl   bg-gradient-to-r from-emerald-500 to-indigo-500"
              href="https://github.com/AmanMunshi032"
              target="_blank"
              rel="noreferrer"
            >
           <FaGithub />
            </a>
            <a className="p-2 rounded-lg text-2xl bg-gradient-to-r from-emerald-500 to-indigo-500 "
              href="https://www.linkedin.com/in/amanmunshi7/"
              target="_blank"
              rel="noreferrer"
            >
             <FaLinkedin />
            </a>
            <a className="p-2 rounded-lg text-2xl bg-gradient-to-r from-emerald-500 to-indigo-500"
              href="https://www.facebook.com/tanvirislam.aman.1"
              target="_blank"
              rel="noreferrer"
            >
             <FaFacebookSquare />
            </a>
          </div>
        </div>
        < div className="  flex-1 overflow-hidden">
          <motion.img
            src="https://i.ibb.co.com/8nZNsvZp/Adobe-Express-file.png"
            alt="Your Photo"
            animate={{x:[0,60,0]}}
            transition={{duration:5,repeat:Infinity}}
            className=" w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
    </Element>
  );
};

export default Hero;
