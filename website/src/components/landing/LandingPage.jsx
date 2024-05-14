import Footer from "../footer/Footer";
import Linkish from "../linkedin/Link";
import Name from "../name/Name";
import ProfileImg from "../profile-img/ProfileImg";

import "./LandingPage.css"
import { useEffect } from "react";

const LandingPage = ({ onClick }) => {

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
        <div className='landingPage-container'>
            {/* <div className='darkener'></div> */}
            <div className='cursor-dot' data-cursor-dot></div>
            <div className="cursor-outline" data-cursor-outline></div>

            <Linkish />
            <Name />   
            <ProfileImg />
            <Footer onClick={onClick} />
        </div>
    );
}
 
export default LandingPage;