

import { Link } from "react-router-dom";

import React from "react";
import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";
import AnimCursor from "./AnimCursor";


const Developers = () => {
  // ... (your existing code)
  const developers = [
    {
      id: 1,
      name: "Prateeh Sulikeri",
      role: "Lead Developer",
      imageUrl: "path/to/Prateeh.jpg",
      socials: {
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        instagram: "https://www.instagram.com/johndoe/",
      },
    },
    {
      id: 2,
      name: "Pratham Kadapatti",
      role: "Designer, Developer",
      imageUrl: "path/to/Pratham.jpg",
      socials: {
        github: "https://github.com/janesmith",
        linkedin: "https://linkedin.com/in/janesmith",
        instagram: "https://www.instagram.com/janesmith/",
      },
    },
    {
      id: 3,
      name: "Suhas Jadav",
      role: "Developer",
      imageUrl: "path/to/Suhas.jpg",
      socials: {
        github: "https://github.com/janesmith",
        linkedin: "https://linkedin.com/in/janesmith",
        instagram: "https://www.instagram.com/janesmith/",
      },
    },
    // Add more developers as needed
  ];

  // Set the background image URL
  const backgroundImageUrl = `/images/DevBg.jpg`;

  return (
    <>
    <AnimCursor/>
  
      <div className="relative container bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImageUrl})` }} id="developers">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6 mt-16 text-center md:text-left text-white">
        Meet Our Developers
      </h1>

       {/* Button to go to the home component  */}
       <Link to="/" className=" absolute mt-2 pt-4 top-4 right-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        Home
      </Link> 
     

      <div className="grid grid-cols-1 mb-4 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 py-4">
        {developers.map((developer) => (
          <div key={developer.id} className="bg-white rounded-lg shadow-md p-4">
            {/* Developer Image */}
            <img
              src={developer.imageUrl}
              alt={developer.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />

            {/* Developer Info */}
            <div className="text-center">
              <h2 className="text-lg font-semibold">{developer.name}</h2>
              <p className="text-gray-600">{developer.role}</p>

              {/* Social Media Links */}
              <div className="mt-4 flex justify-center">
                <a
                  href={developer.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 mr-2"
                >
                  <IoLogoGithub />
                </a>
                <a
                  href={developer.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 mr-2"
                >
                  <IoLogoLinkedin />
                </a>
                <a
                  href={developer.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700"
                >
                  <IoLogoInstagram />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    


    </>
  );
};

export default Developers;


<div className="grid grid-cols-20 h-screen">
  {/* Left Side (19 cols) */}
  <div className="col-span-19 my-0 py-0 ">
    {/* Your content for the left side goes here */}
  
  </div>

  {/* Right Side (1 col) */}
  <div className="col-span-1 mt-16 flex items-center justify-center fixed right-0 top-0 h-full">
    {/* Your button goes here */}
   
  </div>
</div>
