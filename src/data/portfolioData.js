export const portfolioData = {
  personalInfo: {
    name: "Ragavi R",
    title: "Aspiring Full Stack Developer | AI & Data Science Student",
    location: "Sivakasi, Tamil Nadu",
    phone: "+91 6382383347",
    email: "ragaviragavi9360@gmail.com",
    gmailLink: "https://mail.google.com/mail/?view=cm&fs=1&to=ragaviragavi9360@gmail.com",
    linkedin: "https://www.linkedin.com/in/ragavi-r-7057b3344",
    github: "https://github.com/Ragavi2204",
    summary: "Entry-level Software Developer with strong foundation in Java and Spring Boot, and hands-on experience in building responsive web applications using HTML, CSS, JavaScript, and ReactJS. Skilled in REST API development and MySQL database integration. Passionate about writing clean, maintainable code and developing scalable applications.",
  },
  education: [
    {
      institution: "PSR Engineering College",
      period: "2023–2027",
      degree: "B.Tech – Artificial Intelligence and Data Science",
      score: "CGPA: 8.37",
    },
    {
      institution: "Tancem Matric Hr. Sec. School",
      period: "Higher Secondary",
      degree: "Schooling",
      score: "70%",
    }
  ],
  skills: {
    languages: ["Java", "Python (Basics)"],
    frontend: ["HTML", "CSS", "JavaScript", "ReactJS", "Bootstrap", "Tailwind CSS"],
    backend: ["Spring Boot", "REST APIs"],
    database: ["MySQL"],
    tools: ["Git", "GitHub", "VS Code"],
  },
  experience: [
    {
      company: "Novitech",
      role: "Full Stack Intern",
      period: "Internship",
      description: [
        "Developing backend modules using Spring Boot",
        "Integrating MySQL database for data persistence",
        "Building robust REST APIs for frontend-backend communication",
        "Collaborating on full-stack web application development"
      ],
      tech: ["Spring Boot", "MySQL", "REST APIs", "Java"]
    },
    {
      company: "CodeBind Technologies",
      role: "Frontend Intern",
      period: "Internship",
      description: [
        "Developed an online shopping website using HTML, CSS, and JavaScript",
        "Designed responsive UI components and layout",
        "Implemented dynamic cart functionality and user interaction"
      ],
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      company: "Elysium Technologies",
      role: "Machine Learning Intern",
      period: "Internship",
      description: [
        "Built predictive ML models using Python and scikit-learn",
        "Performed data preprocessing and cleaning for model training",
        "Evaluated model performance and accuracy"
      ],
      tech: ["Python", "Machine Learning", "Data Analysis"]
    }
  ],
  projects: [
    {
      title: "Weather Prediction System",
      tech: ["Python", "Machine Learning", "Data Analysis"],
      description: "Built a sophisticated machine learning model using historical data to forecast weather patterns with high accuracy.",
      image: "https://images.unsplash.com/photo-1592210633468-80dd0e0ee82d?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Child Missing Identification System",
      tech: ["Python", "OpenCV", "Machine Learning"],
      description: "Developed facial recognition-based image identification system with image preprocessing and similarity matching.",
      image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "VendorMate – GST Calculator",
      tech: ["Java", "MySQL"],
      description: "An efficient GST calculation and invoicing module built with Java, featuring robust CRUD operations and secure data storage.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000",
    }
  ],
  certifications: [
    { 
      name: "Introduction to Software Engineering", 
      provider: "IBM",
      image: `${import.meta.env.BASE_URL}certificates/ibm.pdf`
    },
    { 
      name: "AI for Beginners", 
      provider: "HP",
      image: `${import.meta.env.BASE_URL}certificates/hp.png`
    },
    { 
      name: "Foundations of Data Science", 
      provider: "Google",
      image: `${import.meta.env.BASE_URL}certificates/google.pdf`
    },
    { 
      name: "Full Stack Internship", 
      provider: "Novitech",
      image: `${import.meta.env.BASE_URL}certificates/novitech.pdf`
    },
    { 
      name: "OOPS in Java", 
      provider: "UC San Diego",
      image: `${import.meta.env.BASE_URL}certificates/ucsd-java.pdf`
    },
  ]
};
