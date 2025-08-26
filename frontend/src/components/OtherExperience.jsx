import React from 'react';

const notEngTechExperiences = [
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
        title: 'Mobile Application Developer',
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
        title: 'Software Engineer and Product Manager',
        company: 'The Practical Dev (Dev.to)',
        duration: 'June 2017 - September 2017 (4 months)',
        description: 'Apprenticeship mentored in scaling a social media application through weaving together strong design aesthetics and product building with technical know-how. Developed a passion for translating concepts into living-breathing products, dev relations, and utilizing UX/UI principles to deliver satisfying user experiences.',
        achievements: [
            "Contributed to full SDLC of maintaining a growing message board platform and programmer community.",
            "Took ownership of product management, UX/UI, user engagement, and made regular technical journalism contributions.",
            "Partnered on research and design to define and deliver new features."
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
    {
        title: 'Application Support Intern',
        company: 'New York College of Podiatric Medicine',
        duration: 'August 2014 - March 2015 (8 months)',
        description: 'Provided technical/application support and issue resolution for 500+ users\' workstations and mobile devices. Responsible for asset tagging/management, data back-ups, migrations, deployments, configurations, and pc builds, refurbishment, and responsible disposal.',
        achievements: [
            "Provided technical/application support and issue resolution for 500+ users' workstations and mobile devices.",
            "Responsible for asset tagging/management, data back-ups, migrations, deployments, configurations, and pc builds, refurbishment, and responsible disposal.",
            "Assisted with monitoring systems, technical communication, repair efforts, and training users to efficiently use technologies."
        ]
    },
    {
        title: 'Clinic Coordinator',
        company: 'New York College of Podiatric Medicine',
        duration: 'September 2013 - August 2014 (1 year)',
        description: 'Trained new-hires to use health information technology and performed weekly electronic quality assurance. Primarily responsible for managing dispensary, sterilizing medical equipment, day-to-day medical record management, insurance verification, and authorizations using digital databases. Operated and maintained clinical machinery according to OSHA standards, supervised machine repair efforts, and reported timely machine status updates and dispensary supply inventory to the VP of Operations and Clinic Administrator.',
        achievements: [
            "Trained new-hires to use health information technology and performed weekly electronic quality assurance.",
            "Primarily responsible for managing dispensary, sterilizing medical equipment, day-to-day medical record management, insurance verification, and authorizations using digital databases.",
            "Operated and maintained clinical machinery according to OSHA standards, supervised machine repair efforts, and reported timely machine status updates and dispensary supply inventory to the VP of Operations and Clinic Administrator."
        ]
    },
    {
        title: 'Teaching Assistant and Freelance Technicians Team Lead',
        company: 'Per Scholas',
        duration: 'December 2014 - January 2015 (2 months)',
        description: 'Planned and provided customized educational support and instruction on the topics of technology, corporate culture, professional time management, digital learning resources, and troubleshooting in group and one-on-one settings. Technician team lead during Grace Institute computer lab installation.',
        achievements: [
            "Planned and provided customized educational support and instruction on the topics of technology, corporate culture, professional time management, digital learning resources, and troubleshooting in group and one-on-one settings.",
            "Technician team lead during Grace Institute computer lab installation."
        ]
    },
    {
        title: 'Project Manager and Assistant Human Resources Manager',
        company: 'Lewis Gallery Incorporated',
        duration: 'August 2007 - August 2012 (5 years 1 month)',
        description: 'Developed and implemented projects from conception to completion, ensuring all targets were met, and stakeholder satisfaction. Monitored and documented all aspects of project progress and communicated updates to stakeholders. Worked cross-functionally to resolve issues/implement changes to achieve targets and nurtured healthy client relationships.',
        achievements: [
            "Developed and implemented projects from conception to completion, ensuring all targets were met, and stakeholder satisfaction.",
            "Monitored and documented all aspects of project progress and communicated updates to stakeholders.",
            "Worked cross-functionally to resolve issues/implement changes to achieve targets and nurtured healthy client relationships.",
            "Recruited, developed, and on-boarded team members. Developed and managed employee training, mentoring, and team building programs.",
            "Performed business and trends research, program data collection and analysis, and reporting."
        ]
    }
];



function OtherExperience() {
    // your component code here
    return (
        <>
            <h3>Other Experience</h3>
            <hr className="my-8 border-t-2 border-gray-300" />

        </>
    );
}

export default OtherExperience;