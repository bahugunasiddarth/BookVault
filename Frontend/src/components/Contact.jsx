import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Navbar />
      <motion.div
        className="max-w-screen-2xl container mx-auto px-4 py-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white"
          variants={itemVariants}
        >
          Contact Us
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {/* Contact Form */}
          <motion.div
            className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Send Us a Message
            </h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none shadow-sm bg-white dark:bg-slate-700 dark:text-white dark:border-gray-600"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none shadow-sm bg-white dark:bg-slate-700 dark:text-white dark:border-gray-600"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2 text-gray-900 dark:text-white"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none shadow-sm bg-white dark:bg-slate-700 dark:text-white dark:border-gray-600"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-gray-900 dark:text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none shadow-sm bg-white dark:bg-slate-700 dark:text-white dark:border-gray-600"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-300 focus:ring-2 focus:ring-blue-400 outline-none shadow-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Contact Information
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Email
                </h3>
                <p className="text-gray-900 dark:text-gray-300">
                  bookVault@bookstore.com
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Phone
                </h3>
                <p className="text-gray-900 dark:text-gray-300">901233210</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Address
                </h3>
                <p className="text-gray-900 dark:text-gray-300">
                  123 Bookstore Lane, <br />
                  Noida, 201312
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      <Footer />
    </>
  );
}

export default Contact;