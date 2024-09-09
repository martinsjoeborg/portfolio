import "./Portfolio.css"
import cryptoExplorerLogo from "../../assets/img/Crypto_Explorer.png"
import wealthroneLogo from "../../assets/img/wealthrone-logo.png"
import votingSystemLogo from "../../assets/img/Voting_System.png"
import { useState } from "react";
import WealthroneModal from "./portfolio-groups/wealthrone/wealthroneModal";
import backVid from "../../assets/videos/backgroundVid.mp4";
import CryptoExplorerModal from "./portfolio-groups/crypto-explorer/cryptoExplorerModal";
import VotingSystemModal from "./portfolio-groups/voting-system/VotingSystemModal";

const Portfolio = () => {

    const [wealthroneModalOpen, setWealthroneModalOpen] = useState(false);
    const [cryptoExplorerModalOpen, setCryptoExplorerModalOpen] = useState(false);
    const [votingSystemModalOpen, setVotingSystemModalOpen] = useState(false);
    
    return (

        <div className="portfolio-main">

            { wealthroneModalOpen ?
                <div>
                    <WealthroneModal setWealthroneModalOpen={setWealthroneModalOpen} />
                </div> :
                <div>
                    {cryptoExplorerModalOpen ?
                        <div>
                            <CryptoExplorerModal setCryptoExplorerModalOpen={setCryptoExplorerModalOpen}/>
                        </div>
                        :
                        <div>
                            {votingSystemModalOpen ?
                                <div>
                                    <VotingSystemModal setVotingSystemModalOpen={setVotingSystemModalOpen} />
                                </div> :
                                <div></div>}
                        </div>}
                </div>
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

                    <div className="crypto-explorer thing" onClick={() => setCryptoExplorerModalOpen(true)}>
                        <img src={cryptoExplorerLogo} alt="" className="cryptoExplorerLogo"/>
                    </div>
                    <div className="votingSystem thing" onClick={() => setVotingSystemModalOpen(true)}>
                        <img src={votingSystemLogo} alt="" className="votingSystemLogo"/>
                    </div>
                    <div className="nodeChain thing"></div>
                    <div className="thing5 thing"></div>
                    <div className="thing6 thing"></div>
                    

                </div>
                
                
            </div>

        </div>
    );
}
 
export default Portfolio;