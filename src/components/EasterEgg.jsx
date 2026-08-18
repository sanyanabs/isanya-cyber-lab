import { useEffect, useState } from "react";
import "../styles/easterEgg.css";

function EasterEgg() {
  const [found, setFound] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    let sequence = "";

    const handleKeyDown = (event) => {

      if (event.key === "Escape") {
        setFound(false);
        setMessage("");
        setStatus("");
        sequence = "";
        return;
      }

      const key = event.key.toUpperCase();

      sequence = (sequence + key).slice(-20);

      console.log(key);

      if (sequence.includes("ISANYA")) {
        console.log("🥚 EASTER EGG FOUND!");

        setFound(true);

        sequence = "";
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {

    if (!found) {
      return;
    }

    setMessage("Authenticating...");

    const timer = setTimeout(() => {
      setStatus("Checking clearance...");
    }, 1000);

    return () => {
      clearTimeout(timer);
    };

  }, [found]);

  if (!found) {
    return null;
  }

  return (
    <div className="easter-egg-overlay">

      <div className="easter-egg-terminal">

        <div className="terminal-header">
          <span>ISANYA@CYBER-LAB</span>
          <span>● ● ●</span>
        </div>

        <div className="terminal-body">

          <p>
            <span className="terminal-prompt">
              isanya@cyber-lab:~$
            </span>{" "}
            access --secret
          </p>

          <p>
            {message}
          </p>

          <p>
            {status}
          </p>

          <p>
            🔓 ACCESS GRANTED
          </p>

          <p>
            🥚 You found something that wasn't
            in the documentation.
          </p>

          <p>
            Security status:
            <strong> CURIOUS</strong>
          </p>

          <p>
            Investigator status:
            <strong> STILL LEARNING</strong>
          </p>

          <p className="terminal-cursor">
            █
          </p>
          <button
            className="terminal-close"
            onClick={() => {
                setFound(false);
                setMessage("");
                setStatus("");
            }}
            >
            [ CLOSE TERMINAL ]
            </button>
        </div>

      </div>

    </div>
  );
}

export default EasterEgg;