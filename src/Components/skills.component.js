import { useSelector } from "react-redux";
import '../HomeStyle/skills.css';
function SkillsComponent(){
    const skillsDetails = useSelector((state) => state.skillsInfo.myskills)
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className="skill-text">Top Skills</h2>
                    <div className="d-flex flex-wrap">
                        {skillsDetails.map((item, index) => (
                            item.skillsList.map((skill, skillIndex) => (
                                <div className="box_skills mx-1 my-1" key={skillIndex}>
                                    {skill}
                                </div>
                            ))
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default SkillsComponent;