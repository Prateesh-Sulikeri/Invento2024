import React from "react";
import bg from '../../public/images/bg_cal2.jpg';
import date1Image from '../../public/images/date1.png';
import date2Image from '../../public/images/date2.png';
import date3Image from '../../public/images/date3.png';

const Calendar = () => {
  return (
    <div className="containerS min-h-screen py-8" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Added sm:px-4 for small screens (phone screens) */}
      <h1 className="text-3xl font-semibold text-center mb-[5%]">Mark Your Calendar</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 px-8 gap-4 sm:mx-4">
        {/* Left side: calendar cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-yellow-300 rounded-lg shadow-md bgdate">
            <img
              src={date1Image}
              alt="Date"
              className="w-full h-80 object-contain rounded-t-lg"
            />
            <div className="p-4">
              {/* <h2 className="text-xl font-semibold">9/03/2024</h2> */}
              <p className="text-black  py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit saepe autem iure, .</p>
            </div>
          </div>
          <div className="bg-red-700 rounded-lg shadow-md bgdate">
            <img
              src={date2Image}
              alt="Date"
              className="w-full h-80 object-contain rounded-t-lg"
            />
            <div className="p-4">
              {/* <h2 className="text-xl text-white font-semibold">10/03/2024</h2> */}
              <p className="text-white py-2 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit saepe autem iure, .</p>
            </div>
          </div>
          <div className="bg-blue-600 rounded-lg shadow-md bgdate">
            <img
              src={date3Image}
              alt="Date"
              className="w-full h-80 object-contain rounded-t-lg"
            />
            <div className="p-4">
              {/* <h2 className="text-xl text-white font-semibold  ">11/09/2024</h2> */}
              <p className="text-white  py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit saepe autem iure,.</p>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default Calendar;