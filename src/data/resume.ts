export const profile = {
  name: "Muhammad Ahmed Abdelhadi",
  title: "Angular Developer",
  tagline: "Building precision front-end systems for healthcare & enterprise.",
  location: "Maadi, Cairo, Egypt",
  email: "muhabdhadi@gmail.com",
  phone: "+20 102 120 0083",
  links: {
    github: "https://github.com/Muhabdhadi",
    leetcode: "https://leetcode.com/Muhabdhadi",
  },
};

export const about = {
  summary: [
    "Angular developer with 4+ years crafting scalable, user-facing applications across healthcare and fintech. I specialize in TypeScript, RxJS, and modern front-end architecture — turning complex requirements into clean, performant interfaces.",
    "From FHIR-backed healthcare platforms at Bypa-ss to rapid product delivery at Esusoft, I bridge design intent and backend integration with a focus on reusable components, optimized load times, and Agile collaboration.",
    "I thrive where enterprise rigor meets creative problem-solving — investigating best practices, shaping database structures, and shipping code that teams can build on.",
  ],
  highlights: [
    { label: "Experience", value: "4+ Years" },
    { label: "Focus", value: "Angular & TypeScript" },
    { label: "Domain", value: "Healthcare & Fintech" },
    { label: "Approach", value: "Agile & Iterative" },
  ],
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  duration?: string;
  current?: boolean;
  highlights: string[];
  skills: string[];
};

export const experience: Experience[] = [
  {
    role: "Angular Developer",
    company: "Bypa-ss",
    period: "Aug 2021 — Present",
    current: true,
    highlights: [
      "Developed user-facing features with Angular, TypeScript, and RxJS",
      "Architected web page structure using HTML, Bootstrap, CSS, and SCSS",
      "Built reusable components and optimized page loading performance",
      "Collaborated with backend teams for seamless API integration",
      "Designed FHIR-based database structures for healthcare modules",
      "Researched best practices for healthcare software standards",
    ],
    skills: ["Angular", "TypeScript", "RxJS", "FHIR", "SCSS", "Agile"],
  },
  {
    role: "Angular Developer",
    company: "Esusoft",
    period: "Apr 2021 — Aug 2021",
    highlights: [
      "Shipped new user-facing features with Angular, TypeScript, and RxJS",
      "Structured responsive web pages with HTML, Bootstrap, CSS, and SCSS",
      "Created reusable code libraries for long-term maintainability",
      "Integrated front-end with backend using latest Angular features",
    ],
    skills: ["Angular", "TypeScript", "RxJS", "Bootstrap", "Git"],
  },
  {
    role: "Angular Developer Intern",
    company: "Paynas",
    period: "3 Months",
    duration: "Internship",
    highlights: [
      "Built user-facing features in Angular with TypeScript and RxJS",
      "Designed page layouts with HTML, Bootstrap, CSS, and SCSS",
      "Optimized loading times through reusable component patterns",
      "Partnered with backend developers on full-stack integration",
    ],
    skills: ["Angular", "TypeScript", "RxJS", "HTML", "CSS"],
  },
  {
    role: "Angular Developer Intern",
    company: "Innovation Technology",
    period: "2 Months",
    duration: "Internship",
    highlights: [
      "Developed Angular applications with TypeScript and RxJS",
      "Implemented responsive designs using Bootstrap and SCSS",
      "Contributed to reusable front-end architecture",
      "Integrated front-end code with backend services",
    ],
    skills: ["Angular", "TypeScript", "Bootstrap", "Git"],
  },
];

export const education = {
  institution: "Modern Academy",
  period: "2016 — 2020",
  degree: "Management Information Systems",
  coursework: [
    "Programming",
    "Database Systems",
    "Networking",
    "Operating Systems",
  ],
};

export const skillGroups = [
  {
    category: "Front-End",
    skills: ["HTML", "CSS", "SCSS", "JavaScript", "Angular", "Bootstrap"],
  },
  {
    category: "Tools & Practices",
    skills: ["Git", "RxJS", "Agile", "TypeScript"],
  },
  {
    category: "Foundations",
    skills: ["Data Structures & Algorithms"],
  },
];

export const portfolioItems = [
  {
    title: "Healthcare Platform",
    description: "FHIR-integrated Angular applications for clinical workflows.",
    status: "coming-soon" as const,
    tags: ["Angular", "FHIR", "Healthcare"],
  },
  {
    title: "Enterprise Dashboards",
    description: "Data-rich interfaces with optimized performance and reusable components.",
    status: "coming-soon" as const,
    tags: ["TypeScript", "RxJS", "SCSS"],
  },
  {
    title: "Open Source",
    description: "Contributions and personal projects showcased on GitHub.",
    status: "coming-soon" as const,
    tags: ["Git", "Angular", "JavaScript"],
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];
