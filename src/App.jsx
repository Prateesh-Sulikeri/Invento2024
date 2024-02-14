import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Rulebook from './components/Rulebook'
import Calender from './components/Calender'
import Events from './components/Events'
import About from './components/About'
import Footer from './components/Footer'
import Developers from './components/Developers'

export default function App() {
  return (
    <div>
      <div className="bg-gray-200 min-h-screen">
        <Navbar />
        <div className="container mx-auto px-[200px] py-8">
          <Home />
          <Rulebook />
          <Calender />
          <Events />
          <About />
          <Developers/>
          <Footer />
        </div>
      </div>
    </div>
  )
}
