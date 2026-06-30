// Central portfolio data configuration for Shailendra Mani Pandey

export const personalInfo = {
  name: "Shailendra Mani Pandey",
  firstName: "Shailendra",
  roles: [
    "Computer Science Engineer",
    "Builder",
    "AI Explorer",
    "Web Developer"
  ],
  roleSubtitle: "Computer Science Engineering Student • Builder • AI Explorer",
  tagline: "I enjoy building technology that makes learning more accessible and engineering intelligent systems that solve complex real-world problems.",
  aboutBio: "I am a passionate Computer Science Engineering student at Madan Mohan Malaviya University of Technology (MMMUT). Driven by intense curiosity and a love for building, I focus on Web Development, Artificial Intelligence, and DevOps. I'm constantly exploring new ideas, developing scalable backend systems, and crafting responsive user experiences. As the Vice-President of the Computer Science & Innovation Society (CSIS), I lead student initiatives and foster a collaborative coding culture.",
  avatarUrl: "", // Optional profile image path
  resumeUrl: "/resume.pdf",
  web3formsKey: "", // Optional: Get a free key at web3forms.com to receive form submissions directly. Fallback is direct mailto link.
  socials: {
    github: "https://github.com/mani0408x",
    linkedin: "https://www.linkedin.com/in/shailendramanipandey",
    email: "maniupgkp@gmail.com",
    phone: "+91 6307996584"
  }
};

export const educationTimeline = [
  {
    institution: "Madan Mohan Malaviya University of Technology (MMMUT)",
    degree: "Bachelor of Technology",
    major: "Computer Science Engineering",
    period: "2024–2027",
    details: "Focusing on core computing, software design patterns, and systems engineering."
  }
];

export const experienceTimeline = [
  {
    role: "Python Development Intern",
    company: "Infosys Springboard",
    period: "24 Nov 2025 – 30 Jan 2026",
    highlights: [
      "Designed and developed automated modules using Python, standardizing ETL tasks.",
      "Implemented solutions aligning with the software development life cycle (SDLC) best practices.",
      "Contributed to enterprise-level projects, focusing on readability and code quality.",
      "Collaborated within an Agile workflow environment with cross-functional team members.",
      "Gained hands-on experience in software testing, debugging, and system integration."
    ]
  },
  {
    role: "Full Stack Web Development Intern",
    company: "WSA Internship",
    period: "3 March 2026 – 20 April 2026",
    highlights: [
      "Worked on SDLC-based MERN projects.",
      "Built applications using React and JavaScript.",
      "Developed MongoDB and Express.js modules.",
      "Implemented API integrations and backend services."
    ]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "Prayukti V-Lab",
    category: "Web Application",
    shortDesc: "Interactive Virtual Laboratory Platform for engineering students to run physics simulations online.",
    longDesc: "Prayukti V-Lab is an educational platform designed to make engineering experiments accessible anywhere. It addresses the lack of physical laboratory equipment in remote learning setups by providing responsive simulations with rigorous mathematical validation.",
    problem: "Engineering students often lack access to physical laboratories, resulting in a gap between theoretical formulas and practical implementation.",
    solution: "Designed a lightweight virtual workspace running custom graphics canvas layers and math processors. Uses WebSockets for real-time state synchronization, enabling students to interactively test values and validate experiment outcomes.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "WebSockets"],
    features: [
      "High-fidelity visual canvas rendering of physics experiments.",
      "Instant mathematical equation calculation and validation.",
      "Real-time data synchronization using WebSockets.",
      "Fully responsive and optimized layout across standard devices."
    ],
    github: "https://github.com/shailendramani/prayukti-v-lab",
    demo: "https://mmmut.prayukti.org/"
  },
  {
    id: 2,
    title: "Caller AI",
    category: "AI & Communication",
    shortDesc: "Automated event-driven voice assistant orchestrator running twilio-based dynamic voice agents.",
    longDesc: "Caller AI is a scalable voice assistant system that coordinates automated client calls. It handles real-time response capture, parses voice speech inputs, and stores conversation outcomes securely in a cloud database via webhooks.",
    problem: "Manual customer surveys and outreach campaigns are resource-intensive, slow, and yield structured data that is difficult to aggregate.",
    solution: "Created a server-side webhook handler to direct outgoing Twilio calls. Designed custom voice prompts that adapt to user keyboard tone inputs, generating call outcome logs in JSON.",
    tech: ["Node.js", "Twilio", "Webhooks", "REST APIs", "Express"],
    features: [
      "Dynamically generated interactive voice response (IVR) flows.",
      "Webhooks for event-driven calling and client callback capture.",
      "Robust logging of call success metrics and conversation states.",
      "Clean REST API interface for triggering batches of phone calls."
    ],
    github: "https://github.com/shailendramani/caller-ai",
    demo: "https://caller.work/"
  },
  {
    id: 3,
    title: "YouTube Channel Data Analysis System",
    category: "Data Engineering",
    shortDesc: "Python-based ETL pipeline extracting channel metrics to generate trends and historical graphs.",
    longDesc: "An analytical platform that extracts content metrics directly from the YouTube API, filters and transforms the raw records, and stores them in structured tables for dashboard reporting.",
    problem: "Content creators have to navigate fragmented metrics across multiple dashboards with limited historical aggregation.",
    solution: "Built a robust Python script using Pandas for cleaning metrics, parsing nested JSON, and optimizing query indexing in MySQL to deliver quick, high-performance dashboards.",
    tech: ["Python", "REST APIs", "MySQL", "Pandas", "Matplotlib"],
    features: [
      "ETL pipeline fetching view counts, likes, and comment threads.",
      "High-speed data sanitization and manipulation using Pandas.",
      "Relational database schema optimization with speed indexing.",
      "Automated visualization of monthly reach and audience metrics."
    ],
    github: "https://github.com/shailendramani/yt-channel-analysis",
    demo: "https://youtube-analysis-project.onrender.com/"
  }
];

