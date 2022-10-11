import "./Contact.css"
import github from "./github.png"
import mail from "./mail.png"
import linkedin from "./linkedin.png"
function Contact() {
    return ( 
    <div className="contact-container" id="contact">
        <div className="contact-content">
            <p className="getintouch" >GET IN TOUCH</p>
            <p className="getintouch-msg" >
                I'm currently exploring opportunites in <span style={{color:"#B72C2C", fontSize:"24px", fontFamily:"ChakraPetch"}}>Front-end Development.</span><br/>
                Feel free to reach out incase you have an opportunity for me or just want to say hi.
            </p>
            <div className="links-container2">
            <a href="https://github.com/AthN3090" className="contact-link">
                <img src={github} style={{marginRight:"15px"}} height="32px" alt="github"></img>
                Github
            </a>
            <a href="https://www.linkedin.com/in/athn3090/" className="contact-link">
                <img src={linkedin} style={{marginRight:"15px"}} height="32px" alt="linkedin"></img>
                Linkedin
            </a>
            <a href="mailto:amandevrishi12@gmail.com" className="contact-link">
                <img src={mail}  style={{marginRight:"15px"}} height="32px" alt="mail"></img>
                Email
            </a>
            </div>
        </div>
        <div style={{color:"#9D9D9D", fontSize:"18px", fontFamily:"ChakraPetch", margin:"10px", textAlign:"center"}}> 
            Designed and Developed by Aman Dev Chowdhary
        </div>
    </div> );
}

export default Contact;