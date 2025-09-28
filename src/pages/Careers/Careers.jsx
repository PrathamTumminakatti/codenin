import React from "react";

const jobs = [
  { id: 1, title: "Frontend Developer", location: "Bangalore, India", type: "Full-time" },
  { id: 2, title: "Backend Developer", location: "Remote", type: "Full-time" },
  { id: 3, title: "Data Scientist", location: "Gurgaon, India", type: "Full-time" },
];

const Careers = () => {
  return (
    <div className="pt-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Careers at Coding Ninjas</h1>
        <p className="text-gray-700 mb-6">
          Join our team and help thousands of students achieve their coding dreams.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
              <p className="text-gray-600 mb-2">{job.location}</p>
              <p className="text-gray-600 mb-4">{job.type}</p>
              <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
