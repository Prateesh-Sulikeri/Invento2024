import React from 'react';
import ruleBook from '../../public/images/ruleBook2.png'; 

const Rulebook = () => {
  return (
    <section id="rulebook" className="py-12 mb-8 ">
      <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:ml-8">
          <h2 className="text-3xl font-bold text-center mb-4 hidden md:block">Rulebook</h2> 
          
          <p className="text-lg text-left text-gray-700 mb-6 hidden md:block"> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod vestibulum libero, sit amet fermentum enim.
          </p>
          
          <div className="flex justify-center">
            <a href="path/to/rulebook.pdf" download className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md ">
              Download Rulebook
            </a>
          </div>
        </div>

        <div className="md:w-1/2  md:mb-0 md:flex md:items-center"> 
          <img src={ruleBook} alt="Rulebook" className="mx-auto rounded-lg" style={{ width: '100%'}} /> 
        </div>
      </div>
    </section>
  );
};

export default Rulebook;


// import React from 'react';
// import ruleBook from '../../public/images/ruleBook.png'; 

// const Rulebook = () => {
//   return (
//     <section id="rulebook" className="py-12 mb-8">
//       <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row items-center">
//         <div className="md:w-1/2  md:mb-0 md:flex md:items-center"> 
//           <img src={ruleBook} alt="Rulebook" className="mx-auto rounded-lg" style={{ width: '75%'}} /> 
//         </div>
        
//         <div className="md:w-1/2 md:ml-8">
//           <h2 className="text-3xl font-bold text-center mb-4 hidden md:block">Rulebook</h2> 
          
//           <p className="text-lg text-left text-gray-700 mb-6 hidden md:block"> 
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod vestibulum libero, sit amet fermentum enim.
//           </p>
          
//           <div className="flex justify-center">
//             <a href="path/to/rulebook.pdf" download className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md ">
//               Download Rulebook
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Rulebook;
