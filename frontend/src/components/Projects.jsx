import React from 'react';
import {FaGithub} from 'react-icons/fa';
import {HiOutlineExternalLink} from 'react-icons/hi'


// go into significant detail on just 2 projects quality over quantity
//

// test project data

const projects = [
    {
        id: 1,
        title: 'PAWsitive App',
        description: 'Developed an Android mobile application using Kotlin and Android Studio. The app empowers animal care professionals to promote their services, schedule clients, receive payments, and solicit reviews, operating independently of third-party platforms like Rover.com or Wag.',
        technologies: ['Kotlin', 'Android Studio', 'App Design', 'Firebase'],
        image: '/PAWsitive.png',
        githubLink: '#',
        liveLink: '#',
    },
    {
        id: 2,
        title: 'Tastebuddies',
        description: 'A real-time web application allowing multiple users to collaboratively create and edit recipes. Features include real-time synchronization, recipe search using RediSearch, and a favoriting system, all built with React, Node.js, and Redis.',
        technologies: ['React', 'Node.js', 'Redis Stack', 'Socket.io', 'Tailwind CSS'],
        image: '/Tastebuddies.png',
        githubLink: '#',
        liveLink: '#',
    },
    {
        id: 3,
        title: 'Clarity Dashboard',
        description: 'A calming and minimalist dashboard blending analog productivity methods with nature-inspired design. Built with Kanban principles and a focus on serene balance, it provides a space for focus without overstimulation.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Figma'],
        image: '/claritydashboard.webp',
        githubLink: 'https://claritydashboard.netlify.app/',
        liveLink: 'https://your-username.github.io/clarity-dashboard',
    },
    {
        id: 4,
        title: 'Ascent',
        description: 'Gamified study and productivity app allows users to commit to goals, earn achievements, and view data visualizations to monitor their progress over time.',
        technologies: ['Javascript', 'Node', 'React', 'Prisma', 'Supabase', 'Render'],
        image: '/Ascent.png',
        githubLink: 'https://github.com/AcademicAscent/trackR-app',
        liveLink: '#',
    }
];



const ProjectCard = ({ project }) => (
    <div className="bg-gray-800 bg-opacity-70 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
        <div className="p-6">
            <h3 className="text-3xl font-montserrat font-semibold text-accent-cyan mb-3">{project.title}</h3>
            <p className="text-gray-300 text-lg font-lato mb-4 line-clamp-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-dark-purple-start text-accent-pink text-xs font-montserrat px-3 py-1 rounded-full border border-accent-pink">
            {tech}
          </span>
                ))}
            </div>
            <div className="flex space-x-4">
                {project.githubLink && (
                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-dark-purple-start text-accent-pink rounded-md font-bold hover:bg-accent-pink hover:text-dark-purple-start transition-colors duration-300"
                    >
                        <FaGithub />
                        <span>Code</span>
                    </a>
                )}
                {project.liveLink && project.liveLink !== '#' && (
                    <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-accent-cyan text-dark-purple-start rounded-md font-bold hover:bg-accent-pink transition-colors duration-300"
                    >
                        <HiOutlineExternalLink />
                        <span>Live Demo</span>
                    </a>
                )}
            </div>
        </div>
    </div>
);


function Projects() {
    return (
        <section id="projects" className="container mx-auto px-4 py-20 text-white">
            <h2 className="text-5xl font-montserrat font-bold text-center mb-12">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );

}

export default Projects;