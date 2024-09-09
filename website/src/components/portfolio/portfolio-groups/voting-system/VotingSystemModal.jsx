import React from "react";
import "./VotingSystemModal.css"
// import wealthroneImg from "../../../../assets/img/wealthrone-pic.png"

const VotingSystemModal = ({ setVotingSystemModalOpen }) => {



    return (
        <div className="modal-container">

            <button onClick={() => setVotingSystemModalOpen(false)} className="btn">ⓧ</button>

            <div className="modal-content">
                
                <div className="txt">

                    <div className="title">Voting System</div>

                    <a href="https://martinsjoeborg.github.io/voting-system/" className="votingSystem-link" target="blank">Website</a>
                    <a href="https://github.com/martinsjoeborg/voting-system" className="votingSystem-link" target="blank">Github</a>

                    {/* <img src={wealthroneImg} alt="wealthrone-image" className="wealthroneImg"/> */}

                    <div className="mainTextVoting">
                        I small hobby-project I had a lot of fun working with. I made this on my free-time while studying.
                        <br />
                        <br />
                        I wanted to explore the way I could utilize blockchain to construct a effective and safe voting system.
                        <br />
                        <br />
                        <b>As a user:</b> When landing on the main page, you will connect your Metamask wallet to the site.
                        When connected, you can stake 0.01 sepoliaETH to join the community of voters. When you have staked, 
                        you will see a list of proposals. These are suggestions on what to do with the pool of tokens that builds
                        from the total amount staked from the contributors. Vote on the proposal you want and sign with your wallet.
                        You can only vote once so choose your vote carefully.Your vote will be stored on the sepolia test network (a blockchain) so you can
                        be sure that no one will tamper with or manipulate it.
                        <br /><br />
                        <b>As admin:</b> There is an admin page as well but only the creator of the 
                        smart contract will be able to see this. The admin can propose things and has the
                        authority to pull out the total stack when it's time to use the tokens. The admin is
                        not allowed to vote on proposals.
                        <br /><br />
                        
                        <b>I used the following tech-stack for this project:</b>
                        <br />
                        Vite ReactJS for frontend
                        <br />
                        web3JS library to connect frontend to contracts
                        <br />
                        Solidity to create tokens and smart contracts


                        <br /><br />
                        I have learned many things about decentralized governance while working on this project.
                        It's not a perfect DAO or consenus system but it helped me understand the fundamentals
                        a bit better. I enjoyed sharpening my skills in react, web3JS and Solidity during this project.
                        <br /><br />
                        - Martin

                    </div>

                </div>

                
            </div>
        </div>
     );
}
 
export default VotingSystemModal;