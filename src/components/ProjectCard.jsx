import { Link } from "react-router-dom";
import Badge from "./Badge";

import "../styles/projectCard.css";

function ProjectCard({ project }) {
  return (
    <div className="project-card">

      <p className="case-file">
        🗂 {project.caseFile}
      </p>

      <p className="status">
        {project.status === "Operational" ? "🟢" : "🔒"}{" "}
        {project.status}
      </p>

      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <div className="badges">
        {project.badges.map((badge) => (
          <Badge
            key={badge}
            text={badge}
          />
        ))}
      </div>

      {project.status === "Operational" ? (
        <Link
          to={project.route}
          className="case-file-button"
        >
          Enter Investigation →
        </Link>
      ) : (
        <span className="case-file-button coming-soon-button">
          🔒 Classified — Coming Soon
        </span>
      )}

    </div>
  );
}

export default ProjectCard;