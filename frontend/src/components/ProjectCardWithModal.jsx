import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';

const ProjectCardWithModal = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <div className="bg-gray-800 bg-opacity-70 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col">
        <img src={project.image} alt={project.title} className="w-full h-40 sm:h-56 object-cover" />
        <div className="p-4 sm:p-6 flex flex-col flex-grow">
          <h3 className="text-2xl sm:text-3xl font-montserrat font-semibold text-accent-cyan mb-2 sm:mb-3 line-clamp-2">{project.title}</h3>
          <p className="text-gray-300 text-sm sm:text-lg font-lato mb-3 sm:mb-4 line-clamp-2">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
            {project.technologies.map((tech, index) => (
              <span key={index} className="bg-dark-purple-start text-accent-pink text-xs font-montserrat px-2 sm:px-3 py-1 rounded-full border border-accent-pink">
                {tech}
              </span>
            ))}
          </div>
          <div className="mb-4 sm:mb-6">
            <p className="text-xs sm:text-sm text-accent-cyan font-semibold mb-2">Key Features:</p>
            <ul className="text-xs sm:text-sm text-gray-300 space-y-1">
              {project.keyFeatures?.slice(0, 2).map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent-pink mr-2 flex-shrink-0">•</span>
                  <span className="line-clamp-1">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4 sm:mb-6 flex gap-2 flex-wrap">
            {project.liveLink && project.liveLink !== '#' && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs sm:text-sm px-3 py-1 bg-accent-cyan text-dark-purple-start rounded-md font-bold hover:bg-accent-pink transition-colors duration-300"
              >
                <HiOutlineExternalLink size={14} />
                <span>Live Demo</span>
              </a>
            )}
            {project.githubLink && project.githubLink !== '#' && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs sm:text-sm px-3 py-1 bg-dark-purple-start text-accent-pink rounded-md font-bold hover:bg-accent-pink hover:text-dark-purple-start transition-colors duration-300 border border-accent-pink"
              >
                <FaGithub size={14} />
                <span>GitHub</span>
              </a>
            )}
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-auto px-4 py-2 bg-accent-cyan text-dark-purple-start rounded-md font-bold hover:bg-accent-pink transition-colors duration-300 w-full text-sm sm:text-base"
          >
            Read More
          </button>
        </div>
      </div>
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <div className="bg-gray-900 rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-accent-cyan/30">
            <div className="sticky top-0 flex justify-between items-start p-4 sm:p-6 bg-gradient-to-r from-dark-purple-start to-dark-purple-end border-b border-accent-cyan/30 gap-4">
              <h2 className="text-2xl sm:text-3xl font-montserrat font-bold text-accent-cyan flex-1 line-clamp-2">{project.title}</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-accent-pink hover:text-accent-cyan transition-colors duration-300 flex-shrink-0"
              >
                <MdClose size={28} />
              </button>
            </div>
            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 text-gray-200">
              <div>
                <h3 className="text-xl sm:text-2xl font-montserrat font-semibold text-accent-cyan mb-2 sm:mb-3">Project Goal</h3>
                <p className="text-base sm:text-lg font-lato leading-relaxed">{project.description}</p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-montserrat font-semibold text-accent-cyan mb-2 sm:mb-3">Key Features</h3>
                <ul className="space-y-2 text-base sm:text-lg font-lato">
                  {project.keyFeatures?.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-accent-pink mr-3 flex-shrink-0">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-montserrat font-semibold text-accent-cyan mb-2 sm:mb-3">Tech Stack</h3>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-dark-purple-start text-accent-pink text-xs sm:text-sm font-montserrat px-3 sm:px-4 py-2 rounded-full border border-accent-cyan/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-base sm:text-lg font-lato italic text-indigo-300">{project.techJustification}</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-montserrat font-semibold text-accent-cyan mb-2 sm:mb-3">Challenge & Solution</h3>
                <div className="bg-gray-800 bg-opacity-50 p-3 sm:p-4 rounded-lg border border-accent-pink/20">
                  <p className="text-base sm:text-lg font-lato leading-relaxed">{project.challengeSolution}</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-montserrat font-semibold text-accent-cyan mb-2 sm:mb-3">Design Process</h3>
                <div className="bg-gray-800 bg-opacity-50 p-3 sm:p-4 rounded-lg border border-accent-cyan/20">
                  <p className="text-base sm:text-lg font-lato leading-relaxed">{project.designProcess}</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-montserrat font-semibold text-accent-cyan mb-2 sm:mb-3">Future Scope</h3>
                <p className="text-base sm:text-lg font-lato">{project.futureScope || 'NA'}</p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-montserrat font-semibold text-accent-cyan mb-2 sm:mb-3">Live Demo</h3>
                {project.liveLink && project.liveLink !== '#' ? (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-accent-cyan text-dark-purple-start rounded-md font-bold hover:bg-accent-pink transition-colors duration-300 text-sm sm:text-base"
                  >
                    <HiOutlineExternalLink size={20} />
                    <span>View Live Demo</span>
                  </a>
                ) : (
                  <p className="text-gray-400 italic">Demo link coming soon</p>
                )}
              </div>
              {project.screenshots && project.screenshots.length > 0 && (
                <div>
                  <h3 className="text-xl sm:text-2xl font-montserrat font-semibold text-accent-cyan mb-2 sm:mb-3">Screenshots</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    {project.screenshots.map((screenshot, index) => (
                      <img
                        key={index}
                        src={screenshot}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="rounded-lg border border-accent-cyan/30 hover:border-accent-pink transition-colors duration-300 w-full h-auto"
                      />
                    ))}
                  </div>
                </div>
              )}
              <div className="flex justify-center pt-4 sm:pt-6 border-t border-gray-700">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2 bg-accent-cyan text-dark-purple-start rounded-md font-bold hover:bg-accent-pink transition-colors duration-300 text-sm sm:text-base"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCardWithModal;