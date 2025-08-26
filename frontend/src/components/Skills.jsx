import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaAws, FaDocker, FaPython, FaJava, FaLinux } from 'react-icons/fa';
import { SiKotlin, SiAndroidstudio, SiPostgresql, SiMongodb, SiFirebase, SiRedux, SiTypescript, SiChakraui, SiFigma, SiGithub, SiNetlify, SiJavascript } from 'react-icons/si';


// Nore to Niko:
// 1. figure out why scroll isn't pausing on mousee hover but is highlighting
// 2. figure out why the styling in this component changes the padding and size of Text ( I think it has to do with em and rem)

// Define the skills with their icons
const skills = [
    { name: 'HTML5', icon: FaHtml5 },
    { name: 'CSS3', icon: FaCss3Alt },
    { name: 'JavaScript', icon: FaJsSquare },
    { name: 'React.js', icon: FaReact },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'Kotlin', icon: SiKotlin },
    { name: 'Android Studio', icon: SiAndroidstudio },
    { name: 'Git', icon: FaGitAlt },
    { name: 'AWS', icon: FaAws },
    { name: 'Docker', icon: FaDocker },
    { name: 'Python', icon: FaPython },
    { name: 'Java', icon: FaJava },
    { name: 'Linux', icon: FaLinux },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Firebase', icon: SiFirebase },
    { name: 'Redux', icon: SiRedux },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Chakra UI', icon: SiChakraui },
    { name: 'Figma', icon: SiFigma },
    { name: 'GitHub', icon: SiGithub },
    { name: 'Netlify', icon: SiNetlify },
];

// Inline CSS for marquee animation
const marqueeKeyframes = `
  @keyframes marquee {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); } /* Scrolls half the width of the inner content */
  }
`;

function Skills() {
    return (
        <section id="skills" className="py-20 text-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <style>{marqueeKeyframes}</style> {/* Inject keyframes */}
                <h2 className="text-5xl font-montserrat font-bold text-center mb-12">My Skills</h2>

                <div className="w-full relative py-8 overflow-hidden group">
                    <div className="flex animate-marquee group-hover:animation-play-state-paused min-w-full" style={{ animation: 'marquee 60s linear infinite' }}>
                        {/* Duplicate content to create seamless loop effect */}
                        {[...skills, ...skills].map((skill, index) => (
                            <div key={index} className="flex items-center justify-center mx-6 flex-shrink-0">
                                <skill.icon className="text-6xl text-accent-cyan hover:text-accent-pink transition-colors duration-300 drop-shadow-lg" />
                                <span className="ml-3 text-2xl font-montserrat font-semibold">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                    {/* Fading overlay at edges for smoother visual */}
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-dark-purple-start to-transparent"></div>
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-dark-purple-start to-transparent"></div>
                </div>
            </div>
        </section>
    );
}

export default Skills;