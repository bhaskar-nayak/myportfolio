import { useSelector } from "react-redux";
import '../HomeStyle/contact.css';
import { Link } from "react-router-dom";

function ContactComponent() {
    const contactDetails = useSelector((state) => state.contactInfo.mycontact);
    return (
        <div className="container">
            <div className="contact-header-container text-center">
                <h3 className="contact-header">Contact</h3>
            </div>
            <div className="contact-content text-center">
                {contactDetails.map((item, index) => (
                    <h2 className="contact-title" key={index}>{item.title}</h2>
                ))}
                <p className="contact-description">
                    Have questions or opportunities? 
                    <Link to={'https://www.linkedin.com/in/bhaskar-64051b242/'} className="description-color"> 
                        Reach out to me on<br /> LinkedIn—I’m happy to chat and will respond promptly.
                    </Link>
                    <br />Please note I prioritize professional inquiries.
                </p>
                <p className="email-text"><span className="email-head">Email:</span>bhaskarnayak9966@gmail.com</p>
            </div>
        </div>
    );
}

export default ContactComponent;
