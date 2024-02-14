import React from "react";

const Events = () => {
  return (
    <div className="container mx-auto py-8" id="events" style={{ paddingTop: '80px' }}> {/* Adjust the padding top based on the height of your fixed navbar */}
      <h1 className="text-xl font-semibold">EVENTS</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {/* Dummy event cards */}
        {[...Array(9)].map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md">
            <img
              src="https://via.placeholder.com/300"
              alt="Event"
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">Event Title</h2>
              <p className="text-gray-600">Event description...</p>
              <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                Read More
              </button>
            </div>
          </div>
        ))}
        {/* Repeat for other event cards */}
        {/* Dummy event cards */}
      </div>
    </div>
  );
};

export default Events;
