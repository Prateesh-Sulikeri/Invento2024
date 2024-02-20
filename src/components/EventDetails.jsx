
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import AnimCursor from './AnimCursor';

function EventDetails({ eventsByType }) {
  const { eventType } = useParams();
  const events = eventsByType[eventType]?.events || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AnimCursor />
    





      <div className="grid grid-cols-20">
  {/* Left Side (19 cols) */}
  <div className="col-span-19">
    {/* Your content for the left side goes here */}
    <div className="container mx-auto px-4 pt-16 relative"> {/* Added relative class */}
        {/* Home Button */}
        

        <h1 className="text-3xl font-bold mb-4">{eventType} Events</h1>
        {events.map((event, index) => (
          <div
            key={event.name}
            className={`py-8 flex flex-col mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            <div
              className={`w-full mb-4 md:w-1/2 ${
                index % 2 === 0 ? 'md:order-2 md:pr-4' : 'md:order-1 md:pl-4'
              } `}
            >
              <img src={event.image} alt={event.name} className="w-full h-auto" />
            </div>
            <div className="w-full mx-2 md:w-1/2 pl-4 md:pl-0">
              <h3 className="text-lg font-medium mb-2">{event.name}</h3>
              <p className="text-gray-500 mb-4">{event.description}</p>
              <a href={event.registrationLink} target="_blank" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Register Now
              </a>
            </div>
          </div>
        ))}
      </div>
  </div>

  {/* Right Side (1 col) */}
  <div className="col-span-1 flex items-center justify-center fixed right-0 top-0 h-full">
    {/* Your button goes here */}
    
    <Link to="/" className=" absolute my-16 top-4 right-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        Home
      </Link> 
    
  </div>
</div>









    </>
  );
}

EventDetails.propTypes = {
  eventsByType: PropTypes.object.isRequired,
};

export default EventDetails;
