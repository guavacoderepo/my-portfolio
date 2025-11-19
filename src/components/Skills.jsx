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
    "Statistics",
    "Matplotlib",
    "Seaborn",
    "NLP",
    "OpenCV",
    "LLM",
    "RAG",

    // Web & API Development
    "Flask",
    "FastAPI",
    "API Design",
    "RESTful APIs",
    "Docker",
    "Kubernetes",
    "Azure",
    "AWS",
    "Redis",

    // ML Lifecycle & DevOps
    "MLflow",
    "CI/CD",
    "Git",
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
