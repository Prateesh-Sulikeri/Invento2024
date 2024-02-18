// import React from "react";
// import { Link, useLocation } from "react-router-dom";

// const Navbar = () => {
//   const location = useLocation();

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <nav className="bg-gray-800 p-4 fixed top-0 w-full z-10">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="flex items-center space-x-4">
//           <Link to="/" className="text-white font-bold text-xl">
//             INVENTO
//           </Link>
//         </div>
//         <div className="">
//           <Link to="/" className="text-white hover:text-gray-300 px-4 gap-2">
//             Home
//           </Link>
//           <Link
//             to="/"
//             onClick={() => scrollToSection("events")}
//             className="text-white hover:text-gray-300 px-4 gap-2"
//           >
//             Events
//           </Link>
//           <Link
//             to="/"
//             onClick={() => scrollToSection("about")}
//             className="text-white hover:text-gray-300 px-4 gap-2"
//           >
//             About
//           </Link>
//           <Link
//             to={`/developers`}
//             className="text-white hover:text-gray-300 px-4 gap-2"
//           >
//             Developers
//           </Link>
//           <button
//             onClick={() => scrollToSection("footer")}
//             className="text-white hover:text-gray-300 px-4 gap-2"
//           >
//             Contact
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";

// const Navbar = () => {
//   const location = useLocation();
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//       setMobileMenuOpen(false); // Close mobile menu after clicking an option
//     }
//   };

//   return (
//     <nav className="bg-gray-800 p-4 fixed top-0 w-full z-10">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="flex items-center space-x-4">
//           <Link to="/" className="text-white font-bold text-xl">
//             INVENTO
//           </Link>
//         </div>
//         <div className="md:flex hidden">
//           {/* Navigation links for medium and larger screens */}
//           <Link to="/" className={`text-white hover:text-gray-300 px-4 gap-2 ${location.pathname === "/" && "underline"}`}>
//             Home
//           </Link>
//           <Link to="/" onClick={() => scrollToSection("events")} className="text-white hover:text-gray-300 px-4 gap-2">
//             Events
//           </Link>
//           <Link to="/" onClick={() => scrollToSection("about")} className="text-white hover:text-gray-300 px-4 gap-2">
//             About
//           </Link>
//           <Link to="/developers" className={`text-white hover:text-gray-300 px-4 gap-2 ${location.pathname.startsWith("/developers") && "underline"}`}>
//             Developers
//           </Link>
//           <button onClick={() => scrollToSection("footer")} className="text-white hover:text-gray-300 px-4 gap-2">
//             Contact
//           </button>
//         </div>
//         <div className="md:hidden">
//           {/* Mobile menu button */}
//           <button onClick={toggleMobileMenu} className="text-white hover:text-gray-300 px-4 gap-2">
//             Menu
//           </button>
//           {/* Mobile menu options */}
//           {isMobileMenuOpen && (
//             <div className="absolute top-16 right-0 bg-gray-800 pl-16 space-y-2 w-full  ">
//               <Link to="/" className={`text-white hover:text-gray-300 block ${location.pathname === "/" && "underline"}`}>
//                 Home
//               </Link>
//               <button onClick={() => scrollToSection("events")} className="text-white hover:text-gray-300 block">
//                 Events
//               </button>
//               <button onClick={() => scrollToSection("about")} className="text-white hover:text-gray-300 block">
//                 About
//               </button>
//               <Link to="/developers" className={`text-white hover:text-gray-300 block ${location.pathname.startsWith("/developers") && "underline"}`}>
//                 Developers
//               </Link>
//               <button onClick={() => scrollToSection("footer")} className="text-white hover:text-gray-300 block">
//                 Contact
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false); // Close mobile menu after clicking on a link
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
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/" onClick={() => scrollToSection("events")} className="text-white hover:text-gray-300">
            Events
          </Link>
          <Link to="/" onClick={() => scrollToSection("about")} className="text-white hover:text-gray-300">
            About
          </Link>
          <Link to={`/developers`} className="text-white hover:text-gray-300">
            Developers
          </Link>
          <button onClick={() => scrollToSection("footer")} className="text-white hover:text-gray-300">
            Contact
          </button>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="flex flex-col items-center">
            <Link to="/" onClick={() => scrollToSection("home")} className="text-white py-2">
              Home
            </Link>
            <Link to="/" onClick={() => scrollToSection("events")} className="text-white py-2">
              Events
            </Link>
            <Link to="/" onClick={() => scrollToSection("about")} className="text-white py-2">
              About
            </Link>
            <Link to={`/developers`} className="text-white py-2">
              Developers
            </Link>
            <button onClick={() => scrollToSection("footer")} className="text-white py-2">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
