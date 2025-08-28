import React from 'react';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa'; // Import icons

const educationEntries = [
    {
        type: 'Fellowship',
        institution: 'The Knowledge House',
        program: 'Web Development Innovation Fellowship',
        year: 'March 2025 - Present',
        icon: FaCertificate,
    },
    {
        type: 'Fellowship',
        institution: 'AWS Silver Linings SysOps Fellowship',
        program: 'Cloud Architecture and SysOps',
        year: 'February 2021 - July 2021',
        earned: "AWS SysOps Associate certification earned",
        icon: FaCertificate,
        description:
            "22-week training course developed and taught by AWS Executives, Solution Architects, Technical Account Managers, and Cloud Engineers-- with a focus on: AWS Fundamentals, AWS SysOps, extensive hands-on labs/ projects, certification prep, and real-word cloud support cases and drills supported by instructors from large Enterprises with IT Cloud strategy."


    },
    {
        type: 'Associate\'s degree',
        institution: 'Queensborough Community College',
        program: 'Health Sciences',
        icon: FaGraduationCap,
    },
];

const EducationItem = ({ entry }) => (
    <div className="flex items-start space-x-4 bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-[1.02]">
        <entry.icon className="text-4xl text-accent-pink flex-shrink-0 mt-1" />
        <div>
            <h3 className="text-2xl font-montserrat font-semibold text-accent-cyan">{entry.institution}</h3>
            <p className="text-xl text-white mt-1">{entry.program}</p>
            {entry.year && <p className="text-lg text-gray-400 mt-1">{entry.year}</p>}
            {entry.type && <span className="text-sm text-indigo-300 bg-dark-purple-start px-2 py-0.5 rounded-full mt-2 inline-block">{entry.type}</span>} {entry.earned && <span className="text-sm text-indigo-300 bg-dark-purple-start px-2 py-0.5 rounded-full mt-2 inline-block">{entry.earned}</span>}
            {entry.description && <p className="text-lg text-gray-400 mt-1">{entry.description}</p>}
        </div>
    </div>
);

function Education() {
    return (
        <section id="education" className="container mx-auto px-4 py-20 text-white">
            <h2 className="text-5xl font-montserrat font-bold text-center mb-12">Education & Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {educationEntries.map((entry, index) => (
                    <EducationItem key={index} entry={entry} />
                ))}
            </div>
        </section>
    );
}

export default Education;
