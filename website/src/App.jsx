import React, { useEffect } from 'react';
import './App.css';
import ProfileImg from './components/profile-img/ProfileImg.jsx';
import Name from './components/name/Name.jsx';
import Link from './components/linkedin/Link.jsx';

function App() {
  useEffect(() => {
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");

    function handleMouseMove(e) {
      const posX = e.clientX;
      const posY = e.clientY;

      if (cursorDot) {
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
      }

      if (cursorOutline) {
        cursorOutline.animate({
          left: `${posX}px`,
          top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
      }
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className='App'>
      <div className='darkener'></div>
      <Link />
      <Name />
      <div className='cursor-dot' data-cursor-dot></div>
      <div className="cursor-outline" data-cursor-outline></div>
      
      <ProfileImg />
      
    </div>
  );
}

export default App;

