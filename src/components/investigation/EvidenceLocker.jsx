import { useEffect, useState } from "react";
import "../../styles/EvidenceLocker.css";

function EvidenceLocker({ evidence }) {
  const [selectedEvidence, setSelectedEvidence] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedEvidence ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedEvidence]);

  return (
    <div className="evidence-locker">

      {/* =====================================================
          EVIDENCE CARDS
      ===================================================== */}

      {evidence.map((item) => (
        <div className="evidence-card" key={item.id}>

          <span className="evidence-type">
            {item.type}
          </span>

          <h3>{item.title}</h3>

          <p>{item.description}</p>


          {/* ================= PDF ================= */}

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


          {/* ================= TEXT EVIDENCE ================= */}

          {item.file && (
            <div className="text-evidence-card">

              <div className="text-evidence-icon">
                {item.type === "SSL/TLS" ? "🔐" : "🌐"}
              </div>

              <span>
                {item.type === "SSL/TLS"
                  ? "TLS ARTIFACT"
                  : "DNS ARTIFACT"}
              </span>

            </div>
          )}


          {/* ================= IMAGE ================= */}

          {item.image && (
            <img
              src={item.image}
              alt={item.title}
            />
          )}


          {/* ================= BUTTON ================= */}

          <button
            className="evidence-button"
            onClick={() => setSelectedEvidence(item)}
          >
            View Evidence →
          </button>

        </div>
      ))}


      {/* =====================================================
          EVIDENCE MODAL
      ===================================================== */}

      {selectedEvidence && (
        <div
          className="evidence-modal"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedEvidence(null);
            }
          }}
        >

          <div className="evidence-preview">


            {/* =================================================
                PDF REPORT
            ================================================= */}

            {selectedEvidence.pdf && (
              <>

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


                  <h3>
                    Investigation Report
                  </h3>


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

              </>
            )}


            {/* =================================================
                SSL/TLS INTELLIGENCE
            ================================================= */}

            {selectedEvidence.type === "SSL/TLS" &&
              selectedEvidence.content && (

                <div className="intelligence-viewer">

                  <div className="intelligence-header">

                    <span className="intelligence-icon">
                      🔐
                    </span>

                    <div>

                      <span className="intelligence-label">
                        SECURITY ARTIFACT
                      </span>

                      <h3>
                        SSL/TLS Intelligence
                      </h3>

                    </div>

                  </div>


                  {/* Target */}

                  <div className="intel-section">

                    <span className="intel-label">
                      TARGET
                    </span>

                    <div className="intel-value">
                      {selectedEvidence.content.target}
                    </div>

                  </div>


                  {/* Inspection Result */}

                  <div className="intel-section">

                    <span className="intel-label">
                      INSPECTION RESULT
                    </span>

                    <div className="intel-alert">
                      ⚠ {selectedEvidence.content.result}
                    </div>

                  </div>


                  {/* Reason */}

                  <div className="intel-section">

                    <span className="intel-label">
                      REASON
                    </span>

                    <div className="intel-value">
                      {selectedEvidence.content.reason}
                    </div>

                  </div>


                  {/* Recommendation */}

                  <div className="intel-section">

                    <span className="intel-label">
                      RECOMMENDATION
                    </span>

                    <div className="intel-value">
                      {selectedEvidence.content.recommendation}
                    </div>

                  </div>


                  {/* Source */}

                  <div className="intel-section">

                    <span className="intel-label">
                      SOURCE
                    </span>

                    <div className="intel-source">
                      {selectedEvidence.content.source}
                    </div>

                  </div>


                  {/* Raw Evidence */}

                  <a
                    href={selectedEvidence.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="evidence-button"
                  >
                    View Raw Evidence ↗
                  </a>

                </div>

              )}


            {/* =================================================
                DNS INTELLIGENCE
            ================================================= */}

            {selectedEvidence.type === "DNS" &&
              selectedEvidence.content && (

                <div className="intelligence-viewer">

                  <div className="intelligence-header">

                    <span className="intelligence-icon">
                      🌐
                    </span>

                    <div>

                      <span className="intelligence-label">
                        RECONNAISSANCE ARTIFACT
                      </span>

                      <h3>
                        DNS Intelligence
                      </h3>

                    </div>

                  </div>


                  {/* Target */}

                  <div className="intel-section">

                    <span className="intel-label">
                      TARGET
                    </span>

                    <div className="intel-value">
                      {selectedEvidence.content.target}
                    </div>

                  </div>


                  {/* A Records */}

                  <div className="intel-section">

                    <span className="intel-label">
                      A RECORDS
                    </span>

                    <div className="intel-list">

                      {selectedEvidence.content.aRecords.map(
                        (record) => (
                          <div
                            className="intel-list-item"
                            key={record}
                          >
                            {record}
                          </div>
                        )
                      )}

                    </div>

                  </div>


                  {/* AAAA Records */}

                  <div className="intel-section">

                    <span className="intel-label">
                      AAAA RECORDS
                    </span>

                    <div className="intel-list">

                      {selectedEvidence.content.aaaaRecords.map(
                        (record) => (
                          <div
                            className="intel-list-item"
                            key={record}
                          >
                            {record}
                          </div>
                        )
                      )}

                    </div>

                  </div>


                  {/* Name Servers */}

                  <div className="intel-section">

                    <span className="intel-label">
                      NAME SERVERS
                    </span>

                    <div className="intel-list">

                      {selectedEvidence.content.nameServers.map(
                        (server) => (
                          <div
                            className="intel-list-item"
                            key={server}
                          >
                            {server}
                          </div>
                        )
                      )}

                    </div>

                  </div>


                  {/* Source */}

                  <div className="intel-section">

                    <span className="intel-label">
                      SOURCE
                    </span>

                    <div className="intel-source">
                      {selectedEvidence.content.source}
                    </div>

                  </div>


                  {/* Raw Evidence */}

                  <a
                    href={selectedEvidence.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="evidence-button"
                  >
                    View Raw Evidence ↗
                  </a>

                </div>

              )}


            {/* =================================================
                IMAGE EVIDENCE
            ================================================= */}

            {selectedEvidence.image && (
              <div className="image-evidence-viewer">

                <img
                  src={selectedEvidence.image}
                  alt={selectedEvidence.title}
                />

              </div>
            )}


            {/* =================================================
                CLOSE BUTTON
            ================================================= */}

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