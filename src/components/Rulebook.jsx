
import React from "react";
import ruleBook from "../../public/images/ruleBook3.png";
import curvedArrow from "../../public/images/curvedArrow.png";
import pdf from "../../public/pdf/rulebook.pdf";
import FlyInOnScroll from "./FlyInOnScroll";
import star from "../../public/images/star.png";
import boomImage1 from "../../public/images/boom.jpg"; // Include the new image
import boomImage2 from "../../public/images/boom2.png"; // Include the new image
import "./components.css"

const Rulebook = () => {
  return (
    <> 
    <section id="rulebook" className="py-12 mb-8 relative">
      <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row items-center relative">
        <div className="md:w-1/2 md:mb-0 md:flex md:items-center relative">
          <FlyInOnScroll>
            <img
              src={ruleBook}
              alt="Rulebook"
              className="mx-auto rounded-lg md:pt-0 pt-12"
              style={{ width: "100%" }}
            />
            <img
              src={curvedArrow}
              alt="Curved Arrow"
              className="absolute top-0 right-0 pt-6 pr-6 md:hidden"
              style={{ width: "100px", zIndex: 10 }}
            />
          </FlyInOnScroll>

          <p
            className="absolute top-0 right-0 md:hidden text-lg font-bold pl-8 mr-4 font-gorditas"
            style={{ paddingRight: "20px" }}
          >
            Download the Rulebook
          </p>
          <img
            src={star}
            alt="Star"
            className="absolute top-20 right-20 md:top-15 md:right-27 w-12 md:w-5 animate-twinkle-initial"
          />

          {/* New image 'boom.jpg' */}
          {/* <img
            src={boomImage}
            alt="Boom"
            className="absolute bottom-20 left-20 w-16 md:hidden animate-boom"
          /> */}
        </div>

        <div className="md:w-1/2 md:ml-8">
          <FlyInOnScroll>
            <h2 className="text-6xl text-center mb-4 hidden md:block font-bangers">
              Rulebook
            </h2>
          </FlyInOnScroll>

          <FlyInOnScroll>
            <p className="text-2xl text-left text-gray-700 mb-6 hidden md:block font-oregano">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod vestibulum libero, sit amet fermentum enim.
            </p>
          </FlyInOnScroll>

          <div className="flex justify-center ">
            <FlyInOnScroll>
              <a
                href={pdf}
                target="_blank"
                className="bg-blue-500 font-gorditas hover:bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Download Rulebook
              </a>
            </FlyInOnScroll>
          </div>
        </div>
        
      </div>
     
       <img
  src={boomImage2}
  alt="Boom"
  className="absolute top-20 right-20 w-20 mb-2 animate-boom   "
  style={{
    margin: "20px",
    animation: "moveLeftRight 2s linear infinite", // Adjust the duration if needed
  }}
/>
<img
  src={boomImage1}
  alt="Boom"
  className=" absolute bottom-18 left-18 w-16  mb-2 animate-boom   "
  style={{
    margin: "20px",
    animation: "moveLeftRight 2s linear infinite", // Adjust the duration if needed
  }}
/>
      
      
      
    </section>
  
</>    
  );
};

export default Rulebook;
