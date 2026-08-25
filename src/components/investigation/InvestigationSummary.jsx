import "../../styles/investigationSummary.css";

function InvestigationSummary({ summary }) {
  if (!summary) {
    return null;
  }

  return (
    <section className="investigation-summary">

      {/* =====================================================
          SUMMARY HEADER
          ===================================================== */}

      <div className="summary-header">

        <div className="summary-terminal-label">
          <span className="summary-terminal-dot"></span>

          ISANYA://CASE_CLOSURE
        </div>

        <span className="summary-label">
          INVESTIGATION COMPLETE
        </span>

        <h2>
          Investigation Summary
        </h2>

        <p>
          Final analyst interpretation of the collected
          investigation evidence.
        </p>

      </div>


      {/* =====================================================
          TARGET
          ===================================================== */}

      <div className="summary-target">

        <div className="summary-target-header">

          <span className="summary-field-label">
            TARGET
          </span>

          <span className="summary-status">
            ANALYSED
          </span>

        </div>

        <div className="summary-target-value">
          {summary.target}
        </div>

      </div>


      {/* =====================================================
          OBSERVATIONS
          ===================================================== */}

      <div className="summary-section-label">
        KEY OBSERVATIONS
      </div>

      <div className="summary-grid">

        {summary.observations.map((observation, index) => (

          <div
            className="summary-observation"
            key={index}
          >

            <div className="observation-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="observation-icon">
              {observation.icon}
            </div>

            <div className="observation-content">

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


      {/* =====================================================
          ANALYST NOTE
          ===================================================== */}

      <div className="analyst-note">

        <span className="summary-field-label">
          ANALYST NOTE
        </span>

        <p>
          {summary.analystNote}
        </p>

      </div>


      {/* =====================================================
          NEXT STEPS
          ===================================================== */}

      {summary.nextSteps?.length > 0 && (

        <div className="next-steps">

          <span className="summary-field-label">
            RECOMMENDED NEXT STEPS
          </span>

          <div className="next-steps-list">

            {summary.nextSteps.map((step, index) => (

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

      )}


      {/* =====================================================
          CASE CLOSURE
          ===================================================== */}

      <div className="summary-footer">

        <span className="summary-footer-prompt">
          isanya@cyber-lab:~$
        </span>

        <span>
          investigation --status complete
        </span>

        <span className="summary-cursor">
          █
        </span>

      </div>

    </section>
  );
}

export default InvestigationSummary;