import "./Contact.css"
import github from "./github.png"
import mail from "./mail.png"
import linkedin from "./linkedin.png"
import {useEffect, useRef, useState} from "react"
function Contact() {
    const contactRef = useRef(); 
    const [contactAnimationClass, setAnimationClass] = useState('hidden-contact')
    const callback = (entries, observer) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
            
            setAnimationClass('show-contact')
        }
    }
    useEffect(() => {
        const observer = new IntersectionObserver(callback)
        observer.observe(contactRef.current)
    }, [])
    return ( 
    <div className="contact-container" id="contact">
        <div ref={contactRef} className={"contact-content "+ contactAnimationClass}>
            <p className="getintouch" >GET IN TOUCH</p>
            <p className="getintouch-msg" >
                I'm currently exploring opportunites in <span style={{color:"#B72C2C", fontSize:"18px", fontFamily:"ChakraPetch"}}>Front-end Development.</span><br/>
                Feel free to reach out incase you have an opportunity for me or just want to say hi.
            </p>
            <div className="links-container2">
            <a href="https://github.com/AthN3090" className="contact-link">
                <img src={github} style={{marginRight:"15px"}} height="18px" alt="github"></img>
                Github
            </a>
            <a href="https://www.linkedin.com/in/athn3090/" className="contact-link">
                <img src={linkedin} style={{marginRight:"15px"}} height="18px" alt="linkedin"></img>
                Linkedin
            </a>
            <a href="mailto:amandevrishi12@gmail.com" className="contact-link">
                <img src={mail}  style={{marginRight:"15px"}} height="18px" alt="mail"></img>
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