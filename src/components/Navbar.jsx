import "../styles/navBar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <a href="/" className="navbar-brand">
        🔐 ISANYA Cyber Lab
      </a>

      <div className="navbar-links">

        <a href="#journey">
          Journey
        </a>

        <a href="#projects">
          Projects
        </a>

        <a href="#certifications">
          Certifications
        </a>

        <a href="#contact">
          Contact
        </a>

      </div>

    </nav>
  );
}

export default Navbar;