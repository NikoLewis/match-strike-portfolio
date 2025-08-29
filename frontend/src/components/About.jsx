import React from 'react';


//general summary:
//I leverage pattern recognition and a strong technical skillset to transform complex challenges into innovative solutions that exceed expectations. My talent also lies in understanding the people behind the screens.
// Applying human-centered storytelling and emotional intelligence professionally leads to uncovering client goals to craft products that genuinely help them succeed. This same approach allows me to empower teams and foster authentic connections.


const About = () =>  {
    return (
        <section id="about" className="py-20 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-montserrat font-bold text-center mb-12">Unique Value I Bring To Organizations</h2>

                <p className="text-xl font-poppins text-accent-pink italic  text-center mb-16">"My transition from managing tech projects <br/>to developing them as a software engineer, <br/>has been an adventure."</p>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="md:col-span-1 text-lg font-lato leading-relaxed">


                        <p className="mb-6">
                            I leverage <span className="text-accent-cyan font-bold"> advanced pattern recognition</span> and <span className="text-accent-cyan font-bold">strong technical skillset</span> to predict and then transform complex challenges into innovative solutions that exceed expectations.
                        </p>
                        <p className="text-xl text-accent-pink font-poppins  italic  text-center mb-16">
                            "My talent also lies in understanding the people behind the screens."

                        </p>
                        <p className="mb-6">By applying human-centered storytelling and emotional intelligence, I can uncover a clients' core goals and craft products that help them excel. These abilities allow me to <span className="text-accent-cyan font-bold">empower teams</span> and <span className="text-accent-cyan font-bold">build authentic connections cross-functionally </span>.</p>



                    </div>
                    <div className="md:col-span-1 flex justify-center">

                        <img
                            src="/portraitNikoLewis.jpeg"
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
