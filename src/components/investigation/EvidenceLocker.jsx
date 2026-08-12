import { useEffect, useState } from "react";
import "../../styles/EvidenceLocker.css";

function EvidenceLocker({ evidence }) {
  const [selectedEvidence, setSelectedEvidence] = useState(null);

  useEffect(() => {
    if (selectedEvidence) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedEvidence]);

  return (
    <div className="evidence-locker">

      {evidence.map((item) => (
        <div className="evidence-card" key={item.id}>

          <span className="evidence-type">
            {item.type}
          </span>

          <h3>{item.title}</h3>

          <p>{item.description}</p>


          {/* =========================
              PDF EVIDENCE
          ========================= */}

          {item.pdf && (
            <div className="evidence-document">

              <div className="document-icon">

                <div className="document-symbol">

                  <span className="document-fold"></span>

                  <span className="document-line line-one"></span>
                  <span className="document-line line-two"></span>
                  <span className="document-line line-three"></span>

                </div>

                <div className="document-lock">
                  🔐
                </div>

              </div>

              <span>SECURE REPORT</span>

            </div>
          )}


          {/* =========================
              IMAGE EVIDENCE
          ========================= */}

          {item.image && (
            <img
              src={item.image}
              alt={item.title}
            />
          )}


          {/* =========================
              VIEW BUTTON
          ========================= */}

          <button
            className="evidence-button"
            onClick={() => setSelectedEvidence(item)}
          >
            View Evidence →
          </button>

        </div>
      ))}


      {/* =========================
          EVIDENCE MODAL
      ========================= */}

      {selectedEvidence && (
        <div className="evidence-modal">

          <div className="evidence-preview">

            <h2>{selectedEvidence.title}</h2>


            {/* =========================
                PDF MODAL
            ========================= */}

            {selectedEvidence.pdf && (
              <div className="pdf-evidence-viewer">

                <div className="modal-document-icon">

                  <div className="modal-document-symbol">

                    <span className="modal-document-fold"></span>

                    <span className="modal-document-line modal-line-one"></span>
                    <span className="modal-document-line modal-line-two"></span>
                    <span className="modal-document-line modal-line-three"></span>

                  </div>

                  <div className="modal-document-lock">
                    🔐
                  </div>

                </div>


                <h3>Investigation Report</h3>


                <p>
                  This evidence is available as a PDF document.
                  Open the report to review the complete investigation findings.
                </p>


                <a
                  href={selectedEvidence.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="evidence-button"
                >
                  Open Full Report ↗
                </a>

              </div>
            )}


            {/* =========================
                IMAGE MODAL
            ========================= */}

            {selectedEvidence.image && (
              <img
                src={selectedEvidence.image}
                alt={selectedEvidence.title}
              />
            )}


            {/* =========================
                TEXT FILE MODAL
            ========================= */}

            {selectedEvidence.file && (
              <div className="text-evidence-viewer">

                <p>
                  This evidence is stored as a text investigation artifact.
                </p>

                <a
                  href={selectedEvidence.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="evidence-button"
                >
                  Open Evidence ↗
                </a>

              </div>
            )}


            {/* =========================
                CLOSE BUTTON
            ========================= */}

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