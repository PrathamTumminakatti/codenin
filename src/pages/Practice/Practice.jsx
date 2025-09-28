import React from "react";

const topics = [
  "Arrays",
  "Strings",
  "Linked Lists",
  "Stacks & Queues",
  "Trees",
  "Graphs",
  "Dynamic Programming",
];

const Practice = () => {
  return (
    <div className="pt-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Practice Problems</h1>

        <div className="grid gap-6 md:grid-cols-3">
          {topics.map((topic, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
              <h2 className="text-xl font-semibold mb-2">{topic}</h2>
              <p className="text-gray-600 mb-4">Solve problems on {topic} to improve your coding skills.</p>
              <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
                Start Practicing
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Practice;
