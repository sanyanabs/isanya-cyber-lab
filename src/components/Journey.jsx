import "../styles/journey.css";
function Journey() {
  const journey = [
    {
      icon: "🛠️",
      role: "Support Engineer",
      description:
        "Where my technology journey began: solving problems, supporting users, and learning how systems work in the real world."
    },
    {
      icon: "📊",
      role: "Business Analyst",
      description:
        "Learning how technology connects with business needs, processes, requirements, and the people who use the systems."
    },
    {
      icon: "🧪",
      role: "QA Automation Engineer",
      description:
        "Building confidence in software through automation, testing, API validation, and quality engineering."
    },
    {
      icon: "🔐",
      role: "Cybersecurity",
      description:
        "Taking that engineering mindset into security — building projects, investigating systems, and continuously learning how to make technology safer."
    }
  ];

  return (
    <section id="journey" className="journey">

      <div className="journey-header">
        <p className="journey-eyebrow">
          THE EVOLUTION
        </p>

        <h2>
          📖 The Story So Far
        </h2>

        <p className="journey-intro">
          My path into cybersecurity wasn't a straight line.
          Each role added another layer to how I understand
          technology, systems, and security.
        </p>
      </div>

      <div className="journey-timeline">

        {journey.map((step, index) => (
          <div
            className="journey-step"
            key={step.role}
          >

            <div className="journey-marker">
              <span>{step.icon}</span>
            </div>

            <div className="journey-content">

              <span className="journey-number">
                {String(index + 1).padStart(2, "0")}
              </span>

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