import React from 'react'
import Developers from './components/Developers';
import Footer from './components/Footer';

function DeveloperLayout() {
    return (
      <>
        <div className="bg-orange-400 min-h-screen">
          <Developers />
          <Footer />
        </div>
      </>
    );
  }

export default DeveloperLayout