import React from "react";
import "./wealthroneModal.css"
import wealthroneImg from "../../../../assets/img/wealthrone-pic.png"

const WealthroneModal = ({ setWealthroneModalOpen }) => {



    return (
        <div className="modal-container">

            <button onClick={() => setWealthroneModalOpen(false)} className="btn">ⓧ</button>

            <div className="modal-content">
                
                <div className="txt">

                    <div className="title">Design and Developer Intern at Wealthrone Capital</div>

                    <a href="https://www.wealthrone.com" className="wealthrone-link" target="blank">wealthrone.com</a>

                    {/* <img src={wealthroneImg} alt="wealthrone-image" className="wealthroneImg"/> */}

                    <div className="mainText">
                        From the fall of 2023 to the summer of 2024 I did an internship with the crypto hedge-fund company Wealthrone Capital.
                        <br />
                        <br />
                        This was my first time doing an internship and it was one of the best experiences I've had.
                        I found Wealthrone while doing research for crypto-related businesses in northern Europe.
                        It is a start-up company with great potential. Their main focus is to bring stability to the crypto market and utilize its volatility. This way they can attract and help more clients that are unsure of investing in crypto.
                        <br />
                        <br />
                        When I got to Wealthrone they already had a website but they wanted to update and modernize it.
                        We exchanged many great ideas and discussed different design layouts and functionallity.
                        <br /><br />
                        I created different design-prototypes so that the company could more easily see what they wanted and 
                        what they didn't want. For this, I had to learn a new program called "Figma". This was a very effective tool 
                        to use for this specific problem. It was fun to use and to see how the website would look before I started coding.
                        <br /><br />
                        So the company wanted a website that they could easily update and add things to without the need
                        of knowing how to code. They already had a website made with WIX and they wanted to be able to 
                        continue using WIX if possible, to update the new website in the future. Therefore, I decided to use WIX's own 
                        native coding language "Velo". Velo is very similar to JavaScript so it was quite nice to see how I
                        could utilize my JS skills when working with a web-builder.
                        <br /><br />
                        The whole process took about 10 weeks to complete. It was an incredible experience and I have grown a lot both
                        as a person but also a developer. Many of the tasks I was given were completely new to me and I had to find ways
                        to solve the taks mostly by myself. 
                        <br /><br />
                        The company was satisfied with the end-result and I will continue to work for them on different website designs and functionallity in the future.
                        <br /><br />
                        - Martin

                    </div>

                </div>

                
            </div>
        </div>
     );
}
 
export default WealthroneModal;