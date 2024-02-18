
import React from "react";

const About = () => {
  return (
    <div className="container mx-auto py-12 flex flex-col-reverse md:flex-row items-center justify-center sm: mx-2 " id="about" style={{ paddingTop: '80px' }}>
      <div className="md:w-1/2 md:order-1">
        <h2 className="text-2xl font-semibold mb-4 px-3">Invento 2024</h2>
        <p className="text-gray-600 px-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda sequi saepe veritatis officiis doloribus consequatur? Distinctio, voluptas excepturi? Labore architecto eos eligendi ab beatae, illo delectus, quam quaerat necessitatibus atque qui non? Exercitationem explicabo reprehenderit laboriosam recusandae et iste temporibus beatae rerum ex possimus quos accusantium, quisquam consequuntur voluptatibus id dolore eum hic. Aut, quod!</p>
      </div>
      <div className="md:w-1/2 mt-4 md:mt-0 md:order-2">
        <img
          src="https://via.placeholder.com/400"
          alt="About Us"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default About;
