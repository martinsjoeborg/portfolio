import React from 'react';
import './App.css';

import Portfolio from "./components/portfolio/Portfolio.jsx";
import LandingPage from './components/landing/LandingPage.jsx';

function App() {

    const onClick = (e) => {
      e.preventDefault()
     window.location.href = "#portfolio";
    };

  return (
    <div className='App'>
      <LandingPage onClick={onClick} />
      <Portfolio href="#portfolio" aria-hidden="true"/>
    </div>
  );
}

export default App;

