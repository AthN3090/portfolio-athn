import "./Project.css"
//available stack tags images
import heiwa from "./heiwa-img.png"
import saveme from "./saveme-img.png"
import reactivemines from "./reactivemines.gif"
// import html from "../About/html.png"
// import css from "../About/css.png"
// import js from "../About/javascript.png"
import nodejs from "../About/nodejs.png"
// import cpp from "../About/c++.png"
import python from "../About/python.png"
import react from "../About/react.png"
import socket from "../About/socket.png"
// import php from "../About/php.png"
// import mysql from "../About/mysql.png"
import express from "../About/express.png"
import firebase from "../About/firebase.png"
import demo from "./hyperlink.png"
import github from "./github-link.png"
function Project() {
    return (  
    <div className="project-container" id="projects">
        <div className="project-section"> 
            <div >
                <p className="project-section-title">My creative works</p>
                <p className="project-section-description">
                I believe in learning-by-doing. Here are some of the things I have built all through my learning process.
                </p>

            </div>
            <div className="card-container">
            <div className="project-card">
                    <div className="project-details">
                    <p style={{color:"#B72C2C", }}>Heiwa</p>
                        <div className="project-description ">
                        A one-to-one anonymous chat application for people with poor mental health.
                        </div>
                        <div className="project-stack">
                            <div className="react stack-tag ">
                                <img className="stack-img " src={react} alt="html"></img> React
                            </div>
                            <div className="node stack-tag">
                                <img className="stack-img " src={nodejs} alt="html"></img> Nodejs
                            </div>
                            <div className="express stack-tag">
                                <img className="stack-img " src={express} alt="html"></img> Express
                            </div>
                            <div className="socket stack-tag">
                                <img className="stack-img " src={socket} alt="html"></img> Socket
                            </div>
                        </div>
                        <div className="project-links">
                            <a href="https://github.com/AthN3090/Heiwa-react"><img src={github} alt="" height="25px"/></a>
                            <a href="https://heiwa.vercel.app/"><img src={demo} alt="" height="20px"/> </a>
                        </div>
                    </div>
                    <div className="project-img-container">
                        <img className="project-img" src={heiwa} alt="projectimage"></img>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-details">
                    <p style={{color:"#B72C2C", }}>Save-me</p>
                        <div className="project-description ">
                        Save-me is a command-line tool for saving your work files with just a single command through your terminal.
                        </div>
                        <div className="project-stack">
                            <div className="python stack-tag">
                                <img className="stack-img" src={python} alt="html"></img> Python
                            </div>
                            <div className="node stack-tag">
                                <img className="stack-img" src={nodejs} alt="html"></img> Nodejs
                            </div>
                            <div className="express stack-tag">
                                <img className="stack-img" src={express} alt="html"></img> Express
                            </div>
                            <div className="firebase stack-tag">
                                <img className="stack-img" src={firebase} alt="html"></img> Firebase
                            </div>
                        </div>
                        <div className="project-links">
                            <a href="https://github.com/AthN3090/save-me" ><img src={github} height="25px" alt="github-link"/></a>
                            {/* <a href="#projects" ><img src={demo} height="20px" alt="demo-link" /> </a> */}
                        </div>
                    </div>
                    <div className="project-img-container">
                        <img className="project-img" src={saveme} alt="projectimage"></img>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-details">
                    <p style={{color:"#B72C2C", }}>Minesweeper React</p>
                        <div className="project-description ">
                        An implementation of the classic minesweeper game with React.
                        </div>
                        <div className="project-stack">
                            <div className="react stack-tag">
                                <img className="stack-img" src={react} alt="html"></img> React
                            </div>
                        </div>
                        <div className="project-links">
                            <a href="https://github.com/AthN3090/reactive-mines"><img src={github} alt="" height="25px"/></a>
                            <a href="https://reactive-mines.firebaseapp.com/"><img src={demo} alt="" height="20px"/> </a>
                        </div>
                    </div>
                    <div className="project-img-container">
                        <img className="project-img" src={reactivemines} alt="projectimage"></img>
                    </div>
                </div>
                
            </div>
        </div>
    </div>);
}

export default Project;