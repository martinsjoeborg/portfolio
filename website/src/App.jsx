import React, { useState } from 'react';
import './App.css';

import Portfolio from "./components/portfolio/Portfolio.jsx";
import LandingPage from './components/landing/LandingPage.jsx';
import About from './components/about/About.jsx';
import WealthroneModal from './components/portfolio/portfolio-groups/wealthrone/wealthroneModal.jsx';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './components/contact/Contact.jsx';

function App() {

  const [showPortfolio, setShowPortfolio] = useState(true);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  function handlePortfolioClick(e) {
    e.preventDefault();
    setShowPortfolio(true);
    setShowAbout(false);
    setShowContact(false);
    document.getElementById('page2').scrollIntoView({ behavior: 'smooth' });
    return false; // Prevent default action
  }
  
  function handleAboutClick(e) {
    e.preventDefault();
    setShowPortfolio(false);
    setShowAbout(true);
    setShowContact(false);
    document.getElementById('page2').scrollIntoView({ behavior: 'smooth' });
    return false;
  }
  
  function handleContactClick(e) {
    e.preventDefault();
    setShowPortfolio(false);
    setShowAbout(false);
    setShowContact(true);
    document.getElementById('page2').scrollIntoView({ behavior: 'smooth' });
    return false;
  }
  


  return (

    <BrowserRouter>


      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/portfolio-page/' element={<Portfolio WealthroneModal={WealthroneModal} />} />
      </Routes>

      <nav className="nav-container">
        <ul className="ul-container">
          <a href='#page2' className="li-portfolio" onClick={handlePortfolioClick}>Portfolio</a>
          <a href='#page2' className="li-about" onClick={handleAboutClick}>About</a>
          <a href='#page2' className="li-Contact" onClick={handleContactClick}>Contact</a>

        </ul>
      </nav>

      <div className='page2' id='page2'>
       
        {showPortfolio ? <Portfolio /> :
          <div>
            {showAbout ? <About /> :
            <div>
              {showContact ? <Contact />:null}
            </div> }
          </div>
        
        }
      
      </div>
    
    
    </BrowserRouter>

    
  );
}

export default App;