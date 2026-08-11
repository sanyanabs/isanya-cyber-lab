const investigations = {
  blueTeam: {
    caseFile: "CASE FILE 001",

    title: "Blue Team Incident Analyzer",

    status: "Operational",

    version: "1.0.0",

    lastUpdated: "August 2026",

    category: "Blue Team",

    difficulty: "Intermediate",

    question:
      "How can thousands of authentication logs be transformed into meaningful security findings?",

    investigation:
      "This project was built to understand how authentication logs can be parsed, analysed, and transformed into structured incident reports. It simulates part of a Blue Team workflow by identifying meaningful security events from raw log data.",

    toolkit: [
      "Python",
      "FastAPI",
      "SQLite",
      "ReportLab",
      "React"
    ],

    pipeline: [
      "Authentication Logs",
      "Log Parser",
      "Detection Engine",
      "Security Findings",
      "Incident Report"
    ],

    lessons: [
      "Log parsing",
      "Detection rules",
      "FastAPI architecture",
      "PDF report generation"
    ],

    roadmap: [
      "MITRE ATT&CK Mapping",
      "Additional Log Sources",
      "Threat Scoring",
      "AI-assisted Investigations"
    ],

    engineeringDecisions: [
      {
        title: "Why FastAPI?",
        explanation:
          "I chose FastAPI because it provides automatic API documentation and made it easier to build a structured backend while learning modern Python development."
      },
      {
        title: "Why React?",
        explanation:
          "I wanted reusable components so that every investigation page could share the same structure while keeping the code easy to maintain."
      },
      {
        title: "Why SQLite?",
        explanation:
          "SQLite was sufficient for this investigation because the focus was on log analysis and detection logic rather than managing a large production database."
      }
    ],

    github: "https://github.com/sanyanabs/Blue-Team-Incident-Analyzer.git",

    demo: "",

    evidence: [
    
    {
      id: 1,
      type: "REPORT",
      title: "Incident Investigation Report",
      description:
        "Generated incident report containing the security findings and recommended response actions.",
      image: "/images/blue-team/report.png"
    }
  ],
 }}
export default investigations;