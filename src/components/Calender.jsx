
import React from "react";

const Calendar = () => {
  return (
    <div className="container mx-auto py-8 ">
      {/* Added sm:px-4 for small screens (phone screens) */}
      <h1 className="text-xl font-semibold text-center mb-2">Mark Your Calendar</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm: mx-4">
        {/* Dummy calendar cards */}
        <div className="bg-white rounded-lg shadow-md">
          <img
            src="https://via.placeholder.com/300"
            alt="Date"
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">9/03/2024</h2>
            <p className="text-gray-600">Event details for this date...</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md">
          <img
            src="https://via.placeholder.com/300"
            alt="Date"
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">10/03/2024</h2>
            <p className="text-gray-600">Event details for this date...</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md">
          <img
            src="https://via.placeholder.com/300"
            alt="Date"
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">11/09/2024</h2>
            <p className="text-gray-600">Event details for this date...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
