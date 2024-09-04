import React from "react";
import "./cryptoExplorerModal.css"
// import wealthroneImg from "../../../../assets/img/wealthrone-pic.png"

const CryptoExplorerModal = ({ setCryptoExplorerModalOpen }) => {



    return (
        <div className="modal-container">

            <button onClick={() => setCryptoExplorerModalOpen(false)} className="btn">ⓧ</button>

            <div className="modal-content">
                
                <div className="txt">

                    <div className="title">Crypto Explorer</div>

                    <a href="https://martinsjoeborg.github.io/crypto-explorer-website/" className="cryptoExplorer-link" target="blank">Website</a>
                    <a href="https://github.com/martinsjoeborg/crypto-explorer-website" className="cryptoExplorer-link" target="blank">Github</a>

                    {/* <img src={wealthroneImg} alt="wealthrone-image" className="wealthroneImg"/> */}

                    <div className="mainText">
                        For my degree project during the higher vocational education at Medieinstitutet, I decided to combine all the skills 
                        and knowledge I had gained during the programme.
                        <br />
                        <br />
                        I wanted to create something that would be valuable for people like myself, that are interested in learing the 
                        utilities of cryptocurrencies but don't want to use "real" money to get first hand experience.
                        <br />
                        <br />
                        After many brainstorming sessions I finally decided what I would do, a website that would let users simulate
                        some of the most popular use cases in crypto without needing to use their money. I wanted to include DeFi, DAO and NFT
                        functionality. Altough I only had enough time to create the DeFi functionality but I'm working on implementing DAO and NFT 
                        functionality later on.
                        <br /><br />
                        To use the site the user needs a Metamask wallet, connected to the Sepolia test network, have SeploiaETH in your wallet and
                        import the XPLRCOIN token to that wallet. If the user lack any of these requirements, a guide is located on the main page.
                        <br /><br />
                        If the user has these things, the user can swap sepoliaETH to get some XPLRCOIN, stake their XPLRCOIN's to get rewards, borrow XPLRCOIN's and lend out 
                        XPLRCOIN's.
                        <br /><br />
                        <b>I used the following tech-stack for this project:</b>
                        <br />
                        Vite ReactJS for frontend
                        <br />
                        web3JS library to connect frontend to contracts
                        <br />
                        Solidity to create tokens and smart contracts


                        <br /><br />
                        From working on this project, I have learned how to create tokens on the sepolia network,
                        construct smart contracts with solidity that lets a user swap, stake, borrow and lend tokens.
                        I have also learned a lot about deploying React Vite projects to Github Pages.
                        <br /><br />
                        - Martin

                    </div>

                </div>

                
            </div>
        </div>
     );
}
 
export default CryptoExplorerModal;