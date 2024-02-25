import React from "react";
import bg from '../../public/images/bg_about.jpg';
import hero from '../../public/images/luffy.png';
import FlyInOnScroll from "./FlyInOnScroll";

const About = () => {
  return (
    <section
      id="about"
      className="text-center bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
        <div className="w-1/2 md:px-8">
          <FlyInOnScroll>
          <h2 className="text-6xl mb font-bangers">About </h2>
          </FlyInOnScroll>
          <FlyInOnScroll>
          <p className="text-xl py-10 font-oregano">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque mollitia illo ipsam praesentium placeat voluptatibus cum reiciendis amet, magni suscipit facere beatae repudiandae doloremque laboriosam.</p>
          </FlyInOnScroll>
        </div>
    </section>
  );
};

export default About;
