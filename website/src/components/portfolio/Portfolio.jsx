import "./Portfolio.css"
import wealthroneLogo from "../../assets/img/wealthrone-logo.png"

const Portfolio = () => {
    return (
        <div className="portfolio-main">
            <h2>Portfolio</h2>
            <div className="portfolio-content">
                <div className="the-things">
                    <div className="wealthrone thing">
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