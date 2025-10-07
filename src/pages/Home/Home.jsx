import React from "react";
import HeroImage from "../../assets/hero.png";
import Course1 from "../../assets/course1.png";
import Course2 from "../../assets/course2.png";
import Course3 from "../../assets/course3.png";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-orange-50 to-white text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 pt-28 md:pt-36 gap-10">

        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Learn to Code with <span className="text-orange-500">Expert Mentors</span>
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Join India's best online platform to master coding, DSA, and
            development. Learn by building projects with hands-on guidance.
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition">
            Explore Courses
          </button>
        </div>

        {/* Hero Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={HeroImage}
            alt="Hero"
            className="w-full max-w-lg animate-fadeIn rounded-lg"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white text-center shadow-inner">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { value: "1M+", label: "Learners" },
            { value: "200+", label: "Mentors" },
            { value: "50+", label: "Courses" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <h2 className="text-4xl font-bold text-orange-500">{stat.value}</h2>
              <p className="text-gray-700 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Explore Popular Courses
        </h2>
       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[Course1, Course2, Course3].map((img, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <img src={img} alt="Course" className="rounded-t-lg" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {["Full Stack Web Dev", "Data Science & ML", "DSA Mastery"][i]}
                </h3>
                <p className="text-gray-600 mb-4">
                  {[
                    "HTML, CSS, JS, React, Node.js & more.",
                    "Python, Pandas, ML models, Projects.",
                    "Algorithms, Problem Solving, Logic Building.",
                  ][i]}
                </p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-orange-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Students Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Aman Verma",
                feedback:
                  "Coding Ninjas helped me land my dream job at Amazon! The mentors are amazing and the curriculum is well structured.",
              },
              {
                name: "Priya Sharma",
                feedback:
                  "I started with zero coding knowledge, and now I can build full-stack apps confidently. Highly recommend it!",
              },
              {
                name: "Rohan Gupta",
                feedback:
                  "The practice platform and assignments made learning fun and challenging at the same time.",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <p className="text-gray-700 mb-4 italic">"{t.feedback}"</p>
                <h3 className="font-semibold text-orange-600">{t.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Start Your Coding Journey Today!</h2>
        <p className="text-lg mb-6">
          Join over 1 million students and become a coding ninja.
        </p>
        <button className="bg-white text-orange-500 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition">
          Enroll Now
        </button>
      </section>
    </div>
  );
};

export default Home;
