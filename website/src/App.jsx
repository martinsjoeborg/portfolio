import React, { useState } from 'react';
import './App.css';

import Portfolio from "./components/portfolio/Portfolio.jsx";
import LandingPage from './components/landing/LandingPage.jsx';
import About from './components/about/About.jsx';
import WealthroneModal from './components/portfolio/portfolio-groups/wealthrone/wealthroneModal.jsx';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from './components/resume/Resume.jsx';

function App() {

  const [showPortfolio, setShowPortfolio] = useState(true);
  const [showAbout, setShowAbout] = useState(false);
  const [showResume, setShowResume] = useState(false);

  function handlePortfolioClick(e) {
    e.preventDefault();
    setShowPortfolio(true);
    setShowAbout(false);
    setShowResume(false);
    document.getElementById('page2').scrollIntoView({ behavior: 'smooth' });
    return false; // Prevent default action
  }
  
  function handleAboutClick(e) {
    e.preventDefault();
    setShowPortfolio(false);
    setShowAbout(true);
    setShowResume(false);
    document.getElementById('page2').scrollIntoView({ behavior: 'smooth' });
    return false;
  }
  
  function handleResumeClick(e) {
    e.preventDefault();
    setShowPortfolio(false);
    setShowAbout(false);
    setShowResume(true);
    document.getElementById('page2').scrollIntoView({ behavior: 'smooth' });
    return false;
  }
  


  return (

    <BrowserRouter>


      <Routes>
        <Route path='/home' element={<LandingPage />} />
        <Route path='/portfolio-page' element={<Portfolio WealthroneModal={WealthroneModal} />} />
      </Routes>

      <nav className="nav-container">
        <ul className="ul-container">
          <a href='#page2' className="li-portfolio" onClick={handlePortfolioClick}>Portfolio</a>
          <a href='#page2' className="li-about" onClick={handleAboutClick}>About</a>
          <a href='#page2' className="li-resume" onClick={handleResumeClick}>Resume</a>

        </ul>
      </nav>

      <div className='page2' id='page2'>
       
        {showPortfolio ? <Portfolio /> :
          <div>
            {showAbout ? <About /> :
            <div>
              {showResume ? <Resume />:null}
            </div> }
          </div>
        
        }
      
      </div>
    
    
    </BrowserRouter>

    
  );
}

export default App;