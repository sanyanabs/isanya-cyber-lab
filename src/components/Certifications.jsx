import "../styles/certifications.css";

function Certifications() {
  const milestones = [
    {
      icon: "☁️",
      title: "AWS Certified Security – Specialty",
      status: "CERTIFIED",
      description:
        "Demonstrating knowledge of AWS security controls, architecture, identity, data protection, monitoring, and incident response."
    },

    {
      icon: "🏆",
      title: "IBM Cybersecurity Foundations",
      status: "COMPLETED",
      description:
        "Building the foundation of cybersecurity concepts, threats, and defensive practices."
    },

    {
      icon: "🛡️",
      title: "GRC Engineering Scholarship",
      status: "IN PROGRESS",
      description:
        "Developing practical knowledge across governance, risk, compliance, and security frameworks."
    },

    {
      icon: "🚀",
      title: "Security Engineer Mission",
      status: "ACTIVE MISSION",
      description:
        "Building practical cybersecurity projects while developing the skills needed to move into a Security Engineer role."
    }
  ];

  return (
    <section
      id="certifications"
      className="certifications"
    >

      <div className="certifications-header">

        <p className="certifications-eyebrow">
          SECURITY VAULT
        </p>

        <h2>
          🔐 Security Vault
        </h2>

        <p>
          A collection of cybersecurity learning milestones
          unlocked throughout my journey.
        </p>

      </div>

      <div className="certifications-grid">

        {milestones.map((milestone) => (
          <article
            className="certification-card"
            key={milestone.title}
          >

            <div className="certification-top">

              <span className="certification-icon">
                {milestone.icon}
              </span>

              <span className="certification-status">
                {milestone.status}
              </span>

            </div>

            <h3>
              {milestone.title}
            </h3>

            <p>
              {milestone.description}
            </p>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Certifications;