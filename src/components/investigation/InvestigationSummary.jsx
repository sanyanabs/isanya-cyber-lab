import "../../styles/investigationSummary.css";

function InvestigationSummary({ summary }) {
  if (!summary) {
    return null;
  }

  return (
    <section className="investigation-summary">

      <div className="summary-header">
        <span className="summary-label">
          THREAT INTELLIGENCE
        </span>

        <h2>
          Investigation Summary
        </h2>

        <p>
          Analyst interpretation of the collected reconnaissance evidence.
        </p>
      </div>

      <div className="summary-target">

        <span className="summary-field-label">
          TARGET
        </span>

        <div className="summary-target-value">
          {summary.target}
        </div>

      </div>

      <div className="summary-grid">

        {summary.observations.map((observation, index) => (
          <div
            className="summary-observation"
            key={index}
          >

            <div className="observation-icon">
              {observation.icon}
            </div>

            <div>

              <span className="observation-type">
                {observation.type}
              </span>

              <h3>
                {observation.title}
              </h3>

              <p>
                {observation.description}
              </p>

            </div>

          </div>
        ))}

      </div>

      <div className="analyst-note">

        <span className="summary-field-label">
          ANALYST NOTE
        </span>

        <p>
          {summary.analystNote}
        </p>

      </div>

      <div className="next-steps">

        <span className="summary-field-label">
          RECOMMENDED NEXT STEPS
        </span>

        <div className="next-steps-list">

          {summary.nextSteps?.map((step, index) => (
            <div
              className="next-step"
              key={index}
            >

              <span className="next-step-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="next-step-text">
                {step}
              </span>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default InvestigationSummary;