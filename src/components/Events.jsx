import React from "react";
import eventsByType from "../eventData";
import { Link } from "react-router-dom";
import bg from "../../public/images/bg_events.png";
import buttonImage from "../../public/images/button.png"; // Import button image

const Events = () => {
  const eventCards = Object.entries(eventsByType).map(([eventType, events]) => (
    <div key={eventType} className="relative items-center">
      <div
        className="relative bg-cover bg-no-repeat bg-center w-full m-2 rounded-lg drop-shadow-2xl shadow-2xl"
        style={{
          backgroundImage: `url(${events.image})`,
          paddingBottom: "66.67%",
          borderRadius: "20px",
        }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 p-4 bg-black opacity-75 rounded-b-lg flex justify-between items-center"
          style={{ zIndex: 1, borderBottomLeftRadius : "20px", borderBottomRightRadius : "20px"
        }}
        >
          <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-bold mb-2">
            {eventType}
          </h2>
          <Link to={`/events/${eventType}`}>
            <img
              src={buttonImage}
              alt="See Events"
              className="cursor-pointer w-16 h-auto md:w-20 lg:w-24"
              style={{ width: "70px", height: "auto", zIndex: 5 }}
            />
          </Link>
        </div>
      </div>
    </div>
  ));

  return (
    <div
      id="events"
      className="py-[25%] md:py-[5%] px-4 md:px-12"
      style={{ backgroundImage: `url(${bg})`, opacity: 0.9, width: "100%", height: "100%" }}
    >
      <h2 className="text-7xl tex pb-4 font-bangers text-center">
        Events
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
        {" "}
        {/* Adjusted grid layout */}
        {eventCards}
      </div>
    </div>
  );
};

export default Events;
