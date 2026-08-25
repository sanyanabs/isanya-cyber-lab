import "../styles/certifications.css";

function Certifications() {
  const milestones = [
    {
      icon: "☁️",
      title: "AWS Certified Security – Specialty",
      status: "CERTIFIED",
      type: "CREDENTIAL",
      description:
        "Demonstrating knowledge of AWS security controls, architecture, identity, data protection, monitoring, and incident response."
    },

    {
      icon: "🏆",
      title: "IBM Cybersecurity Foundations",
      status: "COMPLETED",
      type: "LEARNING MILESTONE",
      description:
        "Building the foundation of cybersecurity concepts, threats, and defensive practices."
    },

    {
      icon: "🛡️",
      title: "GRC Engineering Scholarship",
      status: "IN PROGRESS",
      type: "CURRENT PROGRAM",
      description:
        "Developing practical knowledge across governance, risk, compliance, and security frameworks."
    },

    {
      icon: "🚀",
      title: "Security Engineer Mission",
      status: "ACTIVE MISSION",
      type: "CAREER MISSION",
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
          Credentials, learning milestones, and missions
          collected throughout my cybersecurity journey.
        </p>

      </div>


      <div className="certifications-grid">

        {milestones.map((milestone, index) => (

          <article
            className="certification-card"
            key={milestone.title}
          >

            <div className="certification-card-top">

              <span className="certification-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="certification-type">
                {milestone.type}
              </span>

            </div>


            <div className="certification-main">

              <div className="certification-icon">
                {milestone.icon}
              </div>

              <div className="certification-status">
                <span className="status-dot"></span>
                {milestone.status}
              </div>

            </div>


            <h3>
              {milestone.title}
            </h3>

            <p>
              {milestone.description}
            </p>


            <div className="certification-footer">

              <span>
                ISANYA://VAULT
              </span>

              <span>
                {milestone.status === "CERTIFIED"
                  ? "VERIFIED"
                  : "TRACKING"}
              </span>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Certifications;