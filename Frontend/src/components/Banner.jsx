import React from "react";
import banner from "../../public/Banner.png";
function Banner() {
  return (
    <>
      <div className="bg-gray-100 max-w-screen-2xl container mx-auto md:px-20 px-6 flex flex-col md:flex-row items-center my-12">
  {/* Left Content */}
  <div className="w-full order-2 md:order-1 md:w-1/2 mt-10 md:mt-36 animate-fadeIn">
    <div className="space-y-6">
      <h1 className="text-3xl md:text-5xl font-extrabold leading-snug text-gray-900">
        Welcome to a place where you{" "}
        <span className="text-blue-600">learn something new</span> every day.
      </h1>
      <p className="text-base md:text-lg text-gray-700">
        Expand your knowledge with curated content, expert insights, and interactive resources.
        Start your journey today!
      </p>
      <div className="relative w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
          Subscribe
        </button>
      </div>
    </div>
     <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
      Get Started
    </button>
  </div>

  {/* Right Image */}
  <div className="w-full order-1 md:order-2 md:w-1/2 flex justify-center mt-10 md:mt-0 animate-fadeIn">
    <img
      src={banner}
      className="md:w-[500px] md:h-[400px] object-contain"
      alt="Learning Illustration"
    />
  </div>
</div>

    </>
  );
}

export default Banner;
