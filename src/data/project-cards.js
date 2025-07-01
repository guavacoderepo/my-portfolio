import chatbotImg from "../assets/images/chatbot.png";
import mentalhealthImg from "../assets/images/mentalhealth.png";
import devImg from "../assets/images/dev.jpg";
import crimeImg from "../assets/images/crime.jpg";

export const myProjects = [
  {
    img: chatbotImg,
    title: "RAG-Based Role-Specific AI Chatbot for FinSolve Technologies",
    skills: ["Python", "Pandas", "Matplotlib", "Seaborn", "Tkinter", "GitHub"],
    about: `This is an AI-powered chatbot solution built for FinSolve 
      Technologies, designed to solve inter-departmental communication
      delays and data silos by providing secure, role-based access to
      information. Leveraging RAG (Retrieval-Augmented Generation), the
      chatbot uses OpenAI's GPT models and Qdrant to retrieve and generate
      department-specific insights on demand.`,
    link: " https://github.com/guavacoderepo/Role-based-chatbot",
  },
  {
    img: mentalhealthImg,
    title: "Employee Mental Health Analysis",
    skills: ["Python", "Pandas", "Matplotlib", "Seaborn", "Tkinter", "GitHub"],
    about: `This project delves into the analysis of mental health cases among employees across 
      various organizations. The project aims to uncover patterns and correlations that can
      inform better mental health practices and support systems within organizations.`,
    link: "https://github.com/guavacoderepo/SOFT40161-COURSE-WORK",
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
      "GitHub",
    ],
    about: `This project applies machine learning models to analyze and 
    predict developers' annual compensation using data from the Stack Overflow
    2024 Annual Developer Survey. The objectives include clustering developers
    based on compensation patterns, classifying them into high and low-income groups,
    and using regression analysis to predict their salaries.`,
    link: "https://github.com/guavacoderepo/-COMP40721-COURSE-WORK",
  },

  {
    img: crimeImg,
    title: "Crime Analysis & Forecasting",
    skills: ["Python", "Pandas", "Matplotlib", "Seaborn", "Tkinter", "GitHub"],
    about: `This project focuses on analyzing crime trends in Nigeria through data collected by 
      scraping multiple news websites. The objective is to identify patterns and relationships
      in criminal activities, providing insights that can guide law enforcement in improving crime
      prevention strategies and resource allocation.`,
    link: "https://criminalysis.vercel.app/",
  },
];
