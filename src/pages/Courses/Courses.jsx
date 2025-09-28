import React from "react";

const courses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description: "Learn HTML, CSS, JavaScript, React, Node.js and more.",
    price: "₹25,000",
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    description: "Python, Pandas, NumPy, ML algorithms, and projects.",
    price: "₹30,000",
  },
  {
    id: 3,
    title: "Competitive Programming",
    description: "Improve your problem solving skills and algorithms.",
    price: "₹20,000",
  },
];

const Courses = () => {
  return (
    <div className="pt-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Our Courses</h1>

        <div className="grid gap-8 md:grid-cols-3">
          {courses.map((course) => (
            <div key={course.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-700 mb-4">{course.description}</p>
              <p className="font-bold text-orange-500 mb-4">{course.price}</p>
              <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
