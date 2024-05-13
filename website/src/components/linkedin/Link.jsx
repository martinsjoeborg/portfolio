import svg from "../../assets/svgs/linkedin.svg"
import "./Link.css"

const Link = () => {
    return (
        <a className="linkedin-logo" href="https://www.linkedin.com/in/martinsjoborg/">
            <img src={svg} alt="" className="svg" />
        </a>
    );
}
 
export default Link;