import React from 'react';

const Hero = () => {
    const pulsingKeyframes = `
      @keyframes pulse {
        0%, 100% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.05); opacity: 0.9; }
      }
    `;

    return (
        <>
            <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-20 pb-10 text-center relative overflow-hidden">
                <style>{pulsingKeyframes}</style>

                <div className="container mx-auto px-4">

                    <div className="relative z-10 p-6 bg-gradient-to-br from-dark-purple-start/70 to-dark-purple-end/70 rounded-lg shadow-2xl backdrop-blur-sm">
                        <h1 className="text-7xl md:text-8xl font-montserrat font-extrabold mb-4 drop-shadow-lg leading-tight">
                            Niko Lewis
                        </h1>
                        <p className="text-3xl md:text-4xl text-accent-cyan font-lato font-light mb-8 drop-shadow-md">
                            Software Engineer <span className="inline-flex items-center space-x-2 relative top-[-0.1em]" style={{ animation: 'pulse 2s infinite ease-in-out' }}>

                <span className="text-accent-pink text-4xl md:text-5xl font-mono">{`  <`}</span>
               <img src="/pastelfeather.png" className="size-13"/>
                            <span className="text-accent-pink text-4xl md:text-5xl font-mono">{`/>`}</span>
              </span>
                        </p>
                        <p className="mb-6">
                            My hands-on foundation of apprenticeships, open-source contributions, freelance projects, and leading technical workshops has fueled my passion for creating exceptional user experiences using HTML, CSS, JavaScript, React, and UX/UI principles.
                        </p>
                    </div>
                </div>
                <div className="absolute inset-0 z-0 opacity-20 bg-contain bg-cover bg-no-repeat" style={{ backgroundImage: 'url("public/Technologist.webp")'}}></div>
            </section>

        </>
    );
}

export default Hero;