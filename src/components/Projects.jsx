import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects">
      <h2>🧪 Current Investigations</h2>

      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </section>
  );
}

export default Projects;