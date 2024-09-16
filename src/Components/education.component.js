import { useSelector } from "react-redux";
import '../HomeStyle/education.css';
import { Link } from "react-router-dom";
function EducationComp() {
    const educationDetails = useSelector((state) => state.educationInfo.myeducation);
    return (
        <div className="container">
            <h2 className="education-title">Education</h2>
            <div>
                {educationDetails.map((item, index) => (
                    <div className="education-content" key={index}>
                        <img className="college-logos" src={item.collegeLogo} alt="college-logo" />
                        <div>
                            <Link to={'https://mrce.in/'} className="college-link"><p className="collage-name">{item.name}</p></Link>
                            <p className="course-name">{item.course}</p>
                            <p className="passout-text">{item.passedout}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EducationComp;