export const skillsCategories = [
  { id: 'languages', name: 'Languages' },
  { id: 'frameworks', name: 'Frameworks' },
  { id: 'tools', name: 'Developer Tools' },
  { id: 'databases', name: 'Databases' },
  { id: 'subjects', name: 'Core Subjects' },
  { id: 'interests', name: 'Areas of Interest' }
];

export const skillsData = [
  // Languages
  { name: 'C', category: 'languages', level: 'Intermediate', icon: '📝' },
  { name: 'C++', category: 'languages', level: 'Advanced', icon: '💻' },
  { name: 'Java', category: 'languages', level: 'Intermediate', icon: '☕' },
  { name: 'Python', category: 'languages', level: 'Advanced', icon: '🐍' },
  { name: 'JavaScript', category: 'languages', level: 'Advanced', icon: '🟨' },
  { name: 'SQL', category: 'languages', level: 'Advanced', icon: '🔍' },
  { name: 'PHP', category: 'languages', level: 'Intermediate', icon: '🐘' },
  
  // Frameworks
  { name: 'React', category: 'frameworks', level: 'Advanced', icon: '⚛️' },
  { name: 'Node.js', category: 'frameworks', level: 'Advanced', icon: '🟢' },
  { name: 'Tailwind CSS', category: 'frameworks', level: 'Advanced', icon: '🎨' },

  // Developer Tools
  { name: 'Git', category: 'tools', level: 'Advanced', icon: '🌿' },
  { name: 'GitHub', category: 'tools', level: 'Advanced', icon: '🐙' },
  { name: 'VS Code', category: 'tools', level: 'Advanced', icon: '💻' },

  // Databases
  { name: 'MySQL', category: 'databases', level: 'Advanced', icon: '🐬' },
  { name: 'MongoDB', category: 'databases', level: 'Intermediate', icon: '🍃' },

  // Core Subjects
  { name: 'Data Structures & Algorithms', category: 'subjects', level: 'Advanced', icon: '📊' },
  { name: 'DBMS', category: 'subjects', level: 'Advanced', icon: '🗄️' },
  { name: 'Object-Oriented Programming', category: 'subjects', level: 'Advanced', icon: '🧩' },
  { name: 'Operating Systems', category: 'subjects', level: 'Intermediate', icon: '🖥️' },
  { name: 'Computer Networks', category: 'subjects', level: 'Intermediate', icon: '🌐' },

  // Areas of Interest
  { name: 'Artificial Intelligence', category: 'interests', level: 'Enthusiast', icon: '🤖' },
  { name: 'Generative AI', category: 'interests', level: 'Enthusiast', icon: '✨' },
  { name: 'Web Development', category: 'interests', level: 'Advanced', icon: '🕸️' },
  { name: 'DevOps', category: 'interests', level: 'Intermediate', icon: '♾️' },
  { name: 'Computer Vision', category: 'interests', level: 'Advanced', icon: '👁️' }
];

export const leadershipData = {
  role: "Vice-President",
  organization: "Computer Science & Innovation Society (CSIS)",
  period: "2025 - Present",
  responsibilities: [
    "Manage society operations, leading a community of 20+ computing enthusiasts.",
    "Orchestrate technical workshops, hackathons, and regional coding contests, improving tech literacy.",
    "Promote collaborative open-source contributions and research groups among society members.",
    "Liaise with university administration and external sponsors for society budgets and events."
  ]
};

export const achievementsData = [
  {
    title: "Infosys Springboard Internship",
    desc: "Acquired real-world experience in building Agile enterprise applications, SDLC methodologies, and Python technology implementations.",
    icon: "🐍"
  },
  {
    title: "CSIS Leadership (Vice-President)",
    desc: "Elected as Vice-President of the Computer Science & Innovation Society at MMMUT, managing a massive body of student activities and developer projects.",
    icon: "👑"
  },
  {
    title: "Technical Event Coordination",
    desc: "Orchestrated and managed various coding competitions, workshops, and hackathons, guiding student teams in solving complex technology challenges.",
    icon: "🏆"
  },
  {
    title: "Hackathons",
    desc: "Actively participated in and coordinated regional tech hackathons to design modern web products under strict constraints.",
    icon: "💻"
  }
];
