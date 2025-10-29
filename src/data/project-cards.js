import ai_agent0 from "../assets/imgs/ai agent-0.png";
import ai_agent1 from "../assets/imgs/ai agent-1.png";
import ai_agent2 from "../assets/imgs/ai agent-2.png";
import ai_agent3 from "../assets/imgs/ai agent-3.png";
import ai_agent4 from "../assets/imgs/ai agent-4.png";
import role_base from "../assets/imgs/role base chatbot.png";
import role_base0 from "../assets/imgs/role base chatbot-0.png";
import role_base1 from "../assets/imgs/role base chatbot-1.png";
import role_base2 from "../assets/imgs/role base chatbot-2.png";
import churn_prediction0 from "../assets/imgs/churn prediction-0.png";
import xray_app0 from "../assets/imgs/xray app-0.png";
import crime_app from "../assets/imgs/crime app.png";
import crime_app0 from "../assets/imgs/crime app-0.png";
import crime_app1 from "../assets/imgs/crime app-1.png";
import crime_app2 from "../assets/imgs/crime app-2.png";
import crime_app3 from "../assets/imgs/crime app-3.png";
import ml_compen0 from "../assets/imgs/ml_salary-0.png";
import ml_compen1 from "../assets/imgs/ml_salary-1.png";
import ml_compen2 from "../assets/imgs/ml_salary-2.png";
import ml_compen3 from "../assets/imgs/ml_salary-3.png";
import mental_health0 from "../assets/imgs/mental_health-0.png";
import mental_health1 from "../assets/imgs/mental_health-1.png";
import elt_pipeline from "../assets/imgs/etl_pipeline.png";
import elt_pipeline0 from "../assets/imgs/etl_pipeline-0.png";
import elt_pipeline1 from "../assets/imgs/etl_pipeline-1.png";
import elt_pipeline2 from "../assets/imgs/etl_pipeline-2.png";
import elt_pipeline3 from "../assets/imgs/etl_pipeline-3.png";
import crimeiq from "../assets/imgs/crimeiq.png";
import caselaw from "../assets/imgs/caselaw.png";
import tvet from "../assets/imgs/tvet.png";
import stemhub1 from "../assets/imgs/stemhub-0.png";
import stemhub0 from "../assets/imgs/stemhub-1.png";
import ideas0 from "../assets/imgs/ideas-0.png"
import ideas1 from "../assets/imgs/ideas-1.png";
import ideas2 from "../assets/imgs/ideas-2.png";

