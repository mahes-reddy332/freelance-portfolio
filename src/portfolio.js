/* Portfolio configuration - Freelance AI/ML & Generative AI Engineer */

const settings = { isSplash: false };

const seo = {
  title: "Mahesh Reddy Mula | Freelance AI/ML Engineer & Generative AI Developer",
  description: "AI/ML Engineer & Generative AI Developer specializing in production LangGraph multi-agent systems, enterprise RAG pipelines, fine-tuned LLMs, and scalable machine learning applications.",
  og: { title: "Mahesh Reddy Mula — Freelance AI & GenAI Engineer", type: "website", url: "https://mahes-reddy332.github.io/freelance-portfolio" },
};

const greeting = {
  title: "Mahesh Reddy Mula",
  role: "AI/ML Engineer & Generative AI Developer",
  logo_name: "Mahesh Reddy",
  nickname: "Mahesh",
  subTitle: "I design and build production-ready autonomous agent systems, enterprise RAG pipelines, custom LLM applications, and scalable machine learning workflows that turn complex ideas into reliable software.",
  availability: "Available for freelance projects, AI agent workflows, and technical consulting.",
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
    title: "Generative AI & Enterprise RAG",
    tagline: "Custom LLM solutions grounded in your company's proprietary data",
    description: "Design and implement production-grade Retrieval-Augmented Generation (RAG) architectures with hybrid dense/sparse search, ChromaDB/FAISS vector databases, semantic reranking, context compression, and automated fact-checking guardrails to eliminate hallucinations.",
    deliverables: [
      "Domain-specific RAG pipelines with ChromaDB/FAISS",
      "Semantic search & automated citation verification",
      "Real-time Server-Sent Events (SSE) streaming chat interfaces",
      "Guardrails, prompt evaluation & LangSmith observability",
    ],
    technologies: ["LangChain", "ChromaDB", "FAISS", "OpenAI / Claude", "FastAPI", "Next.js"],
    icon: "fa-solid fa-brain",
  },
  {
    id: "agentic-automation",
    number: "02",
    title: "Autonomous Agents & MCP Automation",
    tagline: "Multi-agent collaborative workflows and Model Context Protocol servers",
    description: "Build robust autonomous agents powered by LangGraph that plan, execute tool calls, coordinate specialized sub-agents, and integrate Human-in-the-Loop (HITL) approval gates. Deploy FastMCP servers for desktop and cloud AI assistants.",
    deliverables: [
      "Stateful multi-agent DAG workflows using LangGraph",
      "FastMCP tool servers with remote HTTP/SSE deployment",
      "Autonomous multi-step research, writing & validation pipelines",
      "Human-in-the-loop review checkpoints & persistent memory",
    ],
    technologies: ["LangGraph", "FastMCP", "Model Context Protocol", "Python", "SQLite", "Claude Desktop"],
    icon: "fa-solid fa-robot",
  },
  {
    id: "ml-predictive",
    number: "03",
    title: "Machine Learning & Predictive Modeling",
    tagline: "Data-driven statistical models and deep neural networks",
    description: "End-to-end predictive modeling from exploratory data analysis and feature engineering to model training, hyperparameter tuning, and deployment. Expertise in ensemble forecasting (XGBoost, LightGBM) and deep learning with PyTorch.",
    deliverables: [
      "Custom regression, classification & forecasting models",
      "Tabular feature engineering & automated data pipelines",
      "Computer vision SEM image segmentation (OpenCV)",
      "Bayesian optimization with Gaussian Process surrogates",
    ],
    technologies: ["PyTorch", "Scikit-learn", "XGBoost", "LightGBM", "OpenCV", "SciPy"],
    icon: "fa-solid fa-chart-line",
  },
  {
    id: "fullstack-cloud",
    number: "04",
    title: "Full-Stack AI Integration & High-Throughput APIs",
    tagline: "Bridging intelligent models with fast, reactive web frontends",
    description: "Deliver complete, end-to-end AI applications. High-performance asynchronous FastAPI backends with WebSocket/SSE streaming connected to modern React 19/Next.js interfaces, Docker containerization, and GCP cloud hosting.",
    deliverables: [
      "Asynchronous FastAPI REST & Streaming APIs",
      "Interactive React & Next.js user interfaces",
      "Dockerized containerization & GCP cloud deployment",
      "Relational database modeling with PostgreSQL & SQLite",
    ],
    technologies: ["FastAPI", "React", "TypeScript", "Docker", "PostgreSQL", "Google Cloud"],
    icon: "fa-solid fa-cubes",
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
  { name: "Github", link: "https://github.com/mahes-reddy332", fontAwesomeIcon: "fa-github", backgroundColor: "#181717" },
  { name: "LinkedIn", link: "https://www.linkedin.com/in/mahesh-reddy-mula-369z/", fontAwesomeIcon: "fa-linkedin-in", backgroundColor: "#0077B5" },
  { name: "Gmail", link: "mailto:mahesreddymula@gmail.com", fontAwesomeIcon: "fa-google", backgroundColor: "#D14836" },
];

