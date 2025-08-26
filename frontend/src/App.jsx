import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useState } from 'react'
import './App.css'


//my section components
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
            <div className="relative min-h-screen bg-gradient-to-br from-dark-purple-start to-dark-purple-end text-white font-lato">
                {/* Navbar will be fixed at the top */}

                <Navbar />

                <main className="py-8">
                    <Routes>
                        <Route path="/" element={
                            <>
                                <Hero />
                                <About />
                                <Skills />
                                <RelevantExperience />
                                <OtherExperience />
                                <Projects />
                                <Education />
                                <Testimonials />
                                <Contact />
                            </>
                        } />
                        {/* Add more routes here for individual project pages if needed later */}
                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>


    </>
  )
}

export default App
