import "../styles/contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">

      <div className="contact-header">

        <p className="contact-eyebrow">
          OPEN CHANNEL
        </p>

        <h2>
          📡 Establish Contact
        </h2>

        <p>
          Interested in cybersecurity, security engineering,
          quality engineering, or just want to talk tech?
          My channel is open.
        </p>

      </div>

      <div className="contact-card">

        <div className="contact-terminal">

          <p>
            <span className="contact-prompt">
              isanya@cyber-lab:~$
            </span>{" "}
            whoami
          </p>

          <p className="contact-output">
            Software Quality & Cybersecurity Engineer
          </p>

          <p>
            <span className="contact-prompt">
              isanya@cyber-lab:~$
            </span>{" "}
            status
          </p>

          <p className="contact-output">
            Open to Security Engineering opportunities.
          </p>

        </div>

        <div className="contact-actions">

          <a
            href="mailto:sanyanabs16@gmail.com"
            className="contact-button"
          >
            ✉️ Send Email
          </a>

          <a
            href="www.linkedin.com/in/imelda-sanya-8ba4a682"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-secondary-button"
          >
            💼 LinkedIn
          </a>

          <a
            href="https://github.com/sanyanabs/isanya-cyber-lab.git"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-secondary-button"
          >
            💻 GitHub
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;