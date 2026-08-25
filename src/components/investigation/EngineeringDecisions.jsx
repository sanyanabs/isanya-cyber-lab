import "../../styles/engineeringDecisions.css";

function EngineeringDecisions({ decisions = [] }) {
  return (
    <div className="engineering-decisions">

      {decisions.map((decision, index) => (

        <article
          key={decision.title}
          className="decision-card"
        >

          <div className="decision-number">
            DECISION {String(index + 1).padStart(2, "0")}
          </div>

          <div className="decision-header">

            <span className="decision-icon">
              ◈
            </span>

            <h3>
              {decision.title}
            </h3>

          </div>

          <div className="decision-divider"></div>

          <div className="decision-reasoning">

            <span className="reasoning-label">
              ENGINEERING REASONING
            </span>

            <p>
              {decision.explanation}
            </p>

          </div>

        </article>

      ))}

    </div>
  );
}

export default EngineeringDecisions;