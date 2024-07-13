import "./ProfileImg.css"
import img from "../../assets/img/bild-berg.jpg"

const ProfileImg = () => {



    return (
        <>
            <div className="container">

                <img src={img} alt="" className="profile-img" />
                <div className="hover-text" >
                    <div className="bracket1">&#123;</div>
                    <br />
                    <div className="text-in-brackets">
                        <div>Name: Martin Sjöborg</div>
                        <br />
                        <div>Age: 26</div>
                        <br />
                        <div>Location: Luleå, SWE</div>
                    </div>
                    <div className="bracket2">&#125;</div>
                </div>
            </div>
            
        </>
    );
}
 
export default ProfileImg;
