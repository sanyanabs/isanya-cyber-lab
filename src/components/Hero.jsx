import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <p className="hero-tagline">
          Every investigation begins with curiosity.
        </p>

        <h1>ISANYA Cyber Lab</h1>

        <h2>Software Quality & Cybersecurity Engineer</h2>

        <p className="hero-description">
          Welcome to my cybersecurity laboratory.
          Here I document real investigations,
          engineering experiments,
          and everything I learn while building.
        </p>

        <a href="#projects" className="hero-button">
          Enter the Lab →
        </a>

      </div>

      <div className="hero-right">

        <div className="status-card">

          <h3>Lab Status</h3>

          <p>🟢 Operational</p>

          <p>🧪 Investigations: 3</p>

          <p>🎯 Current Mission</p>

          <strong>
            Building secure software through curiosity.
          </strong>

        </div>

      </div>

    </section>
  );
}

export default Hero;