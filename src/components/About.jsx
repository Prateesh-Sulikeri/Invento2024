import React from "react";
import bg from '../../public/images/bg_about.jpg';
import hero from '../../public/images/luffy.png';

const About = () => {
  return (
    <section
      id="about"
      className="text-center bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
        <div className="w-1/2 px-8">
          <h2 className="text-3xl font-bold mb">About </h2>
          <p className="text-xl py-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque mollitia illo ipsam praesentium placeat voluptatibus cum reiciendis amet, magni suscipit facere beatae repudiandae doloremque laboriosam.</p>
        </div>
    </section>
  );
};

export default About;
