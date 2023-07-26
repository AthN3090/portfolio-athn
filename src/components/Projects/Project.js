import "./Project.css";
//available stack tags images
import heiwa from "./heiwa-img.png";
import saveme from "./saveme-img.png";
import reactivemines from "./reactivemines.gif";
import writerapp from "./writer-img.PNG"
import pinitup from "./pinitup-img.png"
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
              <img
                className="project-img"
                src={writerapp}
                alt="projectimage"
              ></img>
            </div>
            <div className="project-details">
              <p
                className="project-title"
                style={{
                  color: "#B72C2C",
                  margin: "0",
                  fontWeight: "700",
                  fontFamily: "Chakra Petch",
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
                Write-er is a minimal blogging website based on react-markdown. Developed with MERN stack.
                <br />
                <br />
                Features implemented:
                <ul style={{ paddingLeft: "25px", listStyleType: "square" }}>
                  <li>
                    <span style={{ fontWeight: "bold" }}>
                      Text editor
                    </span>{" "}
                    - Implemented using react-markdown. Users can create, edit
                    and delete their posts.
                  </li>
                  <li>
                    <span style={{ fontWeight: "bold" }}>
                      User authentication
                    </span>{" "}
                    - It uses JWT(JSON Web Tokens) for authentication. Passwords
                    are encrypted using bcrypt.{" "}
                  </li>
                  <li>
                    <span style={{ fontWeight: "bold" }}>
                      Post Filtering
                    </span>{" "}
                    - Filtering based on the topic tag of the post.
                  </li>
                </ul>
              </div>
              <div className="project-footer">
                <div className="project-stack">
                  <img
                    className="stack-tag"
                    src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                    alt="react"
                  ></img>
                  <img
                    className="stack-tag"
                    src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
                    alt="tailwindcss"
                  ></img>
                  <img
                    className="stack-tag"
                    src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
                    alt="mongo"
                  ></img>
                  <img
                    className="stack-tag"
                    src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
                    alt="express"
                  ></img>
                  <img
                    className="stack-tag"
                    src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
                    alt="node"
                  ></img>
                </div>
                <div className="project-links">
                  <a href="https://github.com/AthN3090/write-er-app">
                    <img src={github} alt="" height="25px" />
                  </a>
                  <a href="https://write-er-app.vercel.app/">
                    <img src={demo} alt="" height="22px" />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="project-card hidden-project">
            <div className="project-img-container">
              <img className="project-img" src={heiwa} alt="projectimage"></img>
            </div>
            <div className="project-details">
              <p
                className="project-title"
                style={{
                  color: "#B72C2C",

                  margin: "0",
                  fontWeight: "700",
                  fontFamily: "Chakra Petch",
                }}
              >
                Heiwa
                <i
                  className="em em-dove_of_peace"
                  style={{ height: "32px" }}
                ></i>
              </p>
              <span className="project-tagline">
                An end-to-end chat application where people talk about their
                mental
              </span>
              <div className="project-description ">
                Heiwa is a messaging platform for people to talk about their
                mental health and connect with people going through a similar
                phase.
                <br />
                <br />
                Features implemented:
                <ul style={{ paddingLeft: "25px", listStyleType: "square" }}>
                  <li>
                    Random matching
                  </li>
                  <li>
                    Chat component
                  </li>
                  <li>
                    Multiuser whiteboard for doodling
                  </li>
                </ul>
              </div>
              <div className="project-footer">
                <div className="project-stack">
                  <img
                    className="stack-tag"
                    src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                    alt="react"
                  ></img>
                  <img
                    className="stack-tag"
                    src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
                    alt="express"
                  ></img>
                  <img
                    className="stack-tag"
                    src="https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101"
                    alt="socket"
                  ></img>
                  <img
                    className="stack-tag"
                    src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
                    alt="node"
                  ></img>
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
                src={pinitup}
                alt="projectimage"
                style={{objectPosition:"right top"}}
              ></img>
            </div>
            <div className="project-details">
              <p
                className="project-title"
                style={{
                  color: "#B72C2C",
                  margin: "0",
                  fontWeight: "700",
                  fontFamily: "Chakra Petch",
                }}
              >
                PinItUp{" "}
                <i
                  class="em em-pushpin"
                  style={{ height: "32px" }}
                  aria-label="PUSHPIN"
                ></i>
              </p>
              <span className="project-tagline">
                Bookmark extension for chromium browsers.
              </span>
              <div className="project-description ">
                PinItUp is a modern bookmarking extension that helps you
                organize your bookmarks all in one place with ease. <br />
                <br />
                Features implemented:
                
                <ul style={{ paddingLeft: "25px", listStyleType: "square" }}>
                  <li>Intuitive user interface</li>
                  <li>Organize bookmarks into different folders</li>
                  <li>
                    Bookmark all currently active tabs Bookmark selected tabs
                  </li>
                </ul>
              </div>
              <div className="project-footer">
                <div className="project-stack">
                  <img
                    className="stack-tag"
                    src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                    alt="react"
                  ></img>
                  <img
                    className="stack-tag"
                    src="https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white"
                    alt="chrome"
                  ></img>
                </div>

                <div className="project-links">
                  <a href="https://github.com/AthN3090/PinItUp-extension">
                    <img src={github} alt="" height="25px" />
                  </a>
                  <a href="https://chrome.google.com/webstore/detail/pinitup/bdlikbaegahppphbllkecmegphbaodnm">
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
                className="project-title"
                style={{
                  color: "#B72C2C",
                  margin: "0",
                  fontWeight: "700",
                  fontFamily: "Chakra Petch",
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
                Command line tool for saving your workfiles in the cloud.
              </span>
              <div className="project-description ">
              A CLI tool that enables users to save their incomplete work from public workspaces, such as office or school labs, and download the files to their personal systems for later use.
             <br/><br/>Features implemented:
              <ul style={{ paddingLeft: "25px", listStyleType: "square" }}>
                  
                  <li>Utilizes Firebase's Firestore to store multiform data, including user registration information and uploaded files.</li>
                  <li>Users can upload, download and delete their files from the cloud storage.</li>
                </ul>
              </div>
              <div className="project-footer">
                <div className="project-stack">
                  <img
                    className="stack-tag"
                    src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
                    alt="react"
                  ></img>
                  <img
                    className="stack-tag"
                    src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
                    alt="express"
                  ></img>
                  <img
                    className="stack-tag"
                    src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
                    alt="node"
                  ></img>
                  <img
                    className="stack-tag"
                    src="https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white"
                    alt="react"
                  ></img>
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
                className="project-title"
                style={{
                  color: "#B72C2C",
                  margin: "0",
                  fontWeight: "700",
                  fontFamily: "Chakra Petch",
                }}
              >
                Minesweeper React{" "}
                <i
                  class="em em-bomb"
                  style={{ height: "32px" }}
                  aria-label="BOMB"
                ></i>
              </p>
              <span className="project-tagline">Simple Minesweeper game</span>
              <div className="project-description ">
                An implementation of the classic minesweeper game with React.
              </div>
              <div className="project-footer">
                <div className="project-stack">
                  <img
                    className="stack-tag"
                    src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                    alt="react"
                  ></img>
                </div>
                <div className="project-links">
                  <a href="https://github.com/AthN3090/reactive-mines">
                    <img src={github} alt="" height="25px" />
                  </a>
                  <a href="https://reactive-mines.vercel.app">
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
