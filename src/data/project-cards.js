export const myProjects = [
  {
    title: "Zionmart Agentic Customer Support",
    category: "AI/ML & Data Science",
    img: "src/assets/imgs/ai agent-0.png",
    skills: [
      "Python",
      "LangGraph",
      "LangChain",
      "FastAPI",
      "PostgreSQL",
      "RAG",
      "LLM",
      "Prompt Engineering",
      "Gemini",
      "Microsoft Azure",
      "React",
      "JavaScript/TypeScript",
    ],
    about:
      "An AI-powered multi-agent system that automates customer support and order management through intelligent task routing and context-aware reasoning.",
    description:
      "The Zionmart Agentic Customer Support System is an AI-powered multi-agent framework developed to automate customer support, order management, and user enquiry handling within an e-commerce ecosystem. Built with Python, it leverages LangGraph and LangChain for agentic reasoning and task orchestration, enabling specialized agents to collaborate efficiently through a graph-based workflow. The system employs Retrieval-Augmented Generation (RAG) to access Zionmart’s internal knowledge base, ensuring responses are contextually accurate and grounded in real organizational data. FastAPI, SQLAlchemy, and PostgreSQL form the backend infrastructure, providing scalable API endpoints and reliable data management. A Supervisor Agent oversees task routing and coordination, ensuring intelligent automation, operational efficiency, and consistent user experience across the support pipeline.",
    images: [
      "src/assets/imgs/ai agent-1.png",
      "src/assets/imgs/ai agent-2.png",
    ],
    liveLink: "https://zionmart-agent-client.vercel.app/",
    gitLink: "https://github.com/guavacoderepo/Zionmart-agent-server",
  },
  {
    title: "RAG-Based AI Chatbot for FinSolve Technologies",
    category: "AI/ML & Data Science",
    img: "src/assets/imgs/role base chatbot-0.png",
    skills: [
      "Python",
      "LLM",
      "Prompt Engineering",
      "RAG",
      "FastAPI",
      "Streamlit",
      "SQL",
      "Docker",
      "Git",
    ],
    about:
      "Secure, role-specific AI chatbot leveraging Retrieval-Augmented Generation (RAG) to streamline enterprise communication and improve data access efficiency.",
    description:
      "Developed a RAG-based AI chatbot for FinSolve Technologies using Python, FastAPI, Streamlit, and Qdrant to enhance inter-departmental communication. The system leverages GPT (LLM) for context-aware responses, while Qdrant provides efficient vector search for retrieving role-specific information. FastAPI powers a lightweight, secure backend with JWT authentication for user access control, and Streamlit delivers an intuitive frontend for seamless interaction. This combination of tools enabled secure, role-based access to sensitive data, reduced operational bottlenecks, and significantly improved decision-making efficiency across departments.",
    images: [
      "src/assets/imgs/role base chatbot-1.png",
      "src/assets/imgs/role base chatbot-2.png",
    ],
    liveLink: "https://finsolve-chatbot.streamlit.app/",
    gitLink:
      "https://github.com/guavacoderepo/Role-based-chatbot/blob/main/readme.md",
  },

  {
    title: "Customer Retention Prediction and Monitoring",
    category: "AI/ML & Data Science",
    img: "src/assets/imgs/churn prediction-0.png",
    skills: [
      "Python",
      "FastAPI",
      "Scikit-learn",
      "Pandas",
      "Kubernetes",
      "Optuna",
      "Redis",
      "MLflow",
      "Prometheus",
      "Grafana",
      "Azure",
      "Docker",
    ],
    about:
      "Advanced churn prediction system with hyperparameter tuning and real-time model monitoring for proactive customer retention strategies.",
    description:
      "Developed a FastAPI microservice to predict users with a high probability of not returning using a Random Forest Classifier. Optuna was used for automated hyperparameter tuning to optimize model performance. Redis caches predictions and historical data for fast retrieval, while MLflow tracks experiments, model versions, and evaluation metrics for reproducibility. Prometheus and Grafana monitor model performance in real-time, visualizing metrics such as accuracy, precision, recall, F1-score, and detecting potential drift. Deployed on Azure to ensure scalability and high availability. This solution enables proactive retention strategies by identifying at-risk users, improving decision-making, and continuously optimizing predictive performance.",
    images: [],
    liveLink: "#",
    gitLink: "https://github.com/guavacoderepo/churn_prediction_app",
  },

  {
    title: "Chest X-Ray Disease Classification",
    category: "AI/ML & Data Science",
    img: "src/assets/imgs/xray app-0.png",
    skills: [
      "Python",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "OpenCV",
      "Flask",
      "CNN",
      "Ensemble Learning",
      "Pandas",
      "NumPy",
    ],
    about:
      "Deep learning system for thoracic disease classification using CNN and ensemble methods.",
    description:
      "The system was developed to classify chest X-ray images into six clinically relevant thoracic disease categories. A custom Convolutional Neural Network was implemented to extract complex spatial features from the images. An ensemble model, integrating the CNN with a Random Forest classifier and a Multilayer Perceptron (MLP), was employed to enhance predictive accuracy, robustness, and performance on underrepresented classes. Advanced data balancing and augmentation strategies were applied to mitigate class imbalance and improve model generalization. OpenCV was utilized for image preprocessing, while Pandas and NumPy facilitated efficient data handling and transformation. The trained models were deployed within a Flask web application to enable real-time predictions, providing medical practitioners with an accurate, reliable, and deployable AI-assisted diagnostic tool.",
    images: [],
    liveLink: "#",
    gitLink: "https://github.com/guavacoderepo/NIH-Chest-X-rays-Analysis",
  },
  {
    title: "Crime Analysis & Forecasting",
    category: "AI/ML & Data Science",
    img: "src/assets/imgs/crime app-0.png",
    skills: [
      "Python",
      "TensorFlow",
      "Scikit-learn",
      "Flask",
      "React",
      "spaCy",
      "Pandas",
      "NLP",
      "Data Visualization",
      "Web Scraping",
    ],
    about:
      "AI-driven system for analyzing crime trends and forecasting potential incidents using NLP and machine learning.",
    description:
      "The system was developed to analyze and forecast crime patterns in Nigeria by curating data from multiple Nigerian crime reporting websites. Web scraping techniques were applied to collect and consolidate crime reports, which were then preprocessed using Natural Language Processing methods including tokenization, stemming, and lemmatization. Predictive models were trained using TensorFlow and Scikit-learn, achieving 85% accuracy in identifying high-risk areas and temporal trends. The backend is powered by Flask, while a React-based frontend provides an interactive dashboard for visualizing crime hotspots, patterns, and forecasts. This solution enables law enforcement agencies and policymakers to make data-driven decisions, allocate resources effectively, and enhance community safety.",
    images: [
      "src/assets/imgs/crime app-1.png",
      "src/assets/imgs/crime app-2.png",
      "src/assets/imgs/crime app-3.png",
    ],
    liveLink: "https://criminalysis.vercel.app/",
    gitLink: "#",
  },
  {
    title: "Machine Learning Analysis on Developer Compensation",
    category: "AI/ML & Data Science",
    img: "https://via.placeholder.com/400x300/0ea5e9/ffffff?text=Dev+Compensation",
    skills: ["Python", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"],
    about:
      "Data-driven analysis and prediction of developer compensation trends.",
    description:
      "Applied clustering, classification, and regression models to Stack Overflow survey data to identify key salary predictors and trends. Achieved over 75% accuracy in predicting developer compensation levels.",
    images: [
      "https://via.placeholder.com/800x600/0284c7/ffffff?text=Salary+Analysis",
      "https://via.placeholder.com/800x600/0369a1/ffffff?text=Trends+Visualization",
    ],
    liveLink: "#",
    gitLink: "https://github.com/guavacoderepo/-COMP40721-COURSE-WORK",
  },
  {
    title: "Employee Mental Health Analysis",
    category: "AI/ML & Data Science",
    img: "https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Mental+Health+AI",
    skills: ["Python", "Pandas", "Matplotlib", "Seaborn", "Tkinter"],
    about: "Exploratory data analysis of employee mental health trends.",
    description:
      "Analyzed organizational datasets to identify correlations between workplace factors and employee wellbeing. Generated actionable insights to support mental health policies and corporate wellness programs.",
    images: [
      "https://via.placeholder.com/800x600/7c3aed/ffffff?text=Correlation+Matrix",
      "https://via.placeholder.com/800x600/6d28d9/ffffff?text=Wellbeing+Trends",
    ],
    liveLink: "#",
    gitLink: "https://github.com/guavacoderepo/SOFT40161-COURSE-WORK",
  },
  {
    title: "Zion Mart Real-Time ETL Pipeline",
    category: "Data Engineering",
    img: "https://via.placeholder.com/400x300/10b981/ffffff?text=ETL+Pipeline",
    skills: [
      "Azure SQL",
      "Azure Data Factory",
      "CDC",
      "Azure Event Hub",
      "Apache Kafka",
      "Azure Databricks",
      "Power BI",
    ],
    about:
      "Real-time data pipeline for e-commerce analytics using Medallion Architecture.",
    description:
      "Built a scalable ETL pipeline for Zion Mart integrating batch and streaming data with Azure Databricks and Kafka. Delivered live product recommendations and performance insights with Power BI visualizations.",
    images: [
      "https://via.placeholder.com/800x600/047857/ffffff?text=Pipeline+Architecture",
      "https://via.placeholder.com/800x600/065f46/ffffff?text=Power+BI+Dashboard",
    ],
    liveLink: "#",
    gitLink: "#",
  },
  {
    title: "Tracer Studies",
    category: "Software Engineering",
    img: "https://via.placeholder.com/400x300/06b6d4/ffffff?text=Tracer+Studies",
    skills: ["Python", "Pandas", "Seaborn", "Django", "Matplotlib", "MongoDB"],
    about:
      "Analytics backend for tracking student performance and career outcomes.",
    description:
      "Developed a Django-based analytics backend to track alumni career paths and job placement data. Enabled universities to correlate academic performance with employment outcomes for better policy planning.",
    images: [
      "https://via.placeholder.com/800x600/0e7490/ffffff?text=Student+Tracking",
      "https://via.placeholder.com/800x600/155e75/ffffff?text=Career+Analysis",
    ],
    liveLink: "https://app.tracer.ng/",
    gitLink: "#",
  },
  {
    title: "ACJMC",
    category: "Software Engineering",
    img: "https://via.placeholder.com/400x300/f87171/ffffff?text=ACJMC",
    skills: ["Python", "Pandas", "FastAPI", "Matplotlib", "MongoDB"],
    about: "Government case management system for tracking legal processes.",
    description:
      "Implemented the backend for ACJMC, supporting crime data analysis, CRUD operations, and real-time tracking of legal cases from arrest to custody. Streamlined judicial data access and reporting.",
    images: [
      "https://via.placeholder.com/800x600/b91c1c/ffffff?text=Case+Tracking",
      "https://via.placeholder.com/800x600/991b1b/ffffff?text=Analytics+Dashboard",
    ],
    liveLink: "https://crimiq.com/",
    gitLink: "#",
  },
  {
    title: "Case Law Repository System",
    category: "Software Engineering",
    img: "https://via.placeholder.com/400x300/0d9488/ffffff?text=Case+Law+Repository",
    skills: ["Python", "Pandas", "Flask", "Matplotlib", "OpenCV", "MongoDB"],
    about: "OCR-powered legal case search and analytics system.",
    description:
      "Developed a Flask-based system that digitizes and indexes case law documents using OCR, enabling keyword search and retrieval across large legal datasets for improved accessibility and research efficiency.",
    images: [
      "https://via.placeholder.com/800x600/134e4a/ffffff?text=OCR+Processing",
      "https://via.placeholder.com/800x600/115e59/ffffff?text=Search+Interface",
    ],
    liveLink: "https://caselaw.moj.dl.gov.ng/",
    gitLink: "#",
  },
];
