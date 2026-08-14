import "../../styles/engineeringDecisions.css";

function EngineeringDecisions({ decisions }) {
  return (
    <>
      {decisions.map((decision) => (
        <div key={decision.title} className="decision-card">
          <h3>{decision.title}</h3>

          <p>{decision.explanation}</p>
        </div>
      ))}
    </>
  );
}

export default EngineeringDecisions;