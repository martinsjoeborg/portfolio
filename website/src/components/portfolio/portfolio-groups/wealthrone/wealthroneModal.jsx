import React from "react";
import "./wealthroneModal.css"
import wealthroneImg from "../../../../assets/img/wealthrone-pic.png"

const WealthroneModal = ({ setWealthroneModalOpen }) => {



    return ( 
        <div className="modal-container">

            <button onClick={() => setWealthroneModalOpen(false)} className="btn">X</button>

            <div className="modal-content">
                
                <div className="txt">

                    <div className="title">Design and Developer Intern at Wealthrone Capital</div>

                    <img src={wealthroneImg} alt="wealthrone-image" className="wealthroneImg"/>

                    <div className="mainText">
                        From the fall of 2023 to the summer of 2024 I did an internship with the crypto hedge-fund company Wealthrone Capital.
                        <br />
                        <br />
                        This was my first time doing an internship and it was one of the best experiences I've had.
                        I found Wealthrone while doing research for crypto-related businesses in northern Europe.
                        It is a start-up company with great potential. Their main focus is to bring stability to the crypto market and utilize its volatility. This way they can attract more clients that are unsure of investing in crypto.
                        <br />
                        <br />
                        When I got to Wealthrone they already had a website but they wanted to update and modernize it.
                        We exchanged many great ideas and discussed different design layouts and funcionallity. 
                    </div>

                </div>

                
            </div>
        </div>
     );
}
 
export default WealthroneModal;