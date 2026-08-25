import "../../styles/investigationHeader.css";

function InvestigationHeader({
  caseFile,
  title,
  status,
  question,
}) {
  return (
    <section className="investigation-header">

      {/* =====================================================
          TERMINAL BAR
          ===================================================== */}

      <div className="investigation-terminal-bar">

        <span className="investigation-terminal-dot"></span>

        <span>
          ISANYA://INVESTIGATION
        </span>

        <span className="investigation-terminal-status">
          SECURE CHANNEL
        </span>

      </div>


      {/* =====================================================
          CASE INFORMATION
          ===================================================== */}

      <div className="investigation-header-meta">

        <p className="case-file">
          🗂 {caseFile}
        </p>

        <p className="status">
          <span className="status-indicator"></span>

          {status}
        </p>

      </div>


      {/* =====================================================
          TITLE
          ===================================================== */}

      <h1>
        {title}
      </h1>


      {/* =====================================================
          INVESTIGATION QUESTION
          ===================================================== */}

      <div className="question-card">

        <div className="question-card-label">
          INVESTIGATION QUESTION
        </div>

        <div className="question-line"></div>

        <p>
          {question}
        </p>

      </div>


      {/* =====================================================
          TERMINAL PROMPT
          ===================================================== */}

      <div className="investigation-prompt">

        <span>
          isanya@cyber-lab:~$
        </span>

        <span>
          begin-investigation
        </span>

        <span className="prompt-cursor">
          █
        </span>

      </div>

    </section>
  );
}

export default InvestigationHeader;