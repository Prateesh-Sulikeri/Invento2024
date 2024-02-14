import React from "react";
import hero from "../../public/images/hero.png"

const Footer = () => {
  return (
    <footer className="py-20" id="footer">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left section */}
          <div>
            <img src={hero} alt="INVENTO" className="w-32 mb-4" />
            <p className="text-lg">placeholder tagline here !!</p>
          </div>

          {/* Middle section */}
          <div>
            <h3 className="text-xl font-bold mb-4">CONTACT</h3>
            <p>KLE Technological Universits</p>
            <p>Dr. M.S. Sheshgiri College of Engineering and Technology</p>
            <p>Name: 9876543210</p>
            <p>Name: 9876543210</p>
            <p>Email: <a href="mailto:example@example.com" className="underline">example@example.com</a></p>
          </div>

          {/* Right section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Visual Media</h3>
            <ul>
              <li><a href="#" className="text-blue-300 hover:text-blue-400">Official Poster</a></li>
              <li><a href="#" className="text-blue-300 hover:text-blue-400">Promo Video</a></li>
              <li><a href="#" className="text-blue-300 hover:text-blue-400">Others</a></li>
            </ul>
            <h3 className="text-xl font-bold mt-6">Social Media</h3>
            <ul>
              <li><a href="#" className="text-blue-300 hover:text-blue-400">Facebook</a></li>
              <li><a href="#" className="text-blue-300 hover:text-blue-400">Twitter</a></li>
              <li><a href="#" className="text-blue-300 hover:text-blue-400">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
