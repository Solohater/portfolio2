export const personalInfo = {
  name: "Yoseph Ayalew",
  role: "Full-Stack Software Engineer",
  company: "eTech SC",
  location: "Addis Ababa, Ethiopia",
  status: "Available for full-stack opportunities",
  timezone: "Africa/Addis_Ababa",
  email: "yosefayalew56@gmail.com",
  github: "https://github.com/Solohater",
  githubUsername: "Solohater",
  gitlab: "https://gitlab.com/yosephh",
  linkedin: "https://www.linkedin.com/in/yoseph-ayalew-65247b291",
  telegram: "https://t.me/YOSEP015",
  about: `Full-Stack Software Engineer with proven hands-on experience building mission-critical enterprise systems using Java, Vert.x, Angular, React, and PostgreSQL. At eTech SC, I architect and engineer high-concurrency microservices, healthcare workflows, cooperative financial systems (SACCOs), and intuitive user interfaces designed for real-world reliability.`,
  stats: [
    { label: "Production Domains", value: "eHealth & SACCO" },
    { label: "Shipped Projects", value: "12+" },
    { label: "Primary Stack", value: "Java / Vert.x / React" },
  ],
};

export const ehealthProjects = [
  {
    id: "chilalo-shed",
    title: "Chilalo Shed",
    category: "eHealth",
    tagline: "Clinical Information & Patient Workflow System",
    description: "Enterprise healthcare system built for comprehensive clinical administration, patient electronic health records (EHR), department triage, and laboratory diagnostic workflows.",
    tech: ["Java Vert.x", "PostgreSQL", "Angular", "REST APIs"],
    logo: "/logos/chilalo-shed.png",
    highlights: [
      "Streamlined electronic patient check-ins and clinical triage routing",
      "High-throughput reactive backend powered by Java Vert.x",
      "Optimized PostgreSQL schema for patient histories and medical records",
    ],
  },
  {
    id: "nubira",
    title: "Nubira",
    category: "eHealth",
    tagline: "Medical Operations & Health Information Platform",
    description: "Hospital management and medical operations platform delivering real-time patient status tracking, clinical appointment scheduling, and automated department reporting.",
    tech: ["Java Vert.x", "Angular", "PostgreSQL", "Docker"],
    logo: "/logos/nubira.jpg",
    highlights: [
      "Real-time operational dashboard for physician and staff coordination",
      "Secure role-based access control (RBAC) protecting sensitive patient data",
      "Automated analytics reports for clinical departmental workflows",
    ],
  },
  {
    id: "meqrez-hospital",
    title: "Meqrez Hospital",
    category: "eHealth",
    tagline: "Comprehensive Hospital Enterprise Management",
    description: "Enterprise healthcare operations and administration platform developed for Meqrez Hospital to unify inpatient/outpatient management, pharmacy billing, and institutional records.",
    tech: ["Java Vert.x", "Angular", "PostgreSQL", "SQL Optimization"],
    logo: "/logos/meqrez.ico",
    highlights: [
      "Multi-department hospital administration with cross-unit integration",
      "Automated billing ledger and pharmacy dispensing audit trails",
      "Robust data synchronization between triage, lab, and discharge units",
    ],
  },
];

export const saccoProjects = [
  {
    id: "ethio-trit",
    title: "Ethio-Trit SACCO",
    category: "SACCO / FinTech",
    tagline: "Cooperative Savings & Credit Management System",
    description: "Comprehensive financial cooperative platform managing member share accounts, monthly savings contributions, loan amortization cycles, and dividend distributions.",
    tech: ["Java Vert.x", "PostgreSQL", "Angular", "Financial Ledgers"],
    logo: "/logos/ethiotrit.ico",
    highlights: [
      "Automated loan approval, interest calculation, and penalty management",
      "Strict double-entry accounting ledger guarantees with transactional integrity",
      "End-of-period dividend calculations across thousands of active shareholders",
    ],
  },
  {
    id: "netsebirak",
    title: "Netsebirak SACCO",
    category: "SACCO / FinTech",
    tagline: "Savings Cooperative Ledger & Member Portal",
    description: "Enterprise SACCO banking solution providing immutable audit trails for credit union members, automated repayment schedules, and departmental financial statements.",
    tech: ["Java Vert.x", "PostgreSQL", "Angular", "Audit Logging"],
    logo: "/logos/Netsebirak.ico",
    highlights: [
      "Instantaneous balance verification and transaction history export",
      "Granular role-based teller, auditor, and manager permissions",
      "Scalable SQL database architecture handling high transactional volume",
    ],
  },
  {
    id: "oromia-bank-sacco",
    title: "Oromia Bank SACCO",
    category: "SACCO / FinTech",
    tagline: "Institutional Cooperative Financial Platform",
    description: "High-volume institutional cooperative savings and credit platform designed for enterprise-scale employee banking, bulk payroll deductions, and risk analysis.",
    tech: ["Java Vert.x", "PostgreSQL", "Angular", "Microservices"],
    logo: "/logos/oromia-bank-Sacco.ico",
    highlights: [
      "Seamless processing of institutional bulk monthly contribution uploads",
      "Custom loan scoring algorithms and guarantor liability tracking",
      "Enterprise security compliance and automated audit reporting",
    ],
  },
];

