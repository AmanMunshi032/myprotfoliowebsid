import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import {  Element } from 'react-scroll';
const Contact = () => {
  return (
    <Element name="contact">
    <section id="contact" className=" py-12 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6  ">
        <h1 className=" text-5xl font-bold text-center my-12 ">Contact us</h1>
        <div className=" lg:flex gap-12 bg-gray-900 p-6 rounded-2xl">
          <div className="mt-4 space-y-2 w-full  ">
           
            <div className="bg-gray-700 w-full h-18 rounded-lg  flex items-center px-4">
              <MdOutlineEmail size={24} />
              <p className="  rounded-xl">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:amanmunshi032@gmail
           .com"
                  className="underline"
                >
                  amanmunshi032@gmail.com
                </a>
              </p>
            </div>
            <div className="bg-gray-700 w-full h-18 rounded-lg flex items-center px-4">
              <CiLocationOn size={24} />
              <p className="  rounded-xl">
                <strong>Location:</strong> Faridpur Dhaka Bangladesh
              </p>
            </div>
            <div className="bg-gray-700 w-full h-18 rounded-lg flex items-center px-4">
              <FaWhatsapp size={24} />
              <p className="  rounded-xl">
                <strong>WhatsApp:</strong>+8801949457409
              </p>
            </div>
          </div>
          <div className="w-full">
            <form className="mt-6 grid grid-cols-1 gap-4">
              <input className="p-3 border rounded" placeholder="Your name" />
              <input className="p-3 border rounded" placeholder="Your email" />
              <textarea
                className="p-3 border rounded"
                placeholder="Message"
                rows={4}
              />
             <div className="flex   justify-center items-center">
               <button
                type="button"
                className="w-full px-4 py-2   bg-linear-to-r from-emerald-500 to-blue-500 text-white rounded"
              >
                Send Message
              </button>
             </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </Element>
  );
};

export default Contact;
