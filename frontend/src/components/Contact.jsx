import React from 'react';
import { FaLinkedin, FaGithub, FaDev } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

function Contact() {
    return (
        <section id="contact" className=" mx-auto px-4 py-20 text-white text-center w-full" >
            <div id="cat-container" className="flex items-center  justify-around ">
                <img src="/CuriousKittenAdamGonzales.jpg" className="bg-no-repeat bg-contain max-w-2/4 "/>
                <div id="contact-container" className="flex  content-center items-center  justify-between content-around flex-col  max-w-full">
                    <h2 className="text-5xl font-montserrat font-bold mb-12">Say Hi!</h2>
                    <p className="text-lg md:text-xl  mx-auto mb-10 font-lato text-indigo-200">
                        Open to collaboration and opportunities, <br/>
                        lets build something amazing together!
                    </p>
            <div className="flex justify-center space-x-8 mb-10">
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


        </section>
    );
}

export default Contact;
