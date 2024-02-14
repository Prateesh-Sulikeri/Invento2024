import React from "react";
import eventsByType from "../eventData";

const Events = () => {
  const eventCards = Object.entries(eventsByType).map(([eventType, events]) => (

    <div key={eventType} className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-2">{eventType}</h2>
      <img
        src={events.image}
        alt={eventType}
        className="w-full h-48 object-cover mb-2"
      />
      <p className="text-gray-700">Number of events: {events.events.length}</p> {/* Added .events here */}
      <a
        href={`#${eventType}`}
        className="inline-block px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md"
      >
        See Events
      </a>
    </div>
  ));

  // Calculate the number of additional empty cards needed to fill the last row
  const emptyCardsCount = 3 - (eventCards.length % 3);

  // Fill the empty cards
  for (let i = 0; i < emptyCardsCount; i++) {
    eventCards.push(<div key={`empty-${i}`} className="bg-transparent" />);
  }

  return (
    <div id="events" className="py-20">
      <h2 className="text-xl font-semibold">Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center my-4"> {/* Center align the grid */}
        {eventCards}
      </div>
    </div>
  );
};

export default Events;
