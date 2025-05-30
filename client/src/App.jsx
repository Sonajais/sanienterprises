import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/css/style.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import Services1 from './components/services/Services1';
import Services2 from './components/services/Services2';
import Services3 from './components/services/Services3';
import Services4 from './components/services/Services4';
import Services5 from './components/services/Services5';
import Services6 from './components/services/Services6';
import Services7 from './components/services/Services7';
import Services8 from './components/services/Services8';
import Services9 from './components/services/Services9';
import Research1 from './components/research/Research1';
import Research2 from './components/research/Research2';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/Services1" element={<Services1 />} />
            <Route path="/Services2" element={<Services2 />} />
            <Route path="/Services3" element={<Services3 />} />
            <Route path="/Services4" element={<Services4 />} />
            <Route path="/Services5" element={<Services5 />} />
            <Route path="/Services6" element={<Services6 />} />
            <Route path="/Services7" element={<Services7 />} />
            <Route path="/Services8" element={<Services8 />} />
            <Route path="/Services9" element={<Services9 />} />
            <Route path="/Research1" element={<Research1 />} />
            <Route path="/Research2" element={<Research2 />} />
          </Routes>
          <Footer />
        </ BrowserRouter>
      </>
    </>
  )
}

export default App
