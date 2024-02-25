
import React from "react";
import bg from '../../public/images/bg_about.jpg';
import hero from '../../public/images/luffy.png';
import FlyInOnScroll from "./FlyInOnScroll";
import superman from "../../public/images/superman.png"; // Include the new image

const About = () => {
  return (
    <section
      id="about"
      className="text-center bg-cover bg-center h-screen flex items-center justify-center relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Add the boomImage1 with pulse animation */}
      <img
        src={superman}
        alt="Boom"
        className="w-20 h-20 absolute top-16 left-1/2 transform -translate-x-1/2 animate-pulse"
      />

      <div className="w-1/2 md:px-8">
        <FlyInOnScroll>
          <h2 className="text-6xl mb-4 font-bangers">About </h2>
        </FlyInOnScroll>
        <FlyInOnScroll>
          <p className="text-xl pb-10 font-oregano">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
            mollitia illo ipsam praesentium placeat voluptatibus cum reiciendis
            amet, magni suscipit facere beatae repudiandae doloremque laboriosam.
          </p>
        </FlyInOnScroll>
      </div>
    </section>
  );
};

export default About;
