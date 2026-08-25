const investigations = {
  // =====================================================
  // CASE FILE 001 — BLUE TEAM
  // =====================================================

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
    ],

    // =====================================================
    // BLUE TEAM INVESTIGATION SUMMARY
    // =====================================================

    summary: {
      observations: [
        {
          icon: "🚨",
          type: "Authentication",
          title: "Suspicious Authentication Activity",
          description:
            "Authentication logs can be parsed and transformed into structured security findings."
        },

        {
          icon: "📊",
          type: "Detection",
          title: "Detection Rules",
          description:
            "Detection logic can identify meaningful security events from otherwise raw authentication data."
        },

        {
          icon: "📄",
          type: "Reporting",
          title: "Incident Reporting",
          description:
            "Security findings can be transformed into structured incident reports with recommended response actions."
        }
      ],

      analystNote:
        "This investigation demonstrates how raw authentication logs can move through a structured analysis pipeline and become actionable security findings.",

      nextSteps: [
        "Map findings to MITRE ATT&CK techniques.",
        "Support additional log sources.",
        "Introduce threat scoring.",
        "Explore AI-assisted investigations."
      ]
    }
  },


  // =====================================================
  // CASE FILE 002 — OSINT
  // =====================================================

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

        file: "/evidence/osint/ssl-details.txt",

        content: {
          target: "chicken-road2.app",

          result:
            "Certificate verification failed",

          reason:
            "TLS handshake failure detected during automated SSL connection.",

          recommendation:
            "Validate certificate information using browser-based certificate inspection.",

          source:
            "SSL Checker module"
        }
      },

      {
        id: 3,
        type: "DNS",
        title: "DNS Intelligence",
        description:
          "DNS information collected during the OSINT investigation.",

        file: "/evidence/osint/dns-results.txt",

        content: {
          target: "chicken-road2.app",

          aRecords: [
            "104.21.38.193",
            "172.67.137.239"
          ],

          aaaaRecords: [
            "2a04:e4c0:30:4::40"
          ],

          nameServers: [
            "autumn.ns.cloudflare.com",
            "denver.ns.cloudflare.com"
          ],

          source:
            "DNS enumeration module"
        }
      }
    ],

    // =====================================================
    // OSINT INVESTIGATION SUMMARY
    // =====================================================

    summary: {
      target: "chicken-road2.app",

      observations: [
        {
          icon: "🔐",
          type: "SSL/TLS",
          title: "Certificate Verification",
          description:
            "Automated SSL inspection could not complete certificate verification during the TLS connection."
        },

        {
          icon: "🌐",
          type: "DNS",
          title: "DNS Infrastructure",
          description:
            "The domain resolves through Cloudflare infrastructure with IPv4 and IPv6 records and Cloudflare nameservers."
        }
      ],

      analystNote:
        "The collected evidence provides an initial view of the target's network and TLS configuration. Further validation would be required before drawing conclusions about the security posture of the domain.",

      nextSteps: [
        "Validate the TLS certificate manually, including issuer, validity period, SANs, and certificate chain.",
        "Review the observed DNS infrastructure and determine whether the Cloudflare configuration is expected.",
        "Perform reputation enrichment using trusted threat-intelligence sources.",
        "Conduct historical analysis of DNS and certificate changes."
      ]
    }
  },


  // =====================================================
  // CASE FILE 003 — WEB RECON
  // =====================================================

  webRecon: {
    caseFile: "CASE FILE 003",

    title: "Web Recon Automation Framework",

    status: "Operational",

    version: "1.0.0",

    lastUpdated: "August 2026",

    category: "Web Reconnaissance",

    difficulty: "Intermediate",

    question:
      "How can repetitive web reconnaissance tasks be automated and transformed into a structured security assessment?",

    investigation:
      "This project automates the collection of publicly available information about a target domain and brings the results together in a single report. It was built to practise automating reconnaissance tasks while keeping the code organised into small, reusable modules.",

    toolkit: [
      "Python",
      "FastAPI",
      "Uvicorn",
      "Requests",
      "python-whois",
      "dnspython",
      "ipinfo",
      "ReportLab",
      "BeautifulSoup",
      "Socket",
      "SSL"
    ],

    pipeline: [
      "Target Domain",
      "DNS & WHOIS",
      "IP & Subdomains",
      "HTTP & SSL/TLS",
      "Ports & Technologies",
      "Security Findings",
      "Recon Report"
    ],

    lessons: [
      "Automated reconnaissance",
      "Modular service design",
      "FastAPI architecture",
      "Security observations",
      "Risk findings and recommendations",
      "PDF report generation"
    ],

    roadmap: [
      "Passive reconnaissance sources",
      "Certificate Transparency searches",
      "Concurrent scanning",
      "JSON and CSV exports",
      "Authentication and scan history",
      "Expanded security checks"
    ],

    engineeringDecisions: [
      {
        title: "Why Modular Services?",
        explanation:
          "Each reconnaissance task was separated into its own module so that it has a single responsibility. This makes the code easier to read, test and maintain while allowing new reconnaissance modules to be added later."
      },

      {
        title: "Why FastAPI?",
        explanation:
          "FastAPI provides the API layer that coordinates the reconnaissance workflow and exposes the scanning functionality through a structured REST interface."
      },

      {
        title: "Why Generate Reports?",
        explanation:
          "The project does more than collect reconnaissance data. It brings the results together into a structured report and generates a downloadable PDF so the collected information can be reviewed as a single assessment."
      }
    ],

    github:
      "https://github.com/sanyanabs/web-recon-automation-framework.git",

    demo: "",

    evidence: [
      {
        id: 1,
        type: "REPORT",
        title: "Web Reconnaissance Report",
        description:
          "Generated reconnaissance report containing collected domain intelligence, security observations and assessment results.",
        pdf: "/reports/web-recon/recon-report.pdf"
      }
    ]
  }
};

export default investigations;