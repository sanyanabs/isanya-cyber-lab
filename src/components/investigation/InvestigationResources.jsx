import "../../styles/investigationResources.css";

function InvestigationResources({ github }) {
  return (
    <section className="investigation-resources">

      <div className="resources-heading">

        <span className="resources-heading-line"></span>

        <div>
          <p className="resources-eyebrow">
            INVESTIGATION MODULE
          </p>

          <h2>
            Investigation Resources
          </h2>
        </div>

      </div>


      <div className="resource-card">

        <div className="resource-icon">
          &lt;/&gt;
        </div>


        <div className="resource-content">

          <div className="resource-label">
            SOURCE REPOSITORY
          </div>

          <h3>
            Source Code
          </h3>

          <p>
            Explore the implementation behind this investigation,
            including the engineering decisions, application
            structure, and supporting code.
          </p>

        </div>


        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="resource-button"
        >
          <span>
            View on GitHub
          </span>

          <span className="resource-arrow">
            →
          </span>
        </a>

      </div>


      <p className="resource-terminal">
        <span>
          isanya@cyber-lab:~$
        </span>{" "}
        open-source-repository
        <span className="resource-cursor">
          █
        </span>
      </p>

    </section>
  );
}

export default InvestigationResources;