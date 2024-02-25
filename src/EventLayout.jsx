import React from 'react'
import EventDetails from './components/EventDetails';
import Footer from './components/Footer';
import eventsByType from './eventData';


function EventLayout() {
  return (
    <>
      <div className="bg-gray-200 min-h-screen">
        <EventDetails eventsByType={eventsByType} />
        <Footer />
      </div>
    </>
  );
}

export default EventLayout