import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-gray-800 p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-white font-bold text-xl">
            INVENTO
          </Link>
        </div>
        <div className="">
          <Link to="/" className="text-white hover:text-gray-300 px-4 gap-2">
            Home
          </Link>
          <Link
            to="/"
            onClick={() => scrollToSection("events")}
            className="text-white hover:text-gray-300 px-4 gap-2"
          >
            Events
          </Link>
          <Link
            to="/"
            onClick={() => scrollToSection("about")}
            className="text-white hover:text-gray-300 px-4 gap-2"
          >
            About
          </Link>
          <Link
            to={`/developers`}
            className="text-white hover:text-gray-300 px-4 gap-2"
          >
            Developers
          </Link>
          <button
            onClick={() => scrollToSection("footer")}
            className="text-white hover:text-gray-300 px-4 gap-2"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
