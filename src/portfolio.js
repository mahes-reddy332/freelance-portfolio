/* Portfolio configuration - Freelance AI/ML & Software Developer */

const settings = {
  isSplash: false, // Client lands directly on homepage
};

const seo = {
  title: "Mahesh Reddy Mula | Freelance AI/ML & Generative AI Engineer",
  description:
    "AI/ML Engineer & Generative AI Developer specializing in production LangGraph multi-agent systems, enterprise RAG pipelines, fine-tuned LLMs, and scalable machine learning applications.",
  og: {
    title: "Mahesh Reddy Mula — Freelance AI & GenAI Engineer",
    type: "website",
    url: "https://mahes-reddy332.github.io/freelance-portfolio",
  },
};

const greeting = {
  title: "Building Intelligent AI Solutions for Real-World Problems",
  name: "Mahesh Reddy",
  role: "AI/ML Engineer & Generative AI Developer",
  logo_name: "Mahesh Reddy",
  nickname: "Mahesh",
  subTitle:
    "I develop AI-powered applications, machine learning solutions, LLM integrations, and automation workflows that help turn ideas into working software.",
  availability: "Available for Freelance Projects",
  location: "Remote / India (Serving Global Clients)",
  resumeLink: "/resume",
  portfolio_repository: "https://github.com/mahes-reddy332/freelance-portfolio",
  githubProfile: "https://github.com/mahes-reddy332",
  email: "mahesreddymula@gmail.com",
  phone: "+91 6301828916",
  linkedin: "https://www.linkedin.com/in/mahesh-reddy-mula-369z/",
  calendly: "mailto:mahesreddymula@gmail.com?subject=Project%20Inquiry%20with%20Mahesh%20Reddy",
};

const metrics = [
  {
    value: "10+",
    label: "AI Systems Delivered",
    subLabel: "Production LangGraph, FastAPI & PyTorch",
    icon: "fa-solid fa-layer-group",
  },
  {
    value: "99%+",
    label: "Pipeline Precision",
    subLabel: "Hallucination-free RAG & fact-checking",
    icon: "fa-solid fa-shield-halved",
  },
  {
    value: "2x",
    label: "Dual Degree Honors",
    subLabel: "NIT Raipur (8.77) + IIT Madras (7.50)",
    icon: "fa-solid fa-graduation-cap",
  },
  {
    value: "<24h",
    label: "Client Response SLA",
    subLabel: "Rapid MVP prototyping & communication",
    icon: "fa-solid fa-bolt",
  },
];

const freelanceServices = [
  {
    id: "genai-rag",
    number: "01",
    title: "Generative AI, RAG & Chatbots",
    description:
      "Build intelligent chatbots and AI assistants that answer questions using documents, knowledge bases, and custom data. Develop retrieval pipelines with semantic search, source citations, conversation history, and LLM integrations to deliver relevant, context-aware responses.",
    icon: "fa-solid fa-comments",
  },
  {
    id: "agentic-automation",
    number: "02",
    title: "AI Agents & Automation",
    description:
      "Develop AI agents that use tools, APIs, memory, and multi-step workflows to automate research, data processing, and business tasks. Implement agent orchestration and human approval checkpoints where necessary.",
    icon: "fa-solid fa-robot",
  },
  {
    id: "ml-deeplearning",
    number: "03",
    title: "Machine Learning & Deep Learning",
    description:
      "Build classification, regression, forecasting, and computer vision models using structured data, images, and text. Handle data preparation, feature engineering, model training, hyperparameter tuning, and evaluation.",
    icon: "fa-solid fa-chart-line",
  },
  {
    id: "fullstack-ai",
    number: "04",
    title: "Full-Stack AI Application Development",
    description:
      "Turn AI models and LLM workflows into complete applications with modern frontends, API backends, database integration, streaming responses, and cloud deployment.",
    icon: "fa-solid fa-layer-group",
  },
];

