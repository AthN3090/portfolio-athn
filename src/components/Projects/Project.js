import "./Project.css";
import projectData from "./projectData";
//available stack tags images
import { useEffect } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
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
        {projectData.map((projectObj) => {
            return <ProjectCard {...projectObj}/>        
            })}
        </div>
      </div>
    </div>
  );
}

export default Project;
