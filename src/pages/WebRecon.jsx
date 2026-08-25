import InvestigationHeader from "../components/investigation/InvestigationHeader";
import Section from "../components/investigation/Section";
import Pipeline from "../components/investigation/Pipeline";
import EngineeringDecisions from "../components/investigation/EngineeringDecisions";
import EvidenceLocker from "../components/investigation/EvidenceLocker";
import InvestigationResources from "../components/investigation/InvestigationResources";
import InvestigationMeta from "../components/investigation/InvestigationMeta";
import investigations from "../data/investigations";
import { Link } from "react-router-dom";


function WebRecon() {
  const project = investigations.webRecon;

  return (
    <main>
       <Link
          to="/"
          className="back-to-lab"
        >
          ← Back to ISANYA Cyber Lab
        </Link>
      <InvestigationHeader
        caseFile={project.caseFile}
        title={project.title}
        status={project.status}
        question={project.question}
      />

      <InvestigationMeta
        version={project.version}
        lastUpdated={project.lastUpdated}
        category={project.category}
        difficulty={project.difficulty}
      />

      <Section title="Investigation Brief">
        <p>{project.investigation}</p>
      </Section>

      <Section title="Investigation Toolkit">
        <div className="toolkit-list">

          {project.toolkit.map((tool) => (
            <span
              className="toolkit-badge"
              key={tool}
            >
              {tool}
            </span>
          ))}

        </div>
      </Section>

      <Section title="Investigation Pipeline">
        <Pipeline steps={project.pipeline} />
      </Section>

      <Section title="Evidence Locker">
        <EvidenceLocker evidence={project.evidence} />
      </Section>

      <Section title="Engineering Decisions">
        <EngineeringDecisions
          decisions={project.engineeringDecisions}
        />
      </Section>

      <Section title="Key Lessons">
        <div className="lessons-list">

          {project.lessons.map((lesson) => (
            <div
              className="lesson-item"
              key={lesson}
            >
              <span className="lesson-check">
                ✓
              </span>

              <span>
                {lesson}
              </span>
            </div>
          ))}

        </div>
      </Section>

      <Section title="Future Roadmap">
        <div className="roadmap-list">

          {project.roadmap.map((item, index) => (
            <div
              className="roadmap-item"
              key={item}
            >

              <span className="roadmap-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span>
                {item}
              </span>

            </div>
          ))}

        </div>
      </Section>

      <InvestigationResources
        github={project.github}
      />

    </main>
  );
}


export default WebRecon;