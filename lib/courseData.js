// Course data for different programs
export const dataScienceCourse = {
  title: "Data Science",
  description:
    "Complete data science pipeline from data collection to business insights. Master Python, machine learning, and advanced analytics.",
  tagline:
    "Transform raw data into actionable insights and drive business decisions with cutting-edge data science techniques.",
  duration: "6 months",
  level: "Intermediate",
  image: "/data-science.webp",
  skills: ["Python", "Pandas", "Machine Learning", "SQL", "Statistics"],
  syllabus: [
    {
      title: "Statistics and Probability",
      icon: "statistics",
      type: "course",
      subtopics: [
        {
          title: "Statistics",
          topics: [
            "Descriptive Statistics",
            "Inferential Statistics",
            "Hypothesis Testing",
            "Confidence Intervals",
            "Correlation Analysis",
            "Regression Analysis",
            "ANOVA",
            "Statistical Distributions",
          ],
        },
        {
          title: "Probability",
          topics: [
            "Basic Probability Concepts",
            "Conditional Probability",
            "Bayes' Theorem",
            "Random Variables",
            "Probability Distributions",
            "Central Limit Theorem",
            "Sampling Theory",
            "Monte Carlo Methods",
          ],
        },
      ],
    },
    {
      title: "Python Programming",
      icon: "python",
      type: "course",
      topics: [
        "Python Basics & Syntax",
        "Data Types & Variables",
        "Control Structures",
        "Functions & Modules",
        "Object-Oriented Programming",
        "Error Handling",
        "File I/O Operations",
        "List Comprehensions",
      ],
    },
    {
      title: "Data Analysis with Pandas",
      icon: "data",
      type: "course",
      topics: [
        "DataFrames & Series",
        "Data Loading & Saving",
        "Data Cleaning & Preprocessing",
        "Data Manipulation",
        "Grouping & Aggregation",
        "Merging & Joining",
        "Time Series Analysis",
        "Data Visualization",
      ],
    },
    {
      title: "Machine Learning",
      icon: "machineLearning",
      type: "course",
      subtopics: [
        {
          title: "Supervised Learning",
          topics: [
            "Linear Regression",
            "Logistic Regression",
            "Decision Trees",
            "Random Forest",
            "Support Vector Machines",
            "Naive Bayes",
            "K-Nearest Neighbors",
            "Gradient Boosting",
          ],
        },
        {
          title: "Unsupervised Learning",
          topics: [
            "K-Means Clustering",
            "Hierarchical Clustering",
            "DBSCAN",
            "Principal Component Analysis",
            "Dimensionality Reduction",
            "Association Rules",
            "Anomaly Detection",
            "Feature Selection",
          ],
        },
      ],
    },
    {
      title: "SQL for Data Science",
      icon: "database",
      type: "course",
      topics: [
        "Database Fundamentals",
        "SQL Queries & Joins",
        "Data Filtering & Sorting",
        "Aggregate Functions",
        "Subqueries & CTEs",
        "Window Functions",
        "Database Design",
        "Performance Optimization",
      ],
    },
    {
      title: "Data Visualization",
      icon: "visualization",
      type: "course",
      topics: [
        "Matplotlib Basics",
        "Seaborn Statistical Plots",
        "Plotly Interactive Charts",
        "Dashboard Creation",
        "Storytelling with Data",
        "Color Theory & Design",
        "Chart Selection",
        "Interactive Dashboards",
      ],
    },
    {
      title: "Mini Projects",
      icon: "miniProject",
      type: "project",
      topics: [
        "Customer Segmentation Analysis",
        "Sales Performance Dashboard",
        "Stock Price Prediction Model",
        "Sentiment Analysis of Reviews",
        "A/B Testing Framework",
        "Data Pipeline Automation",
      ],
    },
    {
      title: "Capstone Project",
      icon: "capstone",
      type: "project",
      topics: [
        "End-to-End Data Science Pipeline",
        "Real-world Business Problem Solving",
        "Model Deployment & Monitoring",
        "Presentation & Documentation",
        "Portfolio Development",
        "Industry Best Practices",
      ],
    },
    {
      title: "Generative AI",
      icon: "ai",
      type: "course",
      topics: [
        "Gen AI for Data Science",
        
        "Prompt Engineering Techniques",
       
      ],
    },
  ],

  benefits: [
    {
      title: "Career Growth and Skill Enhancement",
      image: "/interaction.jpg",
      description:
        "Accelerate your professional journey by mastering in-demand data science skills and opening doors to top career opportunities.",
    },
    {
      title: "1-Year Access and Dedicated Doubt Support",
      image: "/doubt-support.jpg",
      description:
        "Enjoy one full year of course access with continuous mentor support to clear your doubts and guide your learning path.",
    },
    {
      title: "Capstone and Mini Projects",
      image: "/projects.jpg",
      description:
        "Gain hands-on experience by working on real-world capstone and mini projects designed to strengthen your practical skills.",
    },
    {
      title: "1:1 Mentorship and Weekly Industry Meetups",
      image: "/interaction.jpg",
      description:
        "Receive personalized mentorship and join weekly meetups with professionals working in the data science industry.",
    },
    {
      title: "AI for a Future-Ready Career",
      image: "/ai.jpg",
      description:
        "Equip yourself with AI and data-driven decision-making skills to stay future-ready in an evolving tech landscape.",
    },
    {
      title: "Resume Building and Career Guidance",
      image: "/resume.jpg",
      description:
        "Create an impactful resume and get expert career guidance to confidently step into data-driven job roles.",
    },
  ],
  
};

