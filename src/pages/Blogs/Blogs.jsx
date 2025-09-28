import React from "react";

const blogs = [
  { id: 1, title: "Top 10 Coding Interview Tips", excerpt: "Prepare for interviews with these essential coding tips.", date: "10 Sep 2025" },
  { id: 2, title: "Learn React in 30 Days", excerpt: "Step-by-step guide to master ReactJS from scratch.", date: "5 Sep 2025" },
  { id: 3, title: "Data Structures for Beginners", excerpt: "Understand the basics of data structures and algorithms.", date: "1 Sep 2025" },
];

const Blogs = () => {
  return (
    <div className="pt-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Our Blogs</h1>

        <div className="grid gap-6 md:grid-cols-3">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-2">{blog.excerpt}</p>
              <p className="text-gray-500 mb-4 text-sm">{blog.date}</p>
              <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
