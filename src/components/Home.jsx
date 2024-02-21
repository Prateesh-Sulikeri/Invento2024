import React, { useRef } from 'react';
import hero from '../../public/images/hero1.png';
import bg from '../../public/images/bg_home.jpg';

const Home = () => {
  const homeSectionRef = useRef(null);
  
  return (
    <section
      id="home"
      ref={homeSectionRef}
      className=" text-center bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container mx-auto mb-12">
        <img src={hero} alt="Main Logo" className="mx-auto" style={{ width: '70%' }} />
        <p className="text-xl py-10">Placeholder tagline goes here...</p>
      </div>
    </section>
  );
};

export default Home;