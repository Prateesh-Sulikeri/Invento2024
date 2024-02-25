import React, { useEffect } from "react";
import {
  IoGlobeOutline,
  IoHome,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import pfp from "../../public/images/pfp.jpg";
import FlyInOnScroll from "./FlyInOnScroll";

const Developers = () => {
  const developers = [
    {
      id: 1,
      name: "Prateeh Sulikeri",
      role: "Lead Developer",
      imageUrl: pfp,
      socials: {
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        twitter: "https://twitter.com/johndoe",
      },
    },
    {
      id: 2,
      name: "Suhas Jadav",
      role: "Developer",
      imageUrl: pfp,
      socials: {
        github: "https://github.com/janesmith",
        linkedin: "https://linkedin.com/in/janesmith",
        twitter: "https://twitter.com/janesmith",
      },
    },
    {
      id: 3,
      name: "Pratham Kadapatti",
      role: "Designer",
      imageUrl: pfp,
      socials: {
        github: "https://github.com/janesmith",
        linkedin: "https://linkedin.com/in/janesmith",
        twitter: "https://twitter.com/janesmith",
      },
    },
    {
      id: 4,
      name: "S Kavya",
      role: "Designer",
      imageUrl: pfp,
      socials: {
        github: "https://github.com/janesmith",
        linkedin: "https://linkedin.com/in/janesmith",
        twitter: "https://twitter.com/janesmith",
      },
    },
    {
      id: 5,
      name: "Rohan S P",
      role: "Designer",
      imageUrl: pfp,
      socials: {
        github: "https://github.com/janesmith",
        linkedin: "https://linkedin.com/in/janesmith",
        twitter: "https://twitter.com/janesmith",
      },
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="bg-orange-400 min-h-screen py-20" id="developers"
      style={{backgroundImage: 'linear-gradient(45deg, #4158D0, #C850C0, #FFCC70)'}}
    >
      <Link
        to="/"
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Back To Home!!"
        data-tooltip-place="bottom"
        className="fixed fixed-button flex items-center justify-center w-12 h-12 rounded-full bg-blue-900 text-white shadow-sm hover:shadow-md transition-all duration-300"
        style={{
          backgroundImage: "url(../../public/images/rbbtn.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          right: "4rem",
          top: "4rem",
          zIndex: "9999", // Ensure the link stays on top
        }}
      >
        <IoHome className="text-xl" />
        <Tooltip id="my-tooltip" />
      </Link>
      <FlyInOnScroll>
      <h1 className="text-4xl md:text-6xl mb-6 text-center font-bangers"style={{ WebkitTextStrokeWidth: '0.5px', WebkitTextStrokeColor: 'white' }} >
        Meet Our Developers
      </h1>
      </FlyInOnScroll>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-[15%] py-10">
        {developers.map((developer) => (
          <FlyInOnScroll key={developer.id}>

          <div
            key={developer.id}
            className="bg-white rounded-lg shadow-2xl p-4 flex flex-col items-center h-full"
          >
            {/* Developer Image */}
            <div className="w-32 h-32 rounded-full  overflow-hidden mb-4">
              <img
                src={developer.imageUrl}
                alt={developer.name}
                className="w-full h-full object-cover rounded-full" // Apply border-radius: 50%
              />
            </div>

            {/* Developer Info */}
            <div className="text-center py-3 flex-1">
              <h2 className="text-3xl font-ceviche">{developer.name}</h2>
              <p className="text-gray-600 text-xl pt-3 font-oregano">
                {developer.role}
              </p>
            </div>

            {/* Social Media Links */}
            <div className="mt-4 flex pb-3 justify-center">
              <a
                href={developer.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 mr-2"
              >
                <IoLogoGithub className="text-2xl" />
              </a>
              <a
                href={developer.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 mr-2"
              >
                <IoLogoLinkedin className="text-2xl" />
              </a>
              <a
                href={developer.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700"
              >
                <IoGlobeOutline className="text-2xl" />
              </a>
            </div>
          </div>
          </FlyInOnScroll>

        ))}
      </div>
    </div>
  );
};

export default Developers;
