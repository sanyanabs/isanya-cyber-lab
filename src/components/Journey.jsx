import "../styles/journey.css";

function Journey() {
  const journey = [
    {
      number: "01",
      icon: "🛠️",
      role: "Support Engineer",
      label: "SYSTEMS",
      description:
        "Where my technology journey began: solving problems, supporting users, and learning how systems work in the real world."
    },
    {
      number: "02",
      icon: "📊",
      role: "Business Analyst",
      label: "REQUIREMENTS",
      description:
        "Learning how technology connects with business needs, processes, requirements, and the people who use the systems."
    },
    {
      number: "03",
      icon: "🧪",
      role: "QA Automation Engineer",
      label: "QUALITY",
      description:
        "Building confidence in software through automation, testing, API validation, and quality engineering."
    },
    {
      number: "04",
      icon: "🔐",
      role: "Cybersecurity",
      label: "SECURITY",
      description:
        "Taking that engineering mindset into security — building projects, investigating systems, and continuously learning how to make technology safer."
    }
  ];

  return (
    <section id="journey" className="journey">

      {/* =====================================================
          HEADER
          ===================================================== */}

      <div className="journey-header">

        <p className="journey-eyebrow">
          THE EVOLUTION
        </p>

        <h2>
          The Story So Far
        </h2>

        <p className="journey-intro">
          My path into cybersecurity wasn't a straight line.
          Each role added another layer to how I understand
          technology, systems, quality, and security.
        </p>

      </div>


      {/* =====================================================
          TIMELINE
          ===================================================== */}

      <div className="journey-timeline">

        {journey.map((step, index) => (

          <div
            className={`journey-step ${
              index === journey.length - 1
                ? "journey-step-final"
                : ""
            }`}
            key={step.role}
          >

            {/* Timeline marker */}

            <div className="journey-marker">

              <span>
                {step.icon}
              </span>

            </div>


            {/* Content */}

            <div className="journey-content">

              <div className="journey-meta">

                <span className="journey-number">
                  {step.number}
                </span>

                <span className="journey-label">
                  {step.label}
                </span>

              </div>

              <h3>
                {step.role}
              </h3>

              <p>
                {step.description}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Journey;