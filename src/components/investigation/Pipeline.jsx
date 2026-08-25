import { useEffect, useState } from "react";
import "../../styles/pipeline.css";

function Pipeline({ steps }) {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (!steps || steps.length === 0) {
      return;
    }

    const interval = setInterval(() => {
      setActiveStep((current) => {
        if (current >= steps.length - 1) {
          return 0;
        }

        return current + 1;
      });
    }, 1800);

    return () => clearInterval(interval);
  }, [steps]);

  if (!steps || steps.length === 0) {
    return null;
  }

  return (
    <div className="pipeline">

      {steps.map((step, index) => {

        const isActive = index === activeStep;
        const isComplete = index < activeStep;

        return (
          <div
            key={step}
            className={`pipeline-step ${
              isActive ? "pipeline-step-active" : ""
            } ${
              isComplete ? "pipeline-step-complete" : ""
            }`}
          >

            <div className="pipeline-box">

              <span className="pipeline-status-dot"></span>

              <span className="pipeline-step-text">
                {step}
              </span>

              {isActive && (
                <span className="pipeline-processing">
                  PROCESSING
                </span>
              )}

              {isComplete && (
                <span className="pipeline-complete">
                  ✓
                </span>
              )}

            </div>

            {index < steps.length - 1 && (
              <div
                className={`pipeline-arrow ${
                  index < activeStep
                    ? "pipeline-arrow-active"
                    : ""
                }`}
              >
                ↓
              </div>
            )}

          </div>
        );
      })}

    </div>
  );
}

export default Pipeline;