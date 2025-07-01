import chatbotImg from "../assets/images/chatbot.png";
import mentalhealthImg from "../assets/images/mentalhealth.png";
import devImg from "../assets/images/dev.jpg";
import crimeImg from "../assets/images/crime.jpg";

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
];
