import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Rulebook from './components/Rulebook'
import Calender from './components/Calender'
import Events from './components/Events'
import EventDetails from './components/EventDetails'
import About from './components/About'
import Footer from './components/Footer'
import Developers from './components/Developers'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import eventsByType from "./eventData";


function MainLayout() {
  return (
    <>
      <div className="bg-gray-200 min-h-screen">
        <Navbar />
        <div className="container mx-auto px-[200px] py-8">
          <Home />
          <Rulebook />
          <Calender />
          <Events />
          <About />
          <Footer />
        </div>
      </div>
    </>
  );
}

function DeveloperLayout() {
  return (
    <>
      <div className="bg-gray-200 min-h-screen">
        <Navbar />
        <div className="container mx-auto px-[200px] py-8">
          <Developers/>
          <Footer />
        </div>
      </div>
    </>
  );
}

function EventLayout() {
  return (
    <>
      <div className="bg-gray-200 min-h-screen">
        <Navbar />
        <div className="container mx-auto px-[200px] py-8">
        <EventDetails eventsByType={eventsByType} />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/developers" element={< DeveloperLayout/>} />
        <Route
          path="/events/:eventType"
          element={<EventLayout />}
        />
        
      </Routes>
    </BrowserRouter>
  );
}
