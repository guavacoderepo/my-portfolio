import React from "react";
import { myProjects } from "../data/project-cards";

const Projects = () => {
  // Categorize projects
  const dataEngineeringProjects = myProjects.filter(p => p.category === "Data Engineering");
  const softwareEngineeringProjects = myProjects.filter(p => p.category === "Software Engineering");
  const aiProjects = myProjects.filter(p => p.category === "AI/ML & Data Science");

  const renderProjects = (projects) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {projects.map((project, index) => (
        <a
          key={index}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-xl shadow-md border hover:shadow-xl transition-all duration-300 overflow-hidden group"
        >
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="p-5 text-center">
            <h2 className="text-lg font-medium text-gray-800 group-hover:text-purple-700 transition">
              {project.title}
            </h2>
            <div className="flex flex-wrap justify-center gap-2 my-3">
              {project.skills?.map((skill, idx) => (
                <span
                  key={idx}
                  className="text-xs px-0.5 py-1 text-purple-800 font-normal"
                >
                  {skill}
                </span>
              ))}
            </div>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed">{project.about}</p>
          </div>
        </a>
      ))}
    </div>
  );

  return (
    <section id="projects" className="py-20 px-6 md:px-24 bg-gray-50">
      {/* Title */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800">Projects</h1>
        <p className="text-gray-500 mt-3 text-lg">
          A showcase of my work in different domains
        </p>
      </div>

      {/* AI / ML */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold text-purple-700 mb-6">AI/ML & Data Science</h2>
        {renderProjects(aiProjects)}
      </div>


      {/* Data Engineering */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold text-purple-700 mb-6">Data Engineering</h2>
        {renderProjects(dataEngineeringProjects)}
      </div>

      {/* Software Engineering */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold text-purple-700 mb-6">Software Engineering</h2>
        {renderProjects(softwareEngineeringProjects)}
      </div>
      
    </section>
  );
};

export default Projects;
