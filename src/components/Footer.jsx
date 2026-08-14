import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-terminal">

        <p className="footer-terminal-line">
          <span className="footer-prompt">
            isanya@cyber-lab:~$
          </span>{" "}
          exit
        </p>

        <p className="footer-message">
          Investigation complete. Curiosity remains operational.
        </p>

      </div>

      <div className="footer-content">

        <div>
          <h3>ISANYA Cyber Lab</h3>

          <p>
            Building, testing, breaking, and investigating
            technology with security in mind.
          </p>
        </div>

        <div className="footer-links">

          <a href="#projects">
            Investigations
          </a>

          <a href="#journey">
            Journey
          </a>

          <a href="#certifications">
            Security Vault
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <span>
          © 2026 ISANYA Cyber Lab
        </span>

        <span>
          Built by Imelda
        </span>

      </div>

    </footer>
  );
}

export default Footer;