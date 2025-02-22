import React from "react";
import Navbar from "./Navbar";

function About() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-20 text-white text-center">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="text-xl">Discover the story behind BookStore and the people who make it possible.</p>
      </div>

      {/* Main Content */}
      <div className="max-w-screen-2xl container mx-auto px-4 py-12">
        {/* Our Mission Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">Our Mission</h2>
          <p className="text-gray-700 text-center max-w-2xl mx-auto">
            At BookStore, our mission is to provide a seamless and enjoyable experience for book lovers. We aim to connect readers with their favorite books and authors while fostering a community of passionate readers.
          </p>
        </section>

        {/* Our Story Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">Our Story</h2>
          <p className="text-gray-700 text-center max-w-2xl mx-auto">
            Founded in 2023, BookStore started as a small online platform for book enthusiasts. Over the years, we have grown into a trusted destination for readers worldwide, offering a wide range of genres and titles.
          </p>
        </section>

        {/* Our Team Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
              <p className="text-gray-600 mt-2">
                John is passionate about books and technology, and he leads the team with a vision to revolutionize the reading experience.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-gray-600">Head of Content</p>
              <p className="text-gray-600 mt-2">
                Jane curates the best books and ensures that our library is always up-to-date with the latest releases.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Mike Johnson</h3>
              <p className="text-gray-600">Lead Developer</p>
              <p className="text-gray-600 mt-2">
                Mike is the brains behind the platform, ensuring a smooth and user-friendly experience for all our readers.
              </p>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-gray-700 mb-6">
            Become a part of our growing community of book lovers and explore the world of literature like never before.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
            Get Started
          </button>
        </section>
      </div>
    </>
  );
}

export default About;