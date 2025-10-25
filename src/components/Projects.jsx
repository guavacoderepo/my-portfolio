import { useState } from "react";
import { X, ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { myProjects } from "../data/project-cards";
import ReactMarkdown from "react-markdown";


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const dataEngineeringProjects = myProjects.filter(p => p.category === "Data Engineering");
  const softwareEngineeringProjects = myProjects.filter(p => p.category === "Software Engineering");
  const aiProjects = myProjects.filter(p => p.category === "AI/ML & Data Science");

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const renderProjects = (projects) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project.id}
          onClick={() => openModal(project)}
          className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl hover:border-gray-300 transition-all duration-300 overflow-hidden cursor-pointer group"
        >
          <div className="relative overflow-hidden h-48">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="p-5">
            <h2 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors mb-3">
              {project.title}
            </h2>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.skills?.slice(0, 3).map((skill, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 bg-purple-50 text-purple-700 rounded-full font-medium"
                >
                  {skill}
                </span>
              ))}
              {project.skills?.length > 3 && (
                <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full font-medium">
                  +{project.skills.length - 3}
                </span>
              )}
            </div>
            <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
              {project.about}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <section id="projects" className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-gray-50 to-white">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Projects</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A showcase of my work across different domains
          </p>
        </div>

        {/* AI/ML Section */}
        {aiProjects.length > 0 && (
          <div className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">AI/ML & Data Science</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full" />
            </div>
            {renderProjects(aiProjects)}
          </div>
        )}

        {/* Data Engineering Section */}
        {dataEngineeringProjects.length > 0 && (
          <div className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Data Engineering</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-green-700 rounded-full" />
            </div>
            {renderProjects(dataEngineeringProjects)}
          </div>
        )}

        {/* Software Engineering Section */}
        {softwareEngineeringProjects.length > 0 && (
          <div className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Software Engineering</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full" />
            </div>
            {renderProjects(softwareEngineeringProjects)}
          </div>
        )}
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900">{selectedProject.title}</h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Image Gallery */}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="relative rounded-2xl overflow-hidden bg-gray-100">
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={`Screenshot ${currentImageIndex + 1}`}
                    className="w-full h-96 object-contain"
                  />
                  
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all"
                      >
                        <ChevronLeft className="w-6 h-6 text-gray-800" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all"
                      >
                        <ChevronRight className="w-6 h-6 text-gray-800" />
                      </button>
                      
                      {/* Image Indicators */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {selectedProject.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              idx === currentImageIndex
                                ? "bg-white w-8"
                                : "bg-white/50 hover:bg-white/75"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Skills */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.skills?.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-purple-50 text-purple-700 rounded-xl font-medium text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">About This Project</h3>
                <p className="text-gray-700 leading-relaxed text-base">

                   {selectedProject.description}

                </p>
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4">
                {selectedProject.liveLink && (
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all font-semibold shadow-lg hover:shadow-xl"
                  >
                    <ExternalLink className="w-5 h-5" />
                    View Live Demo
                  </a>
                )}
                {selectedProject.gitLink && (
                  <a
                    href={selectedProject.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all font-semibold shadow-lg hover:shadow-xl"
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;