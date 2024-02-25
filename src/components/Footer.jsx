
import React from "react";
import hero from "../../public/images/hero.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import FlyInOnScroll from "./FlyInOnScroll";

const Footer = () => {
  return (
    <footer className="px-4 py-10 md:py-20 bg-gray-800 text-white " id="footer">
      <FlyInOnScroll>

      <div className="container mx-auto  ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Left section */}
          <div className="col-span-1 pl-14 ">
            <img src={hero} alt="INVENTO" className="w-32 mb-4 mx-auto md:mx-0" />
            <p className="text-2xl text-center font-bangers md:text-left" style={{ WebkitTextStrokeWidth: '0.5px', WebkitTextStrokeColor: 'green' }} >Step into Comicopia</p>
          </div>

          {/* Middle section */}
          <div className="col-span-1 mt-6 md:mt-0">
            <h3 className="text-2xl font-bangers mb-4">CONTACT</h3>
            <p className="font-oregano">KLE Technological University</p>
            <p className="font-oregano">Dr. M.S. Sheshgiri College of Engineering and Technology</p>
            <p className="font-oregano">Name: 9876543210</p>
            <p className="font-oregano">Email: <a href="mailto:example@example.com" className="underline">example@example.com</a></p>
          </div>

          <div className="col-span-1 mt-6 md:mt-0">
            <div className="flex justify-between">
              <div>
                <h3 className="text-2xl font-bangers mb-4 pr-4">Visual Media</h3>
                <ul>
                  <li><a href="#" className="text-blue-300 hover:text-blue-400 font-oregano">Official Poster</a></li>
                  <li><a href="#" className="text-blue-300 hover:text-blue-400 font-oregano">Promo Video</a></li>
                  <li><a href="#" className="text-blue-300 hover:text-blue-400 font-oregano">Others</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bangers mb-4 pr-2 ">Social Media</h3>
                <ul>
                  <li><a href="#" className="text-blue-300  hover:text-blue-400 flex items-center font-oregano"><FaFacebook className="mr-2" /> Facebook</a></li>
                  <li><a href="#" className="text-blue-300 hover:text-blue-400 flex items-center font-oregano"><FaTwitter className="mr-2" /> Twitter</a></li>
                  <li><a href="#" className="text-blue-300 hover:text-blue-400 flex items-center font-oregano"><FaInstagram className="mr-2" /> Instagram</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-t border-white mt-8 mb-4" />
        <p className="text-center text-lg font-oregano">&copy; Copyright Invento 2024. All rights reserved.</p>
      </div>
      </FlyInOnScroll>

    </footer>
  );
};

export default Footer;