// Skills Page
const skills = {
  data: [
    {
      title: "Machine Learning & Data Science",
      fileName: "DataScienceImg",
      skills: [
        "⚡ PyTorch, TensorFlow/Keras, Scikit-learn, PySpark, Pandas and NumPy",
        "⚡ CNNs, RNNs, Transformers, Transfer Learning and supervised/unsupervised learning",
        "⚡ Ensemble methods including XGBoost, LightGBM and CatBoost for real-world prediction problems",
      ],
      softwareSkills: [
        { skillName: "Python", fontAwesomeClassname: "ion-logo-python", style: { backgroundColor: "transparent", color: "#3776AB" } },
        { skillName: "PyTorch", fontAwesomeClassname: "simple-icons:pytorch", style: { color: "#EE4C2C" } },
        { skillName: "TensorFlow", fontAwesomeClassname: "logos-tensorflow", style: { backgroundColor: "transparent" } },
        { skillName: "Scikit-learn", fontAwesomeClassname: "simple-icons:scikitlearn", style: { color: "#F7931E" } },
        { skillName: "PySpark", fontAwesomeClassname: "simple-icons:apachespark", style: { color: "#E25A1C" } },
        { skillName: "Pandas", fontAwesomeClassname: "simple-icons:pandas", style: { color: "#150458" } },
        { skillName: "NumPy", fontAwesomeClassname: "simple-icons:numpy", style: { color: "#013243" } },
      ],
    },
    {
      title: "Data Analytics & Business Intelligence",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Exploratory Data Analysis, statistical analysis, data cleaning, feature engineering and data visualization",
        "⚡ Advanced Excel, Tableau and Power BI for KPI dashboards, reporting and business insights",
        "⚡ SQL for complex joins, window functions, aggregations, relational data modeling and analytical queries",
      ],
      softwareSkills: [
        { skillName: "SQL", fontAwesomeClassname: "simple-icons:mysql", style: { color: "#4479A1" } },
        { skillName: "Power BI", fontAwesomeClassname: "simple-icons:powerbi", style: { color: "#F2C811" } },
        { skillName: "Tableau", fontAwesomeClassname: "simple-icons:tableau", style: { color: "#E97627" } },
        { skillName: "Excel", fontAwesomeClassname: "simple-icons:microsoftexcel", style: { color: "#217346" } },
        { skillName: "Pandas", fontAwesomeClassname: "simple-icons:pandas", style: { color: "#150458" } },
        { skillName: "Matplotlib", fontAwesomeClassname: "simple-icons:matplotlib", style: { color: "#11557C" } },
      ],
    },
    {
      title: "LLMs & Agentic AI",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ LangChain, LangGraph, RAG, Multi-Agent Systems and Model Context Protocol (MCP)",
        "⚡ LoRA/PEFT, prompt engineering, tool calling and Human-in-the-Loop (HITL)",
        "⚡ OpenAI and Groq APIs for AI-powered applications and agents",
      ],
      softwareSkills: [
        { skillName: "LangChain", fontAwesomeClassname: "simple-icons:langchain", style: { color: "#1C3C3C" } },
        { skillName: "LangGraph", fontAwesomeClassname: "simple-icons:graphql", style: { color: "#E10098" } },
        { skillName: "OpenAI", fontAwesomeClassname: "simple-icons:openai", style: { color: "#000000" } },
        { skillName: "RAG", fontAwesomeClassname: "simple-icons:databricks", style: { color: "#FF3621" } },
      ],
    },
    {
      title: "NLP & Computer Vision",
      fileName: "DesignImg",
      skills: [
        "⚡ Transformers including BERT and GPT, text/image classification, semantic search and Named Entity Recognition (NER)",
        "⚡ OpenCV, image processing and image segmentation",
      ],
      softwareSkills: [
        { skillName: "BERT / GPT", fontAwesomeClassname: "simple-icons:huggingface", style: { color: "#FFD21E" } },
        { skillName: "OpenCV", fontAwesomeClassname: "simple-icons:opencv", style: { color: "#5C3EE8" } },
        { skillName: "Python", fontAwesomeClassname: "ion-logo-python", style: { color: "#3776AB" } },
      ],
    },
    {
      title: "Programming, Software & Cloud",
      fileName: "FullStackImg",
      skills: [
        "⚡ Python, C/C++, JavaScript, TypeScript, HTML/CSS, React 19 and FastAPI",
        "⚡ REST APIs, Async I/O, Kafka, Tailwind CSS and Vite",
        "⚡ GCP, Docker, Git/GitHub, CI/CD and Linux",
      ],
      softwareSkills: [
        { skillName: "Python", fontAwesomeClassname: "ion-logo-python", style: { color: "#3776AB" } },
        { skillName: "C++", fontAwesomeClassname: "simple-icons:cplusplus", style: { color: "#00599C" } },
        { skillName: "TypeScript", fontAwesomeClassname: "simple-icons:typescript", style: { color: "#3178C6" } },
        { skillName: "React", fontAwesomeClassname: "simple-icons:react", style: { color: "#61DAFB" } },
        { skillName: "FastAPI", fontAwesomeClassname: "simple-icons:fastapi", style: { color: "#009688" } },
        { skillName: "Kafka", fontAwesomeClassname: "simple-icons:apachekafka", style: { color: "#231F20" } },
        { skillName: "Docker", fontAwesomeClassname: "simple-icons:docker", style: { color: "#2496ED" } },
        { skillName: "GitHub", fontAwesomeClassname: "simple-icons:github", style: { color: "#181717" } },
        { skillName: "Google Cloud", fontAwesomeClassname: "simple-icons:googlecloud", style: { color: "#4285F4" } },
      ],
    },
    {
      title: "Languages, Databases & Data Engineering",
      fileName: "FullStackImg",
      skills: [
        "⚡ SQL with PostgreSQL and MySQL, relational data modeling and ETL pipelines",
        "⚡ ChromaDB and FAISS vector databases for semantic search and RAG applications",
        "⚡ JavaScript, TypeScript, HTML/CSS and Python for data and application development",
      ],
      softwareSkills: [
        { skillName: "PostgreSQL", fontAwesomeClassname: "simple-icons:postgresql", style: { color: "#4169E1" } },
        { skillName: "MySQL", fontAwesomeClassname: "simple-icons:mysql", style: { color: "#4479A1" } },
        { skillName: "ChromaDB", fontAwesomeClassname: "simple-icons:databricks", style: { color: "#FF3621" } },
        { skillName: "FAISS", fontAwesomeClassname: "simple-icons:meta", style: { color: "#0668E1" } },
        { skillName: "JavaScript", fontAwesomeClassname: "simple-icons:javascript", style: { color: "#F7DF1E" } },
        { skillName: "TypeScript", fontAwesomeClassname: "simple-icons:typescript", style: { color: "#3178C6" } },
      ],
    },
  ],
};

