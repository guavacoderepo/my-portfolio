import React from "react";

const Skills = () => {
  const skills = [
    // Programming & Data Science
    "Python",
    "R",
    "SQL",
    "NoSQL",
    "Pandas",
    "NumPy",
    "Scikit-Learn",
    "TensorFlow",
    "PyTorch",
    "OpenCV",
    "LLM",
    "RAG",
    "NLP",
    "Statistics",
    "Matplotlib",
    "Seaborn",

    // Web & API Development
    "Flask",
    "FastAPI",
    "Django",
    "Node.js",
    "Express.js",
    "React.js",
    "TypeScript",
    "JavaScript",
    "API Design",
    "RESTful APIs",
    "GraphQL",
    "Docker",
    "Kubernetes",
    "Helm",
    "Azure",
    "AWS",
    "Redis",
    "PostgreSQL",
    "MongoDB",
    "MSSQL",
    "MySQL",
    "SQLAlchemy",

    // ML Lifecycle & DevOps
    "MLflow",
    "CI/CD",
    "Git",
    "GitHub Actions",
    "Terraform",
    "Serverless",
    "Airflow",
    "Prefect",
    "Dagster",

    // Testing & QA
    "PyTest",
    "Selenium",
    "Playwright",
    "Cucumber",
    "BDD",
    "TDD",
    "A/B Testing",

    // Monitoring & Observability
    "Grafana",
    "Prometheus",
    "Loki",

    // Architectures & Design
    "Microservices",
    "RESTful APIs",
    "OOP",
    "SDLC",
    
    // Soft Skills
    "Agile",
    "Mentorship",
    "Teamwork",
    "Debugging"
  ];


  return (
    <section id="skills" className="mt-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-900">Skills</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="px-4 py-1 text-gray-700 border border-gray-300 rounded-full text-sm select-none"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
