import { useState } from "react";
import "../../styles/EvidenceLocker.css";

function EvidenceLocker({ evidence }) {
  const [selectedEvidence, setSelectedEvidence] = useState(null);

  return (
    <div className="evidence-locker">

      {evidence.map((item) => (
        <div className="evidence-card" key={item.id}>

          <span className="evidence-type">
            {item.type}
          </span>

          <h3>{item.title}</h3>

          <p>{item.description}</p>

          <img
            src={item.image}
            alt={item.title}
          />

          <button
            className="evidence-button"
            onClick={() => setSelectedEvidence(item)}
          >
            View Evidence →
          </button>

        </div>
      ))}

      {selectedEvidence && (
        <div className="evidence-modal">

          <div className="evidence-preview">

            <h2>{selectedEvidence.title}</h2>

    
             <div className="evidence-placeholder">
                📄 Incident Report
             </div>

            <p>{selectedEvidence.description}</p>

            <button
              className="evidence-button"
              onClick={() => setSelectedEvidence(null)}
            >
              Close Evidence
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default EvidenceLocker;