const techStack = [
  {
    id: "genai-nlp",
    category: "LLMs, Generative AI & NLP",
    icon: "fa-solid fa-brain",
    description:
      "Build LLM applications, chatbots, retrieval systems, and language-processing pipelines.",
    technologies: [
      "LangChain",
      "LangGraph",
      "Hugging Face Transformers",
      "Retrieval-Augmented Generation (RAG)",
      "Prompt Engineering",
      "OpenAI APIs",
      "LoRA / PEFT",
      "ChromaDB",
      "FAISS",
      "LangSmith",
    ],
  },
  {
    id: "ml-cv",
    category: "Machine Learning, Deep Learning & Computer Vision",
    icon: "fa-solid fa-microchip",
    description:
      "Train and evaluate predictive models, neural networks, and image-processing systems.",
    technologies: [
      "Scikit-learn",
      "PyTorch",
      "TensorFlow / Keras",
      "XGBoost",
      "LightGBM",
      "Convolutional Neural Networks (CNNs)",
      "OpenCV",
      "SciPy",
    ],
  },
  {
    id: "data-eng",
    category: "Data Engineering & Processing",
    icon: "fa-solid fa-database",
    description:
      "Prepare datasets, engineer features, process data, and build reliable analytical pipelines.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "SQL",
      "Data Preprocessing",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },
  {
    id: "agents-backend",
    category: "AI Agents, Backend & Cloud",
    icon: "fa-solid fa-server",
    description:
      "Orchestrate tool-using agents, expose AI capabilities through APIs, and deploy applications.",
    technologies: [
      "Model Context Protocol (MCP)",
      "FastMCP",
      "FastAPI",
      "REST APIs",
      "Server-Sent Events (SSE)",
      "WebSockets",
      "Docker",
      "Google Cloud",
    ],
  },
  {
    id: "frontend-db",
    category: "Frontend & Databases",
    icon: "fa-solid fa-window-restore",
    description:
      "Build interactive AI interfaces and connect applications to persistent data storage.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "MySQL",
      "SQLite",
    ],
  },
];

const deliveryProcess = [
  {
    step: "01",
    name: "Discovery & Feasibility Audit",
    timeline: "Days 1 – 2",
    summary: "Understand your business objectives, review data availability, evaluate model requirements, and map out technical feasibility and measurable KPIs.",
  },
  {
    step: "02",
    name: "Architecture & Rapid MVP",
    timeline: "Days 3 – 7",
    summary: "Deliver an end-to-end interactive proof-of-concept. Validate core model accuracy, RAG retrieval quality, and tool calling before investing in full production scaling.",
  },
  {
    step: "03",
    name: "Production Engineering & Guardrails",
    timeline: "Days 8 – 14",
    summary: "Harden the pipeline with latency optimizations, token caching, evaluation benchmarks, semantic fact-checking guardrails, and LangSmith tracing.",
  },
  {
    step: "04",
    name: "Deployment & Turnkey Handoff",
    timeline: "Days 15+",
    summary: "Containerize via Docker, deploy to cloud infrastructure (GCP), provide interactive API documentation (OpenAPI), and conduct team walkthrough sessions.",
  },
];

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/mahes-reddy332",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mahesh-reddy-mula-369z/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:mahesreddymula@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

