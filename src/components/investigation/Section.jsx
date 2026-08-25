import "../../styles/section.css";

function Section({ title, children }) {
  return (
    <section className="investigation-section">

      <div className="section-heading">

        <span className="section-heading-line"></span>

        <div>
          <p className="section-eyebrow">
            INVESTIGATION MODULE
          </p>

          <h2>
            {title}
          </h2>
        </div>

      </div>

      <div className="section-content">
        {children}
      </div>

    </section>
  );
}

export default Section;