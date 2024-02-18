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
        <div key={event.name} className="  md :  flex flex-wrap items-center event-container   ">
          {(index % 2 === 0) ? (
            <>
           
              <div className="w-full md:w-1/2 pr-4">
                <h3 className="text-lg font-medium mb-2">{event.name}</h3>
                <p className="text-gray-500 mb-4">{event.description}</p>
              </div>
              <div className="w-full md:w-1/2">
                <img src={event.image} alt={event.name} className="w-full h-auto mb-2" />
              </div>
              
            </>
          ) : (
            <>
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <img src={event.image} alt={event.name} className="w-full h-auto mb-2" />
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2 pl-4">
                <h3 className="text-lg font-medium mb-2">{event.name}</h3>
                <p className="text-gray-500 mb-4">{event.description}</p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
    
  );
}

EventDetails.propTypes = {
  eventsByType: PropTypes.object.isRequired, 
};

export default EventDetails;



