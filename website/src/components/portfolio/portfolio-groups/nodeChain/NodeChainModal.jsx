import React from "react";
import "./NodeChainModal.css"
// import wealthroneImg from "../../../../assets/img/wealthrone-pic.png"

const NodeChainModal = ({ setNodeChainModalOpen }) => {



    return (
        <div className="modal-container">

            <button onClick={() => setNodeChainModalOpen(false)} className="btn">ⓧ</button>

            <div className="modal-content">
                
                <div className="txt">

                    <div className="title">Node Chain ⛓️</div>

                    <a href="https://github.com/martinsjoeborg/nodeChain-assignment" className="nodeChain-link" target="blank">Github</a>

                    {/* <img src={wealthroneImg} alt="wealthrone-image" className="wealthroneImg"/> */}

                    <div className="mainText">
                        This project was part of a school assignment where we, the students,
                        were supposed to create a simulation of a blockchain with NodeJS.
                        <br />
                        <br />
                        I recreated a simulation of the Bitcoin blockchain and tried to do it as accurately as possible.
                        <br />
                        <br />
                        When adding a new transaction to the chain, a consensus mechanism validates the data,
                        and a proof of work hashing function hash's the transaction data. This is to ensure that the data stays 
                        immutable.
                        <br /><br />
                        I created a frontend to interact with the blockchain. The user can add a new transaction to the pendinglist
                        of the blockchain,
                        mining a new block needs to be done manually by going to the endpoint "http://localhost:3001/api/v1/blockchain/mine-block"
                        <br /><br />
                        Once the block is mined, the user can list the entire chain or select a specific block in the chain by
                        typing the block's nonce.
                        <br /><br />
                        I have used NodeJS to construct the blockchain and the functionalities. And ReactJS to build the frontend.
                        I used postman for testing the endpoints. 


                        <br /><br />
                        The project was really fun and I learned so much about blockchain development, server development, hashing, 
                        routing and controllers. The project gave me a better understanding of how a proof of work blockchain fundamentaly
                        operates and I look forward to experiment more on different consensus algorithms in the future.

                        <br /><br />
                        - Martin

                    </div>

                </div>

                
            </div>
        </div>
     );
}
 
export default NodeChainModal;