const projects = [
  {
    id: 1,
    slug: "blue-team",

    caseFile: "CASE FILE 001",

    title: "Blue Team Incident Analyzer",

    status: "Operational",

    category: "Blue Team",

    badges: [
      "🛡️ Blue Team",
      "📄 Log Analysis",
      "🚨 Incident Response"
    ],

    description:
      "Analyse security logs and generate structured incident reports.",

    route: "/lab/blue-team"
  },

  {
    id: 2,

    slug: "osint",

    caseFile: "CASE FILE 002",

    title: "OSINT Threat Intelligence Tool",

    status: "Operational",

    category: "Threat Intelligence",

    badges: [
      "🌍 Threat Intelligence",
      "🔍 OSINT",
      "🌐 Reconnaissance"
    ],

    description:
      "Collect intelligence about domains and internet assets.",

    route: "/lab/osint"
  },

  {
    id: 3,

    slug: "web-recon",

    caseFile: "CASE FILE 003",

    title: "Web Recon Automation Framework",

    status: "Operational",

    category: "Automation",

    badges: [
      "⚙️ Automation",
      "🌐 Web Security",
      "🐍 Python"
    ],

    description:
      "Automate reconnaissance tasks for security assessments.",

    route: "/lab/web-recon"
  }
];

export default projects;