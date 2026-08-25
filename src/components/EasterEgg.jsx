import { useEffect, useRef, useState } from "react";
import "../styles/easterEgg.css";


/* =====================================================
   TERMINAL ACCESS MESSAGES
   ===================================================== */

const terminalMessages = [
  "Initializing secure channel...",
  "Scanning clearance...",
  "Verifying investigator...",
  "Access granted.",
];


function EasterEgg({ found, onClose }) {

  const [visibleMessages, setVisibleMessages] = useState([]);

  const [currentMessage, setCurrentMessage] = useState("");

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const [accessGranted, setAccessGranted] = useState(false);

  const [stage, setStage] = useState("locked");


  /* =====================================================
     DECODE STATE
     ===================================================== */

  const [decodeInput, setDecodeInput] = useState("");

  const [decodeResult, setDecodeResult] = useState("");

  const [decodeLevel, setDecodeLevel] = useState(1);


  const decodeInputRef = useRef(null);


  /* =====================================================
     INITIALIZE EASTER EGG
     ===================================================== */

  useEffect(() => {

    if (found) {

      setVisibleMessages([]);

      setCurrentMessage("");

      setCurrentMessageIndex(0);

      setAccessGranted(false);

      setStage("access");

      setDecodeInput("");

      setDecodeResult("");

      setDecodeLevel(1);

    } else {

      setVisibleMessages([]);

      setCurrentMessage("");

      setCurrentMessageIndex(0);

      setAccessGranted(false);

      setStage("locked");

      setDecodeInput("");

      setDecodeResult("");

      setDecodeLevel(1);

    }

  }, [found]);


  /* =====================================================
     ACCESS SEQUENCE — TYPING ANIMATION
     ===================================================== */

  useEffect(() => {

    if (!found || stage !== "access") {
      return;
    }


    /* ===================================================
       ALL MESSAGES HAVE BEEN TYPED
       =================================================== */

    if (
      currentMessageIndex >=
      terminalMessages.length
    ) {

      const accessTimer = setTimeout(() => {

        setAccessGranted(true);

        setStage("menu");

      }, 700);


      return () => clearTimeout(accessTimer);
    }


    const message =
      terminalMessages[currentMessageIndex];


    /* ===================================================
       TYPE CURRENT MESSAGE
       =================================================== */

    if (
      currentMessage.length <
      message.length
    ) {

      const typingTimer = setTimeout(() => {

        setCurrentMessage(
          message.slice(
            0,
            currentMessage.length + 1
          )
        );

      }, 35);


      return () =>
        clearTimeout(typingTimer);
    }


    /* ===================================================
       MESSAGE COMPLETE
       =================================================== */

    const nextMessageTimer = setTimeout(() => {

      setVisibleMessages((current) => [
        ...current,
        message,
      ]);

      setCurrentMessage("");

      setCurrentMessageIndex(
        (current) => current + 1
      );

    }, 500);


    return () =>
      clearTimeout(nextMessageTimer);

  }, [
    found,
    stage,
    currentMessage,
    currentMessageIndex,
  ]);


  /* =====================================================
     KEYBOARD NAVIGATION
     ===================================================== */

  useEffect(() => {

    if (!found) {
      return;
    }


    const handleKeyDown = (event) => {

      const key =
        event.key.toUpperCase();


      /* =================================================
         ESCAPE
         ================================================= */

      if (key === "ESCAPE") {

        onClose();

        return;
      }


      /* =================================================
         CLASSIFIED MENU
         ================================================= */

      if (stage === "menu") {

        if (key === "1") {

          setStage("investigate");

          return;
        }


        if (key === "2") {

          setStage("decode");


          setTimeout(() => {

            decodeInputRef.current?.focus();

          }, 50);


          return;
        }


        if (key === "3") {

          onClose();

          return;
        }

      }


      /* =================================================
         INVESTIGATION
         ================================================= */

      if (stage === "investigate") {

        if (key === "M") {

          setStage("menu");

          return;
        }

      }


      /* =================================================
         DECODE
         ================================================= */

      if (stage === "decode") {

        if (
          key === "M" &&
          event.target !== decodeInputRef.current
        ) {

          setStage("menu");

          return;
        }

      }

    };


    window.addEventListener(
      "keydown",
      handleKeyDown
    );


    return () => {

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

    };

  }, [
    found,
    stage,
    onClose,
  ]);


  /* =====================================================
     HANDLE DECODE INPUT
     ===================================================== */

  const handleDecodeChange = (event) => {

    setDecodeInput(
      event.target.value
    );


    /* Remove old failure */

    if (decodeResult === "failure") {

      setDecodeResult("");

    }

  };


  /* =====================================================
     SUBMIT DECODE ANSWER
     ===================================================== */

  const handleDecodeSubmit = () => {

    const answer =
      decodeInput
        .trim()
        .toLowerCase();


    /* =================================================
       LEVEL 1
       HEX → ASCII
       ================================================= */

    if (decodeLevel === 1) {

      if (answer === "hello") {

        setDecodeResult(
          "level1-success"
        );

        setDecodeInput("");


        setTimeout(() => {

          setDecodeLevel(2);

          setDecodeResult("");


          setTimeout(() => {

            decodeInputRef.current?.focus();

          }, 50);

        }, 1400);

      } else if (answer.length > 0) {

        setDecodeResult(
          "failure"
        );

      }


      return;
    }


    /* =================================================
       LEVEL 2
       BASE64 → TEXT
       ================================================= */

    if (decodeLevel === 2) {

      if (answer === "security") {

        setDecodeResult(
          "success"
        );

      } else if (answer.length > 0) {

        setDecodeResult(
          "failure"
        );

      }

    }

  };


  /* =====================================================
     DECODE KEYBOARD
     ===================================================== */

  const handleDecodeKeyDown = (event) => {


    /* =================================================
       ENTER
       ================================================= */

    if (event.key === "Enter") {

      event.preventDefault();

      handleDecodeSubmit();

      return;
    }


    /* =================================================
       ESCAPE
       ================================================= */

    if (event.key === "Escape") {

      event.preventDefault();

      setDecodeInput("");

      setDecodeResult("");

      setDecodeLevel(1);

      setStage("menu");

    }

  };


  /* =====================================================
     DON'T RENDER WHEN CLOSED
     ===================================================== */

  if (!found) {

    return null;

  }


  /* =====================================================
     RENDER
     ===================================================== */

  return (

    <div className="easter-egg-overlay">

      <div className="easter-egg-terminal">


        {/* =================================================
            HEADER
        ================================================= */}

        <div className="terminal-header">

          <span>
            ISANYA@CYBER-LAB
          </span>

          <span>
            ● ● ●
          </span>

        </div>


        {/* =================================================
            BODY
        ================================================= */}

        <div className="terminal-body">


          {/* =================================================
              ACCESS COMMAND
          ================================================= */}

          <p>

            <span className="terminal-prompt">
              isanya@cyber-lab:~$
            </span>{" "}

            access --secret

          </p>


          {/* =================================================
              COMPLETED ACCESS MESSAGES
          ================================================= */}

          {visibleMessages.map(
            (message, index) => (

              <p key={index}>

                {message}

              </p>

            )
          )}


          {/* =================================================
              CURRENT TYPING MESSAGE
          ================================================= */}

          {stage === "access" && (

            <p>

              {currentMessage}

              <span className="terminal-cursor">
                █
              </span>

            </p>

          )}


          {/* =================================================
              ACCESS GRANTED
          ================================================= */}

          {accessGranted && (

            <>

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

            </>

          )}


          {/* =================================================
              CLASSIFIED MENU
          ================================================= */}

          {accessGranted &&
            stage === "menu" && (

            <div className="secret-menu">

              <p>
                ╔══════════════════════════════════╗
              </p>

              <p>
                ║ CLASSIFIED DISCOVERY
              </p>

              <p>
                ╚══════════════════════════════════╝
              </p>


              <p>
                Investigator detected:
                <strong> ISANYA</strong>
              </p>


              <p>
                Clearance:
                <strong> CURIOUS</strong>
              </p>


              <p>
                Choose your path:
              </p>


              <p>
                [1] Investigate
              </p>


              <p>
                [2] Decode
              </p>


              <p>
                [3] Exit
              </p>

            </div>

          )}


          {/* =================================================
              INVESTIGATION
          ================================================= */}

          {stage === "investigate" && (

            <div className="secret-investigation">

              <p>
                &gt; loading investigator profile...
              </p>


              <p>
                Support Engineer
              </p>


              <p>
                ↓
              </p>


              <p>
                Business Analyst
              </p>


              <p>
                ↓
              </p>


              <p>
                Quality Engineer
              </p>


              <p>
                ↓
              </p>


              <p>
                Cybersecurity
              </p>


              <p>
                PATH ANALYSIS:
              </p>


              <p>
                Unexpected route detected.
              </p>


              <p>
                SYSTEM:
                <strong>
                  {" "}
                  Apparently the shortest path
                  wasn't the point.
                </strong>
              </p>


              <p>
                Press [M] to return to menu.
              </p>

            </div>

          )}


          {/* =================================================
              DECODE
          ================================================= */}

          {stage === "decode" && (

            <div className="secret-decode">


              {/* =================================================
                  LEVEL 1 SUCCESS
              ================================================= */}

              {decodeResult ===
                "level1-success" && (

                <div className="decode-success">

                  <p>
                    ✓ DECODE SUCCESSFUL
                  </p>


                  <p>
                    Evidence decoded:
                    <strong> HELLO</strong>
                  </p>


                  <p>
                    &gt; Fragment integrity confirmed.
                  </p>

                </div>

              )}


              {/* =================================================
                  ACTIVE DECODE CHALLENGE
              ================================================= */}

              {decodeResult !==
                "level1-success" && (

                <>

                  <p>
                    &gt; encrypted fragment detected
                  </p>


                  <p>
                    FORMAT:
                    <strong>
                      {decodeLevel === 1
                        ? " HEX"
                        : " BASE64"}
                    </strong>
                  </p>


                  <p>
                    EVIDENCE:
                  </p>


                  <p className="decode-evidence">

                    {decodeLevel === 1
                      ? "48 65 6C 6C 6F"
                      : "U2VjdXJpdHk="}

                  </p>


                  <p>
                    &gt; Decode the{" "}
                    {decodeLevel === 1
                      ? "fragment"
                      : "secondary fragment"}.
                  </p>


                  {/* =================================================
                      ANSWER TERMINAL
                  ================================================= */}

                  <div
                    className="decode-input-terminal"
                    onClick={() =>
                      decodeInputRef.current?.focus()
                    }
                  >

                    <span className="terminal-prompt">
                      answer@cyber-lab:~$
                    </span>{" "}


                    <span className="decode-input-value">
                      {decodeInput}
                    </span>


                    <span className="decode-input-cursor">
                      █
                    </span>


                    <input
                      ref={decodeInputRef}
                      type="text"
                      value={decodeInput}
                      onChange={handleDecodeChange}
                      onKeyDown={handleDecodeKeyDown}
                      className="decode-hidden-input"
                      aria-label="Decode answer"
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="none"
                      spellCheck="false"
                    />

                  </div>


                  {/* =================================================
                      INSTRUCTION
                  ================================================= */}

                  <p className="decode-instruction">
                    Type your answer and press Enter.
                  </p>


                  {/* =================================================
                      FINAL SUCCESS
                  ================================================= */}

                  {decodeResult === "success" && (

                    <div className="decode-success">

                      <p>
                        ✓ SECONDARY DECODE SUCCESSFUL
                      </p>


                      <p>
                        Evidence decoded:
                        <strong> SECURITY</strong>
                      </p>


                      <p>
                        &gt; Fragment integrity confirmed.
                      </p>


                      <p>
                        &gt; Investigation continues...
                      </p>


                      <p>
                        Press [M] to return to menu.
                      </p>

                    </div>

                  )}


                  {/* =================================================
                      FAILURE
                  ================================================= */}

                  {decodeResult === "failure" && (

                    <div className="decode-failure">

                      <p>
                        ✗ DECODE FAILED
                      </p>


                      <p>
                        &gt; Evidence does not match.
                      </p>


                      <p>
                        Hint: Think character encoding.
                      </p>

                    </div>

                  )}

                </>

              )}

            </div>

          )}


          {/* =================================================
              MAIN TERMINAL CURSOR
          ================================================= */}

          {stage !== "decode" &&
            stage !== "access" && (

            <p className="terminal-cursor">
              █
            </p>

          )}


          {/* =================================================
              CLOSE TERMINAL
          ================================================= */}

          <button
            className="terminal-close"
            onClick={onClose}
          >
            [ CLOSE TERMINAL ]
          </button>

        </div>

      </div>

    </div>

  );

}


export default EasterEgg;