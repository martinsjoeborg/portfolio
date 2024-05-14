import "./Footer.css"
import React from "react";

const Footer = ({onClick}) => {

    return (
        <nav className="nav-container">
            <ul className="ul-container">
                <a className="li-portfolio" href="portfolio" onClick={onClick}>PORTFOLIO</a>
                <a className="li-about">ABOUT</a>
                <a className="li-resume">RESUME</a>
            </ul>
        </nav>
    );
}
 
export default Footer;
