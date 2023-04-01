import './Home.css'
import avatar from "./avatar2.jpeg"
import real from './real2.jpg'
import profile from "../../Profile.json"
import {useEffect, useRef, useState} from "react"
function Home() {
    const [homeAnimationClass, setAnimationClass] = useState('hidden-home')
    const homeRef = useRef(); 
    const callback = (entries, observer) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
            setAnimationClass('show-home')
            // homeRef.current.classList.add('show-home')
        }
    }
    useEffect(() => {
        const observer = new IntersectionObserver(callback)
        observer.observe(homeRef.current)
    }, [])
    return ( 
        <div  className='home-container' id="home">
            <div ref ={homeRef} className= {"home-greeting " + homeAnimationClass}>
            <div className='logo-container'>

                <div className="home-logo">
                    <img className="logo avatar-logo" src={avatar} alt="avatar" ></img>
                    <img className="logo real-logo" src={real} alt="avatar" ></img>
                </div>
                
            </div>
                <div className='home-text'>
                    <p className="hello-msg">
                        {profile.main.greeting}
                    </p><br/>
                    <p className="name" style={{}}>
                        Aman Dev <br/> Chowdhary
                    </p><br/>
                    <p className="tagline" style={{color:"white",margin:"0"}}>
                        {profile.main.position}  
                    </p><br/>
                    <p className="tagline" >
                        {profile.main.tagline}
                        
                    </p><br/>
                    <a href="Aman_resume.pdf" download target={"_blank"} className='resume-button'> Resume </a>
                </div>
            </div>
        </div>
     );
}

export default Home;