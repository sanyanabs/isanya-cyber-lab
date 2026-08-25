import "../styles/contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">

      {/* =====================================================
          HEADER
          ===================================================== */}

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
          The channel is open.
        </p>

      </div>


      {/* =====================================================
          CONTACT TERMINAL
          ===================================================== */}

      <div className="contact-card">

        <div className="contact-terminal">

          <div className="contact-terminal-header">

            <span className="contact-terminal-dot"></span>

            <span>
              ISANYA://OPEN_CHANNEL
            </span>

          </div>


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
            mission
          </p>

          <p className="contact-output">
            Building secure software through curiosity.
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


          <p className="contact-cursor">
            █
          </p>

        </div>


        {/* =====================================================
            CONTACT ACTIONS
            ===================================================== */}

        <div className="contact-actions">

          <a
            href="mailto:sanyanabs16@gmail.com"
            className="contact-button"
          >
            ✉️ Send Email →
          </a>

          <a
            href="https://www.linkedin.com/in/imelda-sanya-8ba4a682"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-secondary-button"
          >
            💼 LinkedIn
          </a>

          <a
            href="https://github.com/sanyanabs"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-secondary-button"
          >
            💻 GitHub
          </a>

        </div>

      </div>


      {/* =====================================================
          TERMINAL FOOTER
          ===================================================== */}

      <p className="contact-terminal-footer">

        <span className="contact-prompt">
          isanya@cyber-lab:~$
        </span>{" "}

        establish-channel

        <span className="contact-cursor-small">
          █
        </span>

      </p>

    </section>
  );
}

export default Contact;