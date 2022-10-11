import "./About.css"
import html from "./html.png"
import css from "./css.png"
import js from "./javascript.png"
import firebase from "./firebase.png"
import git from "./git.png"
import nodejs from "./nodejs.png"
import cpp from "./c++.png"
import python from "./python.png"
import react from "./react.png"
import php from "./php.png"
import mysql from "./mysql.png"
import express from "./express.png"
function About() {
    return ( 
    <div className="about-container" id="about">
        <div className="intro-container">
            <div className="about">
                <p style={{color:"#B72C2C", fontWeight: "bold" , fontSize:"32px", fontFamily:"ChakraPetch"}}>About Me</p>
                <p style={{color:"#9D9D9D", fontSize:"24px", fontFamily:"ChakraPetch"}}> 
                Hey! I am Aman Dev Chowdary. I am a computer science undergraduate from IIIT Surat, working full-time as an Assistant System Engineer at TCS. 
                <br/><br/>I like exploring ideas and building applications to solve real-life problems with code.
                I am currently looking for oportunites to work with awesome people and grow as a software engineer.
                <br/><br/>When I am not coding, I play badminton and sometimes I play computer games with my friends. 
                </p>
            </div>
            <div className="devider"style={{backgroundColor:"#222222", width:"1px", margin:"150px 40px" }}></div>
            <div className="tools">
                <p style={{color:"#B72C2C", fontWeight: "bold" ,fontSize:"32px", fontFamily:"ChakraPetch"}}>
                Tools and Tehnologies</p>
                <p style={{color:"#9D9D9D", fontSize:"24px",fontFamily:"ChakraPetch"}}> 
                I spend my free time developing projects and in the process I have learnt the following languages and tools.</p>
                <div className="skills">
                    <div className="skill-tag">
                        <img className="tag-img" src={html} alt="html"></img> HTML
                    </div>
               
                
                    <div className="skill-tag">
                        <img className="tag-img" src={css} alt="html"></img> CSS
                    </div>
                
               
                    <div className="skill-tag">
                        <img className="tag-img" src={js} alt="html"></img> JavaScript
                    </div>
                
              
                    <div className="skill-tag">
                        <img className="tag-img" src={nodejs} alt="html"></img> Node.js
                    </div>
            
                    <div className="skill-tag">
                        <img className="tag-img" src={express} alt="html"></img> Express
                    </div>

                    <div className="skill-tag">
                        <img className="tag-img" src={react} alt="html"></img> React
                    </div>
           
            
                    <div className="skill-tag">
                        <img className="tag-img" src={mysql} alt="html"></img> Mysql
                    </div>

                    <div className="skill-tag">
                        <img className="tag-img" src={firebase} alt="html"></img> Firebase
                    </div>
         
                    <div className="skill-tag">
                        <img className="tag-img" src={python} alt="html"></img> Python
                    </div>
                    <div className="skill-tag">
                        <img className="tag-img" src={cpp} alt="html"></img> C++
                    </div>
                    <div className="skill-tag">
                        <img className="tag-img" src={git} alt="html"></img> Git
                    </div>
                    <div className="skill-tag">
                        <img className="tag-img" src={php} alt="html"></img> PHP
                    </div>
                </div>
            </div>
        </div>
    </div> 
    );
}

export default About;