import { useEffect, useState } from "react";
import "../styles/hero.css";

function Hero() {
  const [showTerminal, setShowTerminal] = useState(false);
  const [terminalLines, setTerminalLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [terminalComplete, setTerminalComplete] = useState(false);

  const terminalMessages = [
    "> initializing ISANYA_CYBER_LAB...",
    "> loading security modules...",
    "> checking perimeter...",
    "> analyst detected.",
    "> access granted.",
  ];

  /* =====================================================
     TERMINAL TYPING ENGINE
     ===================================================== */

  useEffect(() => {
    if (!showTerminal) {
      return;
    }

    if (currentLine >= terminalMessages.length) {
      setTerminalComplete(true);
      return;
    }

    const message = terminalMessages[currentLine];

    if (currentText.length < message.length) {
      const typingTimer = setTimeout(() => {
        setCurrentText(
          message.slice(0, currentText.length + 1)
        );
      }, 35);

      return () => clearTimeout(typingTimer);
    }

    const nextLineTimer = setTimeout(() => {
      setTerminalLines((previousLines) => [
        ...previousLines,
        message,
      ]);

      setCurrentText("");

      setCurrentLine(
        (previousLine) => previousLine + 1
      );
    }, 500);

    return () => clearTimeout(nextLineTimer);
  }, [
    showTerminal,
    currentLine,
    currentText,
    terminalMessages.length,
  ]);

  /* =====================================================
     OPEN TERMINAL EASTER EGG
     ===================================================== */

  const openTerminal = () => {
    setTerminalLines([]);
    setCurrentLine(0);
    setCurrentText("");
    setTerminalComplete(false);
    setShowTerminal(true);
  };

  /* =====================================================
     CLOSE TERMINAL
     ===================================================== */

  const handleEnterLab = () => {
    setShowTerminal(false);
  };

  /* =====================================================
     TERMINAL EASTER EGG
     ===================================================== */

  if (showTerminal) {
    return (
      <section className="hero-terminal-intro">

        <div className="hero-terminal-window">

          <div className="hero-terminal-header">

            <span className="hero-terminal-dot red"></span>

            <span className="hero-terminal-dot yellow"></span>

            <span className="hero-terminal-dot green"></span>

            <span className="hero-terminal-title">
              ISANYA://SYSTEM_INITIALIZATION
            </span>

          </div>


          <div className="hero-terminal-body">

            {terminalLines.map((line, index) => (
              <p
                key={`${line}-${index}`}
                className="hero-terminal-complete"
              >
                {line}
              </p>
            ))}


            {!terminalComplete && (
              <p className="hero-terminal-current">

                {currentText}

                <span className="hero-terminal-cursor">
                  █
                </span>

              </p>
            )}


            {terminalComplete && (
              <button
                className="hero-terminal-continue"
                onClick={handleEnterLab}
              >
                ENTER THE LAB →
              </button>
            )}

          </div>

        </div>

      </section>
    );
  }

  /* =====================================================
     MAIN HERO
     ===================================================== */

  return (
    <section
      className="hero"
      style={{
        "--hero-bg":
          "url('/isanya-cyber-lab-hero-clean.webp')",
      }}
    >

      {/* =================================================
          BACKGROUND + NEKO OBSERVER
          ================================================= */}

      <div className="hero-background">

        <img
          src="/neko-eyes.png"
          alt=""
          className="neko-eyes"
        />

      </div>


      {/* =================================================
          HERO CONTENT
          ================================================= */}

      <div className="hero-content">

        <div className="hero-left">

          {/* SYSTEM */}

          <div className="system-online">

            <span className="system-dot"></span>

            SYSTEM ONLINE

          </div>


          {/* TAGLINE */}

          <p className="hero-tagline">
            Every investigation begins with curiosity.
          </p>


          {/* TITLE */}

          <h1>

            ISANYA

            <span>
              Cyber Lab
            </span>

          </h1>


          {/* ROLE */}

          <h2>
            Software Quality & Cybersecurity Engineer
          </h2>


          {/* DESCRIPTION */}

          <p className="hero-description">

            I build, test, break, and investigate software
            with security in mind. This is my cybersecurity
            laboratory. A place where I document real
            projects, experiments, investigations, and
            everything I learn along the way.

          </p>


          {/* ACTIONS */}

          <div className="hero-actions">

            <a
              href="#projects"
              className="hero-button"
            >

              <span className="button-icon">
                ⚗
              </span>

              ENTER THE LAB →

            </a>


            <a
              href="#journey"
              className="hero-secondary-button"
            >
              EXPLORE MY JOURNEY
            </a>

          </div>


          {/* SCROLL */}

          <a
            href="#projects"
            className="hero-scroll"
          >

            <span>
              ↓
            </span>

            SCROLL TO EXPLORE

          </a>

        </div>


        {/* =================================================
            RIGHT SIDE
            ================================================= */}

        <div className="hero-right">

          <button
            className="hero-presence"
            onClick={openTerminal}
            type="button"
            aria-label="Open analyst diagnostics"
            title="System diagnostics"
          >

            <span className="presence-label">
              ANALYST
            </span>

            <span className="presence-status">
              ONLINE
            </span>

          </button>

        </div>

      </div>


      {/* =================================================
          COMPACT LAB STATUS
          ================================================= */}

      <div className="status-bar">

        <div className="status-bar-header">

          <span className="status-terminal">
            ISANYA://LAB_STATUS
          </span>


          <span className="status-live">

            <span className="live-dot"></span>

            LIVE

          </span>

        </div>


        <div className="status-bar-items">

          {/* SYSTEM */}

          <div className="status-bar-item">

            <span className="status-bar-dot green-dot"></span>

            <div>

              <span className="status-bar-label">
                SYSTEM
              </span>

              <strong>
                ONLINE
              </strong>

            </div>

          </div>


          {/* PROJECTS */}

          <div className="status-bar-item">

            <span className="status-bar-icon cyan-icon">
              ◇
            </span>

            <div>

              <span className="status-bar-label">
                ACTIVE PROJECTS
              </span>

              <strong>
                03
              </strong>

            </div>

          </div>


          {/* ANALYST */}

          <div className="status-bar-item">

            <span className="status-bar-dot green-dot"></span>

            <div>

              <span className="status-bar-label">
                ANALYST
              </span>

              <strong>
                ONLINE
              </strong>

            </div>

          </div>


          {/* CURRENT FOCUS */}

          <div className="status-bar-focus">

            <span className="status-bar-label">
              CURRENT FOCUS
            </span>

            <strong>
              Security Engineering
            </strong>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;