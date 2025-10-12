import chatbotImg from "../assets/images/chatbot.png";
import mentalhealthImg from "../assets/images/mentalhealth.png";
import devImg from "../assets/images/dev compensation.png";
import crimeImg from "../assets/images/crimeImg.png";
import tracerImg from "../assets/images/tvet.png";
import crimeIq from "../assets/images/crimeiq.png";
import caselaw from "../assets/images/caslaw.png";
import churn from "../assets/images/churn_pred.png"
import xray from "../assets/images/xray.png"
import elt from "../assets/images/etl pipeline.png"

export const myProjects = [
  {
    img: chatbotImg,
    title: "RAG-Based AI Chatbot for FinSolve Technologies",
    skills: [
      "Python",
      "LLM",
      "RAG",
      "FastAPI",
      "Streamlit",
      "SQL",
      "Docker",
      "Git",
    ],
    about: `Built a secure AI chatbot for FinSolve Technologies using Retrieval-Augmented Generation (RAG) with GPT language models and Qdrant, 
    enabling fast, role-based access to department-specific data and improving inter-department communication.`,
    link: "https://finsolve-chatbot.streamlit.app/",
    category: "AI/ML & Data Science",
  },
  {
    img: churn, // You can replace with a relevant image if available
    title: "Customer Retention Prediction System and Monitoring",
    skills: [
      "Python",
      "FastAPI",
      "Scikit-learn",
      "Pandas",
      "Redis",
      "MLflow",
      "Prometheus",
      "Grafana",
      "Azure",
      "Docker",
    ],
    about: `Built a FastAPI microservice to predict customer churn using Random Forest. Integrated Redis for caching, MLflow for model tracking, and Prometheus/Grafana for monitoring. Deployed on Azure for scalable, production-ready insights.`,
    link: "https://github.com/guavacoderepo/churn_prediction_app", // Replace with actual repo/link
    category: "AI/ML & Data Science",
  },
  {
    img: xray, // Replace with a relevant image if available
    title: "Chest X-Ray Disease Classification",
    skills: [
      "Python",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "OpenCV",
      "Pandas",
      "NumPy",
      "Flask",
      "CNN",
      "Ensemble Learning",
    ],
    about: `Developed a CNN and ensemble-based system to classify chest X-ray images into six thoracic diseases. Integrated into a Flask web app for real-time predictions, with balanced data and augmentation to improve accuracy and robustness.`,
    link: "https://github.com/guavacoderepo/NIH-Chest-X-rays-Analysis", // Replace with actual repo/link
    category: "AI/ML & Data Science",
  },

  {
    img: crimeImg,
    title: "Crime Analysis & Forecasting",
    skills: [
      "Python",
      "Flask",
      "spaCy",
      "Pandas",
      "TensorFlow",
      "Scikit-Learn",
      "Git",
    ],
    about: `Scraped Nigerian crime data, applied NLP preprocessing (tokenization, stemming, lemmatization), 
    and trained a model achieving over 85% accuracy to identify crime patterns that inform prevention
    strategies and optimize resource allocation.`,
    link: "https://criminalysis.vercel.app/",
    category: "AI/ML & Data Science",
  },
  {
    img: devImg,
    title: "Machine Learning Analysis on Developer Compensation",
    skills: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "Git",
    ],
    about: `Utilized machine learning techniques—clustering, classification, 
    and regression—on Stack Overflow survey data to analyze and predict developer salaries,
    achieving above 75% accuracy and revealing key compensation patterns.`,
    link: "https://github.com/guavacoderepo/-COMP40721-COURSE-WORK",
    category: "AI/ML & Data Science",
  },
  {
    img: mentalhealthImg,
    title: "Employee Mental Health Analysis",
    skills: ["Python", "Pandas", "Matplotlib", "Seaborn", "Tkinter", "Git"],
    about: `Conducted in-depth analysis of employee mental health data across organizations to uncover trends and correlations, 
    supporting improved mental health practices and workplace wellbeing.`,
    link: "https://github.com/guavacoderepo/SOFT40161-COURSE-WORK",
    category: "AI/ML & Data Science",
  },
  {
    img: elt, // Replace with a relevant image or diagram if available
    title: "Zion Mart Real-Time ETL Pipeline",
    skills: [
      "Azure SQL",
      "Azure Data Factory",
      "CDC",
      "Azure Event Hub",
      "Apache Kafka",
      "Azure Databricks",
      "Python",
      "Power BI",
      "Medallion Architecture",
      "Real-Time Analytics",
    ],
    about: `Designed and implemented a scalable ETL pipeline using Medallion Architecture (Bronze-Silver-Gold) to power real-time product recommendations and performance analytics for Zion Mart. Integrated batch and streaming data processing on Azure Databricks, with visualization via Power BI.`,
    link: "#",
    category: "Data Engineering",
  },

  {
    img: tracerImg,
    title: "Tracer Studies",
    skills: [
      "Python",
      "Pandas",
      "Seaborn",
      "Django",
      "Matplotlib",
      "MongoDB",
      "Git",
    ],
    about: `Developed an analytics backend to track student performance, activities, and career paths, mapping job placements to academic metrics for institutional planning and alumni engagement.`,
    link: "https://app.tracer.ng/",
    category: "Software Engineering",
  },
  {
    img: crimeIq,
    title: "ACJMC",
    skills: ["Python", "Pandas", "FastAPI", "Matplotlib", "MongoDB", "Git"],
    about: `Built the backend for ACJMC, a government case management system tracking legal processes from arrest to custody. Implemented crime data analysis, CRUD operations, and database integration.`,
    link: "https://crimiq.com/",
    category: "Software Engineering",
  },
  {
    img: caselaw,
    title: "Case Law Repository System",
    skills: [
      "Python",
      "Pandas",
      "Flask",
      "Matplotlib",
      "OpenCV",
      "MongoDB",
      "Git",
    ],
    about: `Developed the analytic backend and implemented OCR to enable keyword search across legal case judgment documents. Improved accessibility and retrieval of case law.`,
    link: "https://caselaw.moj.dl.gov.ng/",
    category: "Software Engineering",
  },
];
