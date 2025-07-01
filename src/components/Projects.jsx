import React from "react";
import { myProjects } from "../data/project-cards";

const Projects = () => {
  return (
    <main
      id="projects"
      className="mx-6 md:mx-24 mt-16 p-6 rounded-md"
    >
      {/* Title */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-semibold text-gray-800">Projects</h1>
        <p className="text-gray-600 mt-2">Here are some of my recent works</p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {myProjects.map((project) => (
          <section
            key={project.title}
            className="bg-white rounded-xl shadow-md border hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h2 className="text-l font-medium text-gray-800 hover:text-purple-700 transition">
                  {project.title}
                </h2>

                {/* Skills as Text Badges */}
                <div className="flex flex-wrap justify-center gap-2 my-3">
                {project.skills?.map((skill, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 bg-purple-100 text-purple-800 font-medium rounded-full"
                  >
                    {skill}
                  </span>
                ))}
                </div>

                <p className="text-gray-600 text-sm mt-2 leading-relaxed text-center">
                  {project.about}
                </p>
              </div>
            </a>
          </section>
        ))}
      </div>
    </main>
  );
};

export default Projects;
