import "../../styles/InvestigationHeader.css";
function InvestigationHeader({
  caseFile,
  title,
  status,
  question,
}) {
  return (
    <section className="investigation-header">

      <p className="case-file">
        🗂 {caseFile}
      </p>

      <p className="status">
        🟢 {status}
      </p>

      <h1>{title}</h1>

      <div className="question-card">

        <h2>Investigation Question</h2>

        <p>{question}</p>

      </div>

    </section>
  );
}

export default InvestigationHeader;