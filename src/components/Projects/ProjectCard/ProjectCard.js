import liveLink from "./hyperlink.png";
import githubLink from "./github-link.png";
function ProjectCard({name, img, tagline, description, github, live, tags, imgPos}){

    return (
        <div className="project-card hidden-project">
            <div className="project-img-container">
            <a href={live || github} >
              <img
                className="project-img"
                src={img}
                alt="projectimage"
                style={{objectPosition: "top "+ imgPos}}
              ></img>

            </a>
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
              <a href={live || github}>
                {name}
              </a>
              </p>
              <span className="project-tagline">
                {tagline}
              </span>
              <div className="project-description ">
                {description}
              </div>
              <div className="project-footer">
                <div className="project-stack">
                  {tags.map((item, index) => item)}
                </div>
                <div className="project-links">
                  <a href={github}>
                    <img src={githubLink} alt="" height="25px" />
                  </a>
                  {live && <a href={live}>
                    <img src={liveLink} alt="" height="22px" />{" "}
                  </a>}          
                  </div>
              </div>
            </div>
          </div>
    )

}
export default ProjectCard;