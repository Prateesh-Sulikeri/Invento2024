

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

function EventDetails({ eventsByType }) {
  const { eventType } = useParams();
  const events = eventsByType[eventType]?.events || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 pt-16">
      <h1 className="text-3xl font-bold mb-4">{eventType} Events</h1>
      {events.map((event, index) => (
        <div
          key={event.name}
          className={`flex flex-col mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
        >
          <div
            className={`w-full mb-4 md:w-1/2 ${
              index % 2 === 0 ? 'md:order-2 md:pr-4' : 'md:order-1 md:pl-4'
            }`}
          >
            <img src={event.image} alt={event.name} className="w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2 pl-4 md:pl-0">
            <h3 className="text-lg font-medium mb-2">{event.name}</h3>
            <p className="text-gray-500 mb-4">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

EventDetails.propTypes = {
  eventsByType: PropTypes.object.isRequired,
};

export default EventDetails;