export const pythonFullStackCourse = {
  title: "Python Full-Stack",
  description:
    "Master full-stack development with Python, Django, and modern frontend technologies. Build complete web applications from scratch.",
  tagline:
    "Build scalable web applications from frontend to backend using Python, Django, and React with industry best practices.",
  duration: "6 months",
  level: "Beginner to Advanced",
  image: "/python.png",
  skills: ["Python", "Django", "React", "PostgreSQL", "Docker"],
  syllabus: [
    {
      title: "Python Programming",
      icon: "python",
      type: "course",
      topics: [
        "Python Syntax & Basics",
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Functions & Modules",
        "Error Handling & Debugging",
        "File I/O & JSON",
        "Virtual Environments",
        "Package Management",
      ],
    },
    {
      title: "Web Development Fundamentals",
      icon: "web",
      type: "course",
      subtopics: [
        {
          title: "Frontend Technologies",
          topics: [
            "HTML5 & CSS3",
            "JavaScript ES6+",
            "Responsive Design",
            "CSS Frameworks (Bootstrap)",
            "DOM Manipulation",
            "AJAX & Fetch API",
            "Web Accessibility",
            "Browser Developer Tools",
          ],
        },
        {
          title: "Backend Technologies",
          topics: [
            "HTTP Protocol",
            "RESTful Architecture",
            "API Design Principles",
            "Authentication Methods",
            "Session Management",
            "CORS & Security",
            "Error Handling",
            "API Documentation",
          ],
        },
      ],
    },
    {
      title: "Django Backend Development",
      icon: "django",
      type: "course",
      topics: [
        "Django Framework Setup",
        "Models & Database ORM",
        "Views & URL Routing",
        "Templates & Static Files",
        "Forms & User Input",
        "Authentication & Authorization",
        "Admin Interface",
        "RESTful API Development",
      ],
    },
    {
      title: "React Frontend Development",
      icon: "react",
      type: "course",
      topics: [
        "React Components & JSX",
        "State & Props Management",
        "Hooks & Lifecycle Methods",
        "Event Handling",
        "Conditional Rendering",
        "Lists & Keys",
        "Forms & Controlled Components",
        "React Router",
      ],
    },
    {
      title: "Database Design & Management",
      icon: "database",
      type: "course",
      topics: [
        "PostgreSQL Fundamentals",
        "Database Design Principles",
        "SQL Queries & Joins",
        "Database Migrations",
        "Data Relationships",
        "Indexing & Performance",
        "Database Security",
        "Backup & Recovery",
      ],
    },
    {
      title: "Deployment & DevOps",
      icon: "deployment",
      type: "course",
      topics: [
        "Docker Containerization",
        "Cloud Deployment (AWS/Azure)",
        "CI/CD Pipelines",
        "Environment Configuration",
        "Monitoring & Logging",
        "Performance Optimization",
        "Security Best Practices",
        "Scaling Applications",
      ],
    },
    {
      title: "Mini Projects",
      icon: "miniProject",
      type: "project",
      topics: [
        "Todo List Web App",
        "Blog Platform with CMS",
        "E-commerce Product Catalog",
        "User Authentication System",
        "API Integration Project",
        "Real-time Chat Application",
      ],
    },
    {
      title: "Capstone Project",
      icon: "capstone",
      type: "project",
      topics: [
        "Full-Stack Web Application",
        "Database Design & Implementation",
        "Frontend & Backend Integration",
        "User Authentication & Authorization",
        "API Development & Testing",
        "Deployment & Production Setup",
      ],
    },
    {
      title: "Generative AI",
      icon: "capstone",
      type: "course",
      topics: [
        "Gen AI for Development",
        "How to use AI for Coding",
        "Prompt Engineering Techniques",
       
      ],
    },
  ],

  benefits:[
    {
      title: "Career Growth and Skill Enhancement",
      image: "/interaction.jpg",
      description:
        "Accelerate your professional journey by mastering in-demand data science skills and opening doors to top career opportunities.",
    },
    {
      title: "1-Year Access and Dedicated Doubt Support",
      image: "/doubt-support.jpg",
      description:
        "Enjoy one full year of course access with continuous mentor support to clear your doubts and guide your learning path.",
    },
    {
      title: "Capstone and Mini Projects",
      image: "/projects.jpg",
      description:
        "Gain hands-on experience by working on real-world capstone and mini projects designed to strengthen your practical skills.",
    },
    {
      title: "1:1 Mentorship and Weekly Industry Meetups",
      image: "/interaction.jpg",
      description:
        "Receive personalized mentorship and join weekly meetups with professionals working in the data science industry.",
    },
    {
      title: "AI for a Future-Ready Career",
      image: "/ai.jpg",
      description:
        "Equip yourself with AI and data-driven decision-making skills to stay future-ready in an evolving tech landscape.",
    },
    {
      title: "Resume Building and Career Guidance",
      image: "/resume.jpg",
      description:
        "Create an impactful resume and get expert career guidance to confidently step into data-driven job roles.",
    },
  ],
  
};