const competitiveSites = {
  competitiveSites: [
    { siteName: "HackerRank", iconifyClassname: "simple-icons:hackerrank", style: { color: "#2EC866" }, profileLink: "https://www.hackerrank.com/mahesreddymula" },
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
      descriptions: ["• Pursuing core engineering subjects alongside a strong foundation in data science and computing.", "• Maintaining a CGPA of 8.77/10.0 reflecting consistent academic excellence.", "• Serving as Tech Executive at the Entrepreneurship Cell, driving tech-driven initiatives."],
      website_link: "https://www.nitrr.ac.in/",
    },
    {
      title: "Indian Institute of Technology, Madras",
      subtitle: "B.S. in Data Science",
      logo_path: "iu_logo.png",
      logo_url: "https://study.iitm.ac.in/assets/img/logo.png",
      alt_name: "IIT Madras",
      duration: "2023 - Expected Mar. 2027",
      descriptions: ["• Studying advanced topics in Machine Learning, Deep Learning, Statistics and Data Engineering.", "• Maintaining a CGPA of 7.50/10.0 in this rigorous online degree program.", "• Served as Web Operations Head for Bandipur House, migrating the club website to a custom-coded platform."],
      website_link: "https://study.iitm.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    { title: "Advanced ML Algorithms", subtitle: "- Coursera", logo_path: "coursera_logo.png", certificate_link: "https://www.coursera.org/", alt_name: "Coursera", color_code: "#2A73CC" },
    { title: "Supervised Machine Learning", subtitle: "- Coursera", logo_path: "coursera_logo.png", certificate_link: "https://www.coursera.org/", alt_name: "Coursera", color_code: "#2A73CC" },
    { title: "5-Star SQL Badge", subtitle: "- HackerRank (Top 5%)", logo_path: "github_logo.png", certificate_link: "https://www.hackerrank.com/mahesreddymula", alt_name: "HackerRank", color_code: "#2EC86699" },
  ],
};

