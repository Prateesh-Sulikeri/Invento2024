
import React from "react";
import bg from "../../public/images/bg_cal2.jpg";
import date1Image from "../../public/images/date1.png";
import date2Image from "../../public/images/date2.png";
import date3Image from "../../public/images/date3.png";
import FlyInOnScroll from "./FlyInOnScroll";

import capshield from "../../public/images/capsh.jpg"; // Include the new image
import "./components.css";

const Calendar = () => {
  return (
    <div
      className="containerS min-h-screen py-8 font-bangers text-white"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <FlyInOnScroll>
        <h1
          className="text-5xl font-semibold text-center mb-[5%]"
          style={{
            WebkitTextStrokeWidth: "0.2px",
            WebkitTextStrokeColor: "black",
          }}
        >
          Mark Your Calendar
        </h1>
      </FlyInOnScroll>

      <div className="md:grid md:grid-cols-8 gap-4">
        <div className="md:col-span-2 relative rounded-lg bgdate">
          <img
            src={date1Image}
            alt="Date"
            className="w-full h-full rounded-t-lg m-0"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-xl text-black mx-16 mb-10 sm:mb-14">
            The adventure kicks off with Page-Turner Palooza, a day filled with exciting competitions and activities that set the stage for the thrilling chapters to come
            </p>
          </div>
        </div>

        <div className="md:col-span-2 relative rounded-lg bgdate">
          <img
            src={date2Image}
            alt="Date"
            className="w-full h-full rounded-t-lg m-0"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-xl text-black mx-16 mb-10 sm:mb-14">
            Celebrating the champions of each competition. Expect special events, showcases, and maybe even a costume contest as the heroic spirit takes over the event
            </p>
          </div>
        </div>

        <div className="md:col-span-2 relative rounded-lg bgdate">
          <img
            src={date3Image}
            alt="Date"
            className="w-full h-full rounded-t-lg m-0"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-xl text-black mx-16 mb-10 sm:mb-14">
            We wrap up the event ,  a culmination of three days of intense competition, leaving everyone with unforgettable memories and stories to tell.
            </p>
          </div>
        </div>

        <div className="md:col-span-2 md:flex items-center justify-center">
          <img
            src={capshield}
            alt="Boom"
            className="w-16 animate-spin mx-auto my-4 md:my-0"
            style={{
              animationDuration: "3s", 
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
