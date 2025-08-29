import  {React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navClass = scrolled ? 'bg-gradient-to-r from-dark-purple-start to-dark-purple-end shadow-lg' : 'bg-transparent';

    return (
        <>
            <nav className={`fixed w-full z-50 py-4 transition-all duration-300 ${navClass}`}>
                <div className="container mx-auto px-4 flex flex-col justify-center items-center space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0">
                    <a href="#" className="text-white text-3xl font-montserrat font-bold flex items-center space-x-2">
                        <span>Niko Lewis</span>
                        <span className="flex items-center space-x-1">
                <span className="text-accent-cyan text-2xl font-mono">{`<`}</span>
                <img src="/pastelfeather.png" className="w-8 h-8" alt="Niko Lewis Portfolio Feather Logo"/>
                <span className="text-accent-cyan text-2xl font-mono">{`/>`}</span>
            </span>
                    </a>
                    <div className="flex space-x-6 text-lg font-lato">
                        <a href="#about" className="text-white hover:text-accent-cyan transition-colors duration-200">About</a>
                        <a href="#skills" className="text-white hover:text-accent-cyan transition-colors duration-200">Skills</a>
                        <a href="#relevant-experience" className="text-white hover:text-accent-cyan transition-colors duration-200">Experience</a>
                        <a href="#projects" className="text-white hover:text-accent-cyan transition-colors duration-200">Projects</a>
                        <a href="#testimonials" className="text-white hover:text-accent-cyan transition-colors duration-200">Testimonials</a>
                        <a href="#contact" className="text-white hover:text-accent-cyan transition-colors duration-200">Contact</a>
                        <a href="#education" className="text-white hover:text-accent-cyan transition-colors duration-200">Education</a>
                    </div>
                </div>
            </nav>
            </>
    );
}

export default Navbar;