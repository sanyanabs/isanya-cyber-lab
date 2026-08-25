import { Link } from "react-router-dom";
import Badge from "./Badge";

import "../styles/projectCard.css";

function ProjectCard({ project }) {

  const isOperational = project.status === "Operational";

  return (
    <article
      className={`project-card ${
        !isOperational ? "project-card-classified" : ""
      }`}
    >

      {/* =====================================================
          CASE HEADER
          ===================================================== */}

      <div className="project-card-header">

        <p className="case-file">
          🗂 {project.caseFile}
        </p>

        <span
          className={`project-status ${
            isOperational
              ? "status-operational"
              : "status-classified"
          }`}
        >
          {isOperational ? "● ACTIVE" : "🔒 CLASSIFIED"}
        </span>

      </div>


      {/* =====================================================
          CATEGORY
          ===================================================== */}

      <span className="project-category">
        {project.category}
      </span>


      {/* =====================================================
          TITLE
          ===================================================== */}

      <h3>
        {project.title}
      </h3>


      {/* =====================================================
          DESCRIPTION
          ===================================================== */}

      <p className="project-description">
        {project.description}
      </p>


      {/* =====================================================
          BADGES
          ===================================================== */}

      <div className="badges">

        {project.badges.map((badge) => (
          <Badge
            key={badge}
            text={badge}
          />
        ))}

      </div>


      {/* =====================================================
          ACTION
          ===================================================== */}

      <div className="project-action">

        {isOperational ? (

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

    </article>
  );
}

export default ProjectCard;