export const dataAnalyticsCourse = {
  title: "Data Analytics",
  description:
    "Become a Data Analyst with comprehensive training in SQL, Python, Excel, and business intelligence tools.",
  tagline:
    "Master the art of data analysis and visualization to uncover business insights and drive strategic decisions.",
  duration: "3 months",
  level: "Beginner",
  image: "/data-analytics.webp",
  skills: ["SQL", "Python", "Excel", "Power BI", "Adv BI"],
  syllabus: [
    {
      title: "Excel Mastery",
      icon: "excel",
      type: "course",
      topics: [
        "Advanced Excel Functions",
        "Pivot Tables & Charts",
        "Data Validation & Filtering",
        "Conditional Formatting",
        "Lookup Functions (VLOOKUP, INDEX/MATCH)",
        "Data Analysis Toolpak",
        "Macros & Automation",
        "Financial Modeling",
      ],
    },
    {
      title: "Data Analysis Tools",
      icon: "tools",
      type: "course",
      subtopics: [
        {
          title: "SQL Fundamentals",
          topics: [
            "Database Basics & Design",
            "SELECT Queries & Filtering",
            "JOINs & Relationships",
            "Aggregate Functions",
            "Subqueries & CTEs",
            "Window Functions",
            "Data Manipulation",
            "Performance Optimization",
          ],
        },
        {
          title: "Python for Analytics",
          topics: [
            "Python Basics for Data",
            "Pandas DataFrames",
            "Data Cleaning & Preprocessing",
            "Data Manipulation",
            "Statistical Analysis",
            "NumPy Arrays",
            "Data Import/Export",
            "Automation Scripts",
          ],
        },
      ],
    },
    {
      title: "Data Visualization",
      icon: "visualization",
      type: "course",
      topics: [
        "Chart Types & Selection",
        "Matplotlib & Seaborn",
        "Interactive Dashboards",
        "Color Theory & Design",
        "Storytelling with Data",
        "Dashboard Best Practices",
        "Export & Sharing",
        "Mobile-Friendly Design",
      ],
    },
    {
      title: "Business Intelligence Tools",
      icon: "business",
      type: "course",
      topics: [
        "Power BI Fundamentals",
        "Tableau Basics",
        "Data Connections",
        "Calculated Fields",
        "Advanced Visualizations",
        "Dashboard Creation",
        "Sharing & Collaboration",
        "Data Governance",
      ],
    },
    {
      title: "Advanced Analytics",
      icon: "analytics",
      type: "course",
      topics: [
        "Statistical Analysis",
        "Predictive Analytics",
        "Time Series Analysis",
        "A/B Testing",
        "Data Storytelling",
        "Business Reporting",
        "KPI Development",
        "Performance Metrics",
      ],
    },
    {
      title: "Mini Projects",
      icon: "miniProject",
      type: "project",
      topics: [
        "Sales Performance Analysis",
        "Customer Behavior Dashboard",
        "Financial Report Automation",
        "Market Research Analysis",
        "Inventory Management System",
        "KPI Tracking Dashboard",
      ],
    },
    {
      title: "Capstone Project",
      icon: "capstone",
      type: "project",
      topics: [
        "End-to-End Analytics Solution",
        "Business Intelligence Dashboard",
        "Data Pipeline Development",
        "Stakeholder Presentation",
        "Portfolio Documentation",
        "Industry Best Practices",
      ],
    },
    {
      title: "Generative AI",
      icon: "capstone",
      type: "course",
      topics: [
        "Gen AI for Data Analysis",
        "How to use AI for Visualization",
        "Prompt Engineering Techniques",
       
      ],
    },
  ],

  benefits: [
    {
      title: "Career Growth and Skill Enhancement",
      image: "/interaction.jpg",
      description:
        "Accelerate your professional journey by mastering in-demand data science skills and opening doors to top career opportunities.",
    },
    {
      title: "1-Year Access and Dedicated Doubt Support",
      image: "/doubt-support.jpg",
      description:
        "Enjoy one full year of course access with continuous mentor support to clear your doubts and guide your learning path.",
    },
    {
      title: "Capstone and Mini Projects",
      image: "/projects.jpg",
      description:
        "Gain hands-on experience by working on real-world capstone and mini projects designed to strengthen your practical skills.",
    },
    {
      title: "1:1 Mentorship and Weekly Industry Meetups",
      image: "/interaction.jpg",
      description:
        "Receive personalized mentorship and join weekly meetups with professionals working in the data science industry.",
    },
    {
      title: "AI for a Future-Ready Career",
      image: "/ai.jpg",
      description:
        "Equip yourself with AI and data-driven decision-making skills to stay future-ready in an evolving tech landscape.",
    },
    {
      title: "Resume Building and Career Guidance",
      image: "/resume.jpg",
      description:
        "Create an impactful resume and get expert career guidance to confidently step into data-driven job roles.",
    },
  ],
  
};
