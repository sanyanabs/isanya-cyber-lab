import "../styles/projectCard.css";
function ProjectCard({ project }) {
    return (
     <div className="project-card">
  
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
  
        <button>
          Open Case File 🕵️
        </button>
  
      </div>
    );
  }
  
  export default ProjectCard;