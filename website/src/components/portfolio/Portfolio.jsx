import "./Portfolio.css"
import wealthroneLogo from "../../assets/img/wealthrone-logo.png"
import { useState } from "react";
import WealthroneModal from "./portfolio-groups/wealthrone/wealthroneModal";
import backVid from "../../assets/videos/backgroundVid.mp4";

const Portfolio = () => {

    const [wealthroneModalOpen, setWealthroneModalOpen] = useState(false);

    return (

        <div className="portfolio-main">

            { wealthroneModalOpen ?
                <div>
                    <WealthroneModal setWealthroneModalOpen={setWealthroneModalOpen} />
            
                </div> :
                <div></div>
            }

        <video autoPlay muted loop id="video" className="backVid">
            <source src={backVid} type="video/mp4" />
        </video>

            <h2>My Portfolio</h2>

            <div className="portfolio-content">

                <div className="the-things">

                    <div className="wealthrone thing" onClick={() => setWealthroneModalOpen(true)}>
                        <img src={wealthroneLogo} alt="" className="wealthronelogo"/>
                    </div>

                    <div className="crypto-explorer thing"></div>
                    <div className="restaurant thing"></div>
                    <div className="nodeChain thing"></div>
                    <div className="thing5 thing"></div>
                    <div className="thing6 thing"></div>
                    

                </div>
                
                
            </div>

        </div>
    );
}
 
export default Portfolio;