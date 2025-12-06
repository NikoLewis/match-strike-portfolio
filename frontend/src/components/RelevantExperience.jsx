import React, { useRef, useEffect, useState } from 'react';

const engExperience = [
    {
        title: 'Pro-bono Software Engineer',
        company: 'Prometheus',
        duration: 'September 2025 - December 2025 (3 months)',
        achievements: [
            "Engineered and delivered a secure user login and onboarding experience for https://teacheraccelerator.org/, utilizing Next.js, Clerk, and JavaScript to provide authenticated candidates with personalized dashboards.",
            "Integrated user authentication with HubSpot by securely linking Clerk user accounts to HubSpot Contact IDs, enabling automated routing for first-time users (eligibility/application forms) and returning users (task dashboard).",
            "Ensured project delivery and maintainability by developing a comprehensive suite of technical documentation, user manuals, and end-to-end testing procedures, while prioritizing web accessibility and device responsiveness."
        ],
        skills: ['JavaScript', 'Next.js', 'Clerk', 'Version Control', 'Responsive Design', 'End-to-End Testing', 'User Authentication', 'HubSpot Integration', 'Technical Documentation', 'Web Accessibility']
    },
    {
        title: 'Software Engineer Apprentice',
        company: 'We Build Black',
        duration: 'June 2022 - June 2024 (2 years 1 month)',
        achievements: [
            "Completed Google courses in Kotlin and contributed to the full development lifecycle of production-grade applications, implementing new features and resolving technical defects within a collaborative engineering stack.",
            "Actively participated in an Agile team, utilizing version control and contributing to code reviews and testing processes to maintain code quality.",
            "Refined development practices and accelerated skill acquisition through biweekly pair programming sessions with seasoned mentors"
        ],
        skills: ['Kotlin', 'Android Studio', 'App Design', 'Teamwork', 'Agile Practices', 'Version Control', 'Code Reviews', 'Testing']
    },
    {
        title: 'Software Engineer Intern',
        company: 'RubyMe',
        duration: 'May 2019 - August 2019 (4 months)',
        achievements: [
            "Contributed to multiple Ruby open-source projects, actively implementing new features, fixing bugs, and improving existing codebase structure under the guidance of Senior Software Engineer mentors.",
            "Significantly improved coding skills and confidence by engaging in daily pair programming sessions, focusing on best practices in software design, testing, and code review.",
            "Delivered tangible project enhancements by successfully completing assigned tasks and pull requests, gaining practical experience in the full software development lifecycle within a remote, open-source environment."
        ],
        skills: ['Ruby', 'Open Source Contribution', 'Pair Programming', 'Software Design', 'Testing', 'Code Review']
    },
    {
        title: 'Software Engineer and Product Manager Apprentice',
        company: 'The Practical Dev (Dev.to)',
        duration: 'June 2017 - September 2017 (4 months)',
        achievements: [
            "Contributed to the full Software Development Life Cycle (SDLC) for a high-growth social media application, specifically maintaining and scaling the message board platform and programmer community.",
            "Drove product strategy and user experience (UX/UI) by defining, researching, and designing new features, ensuring strong design aesthetics were woven with technical implementation to deliver satisfying user experiences.",
            "Authored and published technical journalism (dev relations) contributions to engage the developer community, while taking direct ownership of product management and user engagement initiatives."
        ],
        skills: ['Javascript','Software Development','Product Management', 'UX/UI Design', 'Technical Journalism', 'Developer Relations', 'User Engagement']
    }
];

const ExperienceItem = ({ experience, index }) => {

    const itemRef = useRef(null);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        const observer = new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        setIsVisible(true);

                        observer.unobserve(entry.target);

                    }

                });

            },

            { threshold: 0.1 }

        );

        if (itemRef.current) {

            observer.observe(itemRef.current);

        }

        return () => {

            if (itemRef.current) {

                observer.unobserve(itemRef.current);

            }

        };

    }, []);

    const animationClass = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';

    const isEven = index % 2 === 0;

    return (

        <div

            ref={itemRef}
            className={`relative mb-8 bg-gray-800 bg-opacity-70 
                p-6 sm:p-8 rounded-lg shadow-xl border border-accent-pink/30 
                transform transition-all duration-300 hover:shadow-2xl hover:border-accent-cyan/50 
                ease-out w-full  
                ${animationClass} ${
                isEven ? 'md:self-start md:mr-auto' : 'md:self-end md:ml-auto'
            }`}
        >

            <h3 className="text-2xl font-montserrat font-semibold text-accent-cyan">{experience.title}</h3>

            <p className="text-xl text-accent-pink mt-1">{experience.company}</p>

            <p className="text-md text-gray-400 mt-1">{experience.duration}</p>
            <div className="mb-4 sm:mb-6">
                <ul className="text-gray-300 mt-4 space-y-2 text-xs sm:text-sm">
                    {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                            <span className="text-accent-pink mr-3 flex-shrink-0">•</span>
                            <span>{achievement}</span>
                        </li>
                    ))}
                </ul>
            </div>
              <div>
                <p className="text-xs sm:text-sm text-accent-cyan font-montserrat font-semibold mb-3">Skills:</p>
                <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, idx) => (
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

const relevantExperience = () => {
    return (

        <section id="relevant-experience" className="w-full py-20 text-white bg-cover bg-no-repeat" style={{ backgroundImage: 'url("sarah-richer-PrDVRU9Ud_w-unsplash.jpg")'}}>

            <div className="container mx-auto px-4">

                <h2 className="text-5xl font-montserrat font-bold text-center mb-16 relative z-10 p-6 bg-gradient-to-br from-dark-purple-start/70 to-dark-purple-end/70 rounded-lg shadow-2xl backdrop-blur-sm">Experience</h2>

                <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 lg:space-y-10 w-full lg:w-3/4 mx-auto">
                    {engExperience.map((exp, index) => (

                        <ExperienceItem key={index} experience={exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default relevantExperience;