// Services & Capabilities
const skills = {
  data: [
    {
      title: "AI and LLM Application Development",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Custom LLM applications and RAG systems grounded in your proprietary documents and data",
        "⚡ Semantic search, vector databases (ChromaDB, FAISS), and context retrieval pipelines",
        "⚡ Prompt engineering, guardrails, and evaluation for accurate, hallucination-free responses",
      ],
      softwareSkills: [
        {
          skillName: "OpenAI",
          fontAwesomeClassname: "simple-icons:openai",
          style: { color: "#000000" },
        },
        {
          skillName: "LangChain",
          fontAwesomeClassname: "simple-icons:langchain",
          style: { color: "#1C3C3C" },
        },
        {
          skillName: "ChromaDB",
          fontAwesomeClassname: "simple-icons:databricks",
          style: { color: "#FF3621" },
        },
        {
          skillName: "FAISS",
          fontAwesomeClassname: "simple-icons:meta",
          style: { color: "#0668E1" },
        },
        {
          skillName: "Hugging Face",
          fontAwesomeClassname: "simple-icons:huggingface",
          style: { color: "#FFD21E" },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { color: "#3776AB" },
        },
      ],
    },
    {
      title: "Machine Learning and Data Science",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Predictive modeling and statistical analysis tailored to business data and forecasting needs",
        "⚡ End-to-end ML workflows: exploratory data analysis, feature engineering, and model validation",
        "⚡ Gradient boosting (XGBoost, LightGBM) and deep neural networks for tabular, text, and image data",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { color: "#3776AB" },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "simple-icons:pytorch",
          style: { color: "#EE4C2C" },
        },
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: { color: "#F7931E" },
        },
        {
          skillName: "XGBoost",
          fontAwesomeClassname: "simple-icons:xgboost",
          style: { color: "#29B5E8" },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: { color: "#150458" },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: { color: "#013243" },
        },
      ],
    },
    {
      title: "AI Agents and Workflow Automation",
      fileName: "DesignImg",
      skills: [
        "⚡ Multi-agent systems with LangGraph that plan, execute tool calls, and coordinate tasks",
        "⚡ Model Context Protocol (MCP) servers connecting AI assistants to internal tools and databases",
        "⚡ Automated research, data extraction, and human-in-the-loop review workflows",
      ],
      softwareSkills: [
        {
          skillName: "LangGraph",
          fontAwesomeClassname: "simple-icons:graphql",
          style: { color: "#E10098" },
        },
        {
          skillName: "FastMCP",
          fontAwesomeClassname: "simple-icons:python",
          style: { color: "#3776AB" },
        },
        {
          skillName: "SQLite",
          fontAwesomeClassname: "simple-icons:sqlite",
          style: { color: "#003B57" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#2496ED" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#F05032" },
        },
      ],
    },
    {
      title: "Python Backend and API Integration",
      fileName: "FullStackImg",
      skills: [
        "⚡ High-performance asynchronous FastAPI backends with streaming (SSE/WebSockets) and REST endpoints",
        "⚡ Relational database design and query optimization with PostgreSQL and MySQL",
        "⚡ Clean full-stack integration connecting intelligent models to modern, responsive web interfaces",
      ],
      softwareSkills: [
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: { color: "#009688" },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: { color: "#4169E1" },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: { color: "#3178C6" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#2496ED" },
        },
        {
          skillName: "Google Cloud",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: { color: "#4285F4" },
        },
      ],
    },
  ],
};

const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: { color: "#2EC866" },
      profileLink: "https://www.hackerrank.com/mahesreddymula",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "National Institute of Technology, Raipur",
      subtitle: "B.Tech. in Chemical Engineering",
      logo_path: "iiitk_logo.png",
      logo_url: "https://www.nitrr.ac.in/images/nitrr.gif",
      alt_name: "NIT Raipur",
      duration: "2023 - Expected Aug. 2027",
      descriptions: [
        "• Dual-degree engineering program with rigorous mathematical foundations in numerical analysis, optimization, and computing.",
        "• Consistent academic excellence with a CGPA of 8.77/10.0.",
        "• Served as Tech Executive at the Entrepreneurship Cell, developing and maintaining web platforms.",
      ],
      website_link: "https://www.nitrr.ac.in/",
    },
    {
      title: "Indian Institute of Technology, Madras",
      subtitle: "B.S. in Data Science",
      logo_path: "iu_logo.png",
      logo_url: "https://study.iitm.ac.in/assets/img/logo.png",
      alt_name: "IIT Madras",
      duration: "2023 - Expected Mar. 2027",
      descriptions: [
        "• Advanced coursework covering Machine Learning algorithms, Deep Learning, Statistical Inference, and Data Engineering pipelines.",
        "• Maintaining a CGPA of 7.50/10.0 in this rigorous degree program.",
        "• Served as Web Operations Head for Bandipur House, developing and managing web platforms.",
      ],
      website_link: "https://study.iitm.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Advanced ML Algorithms",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link: "https://www.coursera.org/",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Supervised Machine Learning",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link: "https://www.coursera.org/",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "5-Star SQL Badge",
      subtitle: "- HackerRank (Top 5%)",
      logo_path: "github_logo.png",
      certificate_link: "https://www.hackerrank.com/mahesreddymula",
      alt_name: "HackerRank",
      color_code: "#2EC86699",
    },
  ],
};

