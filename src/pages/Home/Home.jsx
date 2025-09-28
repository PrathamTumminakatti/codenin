import React from "react";
import HeroImage from "../../assets/hero.png"; // Add a hero image in src/assets/

const Home = () => {
  return (
    <div className="pt-24 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center px-6 md:px-12 gap-10">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Learn Coding Online with Expert Mentors
          </h1>
          <p className="text-gray-700 mb-6 text-lg md:text-xl">
            Join thousands of learners and master coding with hands-on courses, contests, and career guidance.
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition">
            Explore Courses
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end animate-fadeIn">
          <img
            src={HeroImage}
            alt="Hero"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
