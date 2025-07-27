import chatbotImg from "../assets/images/chatbot.png";
import mentalhealthImg from "../assets/images/mentalhealth.png";
import devImg from "../assets/images/dev.jpg";
import crimeImg from "../assets/images/crimeImg.png";
import tracerImg from "../assets/images/tvet.png"
import crimeIq from "../assets/images/crimeiq.png"
import caselaw from "../assets/images/caslaw.png"

export const myProjects = [
  {
    img: chatbotImg,
    title: "RAG-Based Role-Specific AI Chatbot for FinSolve Technologies",
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
    link: " https://github.com/guavacoderepo/Role-based-chatbot",
  },
  {
    img: crimeImg,
    title: "Crime Analysis & Forecasting",
    skills: ["Python", "spaCy", "Pandas", "TensorFlow", "Scikit-Learn", "Git"],
    about: `Scraped Nigerian crime data, applied NLP preprocessing (tokenization, stemming, lemmatization), 
    and trained a model achieving over 85% accuracy to identify crime patterns that inform prevention
    strategies and optimize resource allocation.`,
    link: "https://criminalysis.vercel.app/",
  },
  {
    img: devImg,
    title: `Machine Learning Analysis on Developer Compensation`,
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
  },
  {
    img: mentalhealthImg,
    title: "Employee Mental Health Analysis",
    skills: ["Python", "Pandas", "Matplotlib", "Seaborn", "Tkinter", "Git"],
    about: `Conducted in-depth analysis of employee mental health data across organizations to uncover trends and correlations, 
    supporting improved mental health practices and workplace wellbeing.`,
    link: "https://github.com/guavacoderepo/SOFT40161-COURSE-WORK",
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
  },
  {
    img: crimeIq,
    title: "ACJMC",
    skills: ["Python", "Pandas", "Matplotlib", "MongoDB", "Git"],
    about: `I built the backend for ACJMC, a government case management system tracking legal processes from arrest to custody. I implemented crime data analysis, CRUD operations, and database integration to support core features.`,
    link: "https://crimiq.com/",
  },

  {
    img: caselaw,
    title: "Case Law Repository System",
    skills: ["Python", "Pandas", "Matplotlib", "OpenCV", "MongoDB", "Git"],
    about: `I developed the analytic backend and implemented Optical Character Recognition (OCR) to enable keyword search across legal case judgment documents. This improved accessibility and retrieval of case law documents for legal practitioners and researchers.`,
    link: "https://caselaw.moj.dl.gov.ng/",
  },
];
