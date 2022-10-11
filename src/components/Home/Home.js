import './Home.css'
import avatar from "./avatar.png"
import profile from "../../Profile.json"
function Home() {
    console.log(profile.main.img.toString())
    return ( 
        <div className='home-container' id="home">
            <div className='home-greeting'>
                <img src={avatar} height = {"300px"} width={"300px"} alt="avatar" ></img>
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
                    <a href="#about" download className='resume-button'> Resume </a>
                </div>
            </div>
        </div>
     );
}

export default Home;