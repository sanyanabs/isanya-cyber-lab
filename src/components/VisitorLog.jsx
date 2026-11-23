
import { useState } from "react";
import "../styles/visitorLog.css";

function VisitorLog() {
  const [alias, setAlias] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");

  // =====================================================
  // SUBMIT VISITOR LOG
  // =====================================================

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("loading");
    setStatusMessage("");

    const trimmedAlias = alias.trim();
    const trimmedMessage = message.trim();

    if (!trimmedAlias || !trimmedMessage) {
      setStatus("error");
      setStatusMessage(
        "Please enter an alias and a message."
      );
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:8000/api/visitor-logs",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            alias: trimmedAlias,
            message: trimmedMessage,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail || "Unable to save visitor log."
        );
      }

      setStatus("success");
      setStatusMessage(
        "Your paw print has been recorded."
      );

      setAlias("");
      setMessage("");

    } catch (error) {
      console.error("Visitor log error:", error);

      setStatus("error");
      setStatusMessage(
        "Unable to connect to the Visitor Log API."
      );
    }
  };

  return (
    <section
      id="visitor-log"
      className="visitor-log"
    >
      <div className="visitor-log-header">
        <p className="visitor-log-eyebrow">
          🐾 VISITOR LOG
        </p>

        <h2>Leave a Paw Print</h2>

        <p>
          Found something interesting?
          Leave a comment or share your feedback.
        </p>
      </div>

      <div className="visitor-log-card">

        <div className="visitor-log-card-header">
          <span className="visitor-log-status-dot"></span>

          <span>
            ISANYA://VISITOR_LOG
          </span>
        </div>

        <form
          className="visitor-log-form"
          onSubmit={handleSubmit}
        >
          <div className="visitor-log-field">
            <label htmlFor="visitor-alias">
              Alias
            </label>

            <input
              id="visitor-alias"
              type="text"
              value={alias}
              onChange={(event) =>
                setAlias(event.target.value)
              }
              placeholder="e.g. curious_analyst"
              maxLength={50}
              required
            />

            <span className="visitor-log-counter">
              {alias.length}/50
            </span>
          </div>

          <div className="visitor-log-field">
            <label htmlFor="visitor-message">
              Message
            </label>

            <textarea
              id="visitor-message"
              value={message}
              onChange={(event) =>
                setMessage(event.target.value)
              }
              placeholder="What did you think of the lab?"
              maxLength={500}
              rows={5}
              required
            />

            <span className="visitor-log-counter">
              {message.length}/500
            </span>
          </div>

          <button
            type="submit"
            className="visitor-log-submit"
            disabled={status === "loading"}
          >
            {status === "loading"
              ? "RECORDING..."
              : "LEAVE PAW PRINT →"}
          </button>

          {statusMessage && (
            <p
              className={`visitor-log-message ${status}`}
            >
              {status === "success" ? "✓ " : "⚠ "}
              {statusMessage}
            </p>
          )}
        </form>

      </div>
    </section>
  );
}

export default VisitorLog;
