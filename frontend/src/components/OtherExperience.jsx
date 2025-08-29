import React, { useRef, useEffect, useState } from 'react';

const notEngTechExperience = [
    {
        title: 'Founder',
        company: 'PAWsitive Vibes',
        duration: 'January 2020 - Present (5 years 8 months)',
        description: 'Performed 200+ skilled animal care contracts with 100% client satisfaction, 40% word-of-mouth referral rate (10x industry average), and rates 3x industry average. Coordinated seamless collaborative care with various animal care professionals, contributing to an additional $15k/year in tips. Implemented engaging branding and sales techniques, converting 70% of new client interactions into paid bookings, recognized as a \'Star Sitter\' on Rover.com.',
        achievements: [
            "Performed 200+ skilled animal care contracts while maintaining a 100% client satisfaction rating, resulting in a 40% word-of-mouth referral rate (10x the industry average), and rates 3x the industry average.",
            "Coordinated seamless collaborative care with veterinarians, walkers, trainers, cleaning-staff, emergency contacts, daycare facilities, and partner sitters, contributing to receiving an additional $15k a year in tips.",
            "Implemented engaging branding campaign and sales techniques converting 70% of new client interactions into paid bookings, and being recognized as a 'Star Sitter' on Rover.com's marketplace."
        ]
    },
    {
        title: 'Global Technology Infrastructure Project Coordinator',
        company: 'JPMorgan Chase & Co.',
        duration: 'December 2014 - February 2016 (1 year 3 months)',
        description: 'Managed and documented costs/labor of Global Technology Infrastructure projects throughout project lifecycle. Served as technical liaison for PMO, managed technicians, IT service delivery, and I.T. billing for two territories. Performed business analyst functions, trained staff, and facilitated smooth transitions.',
        achievements: [
            "Worked in coordination with project team and stakeholders to manage and document costs/labor of Global Technology Infrastructure projects throughout project lifecycle.",
            "Served as the technical liaison for the PMO to ensure client specifications, budgets, and deadlines are adhered to. Was responsible for managing technicians, IT service delivery, and I.T. billing of two territories.",
            "Performed business analyst functions: documenting/analyzing outcomes, making profit & loss statements, and creating reports.",
            "Trained staff and facilitated smooth and timely transitions of technicians to PMO procedural changes."
        ]
    },
];

const OtherExperienceItem = ({ experience, index }) => {
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
            className={`relative mb-8 p-6 rounded-lg shadow-xl bg-gray-800 bg-opacity-70 transition-all duration-700 ease-out ${animationClass} 
            w-full mx-auto // Default full width and centered for small screens
            timelineBp:max-w-[45%] // Max width for larger screens
            ${isEven ? 'timelineBp:self-start timelineBp:mr-auto' : 'timelineBp:self-end timelineBp:ml-auto'}
            `}
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

const OtherExperience = () => {
    return (
        <section id="additional-experience" className="w-full py-20 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-montserrat font-bold text-center mb-16">Additional Experience</h2>
                <div className="relative flex flex-col items-center timelineBp:flex-row timelineBp:justify-between">
                    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-accent-cyan opacity-50 z-0 timelineBp:left-auto timelineBp:right-auto"></div>
                    {notEngTechExperience.map((exp, index) => (
                        <OtherExperienceItem key={index} experience={exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );

}

export default OtherExperience;