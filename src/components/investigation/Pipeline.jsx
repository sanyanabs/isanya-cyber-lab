import "../../styles/pipeline.css";

function Pipeline() {
  const steps = [
    "Authentication Logs",
    "Log Parser",
    "Detection Engine",
    "Security Findings",
    "Incident Report",
  ];

  return (
    <div className="pipeline">
      {steps.map((step, index) => (
        <div key={step} className="pipeline-step">
          <div className="pipeline-box">{step}</div>

          {index < steps.length - 1 && (
            <div className="pipeline-arrow">↓</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Pipeline;