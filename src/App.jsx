import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Rulebook from "./components/Rulebook";
import Calender from "./components/Calender";
import Events from "./components/Events";
import EventDetails from "./components/EventDetails";
import About from "./components/About";
import Footer from "./components/Footer";
import Developers from "./components/Developers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import eventsByType from "./eventData";
import "./index.css";
import { motion } from "framer-motion"; // Import Framer Motion
import MainLayout from "./MainLayout";
import DeveloperLayout from "./DeveloperLayout";
import EventLayout from "./EventLayout";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/developers" element={<DeveloperLayout />} />
        <Route path="/events/:eventType" element={<EventLayout />} />
      </Routes>
    </BrowserRouter>
  );
}
