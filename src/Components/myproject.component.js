import { useSelector } from "react-redux";
import '../HomeStyle/projects.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function MyprojectComp() {
    const myprojectD = useSelector((state) => state.myprojectInfo.myprojects);

    return (
        <div className="container">
            <div className="row">
                {myprojectD.map((item, index) => (
                    <div className="col-12 d-flex flex-column flex-md-row mb-4" key={index}>
                        <div className="project-gif">
                            <img className="img-fluid" src="projectGif.gif" alt="projectGif" />
                        </div>
                        <div className="project-details ms-md-4 mt-3 mt-md-0">
                            <h5 className="project-title">{item.title}</h5>
                            <p className="project-date">{item.date}</p>
                            <p className="project-description">{item.description}</p>
                            <div className="technologies mt-2">
                                {item.technologies.map((tech, techIndex) => (
                                    <span className="tech-badge" key={techIndex}>{tech}</span>
                                ))}
                            </div>
                            <div className="button-container mt-3">
                                <button className="btn btn-dark me-2"><FontAwesomeIcon icon={faGlobe} className="mx-1"/>{item.button1}</button>
                                <Link to={'https://github.com/bhaskar-nayak'}><button className="btn btn-light"><FontAwesomeIcon icon={faGithub} className="mx-1"/>{item.button2}</button></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyprojectComp;
