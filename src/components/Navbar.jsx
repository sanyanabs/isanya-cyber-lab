import "../styles/navBar.css";

function Navbar() {
  return (
    <nav className="navbar">

      {/* BRAND */}
      <a
        href="/"
        className="navbar-brand"
        aria-label="ISANYA Cyber Lab"
      >

        <span className="navbar-logo-box">

          <img
            src="/neko-logo.svg"
            alt=""
            className="navbar-logo"
          />

        </span>

        <span className="navbar-brand-text">
          ISANYA Cyber Lab
        </span>

      </a>


      {/* NAVIGATION */}
      <div className="navbar-links">

        <a href="#journey">
          <span className="nav-number">
            01
          </span>
          <span>
            Journey
          </span>
        </a>


        <a href="#projects">
          <span className="nav-number">
            02
          </span>
          <span>
            Investigations
          </span>
        </a>


        <a href="#vault">
          <span className="nav-number">
            03
          </span>
          <span>
            Security Vault
          </span>
        </a>


        <a
          href="#contact"
          className="contact-button"
        >
          Contact
        </a>

      </div>

    </nav>
  );
}

export default Navbar;