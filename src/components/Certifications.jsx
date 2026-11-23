
import "../styles/certifications.css";

import awsCertificate from "../assets/certificates/aws-security-specialty.pdf";
import ibmCertificate from "../assets/certificates/ibm-skillsbuild-cybersecurity.pdf";
import istqbCertificate from "../assets/certificates/istqb-certified-security-tester.pdf";

function Certifications() {
  const certifications = [
    {
      icon: "☁️",
      title: "AWS Certified Security – Specialty",
      issuer: "Amazon Web Services",
      date: "4 August 2025",
      status: "CERTIFIED",
      certificate: awsCertificate,
      verification: "https://aws.amazon.com/verification",
      credentialId: "cbefd546d3e84f2e8f817af2233da9c9",
      description:
        "Demonstrating knowledge of AWS security controls, architecture, identity, data protection, monitoring, and incident response."
    },
    {
      icon: "🛡️",
      title: "IBM SkillsBuild Cybersecurity Certificate",
      issuer: "IBM SkillsBuild",
      date: "29 April 2026",
      status: "COMPLETED",
      certificate: ibmCertificate,
      verification:
        "https://www.credly.com/badges/02781bcd-d823-423c-8da9-839d87acf965",
      description:
        "Recognition of completed cybersecurity learning through the IBM SkillsBuild programme."
    },
    {
      icon: "🔐",
      title: "Certified Tester – Security Tester (CT-SEC)",
      issuer: "ISTQB Kenya Chapter",
      date: "20 November 2024",
      status: "CERTIFIED",
      certificate: istqbCertificate,
      credentialId: "24-CT-SEC-00300-KENYA",
      description:
        "Professional qualification awarded by the International Software Testing Qualifications Board for Security Testing."
    }
  ];

  const programmes = [
    {
      icon: "🏆",
      title: "GRC Engineering Scholarship",
      status: "IN PROGRESS",
      type: "CURRENT PROGRAMME",
      description:
        "Developing practical knowledge across governance, risk, compliance, and security frameworks."
    },
    {
      icon: "🚀",
      title: "Security Engineer Mission",
      status: "ACTIVE MISSION",
      type: "CAREER DEVELOPMENT",
      description:
        "Building practical cybersecurity projects while developing the skills needed to move into a Security Engineer role."
    }
  ];

  const renderCard = (item, index, type) => (
    <article className="certification-card" key={item.title}>
      <div className="certification-card-top">
        <span className="certification-number">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="certification-type">
          {type}
        </span>
      </div>

      <div className="certification-main">
        <div className="certification-icon">
          {item.icon}
        </div>

        <div className="certification-status">
          <span className="status-dot"></span>
          {item.status}
        </div>
      </div>

      <h3>{item.title}</h3>

      <p>{item.description}</p>

      {item.issuer && (
        <p className="certification-meta">
          Issued by: {item.issuer}
        </p>
      )}

      {item.date && (
        <p className="certification-meta">
          Awarded / Issued: {item.date}
        </p>
      )}

      {item.credentialId && (
        <p className="certification-meta">
          Credential ID: {item.credentialId}
        </p>
      )}

      <div className="certification-actions">
        {item.certificate && (
          <a
            className="certification-link"
            href={item.certificate}
            target="_blank"
            rel="noopener noreferrer"
          >
            VIEW CERTIFICATE ↗
          </a>
        )}

        {item.verification && (
          <a
            className="certification-link secondary"
            href={item.verification}
            target="_blank"
            rel="noopener noreferrer"
          >
            VERIFY CREDENTIAL ↗
          </a>
        )}
      </div>

      <div className="certification-footer">
        <span>ISANYA://VAULT</span>
        <span>
          {item.certificate ? "DOCUMENT AVAILABLE" : "TRACKING"}
        </span>
      </div>
    </article>
  );

  return (
    <section id="certifications" className="certifications">
      <div className="certifications-header">
        <p className="certifications-eyebrow">
          SECURITY VAULT
        </p>

        <h2>🔐 Security Vault</h2>

        <p>
          A record of professional cybersecurity credentials,
          learning milestones, and ongoing security development.
        </p>
      </div>

      <div className="certification-group">
        <h3 className="certification-group-title">
          Professional Certifications
        </h3>

        <div className="certifications-grid">
          {certifications.map((item, index) =>
            renderCard(item, index, "PROFESSIONAL CREDENTIAL")
          )}
        </div>
      </div>

      <div className="certification-group">
        <h3 className="certification-group-title">
          Programmes & Security Missions
        </h3>

        <div className="certifications-grid">
          {programmes.map((item, index) =>
            renderCard(item, index, item.type)
          )}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
