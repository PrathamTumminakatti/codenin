import React from "react";

const events = [
  { id: 1, title: "Hackathon 2025", date: "15 Oct 2025", location: "Online" },
  { id: 2, title: "Coding Bootcamp", date: "1 Nov 2025", location: "Bangalore, India" },
  { id: 3, title: "AI Workshop", date: "10 Nov 2025", location: "Remote" },
];

const Events = () => {
  return (
    <div className="pt-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Upcoming Events</h1>

        <div className="grid gap-6 md:grid-cols-3">
          {events.map((event) => (
            <div key={event.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
              <p className="text-gray-600 mb-1">Date: {event.date}</p>
              <p className="text-gray-600 mb-4">Location: {event.location}</p>
              <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
                Register
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
