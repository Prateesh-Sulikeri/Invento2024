import React from 'react';
import hero from '../../public/images/hero.png'
const Home = () => {
  return (
    <section id="home" className=" py-20 text-center">
      <div className="container mx-auto">
        {/* Main logo */}
        <img src={hero} alt="Main Logo" className="mx-auto mb-8" style={{ maxWidth: '200px' }} />
        
        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">INVENTO 2024</h1>
        
        {/* Tagline */}
        <p className="text-lg text-gray-700">Placeholder tagline goes here...</p>
      </div>
    </section>
  );
};

export default Home;
