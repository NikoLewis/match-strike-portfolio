import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import RelevantExperience from './components/RelevantExperience';
import OtherExperience from './components/OtherExperience';
import Education from './components/Education';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
        <Router>
            <div id="fixed-navbar" className="min-h-screen bg-gradient-to-br from-dark-purple-start to-dark-purple-end text-white font-lato">
                <Navbar />

                <main>
                    <Routes>
                        <Route path="/" element={
                            <>
                                <Hero />
                                <About />
                                <Skills />
                                <Education />
                                <RelevantExperience />
                                <Projects />
                                <Testimonials />
                                <Contact />
                                <OtherExperience />
                            </>
                        } />
                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>
    </>
  )
}

export default App