const experience = {
  title: "Experience",
  subtitle: "Research, Technical Roles & Work",
  description:
    "Applied experience spanning machine learning research at IIT Madras, web platform operations, and technical leadership—delivering production-ready pipelines and software solutions.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Research & Internships",
      experiences: [
        {
          title: "Research Intern — AI-Driven Biomaterials Analysis",
          company: "Indian Institute of Technology Madras",
          company_url: "https://www.iitm.ac.in/",
          logo_path: "iitm_logo.svg",
          duration: "May 2025 – Jul 2025",
          location: "Chennai, Tamil Nadu, India",
          description:
            "Built an automated SEM image-analysis pipeline (OpenCV, scikit-image) using CLAHE and watershed segmentation to extract nanorod morphology and PCA orientation angles for 200+ particles/image. Fitted Power-Law & Cross rheology models via nonlinear regression (SciPy) and developed a Bayesian optimization framework (GP surrogate + Expected Improvement) to predict optimal bioink composition for extrusion-based 3D bioprinting.",
          color: "#800000",
        },
      ],
    },
    {
      title: "Competitions & Industry Selections",
      isCompact: true,
      competitions: [
        {
          company: "Tata Elxsi",
          competition: "TellPORT Case Competition",
          outcome: "Pre-Placement Offer (PPO)",
          outcomeType: "ppo",
          logo_path: "logos/tata_elxsi.png",
          alt: "Tata Elxsi logo",
          description:
            "Earned a Pre-Placement Offer (PPO) during my third year of B.Tech for edge telematics analytics and predictive maintenance solutions.",
        },
        {
          company: "Nestlé–Novartis",
          competition: "NEST 2.0 Case Competition",
          outcome: "Semifinalist (Top 33.3K+ Teams)",
          outcomeType: "semifinalist",
          logo_path: "logos/novartis.svg",
          alt: "Novartis NEST 2.0 logo",
          description:
            "Selected as a semifinalist out of 33,300+ teams for architecting an automated clinical trial data quality and site compliance platform.",
        },
        {
          company: "Walmart",
          competition: "Sparkplug Summer Internship 2026",
          outcome: "Interview Shortlist",
          outcomeType: "shortlist",
          logo_path: "logos/walmart.svg",
          alt: "Walmart logo",
          description:
            "Cleared competitive technical selection rounds and was shortlisted for the summer internship technical interview.",
        },
        {
          company: "Razorpay",
          competition: "AI Buildathon 2026",
          outcome: "MuleHunter (Track 2: AI Risk Manager)",
          outcomeType: "project",
          logo_path: "logos/razorpay.svg",
          alt: "Razorpay logo",
          description:
            "Engineered MuleHunter, a graph-based temporal transaction flow tracer identifying multi-hop mule account topologies with explainable BFS scoring.",
        },
        {
          company: "Amazon",
          competition: "Amazon ML Challenge 2025",
          outcome: "Ranked 819th / 82,500+ Teams",
          outcomeType: "rank",
          logo_path: "logos/amazon.svg",
          alt: "Amazon logo",
          description:
            "Placed in the top 1% out of 82,500+ teams for multimodal product price prediction combining deep visual embeddings and NLP catalog features.",
        },
        {
          company: "Varroc",
          competition: "Eureka Challenge 3.0",
          outcome: "Pre-Placement Interview (PPI)",
          outcomeType: "ppi",
          logo_path: "logos/varroc.png",
          alt: "Varroc logo",
          description:
            "Earned a Pre-Placement Interview (PPI) for engineering problem-solving and automotive component technology innovation.",
        },
        {
          company: "Bloom Energy",
          competition: "Be Hackfest",
          outcome: "Pre-Placement Interview (PPI)",
          outcomeType: "ppi",
          logo_path: "logos/bloom_energy.svg",
          alt: "Bloom Energy logo",
          description:
            "Earned a Pre-Placement Interview (PPI) in clean energy tech challenge tracks for applied engineering systems design.",
        },
        {
          company: "The Economic Times",
          competition: "ET Gen AI Hackathon",
          outcome: "Pre-Placement Interview (PPI)",
          outcomeType: "ppi",
          logo_path: "logos/economic_times.svg",
          alt: "The Economic Times logo",
          description:
            "Earned a Pre-Placement Interview (PPI) for end-to-end generative AI application architecture and prompt workflow engineering.",
        },
      ],
    },
    {
      title: "Technical Leadership & Responsibilities",
      work: true,
      experiences: [
        {
          title: "Web Operations Head",
          company: "Bandipur House, IIT Madras BS",
          company_url: "https://study.iitm.ac.in/",
          logo_path: "github_logo.png",
          duration: "2024 - 2025",
          location: "IIT Madras (Remote)",
          description:
            "Architected and migrated the organization web presence from Google Sites to a custom-coded web platform, enhancing performance and user navigation. Built a dedicated election participants portal ensuring transparent representation.",
          color: "#006EFF",
        },
        {
          title: "Tech Executive",
          company: "Entrepreneurship Cell, NIT Raipur",
          company_url: "https://www.nitrr.ac.in/",
          logo_path: "dsc_logo.png",
          duration: "Mar. 2023 - Sep. 2025",
          location: "Raipur, Chhattisgarh",
          description:
            "Maintained and enhanced the E-Cell web platform with improved UI responsiveness and dynamic feature integrations. Coordinated technical workshops and development initiatives.",
          color: "#0C9D58",
        },
      ],
    },
  ],
};

