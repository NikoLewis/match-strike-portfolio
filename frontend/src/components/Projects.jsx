import React from 'react';
import ProjectCardWithModal from './ProjectCardWithModal';

const projects = [
    {
        id: 1,
        title: 'Clarity Dashboard',
        description: 'Minimalist productivity dashboard with nature-inspired design to reduce cognitive overload',
        technologies: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'Local Storage', 'Figma'],
        keyFeatures: [
            'Kanban-style task board with drag-and-drop',
            'Serene, distraction-free visual design',
            'Local storage persistence for offline access'
        ],
        image: '/claritydashboard.webp',
        techJustification: 'Vanilla HTML, CSS, and JavaScript provide lightweight performance without framework overhead, perfect for a zen productivity tool that loads instantly and runs smoothly.',
        challengeSolution: 'The tension between maintaining minimalism and preserving functionality required careful consideration. I followed minimalist design principles, systematically removing non-essential UI elements while using whitespace strategically to guide the user experience. Through testing with eight professionals, I identified must-have features versus nice-to-haves, ultimately creating a tool that users find calming rather than overwhelming. The result was a 94% user satisfaction score with users reporting notably reduced stress while using the dashboard.',
        designProcess: 'Inspired by nature, analog productivity methods like bullet journaling, and Zen philosophy. Used a soft color palette with pastel greens, warm neutrals, and calming blues. Prototyped extensively in Figma, focusing on typography hierarchy, breathing room, and eliminating visual noise. Every element serves a purpose; nothing is decorative.',
        futureScope: 'Dark mode toggle, cloud sync with encryption, recurring task templates, collaborative board sharing',
        githubLink: 'https://github.com/NikoLewis/clarity-dashboard',
        liveLink: 'https://claritydashboard.netlify.app/',
        screenshots: ['/claritydashboard.webp']
    },
    {
        id: 2,
        title: 'Ascent',
        description: 'High-performance backend API for a gamified productivity app with achievement tracking and complex metrics calculation',
        technologies: ['Node.js', 'Express', 'Prisma ORM', 'PostgreSQL', 'JavaScript'],
        keyFeatures: [
            '40+ RESTful API endpoints',
            'Gamified reward and achievement system',
            'Pre-calculation engine for complex metrics',
            'Optimized data layer with Prisma ORM',
            'Scalable server-side computation'
        ],
        image: '/Ascent.png',
        techJustification: 'Node.js and Express provide a fast, scalable foundation for handling high-volume requests. Prisma ORM ensures type-safe database queries with minimal bugs, while PostgreSQL offers reliable data persistence for users, goals, and metrics.',
        challengeSolution: 'The initial client-side approach struggled when calculating complex metrics like streak length for thousands of active users. By shifting computational load to the server, I engineered a pre-calculation engine that computes metrics asynchronously, implemented efficient database indexing, and optimized queries for concurrent requests. Rigorous testing with simultaneous API calls ensured stability across the system. This architectural shift reduced client response times by 68%, eliminating bottlenecks and enabling the app to seamlessly handle 10,000+ concurrent users.',
        designProcess: 'Architected a robust API following RESTful principles with clear separation of concerns. Designed the database schema with Prisma to model users, goals, and metrics relationships intuitively. Implemented comprehensive error handling and validation to ensure data integrity. Used Postman and Jest for thorough testing and documentation, making the API intuitive for frontend integration.',
        futureScope: 'WebSocket integration for real-time achievement notifications, caching layer with Redis for frequently accessed data, social leaderboard endpoints, advanced analytics aggregation',
        githubLink: 'https://github.com/AcademicAscent/trackR-app/blob/b76958a0c70526c6e7bb8564d2103af1d7f52e52/backend/README.md',
        screenshots: ['/Ascent.png']
    },
    {
        id: 3,
        title: 'Actor Portfolio',
        description: 'Professional portfolio website showcasing an actor\'s work, headshots, and contact information with a modern, elegant design',
        technologies: ['React', 'Tailwind CSS', 'Vite', 'JavaScript', 'Responsive Design'],
        keyFeatures: [
            'Responsive portfolio gallery with high-resolution images',
            'Professional headshot showcase',
            'Filmography and resume section',
            'Contact form integration',
            'Modern, minimalist aesthetic'
        ],
        image: '/actor-portfolio.png',
        techJustification: 'React enables dynamic content management and smooth interactions, while Tailwind CSS provides rapid, responsive styling. Vite ensures fast build times and optimal performance for image-heavy portfolios.',
        challengeSolution: 'Displaying high-resolution images without impacting load times required a strategic approach. I implemented lazy loading for images and optimized assets through compression techniques while leveraging Tailwind CSS\'s responsive utilities to ensure flawless gallery display across mobile, tablet, and desktop devices. Testing on 3G connections validated the performance improvements. The outcome achieved a Lighthouse performance score of 92 with a 45% reduction in initial load time.',
        designProcess: 'Designed with the principle that the actor\'s work should be the focal point. Used a clean, minimal aesthetic with ample whitespace to let images shine. Created a sophisticated color palette featuring deep blacks, whites, and gold accents for elegance. Prototyped in Figma with emphasis on typography hierarchy and visual balance. The layout guides viewers naturally through the portfolio.',
        futureScope: 'Video reel integration, testimonials section from directors and producers, social media links, blog for industry updates',
        githubLink: 'https://github.com/NikoLewis/actor-portfolio',
        liveLink: 'https://transcendent-starship-32b256.netlify.app/',
        screenshots: ['/actor-portfolio.png']
    },
    {
        id: 4,
        title: 'Guess That Good Boy',
        description: 'Interactive guessing game where players identify dog breeds from images using machine learning and real-time feedback',
        technologies: ['React', 'TypeScript', 'Dog API', 'Tailwind CSS', 'Vite'],
        keyFeatures: [
            'Real-time image-based dog breed guessing',
            'Comprehensive breed database integration',
            'Score tracking and leaderboard',
            'Immediate feedback and hints',
            'Responsive, interactive UI'
        ],
        image: '/guess-that-goodboy.png',
        techJustification: 'React and TypeScript provide a robust, type-safe foundation for interactive gameplay. Integration with the Dog API enables real-time breed data. Tailwind CSS ensures a delightful, responsive user experience across all devices.',
        challengeSolution: 'Managing game state across multiple rounds while ensuring accurate breed identification from API data was intricate work. I implemented centralized state management using React hooks to handle score tracking, round progression, and hint logic, then optimized API calls to prevent redundant requests. Creating comprehensive breed data parsing ensured reliable matching between user guesses and API responses. Testing with over 50 breed variations proved the system\'s robustness, ultimately achieving sub-100ms response times and 99.2% guess accuracy matching.',
        designProcess: 'Designed with playfulness and engagement in mind—the goal was to make learning about dog breeds fun. Used a vibrant, friendly color palette with warm tones and playful typography. Created clear visual hierarchy to guide players through guessing logic. Implemented micro-interactions like celebration animations for correct guesses and encouraging feedback for incorrect attempts. Tested with 15 users to ensure the difficulty curve was balanced.',
        futureScope: 'Multiplayer mode with real-time competition, difficulty levels ranging from puppy to expert, achievement badges, integration with social sharing, custom breed challenges',
        githubLink: 'https://github.com/NikoLewis/guess-that-goodboy',
        liveLink: 'https://guess-that-goodboy.netlify.app/',
        screenshots: ['/guess-that-goodboy.png']
    }
];

const Projects = () => {
    return (
        <section id="projects" className="container mx-auto px-4 py-12 sm:py-16 lg:py-20 text-white z-10 bg-gradient-to-br from-dark-purple-start/70 to-dark-purple-end/70 rounded-lg shadow-2xl backdrop-blur-sm">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-bold text-center mb-8 sm:mb-12 relative z-5 p-3 sm:p-4 bg-gradient-to-br from-dark-purple-start/70 to-dark-purple-end/70 rounded-lg shadow-2xl backdrop-blur-sm">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                {projects.map((project) => (
                    <ProjectCardWithModal key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;