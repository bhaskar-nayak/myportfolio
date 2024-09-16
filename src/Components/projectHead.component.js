import { useSelector } from "react-redux";
import '../HomeStyle/projectHead.css';

function ProjectHeadComponent() {
    const projectHeadDetails = useSelector((state) => state.projectHeaderInfo.projectHeader);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <h3 className="project_head mx-auto">My Projects</h3>
                </div>
                <div className="col-12">
                    {projectHeadDetails.map((item, index) => (
                        <div className="responsive_head text-center mx-auto" key={index}>
                            <h2 className="head_title">{item.title}</h2>
                            <p className="head_description"><span className="first_letter">I've </span>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectHeadComponent;