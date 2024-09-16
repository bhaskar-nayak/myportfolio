import { useSelector } from "react-redux";
import '../HomeStyle/about.css';

function AboutComponent() {
    const aboutDetails = useSelector((state) => state.aboutInfo.aboutprofile);
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className="text_about">About</h2>
                    {aboutDetails.map((item, index) => (
                        <div className="text_responsive" key={index}>
                            Full-stack developer fueled by a passion for building innovative solutions with Spring Boot and ReactJS.
                            <span className="highlight-underline"> I've grown through every line of code, driven by a relentless pursuit of excellence.</span> 
                            With each project,<span className="highlight-underline">I push boundaries, learn, and adapt, dedicated</span> to crafting exceptional user experiences that leave a lasting impact.
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AboutComponent;
