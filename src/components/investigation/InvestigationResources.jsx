import "../../styles/investigationResources.css";


function InvestigationResources({ github }) {
  return (
    <section className="investigation-resources">

      <h2>Investigation Resources</h2>

      <div className="resource-card">

        <span className="resource-icon">
          💻
        </span>

        <div>
          <h3>Source Code</h3>

          <p>
            Explore the implementation behind this investigation.
          </p>
        </div>

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="resource-button"
        >
          View on GitHub →
        </a>

      </div>

    </section>
  );
}

export default InvestigationResources;