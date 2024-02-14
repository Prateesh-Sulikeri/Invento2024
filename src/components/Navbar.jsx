import React from 'react';

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-gray-800 p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a href="#" className="text-white font-bold text-xl">
            INVENTO
          </a>
        </div>
        <div className=''>
          <button onClick={() => scrollToSection('home')} className="text-white hover:text-gray-300 px-4 gap-2">
            Home
          </button>
          <button onClick={() => scrollToSection('events')} className="text-white hover:text-gray-300 px-4 gap-2">
            Events
          </button>
          <button onClick={() => scrollToSection('about')} className="text-white hover:text-gray-300 px-4 gap-2">
            About
          </button>
          <button onClick={() => scrollToSection('developers')} className="text-white hover:text-gray-300 px-4 gap-2">
            Developers
          </button>
          <button onClick={() => scrollToSection('footer')} className="text-white hover:text-gray-300 px-4 gap-2">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
