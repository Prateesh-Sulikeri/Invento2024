import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Rulebook from "./components/Rulebook";
import Calender from "./components/Calender";
import Events from "./components/Events";
import About from "./components/About";
import Footer from "./components/Footer";
import FlyInOnScroll from "./components/FlyInOnScroll";

const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
        <Home />
        <Rulebook />
        <Calender />
        <Events />
        <About />
        <Footer />
      </div>
  );
};


export default MainLayout;
