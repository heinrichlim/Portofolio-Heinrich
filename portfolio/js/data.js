/* ============================================================
   EDIT THIS FILE ONLY. Everything on the site comes from here.
   Skill areas (keys of `skills`) become the nodes in the hero
   diagram, and each project's `tags` must use those same names.
   Keep 3 to 6 skill areas so the diagram stays readable.
   ============================================================ */
window.PORTFOLIO = {
  name: "Your Name",
  role: "Information Systems student",
  tagline: "I design and build data-driven systems that make everyday work simpler.",

  about: [
    "I'm studying information systems, which sits between business needs and the software that serves them. I like figuring out how an organization actually works, then building something that fits.",
    "Replace this text with a short story about what you care about, what you are learning now, and what kind of role or project you want next."
  ],

  skills: {
    "Data": ["SQL", "Database design", "Excel", "Power BI"],
    "Systems analysis": ["UML", "Process modelling", "Requirements gathering"],
    "Web": ["HTML", "CSS", "JavaScript", "Git and GitHub"],
    "Business": ["Project management", "ERP basics", "Documentation"]
  },

  projects: [
    {
      title: "Campus Library Database",
      year: 2026,
      summary: "Designed a normalized database for book loans and returns, with ER diagrams and the SQL queries a librarian would run each day.",
      tags: ["Data", "Systems analysis"],
      stack: ["MySQL", "draw.io"],
      repo: "https://github.com/your-username/library-database",
      demo: ""
    },
    {
      title: "Personal Budget Dashboard",
      year: 2026,
      summary: "A dashboard that turns exported bank statements into monthly spending charts and savings goals.",
      tags: ["Data", "Business"],
      stack: ["Power BI", "Excel"],
      repo: "https://github.com/your-username/budget-dashboard",
      demo: ""
    },
    {
      title: "Student Club Website",
      year: 2025,
      summary: "A responsive site where members find events and sign up. Built with plain HTML, CSS and JavaScript.",
      tags: ["Web"],
      stack: ["HTML", "CSS", "JavaScript"],
      repo: "https://github.com/your-username/club-website",
      demo: "https://your-username.github.io/club-website"
    },
    {
      title: "Order Process Redesign",
      year: 2025,
      summary: "Mapped a small shop's order workflow, found three bottlenecks, and proposed a lighter process with a simple tracking sheet.",
      tags: ["Systems analysis", "Business"],
      stack: ["BPMN", "Google Sheets"],
      repo: "",
      demo: ""
    }
  ],

  timeline: [
    { when: "2024 to now", title: "BSc Information Systems", place: "Your University", detail: "Relevant courses: Database Systems, Systems Analysis and Design, Web Programming." },
    { when: "2026", title: "Your internship or project role", place: "Organization name", detail: "One sentence on what you did and what changed because of it." }
  ],

  contact: {
    text: "I'm open to internships, collaborations and conversations about information systems. The fastest way to reach me is email.",
    email: "you@example.com",
    links: [
      { label: "GitHub", url: "https://github.com/your-username" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/your-username" }
    ]
  }
};
