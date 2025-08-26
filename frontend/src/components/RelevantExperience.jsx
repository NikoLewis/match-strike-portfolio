import React, { useRef, useEffect, useState } from 'react';


//note: fix spacing btwn circle icon and experience card legend.
const engExperience = [

    {
        title: 'Mobile Application Developer Apprentice',
        company: 'We Build Black',
        duration: 'June 2022 - June 2024 (2 years 1 month)',
        description: 'Bridged the gap between theory and practice, refining skills in Kotlin, Android Studio, app design, teamwork, agile practices, version control, code reviews, testing, and bi-weekly pair programming with mentor.',
        achievements: [
            "Developed PAWsitive app empowering animal care professionals to promote services, schedule clients, receive payments, and solicit reviews independent of Rover.com or Wag.",
            "Refined skills in Kotlin, Android Studio, app design, teamwork, agile practices, version control, code reviews, testing.",
            "Engaged in bi-weekly pair programming with mentors."
        ]
    },
    {
        title: 'Software Engineer',
        company: 'Ruby Together',
        duration: 'May 2019 - August 2019 (4 months)',
        description: 'Contributed to Ruby open source projects through the RubyMe program, improving skills and confidence by pairing with Senior Software Engineer mentors. Gained skills and experience needed for continued growth and success in careers.',
        achievements: [
            "Collaborated on Ruby open source software for 4 months with Senior Software Engineer mentors.",
            "Enhanced skills and confidence in early-career development through practical contributions.",
            "Gained valuable experience crucial for continued career growth in software engineering."
        ]
    },
    {
        title: 'Software Engineer and Product Manager',
        company: 'The Practical Dev (Dev.to)',
        duration: 'June 2017 - September 2017 (4 months)',
        description: 'Apprenticeship mentored in scaling a social media application through weaving together strong design aesthetics and product building with technical know-how. Developed a passion for translating concepts into living-breathing products, dev relations, and utilizing UX/UI principles to deliver satisfying user experiences.',
        achievements: [
            "Contributed to full SDLC of maintaining a growing message board platform and programmer community.",
            "Took ownership of product management, UX/UI, user engagement, and made regular technical journalism contributions.",
            "Partnered on research and design to define and deliver new features."
        ]
    }
];

// Individual Experience Item component for reusability
const ExperienceItem = ({ experience, index }) => {
    const itemRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target); // Stop observing once visible
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the item is visible
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
            className={`relative mb-8 p-6 rounded-lg shadow-xl bg-gray-800 bg-opacity-70 transition-all duration-700 ease-out ${animationClass} ${
                isEven ? 'md:self-start md:mr-auto' : 'md:self-end md:ml-auto'
            }`}
            style={{ maxWidth: '45%' }} // Limit width to ensure timeline effect
        >
            <h3 className="text-2xl font-montserrat font-semibold text-accent-cyan">{experience.title}</h3>
            <p className="text-xl text-accent-pink mt-1">{experience.company}</p>
            <p className="text-md text-gray-400 mt-1">{experience.duration}</p>
            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                {experience.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                ))}
            </ul>
            {/* Connector line dot */}
            <div className={`absolute w-4 h-4 rounded-full border-2 border-accent-cyan bg-dark-purple-start -translate-x-1/2 left-1/2 md:left-auto md:top-1/2 ${isEven ? 'md:-right-10' : 'md:-left-10'}`} style={{ transform: 'translateY(-50%)' }}></div>
        </div>
    );
};


const relevantExperience = () => {
    return (
        <section id="relevant-experience" className="w-full py-20 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-montserrat font-bold text-center mb-16">Work Experience</h2>
                <div className="relative flex flex-col items-center">
                    {/* Vertical timeline line */}
                    <div className="absolute top-0 bottom-0 w-1 bg-accent-cyan opacity-50 z-0"></div>
                    {engExperience.map((exp, index) => (
                        <ExperienceItem key={index} experience={exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );

}

export default relevantExperience;