import React from 'react';
import { FaLinkedin, FaGithub, FaDev } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

function Contact() {
    return (
        <section id="contact" className="mx-auto px-4 py-12 sm:py-16 lg:py-20 text-white w-full" >
            <div className="container mx-auto">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-bold text-center mb-8 sm:mb-12 relative z-5 p-3 sm:p-4 bg-gradient-to-br from-dark-purple-start/70 to-dark-purple-end/70 rounded-lg shadow-2xl backdrop-blur-sm">
                    Contact Me
                </h2>
                <div id="cat-container" className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12  bg-gradient-to-br from-dark-purple-start/70 to-dark-purple-end/70 rounded-lg shadow-2xl backdrop-blur-sm">
                    <div className="w-full lg:w-2/5 flex justify-center">
                        <img 
                            src="/CuriousKittenAdamGonzales.jpg" 
                            alt="Curious Kitten" 
                            className="w-full max-w-lg h-auto object-contain" 
                        />
                    </div>
                    <div id="contact-container" className="w-full lg:w-1/2 flex flex-col items-center justify-center space-y-6">
                        <p className="text-lg md:text-xl font-lato text-accent-pink mt-1 text-center">
                            Open to collaboration and opportunities. <br/>
                            Let's build something amazing together!
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 pt-4">
                            <a
                                href="mailto:kinseyftw@gmail.com"
                                className="flex flex-col items-center group transform transition-transform duration-300 hover:scale-110"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <HiOutlineMail className="text-6xl text-accent-cyan group-hover:text-accent-pink drop-shadow-md transition-colors duration-300" />
                                <span className="text-lg font-montserrat mt-2">Email Me</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/nikolewis"
                                className="flex flex-col items-center group transform transition-transform duration-300 hover:scale-110"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <FaLinkedin className="text-6xl text-accent-cyan group-hover:text-accent-pink drop-shadow-md transition-colors duration-300" />
                                <span className="text-lg font-montserrat mt-2">LinkedIn</span>
                            </a>
                            <a
                                href="https://github.com/nikolewis"
                                className="flex flex-col items-center group transform transition-transform duration-300 hover:scale-110"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <FaGithub className="text-6xl text-accent-cyan group-hover:text-accent-pink drop-shadow-md transition-colors duration-300" />
                                <span className="text-lg font-montserrat mt-2">GitHub</span>
                            </a>
                            <a
                                href="https://dev.to/niko"
                                className="flex flex-col items-center group transform transition-transform duration-300 hover:scale-110"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <FaDev className="text-6xl text-accent-cyan group-hover:text-accent-pink drop-shadow-md transition-colors duration-300" />
                                <span className="text-lg font-montserrat mt-2">Dev.to</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;