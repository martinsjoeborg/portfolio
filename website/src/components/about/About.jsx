import "./About.css"
import oceanPic from "../../assets/img/bild-hav.jpg"
const About = () => {
    return (
        <div className="about-main">
            <div className="about-content">
                <h2>About Me</h2>
                <p>I'm a highly driven and curious web developer who loves to take on new and exciting projects.
                    <br /><br />
                    Currently, my main interests are web development, blockchain development, cyber security, databases and network security.
                    <br /><br />
                    I love to spend time with friends and family and remind my lovely girlfriend to drink more water.❤️
                    When I'm not busy doing any of these things,
                    you can usually find me at the gym lifting iron ❚█══█❚ or at the hockey rink tearing up the ice sending clappers🏒
                    <br /><br />
                    Other than that, I also like making music in Ableton once in a while 🎧
                    <br /><br />
                    But most of the time, you will find me behind the screen in my cave working on some new project I've gotten hooked on.
                    <br /><br />
                    In 5 years, I see myself working on big projects with amazing people preferably combining blockchain tech,
                    cyber security, and databases to create scalable, secure, and efficient software applications.
                    <br /><br />
                    - Martin
                </p>

                <div className="pic">
                    <img src={oceanPic} alt="" className="oceanPic"/>
                </div>
            </div>
        </div>);
}
 
export default About;