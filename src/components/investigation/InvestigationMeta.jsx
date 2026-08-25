import "../../styles/investigationMeta.css";

function InvestigationMeta({
  version,
  lastUpdated,
  category,
  difficulty
}) {
  const metadata = [
    {
      label: "Version",
      value: version,
      icon: "⌘"
    },
    {
      label: "Category",
      value: category,
      icon: "◈"
    },
    {
      label: "Difficulty",
      value: difficulty,
      icon: "⚡"
    },
    {
      label: "Last Updated",
      value: lastUpdated,
      icon: "◷"
    }
  ];

  return (
    <section className="investigation-meta">

      {metadata.map((item) => (
        <div
          className="meta-item"
          key={item.label}
        >

          <div className="meta-item-header">

            <span className="meta-icon">
              {item.icon}
            </span>

            <span className="meta-label">
              {item.label}
            </span>

          </div>

          <strong>
            {item.value}
          </strong>

        </div>
      ))}

    </section>
  );
}

export default InvestigationMeta;