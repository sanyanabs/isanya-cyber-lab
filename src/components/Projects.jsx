import projects from "../data/projects";
import { Link } from "react-router-dom";
function Projects() {
    return (
      <section id="projects">
  
        <h2>
          🧪 Cyber Labs
        </h2>
  
        {projects.map((project) => (
          <div key={project.id}>
  
            <p>
              {project.caseFile}
            </p>
  
            <h3>
              {project.name}
            </h3>
  
            <p>
              STATUS: 🟢 {project.status}
            </p>
  
            <p>
              {project.description}
            </p>
  
            <h4>
              Technology
            </h4>
  
            <p>
              {project.technology.join(" | ")}
            </p>
  
            <h4>
              Mission
            </h4>
  
            <p>
              {project.mission}
            </p>
  
            <Link to="/sentinel-ai" className="case-file-button">
              Open Case File →
            </Link>
  
          </div>
        ))}
  
      </section>
    );
  }
  
  export default Projects;