import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Faculty from './pages/Faculty';
import Students from './pages/Students';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import './App.css';  
const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul className='appul'>
            <li className='appli'><Link to="/"><p>Home</p></Link></li>
            <li className='appli'><Link to="/about"><p>About Us</p></Link></li>
            <li className='appli'><Link to="/academics"><p>Academics</p></Link></li>
            <li className='appli'><Link to="/admissions"><p>Admissions</p></Link></li>
            <li className='appli'><Link to="/faculty"><p>Faculty</p></Link></li>
            <li className='appli'><Link to="/students"><p>Students</p></Link></li>
            <li className='appli'><Link to="/gallery"><p>Gallery</p></Link></li>
            <li className='appli'><Link to="/contact"><p>Contact Us</p></Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/students" element={<Students />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
