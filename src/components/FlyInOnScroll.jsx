import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

// eslint-disable-next-line react/prop-types
const FlyInOnScroll = ({ children }) => {
  const ref = useRef(null);
  const { inView } = useInView({ threshold: 0.5 }); // Observe 50% of the element

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (inView) {
        console.log("Element is in view!");
      }
    }, 200); // Delay by 200 milliseconds (adjust as needed)
  
    return () => clearTimeout(timeoutId);
  }, [inView]);
  

  return (
    <motion.div
      ref={ref}
      className="fly-in-on-scroll" // Add Tailwind class for styling
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
    >
      {children}
    </motion.div>
  );
};

export default FlyInOnScroll;
