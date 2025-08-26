import React from 'react';



// Note to Niko:
// 1. add pfp imag to cirlce
function About() {
    return (
        <section id="about" className="py-20 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-montserrat font-bold text-center mb-12">About Me</h2>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="md:col-span-1 text-lg font-lato leading-relaxed">
                        <p className="mb-6">
                            My journey from tech project management to full-stack development at The Knowledge House Innovation Fellowship has been a rewarding adventure. With a foundation built on apprenticeships, open-source contributions, freelance project work, and leading technical workshops, I'm driven to create memorable user experiences using HTML, CSS, JavaScript, React, and UX/UI principles.
                        </p>
                        <p>
                            I specialize in using <span className="text-accent-cyan font-bold">lightning fast pattern recognition skills</span> to predict and respond to emerging opportunities and issues, transforming complex challenges into digital solutions that surpass expectations, and using the <span className="text-accent-pink font-bold">magic of storytelling</span> to encourage teams, build community, and foster authentic connections.
                        </p>
                    </div>
                    <div className="md:col-span-1 flex justify-center">
                        {/* Placeholder for an image or a simple animated visual */}
                        <img
                            src="https://placehold.co/400x400/370258/00BCD4?text=Niko+Lewis"
                            alt="Niko Lewis"
                            className="rounded-full shadow-2xl border-4 border-accent-cyan hover:border-accent-pink transition-colors duration-300"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
