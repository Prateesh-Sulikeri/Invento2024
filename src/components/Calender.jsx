import React from "react";
import bg from "../../public/images/bg_cal2.jpg";
import date1Image from "../../public/images/date1.png";
import date2Image from "../../public/images/date2.png";
import date3Image from "../../public/images/date3.png";
import FlyInOnScroll from "./FlyInOnScroll";

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

      <FlyInOnScroll>
        <div className="md:flex justify-between gap-4">
          <div className="relative rounded-lg bgdate flex-1 md:mx-16">
            <img
              src={date1Image}
              alt="Date"
              className="w-full h-full rounded-t-lg m-0"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-2xl text-black mx-16 mb-10 sm : mb-14">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Impedit saepe{" "}
              </p>
            </div>
          </div>

          <div className="relative rounded-lg bgdate flex-1 md:mx-16">
            <img
              src={date2Image}
              alt="Date"
              className="w-full h-full rounded-t-lg m-0"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-2xl text-black mx-16 mb-10 sm : mb-14">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Impedit saepe
              </p>
            </div>
          </div>
          <div className="relative rounded-lg bgdate flex-1 md:mx-16">
            <img
              src={date3Image}
              alt="Date"
              className="w-full h-full rounded-t-lg m-0"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-2xl text-black mx-16 mb-10 sm : mb-14">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Impedit saepe
              </p>
            </div>
          </div>
        </div>
      </FlyInOnScroll>
    </div>
  );
};

export default Calendar;
