import { useSelector} from "react-redux";
import '../HomeStyle/homeStyle.css';
import AboutComponent from "./about";
import SkillsComponent from "./skills.component";
import ProjectHeadComponent from "./projectHead.component";
import MyprojectComp from "./myproject.component";
import EducationComp from "./education.component";
import ContactComponent from "./contact.component";
import CertificateComponent from "./certificate.component";

function HomeComponent() {
    const profileDetails = useSelector((state) => state.profileInfo.myprofile);
    return (
        <div className="container mt-4 mb-4">
        <div className="row">
            {profileDetails.map((item, index) => (
                <div className="col-12 d-flex align-items-center justify-content-between" key={index}>
                    <div className="text-container d-flex align-items-center">
                        <h1 className="text-name">{item.name}<span className="emoji">👋</span></h1>
                        <h5 className="text_description">{item.description}</h5>
                    </div>
                    <div className="image-container">
                        <img className="img-fluid profileImage" src={"profileImage.JPG"} alt="profile" />
                    </div>
                </div>
            ))}
                 <AboutComponent/>
                 <SkillsComponent/>
                 <ProjectHeadComponent/>
                 <MyprojectComp/>
                 <EducationComp/>
                 <CertificateComponent/>
                 <hr className="horizontal-line"/>
                 <ContactComponent/>
            </div>
        </div>
    );
}

export default HomeComponent;