export const personalProjects = [
  {
    id: "document-manager",
    title: "Document Manager",
    description: "Full-stack document workflow platform with role-based approvals (Admin / Reviewer / Author), PostgreSQL schema managed with Prisma ORM, and secure JWT authentication.",
    tech: ["React", "Node.js", "Prisma", "PostgreSQL"],
    link: "https://blog-app-seven-bice-50.vercel.app",
    github: "https://github.com/Solohater/Document-Management",
    demo: "admin / admin123",
    featured: true,
  },
  {
    id: "techshop",
    title: "TechShop",
    description: "Commercial electronics and tech ecommerce storefront featuring responsive catalog search, cart state persistence, wishlist, real-time order tracking, and administrative dashboard.",
    tech: ["TypeScript", "Next.js", "Tailwind CSS"],
    link: "https://techshop-peach.vercel.app",
    demo: "admin@techshop.com / Admin@12345",
    featured: true,
  },
  {
    id: "ethio-kemem",
    title: "Ethio Kemem — Food Platform",
    description: "Bilingual (Amharic & English) traditional culinary platform with interactive menus, order cart workflows, administrative item management, and localized UI.",
    tech: ["TypeScript", "Next.js", "Tailwind CSS"],
    link: "https://fastfood-amber-chi.vercel.app",
    github: "https://github.com/Solohater/Food-Delivery-Platform",
    demo: "admin / admin123",
  },
  {
    id: "jodev-blog",
    title: "JODEV Blog",
    description: "Technical publishing and article repository platform with category indexing, markdown post rendering, author management, and newsletter subscriptions via REST API.",
    tech: ["Next.js", "Node.js", "Express"],
    link: "https://materialtut-web.vercel.app",
    demo: "admin@blog.com / admin123",
  },
  {
    id: "repair-management",
    title: "Repair Management System",
    description: "Full-stack MERN repair service portal with technician assignment, progress tracking, customer status lookups, and operational analytics dashboards.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://web-seven-woad-99.vercel.app",
    github: "https://github.com/Solohater/DaveProjFront",
    demo: "admin / admin123",
  },
  {
    id: "reminder-notes",
    title: "Reminder & Notes App",
    description: "Task scheduling and notes productivity app featuring calendar reminders, upcoming deadlines, custom priorities, and local state persistence.",
    tech: ["React", "JavaScript", "CSS3"],
    link: "https://reminder-schedule-eight.vercel.app",
  },
];

export const experienceData = [
  {
    period: "Mar 2026 – Present",
    role: "Junior Software Developer",
    company: "eTech SC",
    badge: "Current Role",
    location: "Addis Ababa, Ethiopia",
    points: [
      "Engineer high-performance reactive backend microservices for enterprise eHealth and SACCO systems using Java and Vert.x.",
      "Build modular, responsive frontend architectures in Angular with strict accessibility and state management.",
      "Architect relational data models, design indexing strategies, and optimize complex queries in PostgreSQL.",
      "Collaborate with multi-disciplinary engineering teams across Agile sprints, conducting rigorous peer code reviews.",
      "Troubleshoot, profile, and resolve mission-critical production incidents across distributed service environments.",
    ],
  },
];

export const skillCategories = [
  {
    name: "Languages",
    skills: [
      { name: "Java", level: "Core", tag: "Backend / Microservices" },
      { name: "JavaScript", level: "Core", tag: "Full-Stack" },
      { name: "TypeScript", level: "Core", tag: "Frontend & APIs" },
      { name: "SQL", level: "Core", tag: "Database Queries" },
      { name: "Go", level: "Familiar", tag: "Backend Systems" },
    ],
  },
  {
    name: "Backend & Architecture",
    skills: [
      { name: "Vert.x", level: "Core", tag: "Reactive Java" },
      { name: "REST APIs", level: "Core", tag: "API Design" },
      { name: "Node.js", level: "Proficient", tag: "Runtime" },
      { name: "Express.js", level: "Proficient", tag: "Server Framework" },
      { name: "JWT Auth", level: "Proficient", tag: "Security" },
    ],
  },
  {
    name: "Frontend Development",
    skills: [
      { name: "Angular", level: "Core", tag: "Enterprise UI" },
      { name: "React", level: "Core", tag: "Interactive Apps" },
      { name: "Next.js", level: "Core", tag: "SSR & Full-Stack" },
      { name: "Tailwind CSS", level: "Core", tag: "Modern Styling" },
      { name: "Redux", level: "Proficient", tag: "State Management" },
    ],
  },
  {
    name: "Databases & Storage",
    skills: [
      { name: "PostgreSQL", level: "Core", tag: "Relational & Tuning" },
      { name: "Prisma ORM", level: "Proficient", tag: "Schema & Migrations" },
      { name: "MongoDB", level: "Proficient", tag: "Document Store" },
    ],
  },
  {
    name: "Developer Tools & DevOps",
    skills: [
      { name: "Git & GitLab", level: "Core", tag: "Version Control" },
      { name: "GitHub", level: "Core", tag: "Collaboration" },
      { name: "Postman", level: "Proficient", tag: "API Testing" },
      { name: "Docker", level: "Proficient", tag: "Containers" },
      { name: "Vercel", level: "Proficient", tag: "Deployment" },
    ],
  },
];
