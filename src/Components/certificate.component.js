import { useSelector } from "react-redux";
import '../HomeStyle/certificate.css';
function CertificateComponent() {
    const certifiDetails = useSelector((state) => state.certificateInfo.mycertificate)
    return (
        <>
        <div className="certificate-container">
            <h2 className="certificate-header ">Certifications</h2>
            <div className="certificate-flex-container">
                {certifiDetails.map((item, index) => (
                    <div className="certificate-item" key={index}>
                        <p className="course-name certificate-text">{item.name}</p>
                        <p className="issuing-Org certificate-text">{item.issuingOrg}</p>
                        <p className="date-Earned certificate-text">
                            <span className="certificate-bold-date">Date earned:</span> {item.dateEarned}
                        </p>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}
export default CertificateComponent;