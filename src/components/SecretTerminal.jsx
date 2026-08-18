import { useRef, useState } from "react";
import "../styles/secretTerminal.css";

function SecretTerminal({ onSecretFound }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  const handleOpen = () => {
    setOpen(true);

    // Wait for React to render the input, then focus it.
    setTimeout(() => {
      inputRef.current?.focus();
    }, 50);
  };

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const handleChange = (event) => {
    const value = event.target.value.toUpperCase();

    setInput(value);

    if (value === "ISANYA") {
      // Clear the terminal
      setInput("");

      // Close the footer terminal
      setOpen(false);

      // Tell Home that the secret was found
      onSecretFound();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setOpen(false);
      setInput("");
      return;
    }
  };

  return (
    <div className="secret-terminal">

      {/* CLOSED TERMINAL */}

      {!open && (
        <button
          className="secret-terminal-trigger"
          onClick={handleOpen}
          aria-label="Open system terminal"
        >
          isanya@cyber-lab:~{" "}
          <span className="secret-cursor">█</span>
        </button>
      )}

      {/* OPEN TERMINAL */}

      {open && (
        <div
          className="secret-terminal-input"
          onClick={handleTerminalClick}
        >

          <span className="secret-terminal-prompt">
            isanya@cyber-lab:~{" "}
          </span>

          <span className="secret-terminal-value">
            {input}
          </span>

          <span className="secret-cursor">
            █
          </span>

          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="secret-hidden-input"
            aria-label="Secret terminal input"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="characters"
            spellCheck="false"
          />

        </div>
      )}

      {/* CLUE */}

      {open && (
        <div className="secret-terminal-message">

          <p>
            &gt; curious?
          </p>

          <p>
            &gt; Not everything interesting is visible.
          </p>

          <p>
            &gt; The lab has a name.
          </p>

        </div>
      )}

    </div>
  );
}

export default SecretTerminal;