import React, { useRef, useState, useEffect } from "react";
import hero from "../../public/images/hero1.png";
import bg from "../../public/images/bg_home.jpg";
import FlyInOnScroll from "./FlyInOnScroll";
import "./components.css"

const Home = () => {
  const homeSectionRef = useRef(null);
  const [imageWidth, setImageWidth] = useState("70%");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setImageWidth("110%"); // Adjust this value according to your preference for mobile
      } else {
        setImageWidth("70%"); // Default value for desktop
      }
    };

    // Initial call to set initial width
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="home"
      ref={homeSectionRef}
      className="text-center bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <FlyInOnScroll>
        <div className="container mx-auto mb-12 md:pt-16">
          <img
            src={hero}
            alt="Main Logo"
            className="mx-auto"
            style={{ width: imageWidth, maxWidth: "100%" }}
          />
          <p
            className="text-3xl md:text-5xl py-10 font-bangers"
            style={{
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "white",
            }}
          >
            Step into Comicopia
          </p>
        </div>
        <img
          src="../../public/images/star.png"
          alt="Star"
          className="absolute top-[22%] right-[15%] md:top-[15%] md:right-[27%] w-12 md:w-[5%] animate-twinkle-initial" 
        />
        <img
          src="../../public/images/star.png"
          alt="Star"
          className="absolute bottom-[40%] left-8 md:bottom-[15%] md:left-[30%] w-16 animate-twinkle-alternate"
        />
      </FlyInOnScroll>
    </section>
  );
};

export default Home;
