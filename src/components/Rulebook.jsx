// import React from 'react';

// const Rulebook = () => {
//   return (
//     <section id="rulebook" className="py-2">
//       <div className="container mx-auto flex flex-col md:flex-row items-center">
//         {/* Image */}
//         <div className="md:w-1/2 mb-8 md:mb-0">
//           <img src="path/to/rulebook-image.jpg" alt="Rulebook" className="mx-auto rounded-lg" style={{ maxWidth: '400px' }} />
//         </div>
        
//         {/* Text */}
//         <div className="md:w-1/2 md:ml-8">
//           {/* Rulebook heading */}
//           <h2 className="text-3xl font-bold mb-4">Rulebook</h2>
          
//           {/* Rulebook description */}
//           <p className="text-lg text-gray-700 mb-6">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod vestibulum libero, sit amet fermentum enim.
//           </p>
          
//           {/* Download button */}
//           <a href="path/to/rulebook.pdf" download className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
//             Download Rulebook
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Rulebook;

// import React from 'react';

// const Rulebook = () => {
//   return (
//     <section id="rulebook" className="py-2">
//       <div className="container mx-auto flex flex-col md:flex-row items-center mx ">
//         {/* Image */}
//         <div className="w-full md:w-1/2 mb-8 md:mb-0">
//           <img src="path/to/rulebook-image.jpg" alt="Rulebook" className="mx-auto rounded-lg" style={{ maxWidth: '400px' }} />
//         </div>
        
//         {/* Text */}
//         <div className="w-full md:w-1/2 md:ml-8">
//           {/* Rulebook heading */}
//           <h2 className="text-3xl font-bold mb-4">Rulebook</h2>
          
//           {/* Rulebook description */}
//           <p className="text-lg text-gray-700 mb-6">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod vestibulum libero, sit amet fermentum enim.
//           </p>
          
//           {/* Download button */}
//           <a href="path/to/rulebook.pdf" download className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2  rounded-md block w-full md:inline-block">
//             Download Rulebook
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Rulebook;


import React from 'react';

const Rulebook = () => {
  return (
    <section id="rulebook" className="py-2">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img src="path/to/rulebook-image.jpg" alt="Rulebook" className="mx-auto rounded-lg" style={{ maxWidth: '400px' }} />
        </div>
        
        {/* Text */}
        <div className="w-full md:w-1/2 md:ml-8 text-center md:text-left">
          {/* Rulebook heading */}
          <h2 className="text-3xl font-bold mb-4">Rulebook</h2>
          
          {/* Rulebook description */}
          <p className="text-lg text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod vestibulum libero, sit amet fermentum enim.
          </p>
          
          {/* Download button */}
          <a href="path/to/rulebook.pdf" download className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md inline-block">
            Download Rulebook
          </a>
        </div>
      </div>
    </section>
  );
};

export default Rulebook;
