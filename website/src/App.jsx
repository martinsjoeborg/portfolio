import React, { useState } from 'react';
import './App.css';

import Portfolio from "./components/portfolio/Portfolio.jsx";
import LandingPage from './components/landing/LandingPage.jsx';
import About from './components/about/About.jsx';

import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Resume from './components/resume/Resume.jsx';

function App() {

  const [showPortfolio, setShowPortfolio] = useState(true);
  const [showAbout, setShowAbout] = useState(false);
  const [showResume, setShowResume] = useState(false);

  function handlePortfolioClick(e) {
    e.preventDefault();
    setShowPortfolio(true)
    setShowAbout(false)
    setShowResume(false)
    return true
  }
  function handleAboutClick(e) {
    e.preventDefault();
    setShowPortfolio(false)
    setShowAbout(true)
    setShowResume(false)
    return true
  }
  function handleResumeClick(e) {
    e.preventDefault();
    setShowPortfolio(false)
    setShowAbout(false)
    setShowResume(true)
    return true
  }


  return (

    <BrowserRouter>


      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>

      <nav className="nav-container">
        <ul className="ul-container">
          <a href='#page2' className="li-portfolio" onClick={(e) => handlePortfolioClick}>PORTFOLIO</a>
          <a href='#page2' className="li-about" onClick={(e) => handleAboutClick}>ABOUT</a>
          <a href='#page2' className="li-resume" onClick={(e) => handleResumeClick}>RESUME</a>

        </ul>
      </nav>

      <div className='page2' id='page2'>
       
        {showPortfolio ? <Portfolio /> :
          <div>
            {showAbout ? <About /> :
            <div>
              {showResume}
            </div> }
          </div>
        
        }
      
      </div>
    
    
    </BrowserRouter>

    
  );
}

export default App;