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

    mission:
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

    github:
      "https://github.com/sanyanabs/Blue-Team-Incident-Analyzer.git",

    demo: "",

    evidence: [
      {
        id: 1,
        type: "REPORT",
        title: "Incident Investigation Report",
        description:
          "Generated incident report containing the security findings and recommended response actions.",
        pdf: "/reports/blue-team/incident-report.pdf"
      }
    ]
  },

  osint: {
    caseFile: "CASE FILE 002",

    title: "OSINT Threat Intelligence Tool",

    status: "Operational",

    version: "1.0.0",

    lastUpdated: "August 2026",

    category: "Threat Intelligence",

    difficulty: "Intermediate",

    github:
      "https://github.com/sanyanabs/OSINT-Threat-Intelligence-Tool.git",

    question:
      "How can publicly available information about a domain be collected and transformed into actionable threat intelligence?",

    investigation:
      "This project automates the initial stages of an OSINT investigation by collecting publicly available information about a target domain, analysing the observations, and generating structured threat-intelligence findings and reports.",

    toolkit: [
      "Python",
      "FastAPI",
      "ReportLab",
      "dnspython",
      "Requests",
      "Socket",
      "SSL",
      "WHOIS"
    ],

    pipeline: [
      "Target Domain",
      "DNS & WHOIS",
      "SSL/TLS Analysis",
      "Technology Discovery",
      "Threat Intelligence",
      "Structured Report"
    ],

    lessons: [
      "OSINT data collection",
      "Modular reconnaissance",
      "API architecture",
      "Threat intelligence analysis",
      "Report generation"
    ],

    roadmap: [
      "Additional intelligence sources",
      "Threat reputation enrichment",
      "Historical analysis",
      "Automated threat scoring"
    ],

    engineeringDecisions: [
      {
        title: "Why FastAPI?",
        explanation:
          "FastAPI provided a structured way to expose the reconnaissance workflow through an API while making the service easy to test and document."
      },

      {
        title: "Why Modular Reconnaissance?",
        explanation:
          "Reconnaissance was separated into focused services so that DNS, WHOIS, SSL, headers, ports, and technology detection could be analysed independently."
      },

      {
        title: "Why Structured Reports?",
        explanation:
          "The collected observations need to become useful intelligence, so the project transforms technical results into structured findings and generated reports."
      }
    ],

    demo: "",

    evidence: [
      {
        id: 1,
        type: "REPORT",
        title: "OSINT Investigation Dashboard",
        description:
          "Evidence captured from the OSINT investigation workflow showing the reconnaissance results.",
        pdf: "/reports/osint/osint-report.pdf"
      },

      {
        id: 2,
        type: "SSL/TLS",
        title: "SSL/TLS Intelligence",
        description:
          "Collected SSL/TLS information from the target during reconnaissance.",
        file: "/evidence/osint/ssl-details.txt"
      },

      {
        id: 3,
        type: "DNS",
        title: "DNS Intelligence",
        description:
          "DNS information collected during the OSINT investigation.",
        file: "/evidence/osint/dns-results.txt"
      }
    ]
  }
};

export default investigations;