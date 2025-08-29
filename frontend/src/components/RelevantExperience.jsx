import React, { useRef, useEffect, useState } from 'react';

const engExperience = [
    {
        title: 'Software Engineer Apprentice',
        company: 'We Build Black',
        duration: 'June 2022 - June 2024 (2 years 1 month)',
        description: 'Bridged the gap between theory and practice, refining skills in Kotlin, Android Studio, app design, teamwork, agile practices, version control, code reviews, testing, and bi-weekly pair programming with mentor.',
        achievements: [
            "Completed Google courses in Kotlin and Android Development",
            "Developed PAWsitive app empowering animal care professionals to promote services, schedule clients, receive payments, and solicit reviews independent of Rover.com or Wag.",
            "Refined skills in Kotlin, Android Studio, app design, teamwork, agile practices, version control, code reviews, testing.",
            "Weekly pair programming with Senior Software Engineer mentors."
        ]
    },
    {
        title: 'Software Engineer Intern',
        company: 'RubyMe',
        duration: 'May 2019 - August 2019 (4 months)',
        description: 'Contributed to Ruby open source projects through the RubyMe program, improving skills and confidence by pairing with Senior Software Engineer mentors for technical guidance.',
        achievements: [
            "Contributed to open source software for 4 months full-time as a contractor with RubyMe.org",
            "Enhanced skills and confidence in early-career development through practical contributions.",
            "Gained valuable experience crucial for continued career growth in software engineering."
        ]
    },
    {
        title: 'Software Engineer Apprentice',
        company: 'The Practical Dev (Dev.to)',
        duration: 'June 2017 - September 2017 (4 months)',
        description: 'Apprenticeship mentored in scaling a social media application through weaving together strong design aesthetics and product building with technical know-how. Developed a passion for translating concepts into living-breathing products, dev relations, and utilizing UX/UI principles to deliver satisfying user experiences.',
        achievements: [
            "Contributed to full SDLC of maintaining a growing message board platform and programmer community.",
            "Took ownership of product management, coding features, UX/UI, user engagement, and made regular technical journalism contributions.",
            "Partnered on research and design to define and deliver new features."
        ]
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

            className={`relative mb-8 p-6 rounded-lg shadow-xl bg-gray-800 bg-opacity-70 transition-all duration-700 ease-out ${animationClass} ${

                isEven ? 'md:self-start md:mr-auto' : 'md:self-end md:ml-auto'

            }`}

            style={{ maxWidth: '45%' }}

        >

            <h3 className="text-2xl font-montserrat font-semibold text-accent-cyan">{experience.title}</h3>

            <p className="text-xl text-accent-pink mt-1">{experience.company}</p>

            <p className="text-md text-gray-400 mt-1">{experience.duration}</p>

            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">

                {experience.achievements.map((achievement, i) => (

                    <li key={i}>{achievement}</li>

                ))}

            </ul>
        </div>
    );
};

const relevantExperience = () => {

    return (

        <section id="relevant-experience" className="w-full py-20 text-white bg-cover bg-no-repeat" style={{ backgroundImage: 'url("sandro-katalina-k1bO_VTiZSs-unsplash.jpg")'}}>

            <div className="container mx-auto px-4">

                <h2 className="text-5xl font-montserrat font-bold text-center mb-16 relative z-10 p-6 bg-gradient-to-br from-dark-purple-start/70 to-dark-purple-end/70 rounded-lg shadow-2xl backdrop-blur-sm">Experience</h2>

                <div className="relative flex flex-col items-center">

                    <div id="vertical-timeline-line"  className="absolute top-0 bottom-0 w-1 bg-accent-cyan opacity-50 z-0"></div>

                    {engExperience.map((exp, index) => (

                        <ExperienceItem key={index} experience={exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );



}



export default relevantExperience;