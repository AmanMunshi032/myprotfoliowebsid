import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { Element } from "react-scroll";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <Element name="contact">
      <section className="py-16 bg-gray-700/50">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-center text-white mb-12">
            Contact Me
          </h1>

          <div className="lg:flex lg:gap-12 gap-8">
            {/* ===== Contact Info ===== */}
            <motion.div
              className="lg:w-1/2 space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {[
                {
                  icon: <MdOutlineEmail size={28} />,
                  title: "Email",
                  value: (
                    <a
                      href="mailto:amanmunshi032@gmail.com"
                      className="underline hover:text-emerald-400 transition"
                    >
                      amanmunshi032@gmail.com
                    </a>
                  ),
                },
                {
                  icon: <CiLocationOn size={28} />,
                  title: "Location",
                  value: "Faridpur, Dhaka, Bangladesh",
                },
                {
                  icon: <FaWhatsapp size={28} />,
                  title: "WhatsApp",
                  value: "+8801949457409",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800 p-6 rounded-xl flex items-center gap-4 hover:scale-105 transform transition duration-300 shadow-lg"
                >
                  <div className="text-emerald-400">{item.icon}</div>
                  <div className="text-gray-300">
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* ===== Contact Form ===== */}
            <motion.div
              className="lg:w-1/2 mt-8 lg:mt-0"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form className="bg-gray-800 p-8 rounded-2xl shadow-lg grid gap-4">
                <input
                  className="p-4 rounded-lg border border-gray-700 bg-gray-900 text-gray-200 placeholder-gray-400 focus:border-emerald-400 outline-none transition"
                  placeholder="Your Name"
                  type="text"
                />
                <input
                  className="p-4 rounded-lg border border-gray-700 bg-gray-900 text-gray-200 placeholder-gray-400 focus:border-emerald-400 outline-none transition"
                  placeholder="Your Email"
                  type="email"
                />
                <textarea
                  className="p-4 rounded-lg border border-gray-700 bg-gray-900 text-gray-200 placeholder-gray-400 focus:border-emerald-400 outline-none transition"
                  placeholder="Your Message"
                  rows={5}
                />
                <button
                  type="submit"
                  className="w-full py-3 mt-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-blue-600 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Contact;
