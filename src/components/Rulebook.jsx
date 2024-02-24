import React from 'react';
import ruleBook from '../../public/images/ruleBook2.png';
import curvedArrow from '../../public/images/curvedArrow.png';

const Rulebook = () => {
  return (
    <section id="rulebook" className="py-12 mb-8 relative">
      <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:mb-0 md:flex md:items-center relative">
          <img src={ruleBook} alt="Rulebook" className="mx-auto rounded-lg md:pt-0 pt-12" style={{ width: '100%' }} />
          <img src={curvedArrow} alt="Curved Arrow" className="absolute top-0 right-0 pt-6 pr-6 md:hidden" style={{ width: '100px', zIndex: 10 }} />
          <p className="absolute top-0 right-0 md:hidden text-lg font-bold pl-8 mr-4 font-gorditas" style={{ paddingRight: '20px' }}>Download the Rulebook</p>
        </div>

        <div className="md:w-1/2 md:ml-8">
          <h2 className="text-6xl text-center mb-4 hidden md:block font-bangers">Rulebook</h2>

          <p className="text-2xl text-left text-gray-700 mb-6 hidden md:block font-oregano">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod vestibulum libero, sit amet fermentum enim.
          </p>

          <div className="flex justify-center "> {/* Adjusted justify-center for mobile */}
            <a href="path/to/rulebook.pdf" download className="bg-blue-500 font-gorditas hover:bg-blue-600 text-white px-4 py-2 rounded-md ">
              Download Rulebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rulebook;