const projectsHeader = {
  title: "Projects",
  description:
    "A selection of AI applications, machine learning models, and software projects built to solve practical problems.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Achievements",
  description: "Competitions, certifications and recognitions I have earned.",
  avatar_image_path: "projects_image.svg",
};
const publications = { data: [] };

const contactPageData = {
  contactSection: {
    title: "Have a Project in Mind?",
    profile_image_path: "developerActivity.svg",
    description:
      "I am available for freelance projects, AI/LLM integrations, machine learning workflows, and automation requirements. Whether you have an idea to prototype, an API to build, or a data challenge to solve, feel free to reach out—I usually respond within 24 hours.",
  },
  blogSection: {
    title: "GitHub & Open Source",
    subtitle:
      "Explore my code, active repositories, and open-source projects across AI agents, machine learning models, and full-stack tools.",
    link: "https://github.com/mahes-reddy332",
    avatar_image_path: "ghibli_mahesh.jpg",
  },
  addressSection: {
    title: "Location",
    subtitle:
      "GE Road, Raipur, Chhattisgarh 492010, India (Available Globally for Remote Work)",
    locality: "Raipur",
    country: "India",
    region: "Chhattisgarh",
    postalCode: "492010",
    streetAddress: "GE Road",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/rAD6xN7q3YnW9GxF7",
  },
  phoneSection: {
    title: "Direct Email",
    subtitle: "mahesreddymula@gmail.com",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  metrics,
  freelanceServices,
  deliveryProcess,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  techStack,
};
