import React from "react";

const Calendar = () => {
  return (
    <div className="container mx-auto py-8" id="">
      <h1 className="text-xl font-semibold">Mark Your Calender</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Dummy calendar cards */}
        <div className="bg-white rounded-lg shadow-md">
          <img
            src="https://via.placeholder.com/300"
            alt="Date"
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Event Date</h2>
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
            <h2 className="text-xl font-semibold">Event Date</h2>
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
            <h2 className="text-xl font-semibold">Event Date</h2>
            <p className="text-gray-600">Event details for this date...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
