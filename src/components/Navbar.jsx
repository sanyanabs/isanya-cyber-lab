import "../styles/navBar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <a
        href="/"
        className="navbar-brand"
      >
        🔐 ISANYA Cyber Lab
      </a>


      <div className="navbar-links">

        <a href="#journey">
          <span className="nav-number">01</span>
          Journey
        </a>

        <a href="#projects">
          <span className="nav-number">02</span>
          Investigations
        </a>

        <a href="#certifications">
          <span className="nav-number">03</span>
          Security Vault
        </a>

        <a
          href="#contact"
          className="navbar-contact"
        >
          Contact
        </a>

      </div>

    </nav>
  );
}

export default Navbar;