import React from "react";
import bg from '../../public/images/bg_cal.jpg';
import superman from '../../public/images/superman.png';

const Calendar = () => {
  return (
    <div className="containerS min-h-screen py-8" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Added sm:px-4 for small screens (phone screens) */}
      <h1 className="text-3xl font-semibold text-center mb-[5%]">Mark Your Calendar</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 px-8 gap-4 sm:mx-4">
        {/* Left side: calendar cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-md">
            {/* <img
              src="https://via.placeholder.com/300"
              alt="Date"
              className="w-full h-40 object-cover rounded-t-lg"
            /> */}
            <div className="p-4">
              <h2 className="text-xl font-semibold">9/03/2024</h2>
              <p className="text-gray-600  py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit saepe autem iure, dignissimos mollitia natus, cumque quam pariatur veniam ad aliquid aliquam perferendis ex sapiente enim tenetur nihil eos. Amet.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md">
            {/* <img
              src="https://via.placeholder.com/300"
              alt="Date"
              className="w-full h-40 object-cover rounded-t-lg"
            /> */}
            <div className="p-4">
              <h2 className="text-xl font-semibold">10/03/2024</h2>
              <p className="text-gray-600 py-2 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit saepe autem iure, dignissimos mollitia natus, cumque quam pariatur veniam ad aliquid aliquam perferendis ex sapiente enim tenetur nihil eos. Amet.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md">
            {/* <img
              src="https://via.placeholder.com/300"
              alt="Date"
              className="w-full h-40 object-cover rounded-t-lg"
            /> */}
            <div className="p-4">
              <h2 className="text-xl font-semibold">11/09/2024</h2>
              <p className="text-gray-600  py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit saepe autem iure, dignissimos mollitia natus, cumque quam pariatur veniam ad aliquid aliquam perferendis ex sapiente enim tenetur nihil eos. Amet.</p>
            </div>
          </div>
        </div>

        {/* Right side: Superman image */}
        <div className="hidden md:flex justify-center items-center w-full">
          <img src={superman} alt="Superman" className="w-full h-auto max-w-md" /> {/* Adjusted the width here */}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
