import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import Footer from "./Footer";

// Animation variants for Framer Motion
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function About() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-blue-500 to-purple-600 py-20 text-white text-center"
      >
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Discover the story behind BookStore and the people who make it possible.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-screen-2xl container mx-auto px-4 py-12">
        {/* Our Mission Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center mb-6 text-black">
            Our Mission
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-black text-center max-w-2xl mx-auto">
            At BookStore, our mission is to provide a seamless and enjoyable experience for book lovers. We aim to connect readers with their favorite books and authors while fostering a community of passionate readers.
          </motion.p>
        </motion.section>

        {/* Our Story Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center mb-6 text-black">
            Our Story
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-black text-center max-w-2xl mx-auto">
            Founded in 2023, BookStore started as a small online platform for book enthusiasts. Over the years, we have grown into a trusted destination for readers worldwide, offering a wide range of genres and titles.
          </motion.p>
        </motion.section>

        {/* Why Choose Us Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center mb-8 text-black">
            Why Choose Us?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "📚",
                title: "Wide Selection",
                description: "Explore thousands of books across various genres, from bestsellers to hidden gems.",
              },
              {
                icon: "🚚",
                title: "Fast Delivery",
                description: "Get your books delivered quickly and reliably, no matter where you are.",
              },
              {
                icon: "💬",
                title: "Community Focused",
                description: "Join a vibrant community of readers and participate in discussions, events, and more.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-black mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call-to-Action Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-6 text-black">
            Join Our Community
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-black mb-6">
            Become a part of our growing community of book lovers and explore the world of literature like never before.
          </motion.p>
          <motion.button
            variants={fadeInUp}
            className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Get Started
          </motion.button>
        </motion.section>
        <Footer />
      </div>
      
    </>
  );
}

export default About;