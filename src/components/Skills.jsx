import React from "react";

const Skills = () => {
  const skills = [
    "Python",
    "Scikit-Learn",
    "TensorFlow",
    "Pandas",
    "NumPy",
    "LLM",
    "RAG",
    "Applied Statistics",
    "SQL",
    "NoSQL",
    "Flask",
    "FastAPI",
    "API Design",
    "Docker",
    "Azure",
    "Git",
    "MLflow",
    "Testing & Debugging",
    "Database Design",
    "Matplotlib",
    "Seaborn",
    "Technical Documentation",
    "Team Collaboration",
    "Problem-Solving",
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
