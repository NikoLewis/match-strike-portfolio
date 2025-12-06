import React from 'react';

const educationData = [
    {
        id: 1,
        organization: 'The Knowledge House',
        logo: '/the-knowledge-house-logo.png',
        degree: 'Computer Software Engineering',
        duration: 'March 2025 – December 2025',
        description: 'Immersive full-stack web development program with emphasis on practical problem-solving, inclusive design practices, and real-world application development for social impact.',
        highlights: [
            'Completed comprehensive full-stack development training, emphasizing practical technical problem-solving and the application of engineering principles.',
            'Led team projects under the Prometheus program, successfully building, managing, and upgrading web applications for non-profits using Agile frameworks.',
            'Applied design thinking to technical challenges, prioritizing accessibility and inclusion in web application architecture and development.'
        ],
        skills: ['Full-Stack Development', 'Agile', 'Design Thinking', 'Web Applications', 'Non-profit Technology']
    },
    {
        id: 3,
        organization: 'Silver Linings CloudOps Fellowship',
        logo: '/silver-linings-logo.png',
        degree: 'Information Technology',
        duration: 'February 2021 – July 2021',
        description: '22-week intensive training course taught by AWS Solution Architects, Technical Account Managers, and Training & Certification instructors.',
        highlights: [
            'Only fellow in cohort to earn AWS SysOps Associate certification during the program.',
            'Four core segments: 1) AWS Fundamentals, 2) AWS SysOps, 3) Extensive hands-on labs, 4) Real-world cloud support cases and drills.',
            'Learned cloud operations and support from instructors from large enterprises with IT cloud strategy expertise.'
        ],
        skills: ['Amazon Web Services (AWS)', 'AWS SysOps', 'Solution Architecture', 'Cloud Operations', 'Cloud Fundamentals']
    },
    {
        id: 2,
        organization: 'Pursuit',
        logo: '/pursuit-logo.png',
        degree: 'Software Engineer Fellow, Computer Software Engineering',
        duration: 'July 2016 – July 2020',
        description: 'Pursuit is a competitive 4-year Google-funded software engineering fellowship with a 4% acceptance rate. Graduates have been hired as developers at leading companies such as Microsoft, LinkedIn, Pinterest, Spotify, and Kickstarter.',
        highlights: [
            'Performed developer relations duties demonstrating technical mastery, professional skills, and industry fluency through content creation, blogging, representing the organization at events, and speaking at panels, talks, and demos.',
            'Intensive project-based full-stack web development curriculum designed by engineers from Vice, Facebook, Yahoo, Artsy, and LinkedIn.',
            'Mastered core technologies: Node.js, JavaScript, Express, React/Redux, PostgreSQL, HTML, CSS, Git/GitHub, TDD, webpack, and data structures & algorithms.'
        ],
        skills: ['React', 'Node.js', 'JavaScript', 'PostgreSQL', 'Full-Stack Development', 'TDD', 'Product Management']
    }
];

const EducationCard = ({ education }) => {
    return (
        <div className="bg-gray-800 bg-opacity-70 p-6 sm:p-8 rounded-lg shadow-xl border border-accent-pink/30 transform transition-all duration-300 hover:shadow-2xl hover:border-accent-cyan/50 flex flex-col h-full">
            <div className="mb-4 sm:mb-6">
                <h3 className="text-2xl sm:text-3xl font-montserrat font-bold text-accent-cyan mb-2">{education.organization}</h3>
                <p className="text-accent-pink text-sm sm:text-base font-lato">{education.degree}</p>
                <p className="text-gray-400 text-xs sm:text-sm font-lato mt-1">{education.duration}</p>
            </div>
            {education.description && (
                <p className="text-gray-300 text-sm sm:text-base font-lato leading-relaxed mb-4">
                    {education.description}
                </p>
            )}
            <div className="mb-4 sm:mb-6 flex-grow">
                <p className="text-xs sm:text-sm text-accent-cyan font-montserrat font-semibold mb-3">Key Highlights:</p>
                <ul className="text-xs sm:text-sm text-gray-300 space-y-2">
                    {education.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start">
                            <span className="text-accent-pink mr-3 flex-shrink-0">•</span>
                            <span className="font-lato leading-relaxed">{highlight}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <p className="text-xs sm:text-sm text-accent-cyan font-montserrat font-semibold mb-3">Skills:</p>
                <div className="flex flex-wrap gap-2">
                    {education.skills.map((skill, idx) => (
                        <span 
                            key={idx} 
                            className="bg-dark-purple-start text-accent-pink text-xs font-montserrat px-3 py-1 rounded-full border border-accent-pink"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

function Education() {
    return (
        <section id="education" className="py-12 sm:py-16 lg:py-20 text-white bg-cover bg-no-repeat" style={{ backgroundImage: 'url("experience-bg.jpg")' }}>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-bold text-center mb-8 sm:mb-12 relative z-5 p-3 sm:p-4 bg-gradient-to-br from-dark-purple-start/70 to-dark-purple-end/70 rounded-lg shadow-2xl backdrop-blur-sm">
                    Education & Training
                </h2>
                
                <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 lg:space-y-10 w-full lg:w-3/4 mx-auto">
                    {educationData.map((education) => (
                        <EducationCard key={education.id} education={education} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;