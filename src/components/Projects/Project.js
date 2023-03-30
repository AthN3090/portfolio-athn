import "./Project.css";
//available stack tags images
import heiwa from "./heiwa-img.png";
import saveme from "./saveme-img.png";
import reactivemines from "./reactivemines.gif";
import writerapp from "./writer-img.PNG"
import pinitup from "./pinitup-img.png"
// import html from "../About/html.png"
// import css from "../About/css.png"
// import js from "../About/javascript.png"
import nodejs from "../About/nodejs.png";
// import cpp from "../About/c++.png"
import python from "../About/python.png";
import react from "../About/react.png";
import socket from "../About/socket.png";
// import php from "../About/php.png"
// import mysql from "../About/mysql.png"
import express from "../About/express.png";
import firebase from "../About/firebase.png";
import demo from "./hyperlink.png";
import github from "./github-link.png";
import { useEffect } from "react";
function Project() {
  // const [projectAnimationClass, setAnimationClass] = useState('hidden-project')

  useEffect(() => {
    const entries = Array.from(document.querySelectorAll(".hidden-project"));
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-project");
        }
      });
    });
    entries.forEach((item) => {
      observer.observe(item);
    });
  });
  return (
    <div className="project-container" id="projects">
      <div className="project-section">
        <div className="hidden-project">
          <p className="project-section-title">Things I have built</p>
          <p className="project-section-description">
            I believe in learning-by-doing. Here are some of the things I have
            built all through my learning process.
          </p>
        </div>
        <div className="card-container">
          <div className="project-card hidden-project">
            <div className="project-img-container">
              <img className="project-img" src={heiwa} alt="projectimage"></img>
            </div>
            <div className="project-details">
              <p
                style={{
                  color: "#B72C2C",
                  fontSize: "32px",
                  margin: "0",
                  fontWeight: "700",
                  fontFamily: "ChakraPetch",
                }}
              >
                Heiwa
                <i
                  className="em em-dove_of_peace"
                  style={{ height: "32px" }}
                ></i>
              </p>
              <span className="project-tagline">
              An end to end anonymous chatting application where people talk about their mental
              </span>
              <div className="project-description ">
                Heiwa is a messaging platform for people to talk about their
                mental health and connect with people going through a similar
                phase. It also has a basic whiteboard which can be used to play
                funny doodle games, or people can use it to express themselves
                creatively.
              </div>
              <div className="project-footer">

              <div className="project-stack">
                <div className="react stack-tag ">
                  <img className="stack-img " src={react} alt="html"></img>{" "}
                  React
                </div>
                <div className="node stack-tag">
                  <img className="stack-img " src={nodejs} alt="html"></img>{" "}
                  Nodejs
                </div>
                <div className="express stack-tag">
                  <img className="stack-img " src={express} alt="html"></img>{" "}
                  Express
                </div>
                <div className="socket stack-tag">
                  <img className="stack-img " src={socket} alt="html"></img>{" "}
                  Socket
                </div>
              </div>
              <div className="project-links">
                <a href="https://github.com/AthN3090/Heiwa-react">
                  <img src={github} alt="" height="25px" />
                </a>
                <a href="https://heiwa.vercel.app/">
                  <img src={demo} alt="" height="22px" />{" "}
                </a>
              </div>
              </div>
            </div>
          </div>
          <div className="project-card hidden-project">
            <div className="project-img-container">
              <img
                className="project-img"
                src={saveme}
                alt="projectimage"
              ></img>
            </div>
            <div className="project-details">
              <p
                style={{
                  color: "#B72C2C",
                  margin: "0",
                  fontWeight: "700",
                  fontFamily: "ChakraPetch",
                }}
              >
                Save-me{" "}
                <i
                  className="em em-cloud"
                  aria-label="CLOUD"
                  style={{ height: "32px" }}
                ></i>
              </p>
              <span className="project-tagline">
              Command line tool for quick file save on the cloud.
              </span>
              <div className="project-description ">
                Save-me is a command-line tool for saving your work files with
                just a single command through your terminal.
              </div>
              <div  className="project-footer">
              <div className="project-stack">
                <div className="python stack-tag">
                  <img className="stack-img" src={python} alt="html"></img>{" "}
                  Python
                </div>
                <div className="node stack-tag">
                  <img className="stack-img" src={nodejs} alt="html"></img>{" "}
                  Nodejs
                </div>
                <div className="express stack-tag">
                  <img className="stack-img" src={express} alt="html"></img>{" "}
                  Express
                </div>
                <div className="firebase stack-tag">
                  <img className="stack-img" src={firebase} alt="html"></img>{" "}
                  Firebase
                </div>
              </div>
              <div className="project-links">
                <a href="https://github.com/AthN3090/save-me">
                  <img src={github} height="25px" alt="github-link" />
                </a>
                {/* <a href="#projects" ><img src={demo} height="20px" alt="demo-link" /> </a> */}
              </div>
              </div>
            </div>
          </div>
          <div className="project-card hidden-project">
            <div className="project-img-container">
              <img
                className="project-img"
                src={reactivemines}
                alt="projectimage"
              ></img>
            </div>
            <div className="project-details">
              <p
                style={{
                  color: "#B72C2C",
                  margin: "0",
                  fontWeight: "700",
                  fontFamily: "ChakraPetch",
                }}
              >
                Minesweeper React{" "}
                <i
                  class="em em-bomb"
                  style={{ height: "32px" }}
                  aria-label="BOMB"
                ></i>
              </p>
              <span className="project-tagline">
              Minesweeper in React
              </span>
              <div className="project-description ">
                An implementation of the classic minesweeper game with React.
              </div>
              <div className="project-footer">
              <div className="project-stack">
                <div className="react stack-tag">
                  <img className="stack-img" src={react} alt="html"></img> React
                </div>
              </div>
              <div className="project-links">
                <a href="https://github.com/AthN3090/reactive-mines">
                  <img src={github} alt="" height="25px" />
                </a>
                <a href="https://reactive-mines.firebaseapp.com/">
                  <img src={demo} alt="" height="22px" />{" "}
                </a>
              </div>

              </div>
            </div>
          </div>
          <div className="project-card hidden-project">
            <div className="project-img-container">
              <img
                className="project-img"
                src={writerapp}
                alt="projectimage"
              ></img>
            </div>
            <div className="project-details">
              <p
                style={{
                  color: "#B72C2C",
                  margin: "0",
                  fontWeight: "700",
                  fontFamily: "ChakraPetch",
                }}
              >
                Write-er{" "}
                <i
                  class="em em-memo"
                  style={{ height: "32px" }}
                  aria-label="MEMO"
                ></i>
              </p>
              <span className="project-tagline">
              A simple blogging application based on react-markdown.
              </span>
              <div className="project-description ">
                Write-er is a minimal blogging website based on react-markdown.
                <br />
                Features implemented: <br />
                1. Text editor - Implemented using react-markdown. Users can
                create, edit and delete their posts.
                <br />
                2. User authentication - It uses JWT(JSON Web Tokens) for
                authentication. Passwords are encrypted using bcrypt. <br />
                3. Post Filtering - Filtering based on the topic tag of the
                post.
              </div>
              <div className="project-footer">
              <div className="project-stack">
                <div className="react stack-tag">
                  <img className="stack-img" src={react} alt="html"></img> React
                </div>
              </div>
              <div className="project-links">
                <a href="https://github.com/AthN3090/reactive-mines">
                  <img src={github} alt="" height="25px" />
                </a>
                <a href="https://reactive-mines.firebaseapp.com/">
                  <img src={demo} alt="" height="22px" />{" "}
                </a>
              </div>
              </div>
            </div>
          </div>
          <div className="project-card hidden-project">
            <div className="project-img-container">
              <img
                className="project-img"
                src={pinitup}
                alt="projectimage"
              ></img>
            </div>
            <div className="project-details">
              <p
                style={{
                  color: "#B72C2C",
                  margin: "0",
                  fontWeight: "700",
                  fontFamily: "ChakraPetch",
                }}
              >
                PinItUp{" "}
                <i class="em em-pushpin"  style={{ height: "32px" }} aria-label="PUSHPIN"></i>
              </p>
              <span className="project-tagline">
              Bookmark extension for chromium browsers.
              </span>
              <div className="project-description ">
                PinItUp is a modern bookmarking extension that helps you
                organize your bookmarks all in one place with ease. <br/>
                Features:<br/>
                1. Intuitive user interface <br/>
                2. Organize bookmarks into different folders <br/>
                3. Bookmark all currently active tabs Bookmark selected tabs<br/>
                4. Open all tabs of a folder
              </div>
              <div className="project-footer">
              <div className="project-stack">
                <div className="react stack-tag">
                  <img className="stack-img" src={react} alt="html"></img> React
                </div>
              </div>
              <div className="project-links">
                <a href="https://github.com/AthN3090/reactive-mines">
                  <img src={github} alt="" height="25px" />
                </a>
                <a href="https://reactive-mines.firebaseapp.com/">
                  <img src={demo} alt="" height="22px" />{" "}
                </a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