export const myProjects = [
  {
    title: "STEMHub Learning Platform",
    category: "AI/ML & Data Science",
    img: stemhub0,
    skills: [
      "Python",
      "FastAPI",
      "React",
      "RAG",
      "LLM",
      "Prompt Engineering",
      "HuggingFace",
      "SQL",
      "PostgreSQL",
      "Qdrant",
      "Microsoft Azure",
    ],
    about:
      "STEMHub is a personalized and adaptive AI-powered STEM learning platform that makes high-quality education accessible to Pidgin-English speaking students and underserved communities worldwide.",
    description:
      "STEMHub uses a fine-tuned Pidgin-English LLM to deliver personalized and adaptive STEM lessons that adjust to each student's learning pace and understanding. The platform employs a RAG framework with Qdrant vector database to provide internationalized curriculum content from Western educational sources. It automatically generates assessments and provides personalized feedback, tracks student performance, and offers actionable insights for educators. Built with Python, FastAPI, React, and PostgreSQL, and deployed on Microsoft Azure, STEMHub ensures scalable, secure, and high-performance AI learning experiences, empowering students with tailored educational opportunities and bridging access gaps in underserved regions.",
    images: [stemhub1],
    liveLink: "https://stemhub-learning.com/",
    gitLink: null,
    huggingfaceLink: "https://huggingface.co/Guavacoderepo/gclm-3b-pidgin",
  },
  {
    title: "Zion Mart Agentic Customer Support",
    category: "AI/ML & Data Science",
    img: ai_agent0,
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
      "The Zion Mart Agentic Customer Support System is an AI-driven, multi-agent framework designed to automate customer support, order management, and enquiry resolution in an e-commerce environment. At its core, the system employs LangGraph and LangChain to orchestrate autonomous agents within a graph-based workflow. Each agent specializes in distinct tasks—such as intent understanding, knowledge retrieval, or order processing—and collaboratively communicates under the supervision of a central coordinator agent. Using Retrieval-Augmented Generation (RAG), the agents ground responses in Zion Mart's internal data sources to ensure factual accuracy and contextual relevance. The system is built with Python and integrates FastAPI, SQLAlchemy, and PostgreSQL for scalable data handling and robust API interaction. Deployed on Microsoft Azure, it leverages cloud reliability and performance for real-time, intelligent support operations, enhancing user experience and operational efficiency across the customer service pipeline.",
    images: [ai_agent1, ai_agent2, ai_agent3, ai_agent4],
    liveLink: "https://agentic-zionmart-client.vercel.app/",
    gitLink: "https://github.com/guavacoderepo/Zionmart-agent-server",
    huggingfaceLink: null,
  },
  {
    title: "RAG-Based AI Chatbot for FinSolve Technologies",
    category: "AI/ML & Data Science",
    img: role_base,
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
    images: [role_base0, role_base1, role_base2],
    liveLink: "https://finsolve-chatbot.streamlit.app/",
    gitLink:
      "https://github.com/guavacoderepo/Role-based-chatbot/blob/main/readme.md",
    huggingfaceLink: null,
  },

  {
    title: "Customer Retention Prediction and Monitoring",
    category: "AI/ML & Data Science",
    img: churn_prediction0,
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
    liveLink: null,
    gitLink: "https://github.com/guavacoderepo/churn_prediction_app",
    huggingfaceLink: null,
  },

  {
    title: "Chest X-Ray Disease Classification",
    category: "AI/ML & Data Science",
    img: xray_app0,
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
    liveLink: null,
    gitLink: "https://github.com/guavacoderepo/NIH-Chest-X-rays-Analysis",
    huggingfaceLink: null,
  },
  {
    title: "Crime Analysis & Forecasting",
    category: "AI/ML & Data Science",
    img: crime_app,
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
    images: [crime_app0, crime_app1, crime_app2, crime_app3],
    liveLink: "https://criminalysis.vercel.app/",
    gitLink: null,
    huggingfaceLink: null,
  },
  {
    title: "Machine Learning Analysis on Developer Compensation",
    category: "AI/ML & Data Science",
    img: ml_compen0,
    skills: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "XGBoost",
      "SMOTE",
      "Data Visualization",
    ],
    about:
      "Data-driven analysis and prediction of developer compensation trends using machine learning.",
    description:
      "This project analyzed developer compensation trends using the Stack Overflow 2024 Annual Developer Survey dataset. Data preprocessing, exploratory data analysis, and feature engineering were conducted to identify key predictors such as experience, industry, country, technical skills, and work style. Clustering analysis using K-Means uncovered patterns in developer salary groups, while classification models including Random Forest, Logistic Regression, and XGBoost were applied to distinguish high-income and low-income developers. Regression models, including Random Forest and Gradient Boosting, were used to predict exact annual salaries, with careful handling of outliers and skewed distributions to improve accuracy. SMOTE and class-weight adjustments addressed imbalanced salary categories. Visualizations using Matplotlib and Seaborn were employed to support insights and trends discovery. The study provides actionable intelligence for developers, recruiters, and HR managers to inform career planning, compensation benchmarking, and talent management.",
    images: [ml_compen1, ml_compen2, ml_compen3],
    liveLink: null,
    gitLink: "https://github.com/guavacoderepo/Developers-Compensation-2024",
    huggingfaceLink: null,
  },

  {
    title: "Employee Mental Health Analysis",
    category: "AI/ML & Data Science",
    img: mental_health0,
    skills: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Tkinter",
      "Data Visualization",
      "EDA",
    ],
    about:
      "Exploratory data analysis of employee mental health trends and workplace factors.",
    description:
      "This project analyzed employee mental health survey data to identify patterns and correlations between workplace factors and employee wellbeing. The dataset was curated from Kaggle and contained responses from employees across various organizations. Data preprocessing included handling missing values, duplicates, and erroneous entries, as well as feature selection for the most relevant columns. Exploratory data analysis was conducted to explore distributions by gender, region, family history, and treatment status. Visualizations using Matplotlib and Seaborn highlighted key trends, while insights informed recommendations for corporate wellness programs and mental health policies. The analysis provides organizations with actionable intelligence to enhance employee support, reduce workplace stress, and promote mental well-being.",
    images: [mental_health1],
    liveLink: null,
    gitLink: "https://github.com/guavacoderepo/Employee-Mental-Health-Analysis",
    huggingfaceLink: null,
  },

  {
    title: "Zion Mart Real-Time ETL Pipeline",
    category: "Data Engineering",
    img: elt_pipeline,
    skills: [
      "Azure SQL",
      "Azure Data Factory",
      "Change Data Capture (CDC)",
      "Azure Event Hub",
      "Apache Kafka",
      "Azure Databricks",
      "Power BI",
      "Real-Time Analytics",
      "Medallion Architecture",
    ],
    about:
      "Real-time ETL pipeline enabling live analytics and product recommendations for e-commerce.",
    description:
      "This project involved designing and implementing a scalable real-time ETL pipeline for Zion Mart using Medallion Architecture. Data from multiple sources, including transactional and streaming events, was ingested using Azure Data Factory, CDC, and Azure Event Hub, while Apache Kafka handled high-throughput streaming. Azure Databricks was leveraged for batch and streaming transformations, ensuring clean, reliable, and enriched data for analytics. The processed data powered real-time dashboards and live product recommendation features via Power BI, enabling business teams to monitor performance, track customer behavior, and make informed decisions. The pipeline is fully scalable, fault-tolerant, and optimized for high-volume e-commerce operations.",
    images: [elt_pipeline0, elt_pipeline1, elt_pipeline2, elt_pipeline3],
    liveLink: null,
    gitLink: null,
    huggingfaceLink: null,
  },
  {
    title: "IDEAS TVET Skills Development Platform",
    category: "Software Engineering",
    img: ideas0,
    skills: [
      "Node.js",
      "Express",
      "TypeScript",
      "SQL",
      "PostgreSQL",
      "REST APIs",
      "Data Analytics",
    ],
    about:
      "The IDEAS Project is a Nigerian government initiative, supported by the World Bank, aimed at improving technical and vocational education and training (TVET) across Nigeria, enhancing skills acquisition and labour market relevance.",
    description:
      "The IDEAS platform leverages technology to enhance skills acquisition in Nigeria through a comprehensive approach, integrating formal TVET systems with industry involvement for better labour market fit. It supports quality informal apprenticeship training, tracks learner progress, and strengthens teaching resources and management capacities. The system implements Nigerian government policy and regulatory reforms, including the NSQF and Sector Skills Councils. Built with Node.js, Express, and TypeScript, the platform ensures scalable, secure, and high-performance solutions to empower learners and educators across the country.",
    images: [ideas1, ideas2],
    liveLink: "https://ideasprojectng.com/",
    gitLink: null,
    huggingfaceLink: null,
  },
  {
    title: "Tracer Studies",
    category: "Software Engineering",
    img: tvet,
    skills: [
      "Python",
      "Pandas",
      "Seaborn",
      "Django",
      "Matplotlib",
      "MongoDB",
      "Data Analytics",
      "Backend Development",
    ],
    about:
      "Analytics backend system for monitoring alumni career outcomes and academic performance correlations.",
    description:
      "This project involved developing a Django-based analytics backend to track student academic performance and post-graduation career outcomes. Data from alumni surveys and institutional records was processed using Pandas, visualized with Matplotlib and Seaborn, and stored in MongoDB for flexible, scalable querying. The system enables universities to identify patterns between academic achievement and employment outcomes, supporting evidence-based policy decisions, program evaluation, and career guidance initiatives. By providing actionable insights into student trajectories, the platform assists institutions in improving curriculum relevance, career support services, and overall graduate employability.",
    images: [tvet],
    liveLink: "https://app.tracer.ng/",
    gitLink: null,
    huggingfaceLink: null,
  },

  {
    title: "ACJMC",
    category: "Software Engineering",
    img: crimeiq,
    skills: [
      "Python",
      "Pandas",
      "FastAPI",
      "Matplotlib",
      "MongoDB",
      "Backend Development",
      "Data Analytics",
      "Real-Time Tracking",
    ],
    about:
      "Government case management backend system for monitoring legal processes and crime data.",
    description:
      "This project involved developing the backend system for ACJMC, a government case management platform designed to monitor and manage legal proceedings. The system supports CRUD operations on cases, real-time tracking of legal processes from arrest to custody, and crime data analysis. Data is processed using Pandas, visualized with Matplotlib for insights, and stored in MongoDB for scalable querying. By streamlining access to judicial data and enabling comprehensive reporting, the platform enhances operational efficiency, decision-making, and transparency within the justice system.",
    images: [crimeiq],
    liveLink: "https://crimiq.com/",
    gitLink: null,
    huggingfaceLink: null,
  },

  {
    title: "Case Law Repository System",
    category: "Software Engineering",
    img: caselaw,
    skills: [
      "Python",
      "Pandas",
      "Flask",
      "Matplotlib",
      "OpenCV",
      "MongoDB",
      "OCR",
      "Backend Development",
      "Data Analytics",
    ],
    about:
      "OCR-powered legal case management and search system for efficient document retrieval.",
    description:
      "This project involved developing a Flask-based system that digitizes, indexes, and analyzes legal case documents. An OCR module was integrated to extract text from scanned case files, enabling precise keyword-based searches across large datasets. The system processes and organizes legal documents using Pandas, stores structured data in MongoDB for efficient querying, and provides visual insights through Matplotlib. By combining OCR, searchable indexing, and analytics, the platform improves accessibility, research efficiency, and decision-making for legal professionals and researchers.",
    images: [caselaw],
    liveLink: "https://caselaw.moj.dl.gov.ng/",
    gitLink: null,
    huggingfaceLink: null,
  },
];
