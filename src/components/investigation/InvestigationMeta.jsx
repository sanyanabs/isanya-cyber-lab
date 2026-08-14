import "../../styles/investigationMeta.css";

function InvestigationMeta({
  version,
  lastUpdated,
  category,
  difficulty
}) {
  return (
    <div className="investigation-meta">

      <div className="meta-item">
        <span>Version</span>
        <strong>{version}</strong>
      </div>

      <div className="meta-item">
        <span>Category</span>
        <strong>{category}</strong>
      </div>

      <div className="meta-item">
        <span>Difficulty</span>
        <strong>{difficulty}</strong>
      </div>

      <div className="meta-item">
        <span>Last Updated</span>
        <strong>{lastUpdated}</strong>
      </div>

    </div>
  );
}

export default InvestigationMeta;