import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import "../styles/projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">

      <div className="projects-header">

        <p className="projects-eyebrow">
          CASE MANAGEMENT
        </p>

        <h2>
          🧪 Current Investigations
        </h2>

        <p className="projects-intro">
          A collection of security projects, experiments, and
          investigations built while learning by doing.
        </p>

      </div>

      <div className="projects-grid">

        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}

      </div>

    </section>
  );
}

export default Projects;