const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description: "As a dual-degree student at NIT Raipur and IIT Madras, I have taken on leadership roles in technical and entrepreneurial clubs and completed research-focused internship experience.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Research Intern — AI-Driven Biomaterials Analysis",
          company: "Indian Institute of Technology Madras",
          company_url: "https://www.iitm.ac.in/",
          logo_path: "iitm_logo.svg",
          duration: "May 2025 – Jul 2025",
          location: "Chennai, Tamil Nadu, India",
          description: "Built an automated SEM image-analysis pipeline (OpenCV, scikit-image) using CLAHE and watershed segmentation to extract nanorod morphology and PCA orientation angles for 200+ particles/image. Fitted Power-Law & Cross rheology models via nonlinear regression (SciPy) and developed a Bayesian optimization framework (GP surrogate + Expected Improvement) to predict optimal bioink composition for extrusion-based 3D bioprinting.",
          color: "#800000",
        },
      ],
    },
    {
      title: "Positions of Responsibility",
      work: true,
      experiences: [
        {
          title: "Web Operations Head",
          company: "Bandipur House, IIT Madras BS",
          company_url: "https://study.iitm.ac.in/",
          logo_path: "github_logo.png",
          duration: "2024 - 2025",
          location: "IIT Madras (Online)",
          description: "Migrated the club website from Google Sites to a custom-coded platform, significantly improving the user experience. Developed a dedicated election participants webpage for fair and transparent representation.",
          color: "#006EFF",
        },
        {
          title: "Tech Executive",
          company: "Entrepreneurship Cell, NIT Raipur",
          company_url: "https://www.nitrr.ac.in/",
          logo_path: "dsc_logo.png",
          duration: "Mar. 2023 - Sep. 2025",
          location: "Raipur, Chhattisgarh",
          description: "Redesigned and updated the E-Cell website with an improved user interface and enhanced features. Organized technical events and workshops to foster entrepreneurship awareness among students.",
          color: "#0C9D58",
        },
      ],
    },
  ],
};

const projectsHeader = {
  title: "Projects",
  description: "Featured projects are prioritized by impact and relevance: Machine Learning, Deep Learning, Data Analytics, and challenge projects first. You can find additional lower-priority projects on my GitHub profile.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = { title: "Achievements", description: "Competitions, certifications and recognitions I have earned.", avatar_image_path: "projects_image.svg" };
const publications = { data: [] };

const contactPageData = {
  contactSection: { title: "Contact Me", profile_image_path: "developerActivity.svg", description: "I am available on GitHub and LinkedIn. Feel free to reach out — I will reply within 24 hours. I can help you with Machine Learning, Data Analysis, SQL, Python, and Web Development." },
  blogSection: { title: "GitHub", subtitle: "I love building projects and sharing them on GitHub. Check out my repositories for ML models, data analysis notebooks, and web apps.", link: "https://github.com/mahes-reddy332", avatar_image_path: "ghibli_mahesh.jpg" },
  addressSection: { title: "Location", subtitle: "GE Road, Raipur, Chhattisgarh 492010, India", locality: "Raipur", country: "India", region: "Chhattisgarh", postalCode: "492010", streetAddress: "GE Road", avatar_image_path: "address_image.svg", location_map_link: "https://maps.app.goo.gl/rAD6xN7q3YnW9GxF7" },
  phoneSection: { title: "", subtitle: "" },
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
};
