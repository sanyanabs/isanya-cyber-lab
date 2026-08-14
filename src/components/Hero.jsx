import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <p className="hero-tagline">
          Every investigation begins with curiosity.
        </p>

        <h1>ISANYA Cyber Lab</h1>

        <h2>
          Software Quality & Cybersecurity Engineer
        </h2>

        <p className="hero-description">
          I build, test, break, and investigate software with
          security in mind. This is my cybersecurity laboratory —
          a place where I document real projects, experiments,
          investigations, and everything I learn along the way.
        </p>

        <div className="hero-actions">

          <a
            href="#projects"
            className="hero-button"
          >
            Enter the Lab →
          </a>

          <a
            href="#journey"
            className="hero-secondary-button"
          >
            Explore My Journey
          </a>

        </div>

      </div>

      <div className="hero-right">

        <div className="status-card">

          <div className="status-card-header">
            <span className="terminal-dot"></span>
            <span>ISANYA://LAB_STATUS</span>
          </div>

          <h3>Lab Status</h3>

          <p>
            🟢 <span>System:</span> Operational
          </p>

          <p>
            🧪 <span>Active Projects:</span> 3
          </p>

          <p>
            🔒 <span>Classified:</span> 1
          </p>

          <p>
            🎯 <span>Current Mission</span>
          </p>

          <strong>
            Building secure software through curiosity.
          </strong>

        </div>

      </div>

    </section>
  );
}

export default Hero;