import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import hero from "../../public/images/hero.png";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolling(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = scrolling ? "bg-white shadow-md" : "bg-transparent";
  const hiddenClass = scrolling ? "" : "hidden";

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`p-4 fixed top-0 w-full z-10 transition-all duration-300 ${navbarClass}`}
    >
      <div
        className={`container mx-auto flex justify-between items-center px-[10%] ${hiddenClass}`}
      >
        <Link to="/" className="flex items-center">
          <img src={hero} alt="Main Logo" className="h-14 md:px-12" />
        </Link>
        <div className="hidden md:flex space-x-8 justify-center">
          <Link
            to="/"
            onClick={() => scrollToSection("home")}
            className={`text-2xl font-bangers ${
              location.pathname === "/" && ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/"
            onClick={() => scrollToSection("events")}
            className={` text-2xl font-bangers ${
              location.pathname === "/" && ""
            }`}
          >
            Events
          </Link>
          <Link
            to="/"
            onClick={() => scrollToSection("about")}
            className={` text-2xl font-bangers ${
              location.pathname === "/" && ""
            }`}
          >
            About
          </Link>
          <Link
            to={`/developers`}
            className={` text-2xl font-bangers ${
              location.pathname === "/developers" && ""
            }`}
          >
            Developers
          </Link>
          <button
            onClick={() => scrollToSection("footer")}
            className=" text-2xl font-bangers"
          >
            Contact
          </button>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="hover:text-gray-300 focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center bg-white rounded shadow-md">
            <Link
              to="/"
              onClick={() => scrollToSection("home")}
              className="py-4 text-2xl font-bangers"
            >
              Home
            </Link>
            <Link
              to="/"
              onClick={() => scrollToSection("events")}
              className="py-4 text-2xl font-bangers"
            >
              Events
            </Link>
            <Link
              to="/"
              onClick={() => scrollToSection("about")}
              className="py-4 text-2xl font-bangers"
            >
              About
            </Link>
            <Link to={`/developers`} className="py-4 text-2xl font-bangers">
              Developers
            </Link>
            <button
              onClick={() => scrollToSection("footer")}
              className="py-4 text-2xl font-bangers"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
