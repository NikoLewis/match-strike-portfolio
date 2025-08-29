import {React, useState} from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaAws, FaBootstrap, FaJava, FaLinux } from 'react-icons/fa';
import { SiKotlin, SiAndroidstudio, SiPostgresql, SiRender, SiChakraui, SiFigma, SiGithub, SiNetlify, SiJavascript, SiDaisyui, SiIntellijidea, SiJetpackcompose } from 'react-icons/si';
import { VscVscodeInsiders } from "react-icons/vsc";
import { TbBrandVite } from "react-icons/tb";

const skills1 = [
    { name: 'HTML5', icon: FaHtml5 },
    { name: 'CSS3', icon: FaCss3Alt },
    { name: 'JavaScript', icon: FaJsSquare },
    { name: 'React.js', icon: FaReact },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'Vite', icon: TbBrandVite },
];

const skills2 = [
    { name: 'Kotlin', icon: SiKotlin },
    { name: 'Android Studio', icon: SiAndroidstudio },
    { name: 'Jetpack Compose ', icon: SiJetpackcompose  },
    { name: 'Git', icon: FaGitAlt },
    { name: 'Linux', icon: FaLinux },
    { name: 'PostgreSQL', icon: SiPostgresql },
];

const skills3 = [
    { name: 'AWS', icon: FaAws },
    { name: 'Netlify', icon: SiNetlify },
    { name: 'Render', icon: SiRender },
    { name: 'Vscode', icon: VscVscodeInsiders },
    { name: 'Intellij Idea', icon: SiIntellijidea },
];

const skills4 = [
    { name: 'Daisy UI', icon: SiDaisyui },
    { name: 'Chakra UI', icon: SiChakraui },
    { name: 'Bootstrap', icon: FaBootstrap },
    { name: 'Figma', icon: SiFigma },
    { name: 'GitHub', icon: SiGithub },
];

const marqueeKeyframes = `
  @keyframes marquee {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); } /* Scrolls half the width of the inner content */
  }
`;

function Skills() {
    //Injected marquee keyframes inside style element for continuous scroll
    //Fixed clipped scrollbar by replacing tailwind utility classes container with 91.6667% width in parent div withing #skills section
    //Changed animation property in the style attribute from 60 to 15s for faster scroll speed
    //Duplicated content of map to create seamless loop effect
    // So more of the skills could be seen in one glance: Split original 21 skills array into 4 smaller arrays of 5 or so, each with their own scrolling container, and different animation speeds to make the rows visually distinct
    // Added fading overlay at edges of each "scrolling row of skills" for smoothness
    //to make pause on hover work each row needed it's own state also css inline style had higher specificity and was overriding group-hover:animation-play-state-paused class
    // Ended up using the useState hook to note paused vs unpaused and added conditional rendering inline in addition to scroll speed

    const [isPaused1, setIsPaused1] = useState(false);
    const [isPaused2, setIsPaused2] = useState(false);
    const [isPaused3, setIsPaused3] = useState(false);
    const [isPaused4, setIsPaused4] = useState(false);

    return (
        <section id="skills" className=" py-20 text-white relative overflow-hidden">
            <div className="w-11/12 w-  mx-auto px-4">
                <style>{marqueeKeyframes}</style>
                <h2 className="text-5xl font-montserrat font-bold text-center mb-12 z-10 p-3 bg-gradient-to-br from-dark-purple-start/70 to-dark-purple-end/70 rounded-lg shadow-2xl backdrop-blur-sm">
                    My Skills</h2>
<div className="bg-cover bg-no-repeat" style={{ backgroundImage: 'url("luke-chesser-eICUFSeirc0-unsplash.jpg")'}}>


                <div className="w-full relative py-8 overflow-hidden group" onMouseEnter={() => setIsPaused1(true)}
                     onMouseLeave={() => setIsPaused1(false)}>
                    <div className="flex animate-marquee " style={{ animation: isPaused1 ? 'marquee 12s linear infinite paused' : 'marquee 12s linear infinite' }}>
                        {[...skills1, ...skills1].map((skill, index) => (
                            <div key={index} className="flex items-center justify-center mx-6 flex-shrink-0">
                                <skill.icon className="text-6xl text-accent-cyan hover:text-accent-pink transition-colors duration-300 drop-shadow-lg" />
                                <span className="ml-3 text-2xl font-montserrat font-semibold">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-dark-purple-start to-transparent"></div>
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-dark-purple-start to-transparent"></div>
                </div>

                    <div className="w-full relative py-8 overflow-hidden group" onMouseEnter={() => setIsPaused2(true)}
                         onMouseLeave={() => setIsPaused2(false)}>
                        <div className="flex animate-marquee min-w-full" style={{ animation: isPaused2 ? 'marquee 12s linear infinite paused' : 'marquee 15s linear infinite' }}>
                            {[...skills2, ...skills2].map((skill, index) => (
                                <div key={index} className="flex items-center justify-center mx-6 flex-shrink-0">
                                    <skill.icon className="text-6xl text-accent-cyan hover:text-accent-pink transition-colors duration-300 drop-shadow-lg" />
                                    <span className="ml-3 text-2xl font-montserrat font-semibold">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-dark-purple-start to-transparent"></div>
                        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-dark-purple-start to-transparent"></div>
                    </div>

                    <div className="w-full relative py-8 overflow-hidden group" onMouseEnter={() => setIsPaused3(true)}
                         onMouseLeave={() => setIsPaused3(false)}>
                        <div className="flex animate-marquee  min-w-full" style={{ animation: isPaused3 ? 'marquee 14s linear infinite paused' : 'marquee 12s linear infinite' }}>
                            {[...skills3, ...skills3].map((skill, index) => (
                                <div key={index} className="flex items-center justify-center mx-6 flex-shrink-0">
                                    <skill.icon className="text-6xl text-accent-cyan hover:text-accent-pink transition-colors duration-300 drop-shadow-lg" />
                                    <span className="ml-3 text-2xl font-montserrat font-semibold">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-dark-purple-start to-transparent"></div>
                        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-dark-purple-start to-transparent"></div>
                    </div>
                <div className="w-full relative py-8 overflow-hidden group" onMouseEnter={() => setIsPaused4(true)}
                     onMouseLeave={() => setIsPaused4(false)}>
                    <div className="flex animate-marquee  min-w-full" style={{ animation: isPaused4 ? 'marquee 11s linear infinite paused' : 'marquee 12s linear infinite' }}>
                        {[...skills4, ...skills4].map((skill, index) => (
                            <div key={index} className="flex items-center justify-center mx-6 flex-shrink-0">
                                <skill.icon className="text-6xl text-accent-cyan hover:text-accent-pink transition-colors duration-300 drop-shadow-lg" />
                                <span className="ml-3 text-2xl font-montserrat font-semibold">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-dark-purple-start to-transparent"></div>
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-dark-purple-start to-transparent"></div>
                </div>
</div>
            </div>
        </section>
    );
}

export default Skills;