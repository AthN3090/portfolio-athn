import "./Links.css"
import github from "./github.png"
import linkedin from "./linkedin.png"
import mail from "./mail.png"
function Links() {
    return ( 
    <div className="links-container">
        
        <a href="https://github.com/AthN3090/"><img src={github}  height="22px" alt="github"></img></a>
        <a href="https://www.linkedin.com/in/athn3090/"><img src={linkedin} height="22px" alt="linkedin"></img></a>
        <a href="mailto:amandevrishi12@gmail.com"><img src={mail} height="22px" alt="mail"></img></a>
        <div className="vert-line"></div>
    </div> );
}

export default Links;