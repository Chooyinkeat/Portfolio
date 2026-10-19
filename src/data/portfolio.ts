export const personalInfo = {
  name: "Choo Yin Keat",
  title: "Software Engineer",
  location: "Puchong, Selangor",
  phone: "+60-18-3262935",
  email: "keatyinchoo@gmail.com",
  profileImage: "/profile.png",
  linkedin: {
    label: "Choo Yinkeat",
    url: "https://www.linkedin.com/in/chooyinkeat",
  },
  overview:
    "Passionate and detail-oriented Software Engineer with hands-on experience in full-stack web and mobile development. Experienced in Docker management, Git version control, task scheduling and automation, WebSocket-based real-time applications, API integration, and Object-Oriented Programming (OOP). Interested in software development, system automation, deployment, and infrastructure technologies.",
};

export const education = [
  {
    degree: "Bachelor's Science in Software Engineering",
    institution: "Asia Pacific University of Innovation & Technology",
  },
  {
    degree: "Diploma in Information Computer & Technology",
    institution: "Asia Pacific University of Innovation & Technology",
  },
];

// data/portfolio.ts
export const certifications = [
  {
    name: "Foundational C# with Microsoft",
    issuer: "Microsoft & freeCodeCamp",
    description:
      "Learned the fundamentals of C# programming, including variables, data types, control structures, object-oriented programming (OOP), and basic application development.",
    date: "2026",
    url: "https://www.freecodecamp.org/certification/fcc-55292e96-91b0-41c6-8a44-48719e705627/foundational-c-sharp-with-microsoft",
  },
];

export const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      "Java",
      "C#",
      "Python",
      "Dart",
      "Golang",
      "C++",
      "JavaScript (Node.js)",
      "PHP",
    ],
  },
  {
    title: "Frameworks",
    skills: [
      "Next.js",
      "ASP.NET Core",
      "React.js",
      "Vue.js",
      "Nest.js",
      "Flutter",
    ],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MSSQL"],
  },
  {
    title: "Tools & Other",
    skills: [
      "Hangfire (Background Jobs)",
      "AWS",
      "GitLab",
      "GitHub",
      "Docker",
      "CI/CD Pipelines",
      "WSL (Ubuntu)",
      "Bash Script",
      "Stripe Payment Gateway",
    ],
  },
];

export const experiences = [
  {
    role: "Software Engineer",
    company: "Globalsion Software Sdn Bhd",
    period: "2025 – Present",
    highlights: [
      "Develop and maintain web and mobile applications using ASP.NET MVC, C#, Java, and XML.",
      "Work with Microsoft SQL Server (MSSQL) and PostgreSQL databases.",
      "Contribute to multiple software projects, including Asset Management System (AMS) and Warehouse Management System (WMS).",
      "Develop and integrate RFID-based solutions for asset and inventory management.",
      "Perform software troubleshooting, maintenance, API integration, and system enhancements.",
      "Use Git for source-code version control.",
    ],
    projects: ["AEON DTS", "RO Water WMS", "Transmedic WMS"],
  },
  {
    role: "DevOps Engineer (Intern)",
    company: "Nutworkz Sdn. Bhd.",
    period: "September 2024 – January 2025",
    highlights: [
      "Developed and maintained web applications using ASP.NET Core, C#, Razor, HTML, CSS, and Bootstrap.",
      "Contributed to a full-stack LHDN e-Invoice project.",
      "Assisted in CI/CD pipeline maintenance and deployment processes.",
      "Performed application troubleshooting, testing, maintenance, and deployment.",
      "Worked with Hangfire/task scheduling for automated background processes.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Spassolab Sdn. Bhd.",
    period: "July 2023 – September 2023",
    highlights: [
      "Developed web and mobile applications using PHP, Flutter, HTML, CSS, and Bootstrap.",
      "Worked with MeekroDB for database integration and application development.",
      "Contributed to UI/UX and database architecture design.",
    ],
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];
