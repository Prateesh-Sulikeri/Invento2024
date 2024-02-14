import React from "react";

// Array of event objects
const eventsData = [
  {
    name: "Mr. and Miss Invento",
    image: "https://via.placeholder.com/300",
    description: "Description of Event 1",
    registrationLink: "link-to-registration-page-for-event-1"
  },
  {
    name: "Event 2",
    image: "https://via.placeholder.com/300",
    description: "Description of Event 2",
    registrationLink: "link-to-registration-page-for-event-2"
  },
  // Add more events as needed
];

const Events = () => {
  return (
    <div className="container mx-auto py-8" id="events" style={{ paddingTop: '80px' }}>
      <h1 className="text-xl font-semibold">EVENTS</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {/* Mapping over the eventsData array to generate event cards */}
        {eventsData.map((event, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md">
            <img
              src={event.image}
              alt={event.name}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{event.name}</h2>
              <button
                onClick={() => {
                  window.location.href = event.registrationLink;
                }}
                className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
