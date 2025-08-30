import React from "react";
import {  Element } from 'react-scroll';
const About = () => {
  return (
    <Element name='About'>
    <div className="bg-gray-800 ">
      <div id="about" className=" max-w-7xl mx-auto px-6 py-16 ">
        <h1 className="font-bold text-5xl text-center my-6">About me</h1>         
      <div className="lg:flex gap-8 ">   
        <div className=" ">
          <img
            src="https://i.ibb.co.com/Ld7WfZCq/IMG-4723-1.png"
            alt="Your Photo"
            className=" w-full rounded-xl object-cover border-white border-5"
          />
        </div>

        <div className="  space-y-2 bg-gray-900 p-6  rounded-2xl shadow-md ">
          <p>
            I am a passionate MERN Stack Developer with hands-on experience in building full-stack web applications using MongoDB, Express.js, React, and Node.js. I specialize in creating scalable, user-friendly, and responsive applications with a strong focus on clean code, performance, and modern UI/UX practices.
          </p>
          <p>
            🚀 I enjoy solving real-world problems through code, implementing secure authentication systems, integrating payment gateways, and working with RESTful APIs. My projects often include dynamic dashboards, CRUD operations, JWT authentication, Stripe integration, and responsive designs with Tailwind CSS & Framer Motion.
          </p>
          <p>
           From frontend to backend, I enjoy working across the entire development cycle—whether it’s designing interactive user interfaces with React, Tailwind CSS, and Framer Motion, or creating secure backend systems with Node.js, Express, JWT authentication, and MongoDB. 
          </p>
          <p>
            🌱 I’m constantly learning new technologies and improving my problem-solving abilities to deliver high-quality digital solutions. My goal is to become a versatile full-stack developer and contribute to impactful projects.
            Personality: Curious, detail-oriented, and friendly — I enjoy
            collaborating and learning from others.
          </p>
          {/* <div className="space-x-2  space-y-3  ">
            <button className="px-6 py-2 font-semibold text-white  bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-md">
              React js
            </button>
            <button className="px-6 py-2 font-semibold text-white  bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-md">
              Next js
            </button>
            <button className="px-6 py-2 font-semibold text-white  bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-md">
              Express js
            </button>
            <button className="px-6 py-2 font-semibold text-white  bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-md">
              MongoDB
            </button>
            <button className="px-6 py-2 font-semibold text-white  bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-md">
              Javascript{" "}
            </button>
            <button className="px-6 py-2 font-semibold text-white  bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-md">
              Tailwind css
            </button>
            <button className="px-6 py-2 font-semibold text-white bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-md">
              Node js
            </button>
            <button className="px-6 py-2 font-semibold text-white  bg-linear-to-r from-emerald-500 to-blue-500 rounded-md">
              Figma
            </button>
            <button className="px-6 py-2 font-semibold text-white  bg-linear-to-r from-emerald-500 to-blue-500 rounded-md">
              github
            </button>
            <button className="px-6 py-2 font-semibold text-white  bg-linear-to-r from-emerald-500 to-blue-500 rounded-md">
              Firebase
            </button>
            <button className="px-6 py-2 font-semibold text-white  bg-linear-to-r from-emerald-500 to-blue-500 rounded-md">
              Bootstap
            </button>
            <button className="px-6 py-2 font-semibold text-white  bg-linear-to-r from-emerald-500 to-blue-500 rounded-md">
              Meterial UI
            </button>
          </div>       */}
        </div>
        
      </div>

         <div className="  lg:flex  space-y-4 justify-center items-center  gap-6 font-bold w-full mt-6 ">
            <div className=" flex justify-center items-center  h-30  w-full  rounded-xl bg-gradient-to-r from-emerald-500 to-indigo-500">
             <div className="text-center ">
               <p className="text-4xl">1+</p>
             <p className="text-2xl">Years of Experience</p>
             </div>
           
            </div>
            <div className=" flex justify-center items-center h-30 w-full rounded-xl bg-gradient-to-r from-emerald-500 to-indigo-500">
           <div>
               <h1 className="text-center text-4xl">20+</h1>
            <p className="text-2xl">Projects Completed</p>
           </div>
            </div>
            <div className=" flex justify-center items-center h-30 w-full rounded-xl bg-gradient-to-r from-emerald-500 to-indigo-500">
             <div>
               <h1 className="text-center text-4xl">10+</h1>
            <p  className="text-2xl">Happy clients</p>
             </div>
            </div>
            <div className=" flex justify-center items-center  h-30 w-full rounded-xl bg-gradient-to-r from-emerald-500 to-indigo-500 mb-4">
             <div>
               <h1 className="text-center text-4xl">1200+</h1>
            <p className="text-2xl">Hours of Coding</p>
             </div>
            </div>
          </div>
    </div>
    </div>
   </Element> 
  );
};

export default About;
