import React from 'react';

const testimonials = [
    {
        quote: "I worked with Niko and her team on their C4Q final project, acting as one of their technical mentors. They built the CultureVault web app from scratch in just a months time. I helped them plan out their work and prioritize tasks accordingly. \n" +
            " \n" +
            "Each time we met up, Niko was prepared with several questions for me and a genuine drive to learn. She would quickly pick up technical concepts related to topics like databases and system diagraming, then clearly articulate these new ideas to the rest of her team. \n" +
            " \n" +
            "She has a knack for taking high level ideas and translating them to a tangible product. I saw this in her work when she seamlessly integrated a media widget into the CultureVault site using Spotify's public APIs - a concept we had discussed just a week before. \n" +
            " \n" +
            "I was most impressed with the reveal of the finished product at Demo Day. Her team gave the cleanest, most engaging presentation of the night. Niko was calm and composed on the stage, engaging the audience with an energy fueled by the passion she has for her work. \n" +
            " \n" +
            "Niko is a determined and focused developer with infectious enthusiasm. I would be happy to work with her again in the future.",
        author: "Kevin Stewart, Senior Software Engineer @Figma",
        formerly: "Senior Software Engineer @LinkedIn",
    },
    {
        quote: "Niko is a brilliant student with great passion for programming. She learns fast and knows how to turn her ideas into productive code. During the time I mentored her, she not only showed her great ability in learning new technologies, but also her leadership when building team projects. She is a promising women in tech and will be a great software engineere.",
        author: "Xiangbing Ji, Senior Software Engineer @Google",
        formerly: "Technical Mentor @Pursuit",
    },
    {
        quote: "Niko is curious and tenacious. She's not afraid to dig into the details and is very pro-active in reaching out for help. Throughout the year as I volunteered at Pursuit, Niko's face was one of the few I could reliably expect to see every week working through the programming concepts, DSA study, and projects to get a jump start on lessons to come.",
        author: "Justin Greet, Co-founder @BeamJobs",
        formerly: "Software Engineer @Google",
    },
    {
        quote: "Niko is the most resourceful person I know. Her knowledge of any subject is seemingly limitless. Her people skills are enormous, and her troubleshooting skills are the best I’ve seen. She is an asset to any environment.",
        author: "Yami Aaun, Broadcast Specialist @ABCNews",
        formerly: "Learning Management System Assistant Admin @Perscholas",
    },
    {
        quote: "Niko always delivers. And when she delivers you know it will be clear and well-executed. She is always pushing herself to learn more and uses technology to bridge the gap between the virtual world and the real world. Plus, she is one of the funniest people I have ever met and can make the most mundane tasks a pleasure. If there is a position on a Dev team, Niko is more than a great addition. .",
        author: "Michael Dinall, Software Engineer @Showtime",
        formerly: "Software Engineer @Chief",
    },
];

const TestimonialCard = ({ testimonial }) => (
    <div className="bg-gray-800 bg-opacity-70 p-8 rounded-lg shadow-xl border border-accent-pink/30 transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
        <p className="text-lg md:text-xl italic text-gray-200 mb-6 font-lato leading-relaxed">"{testimonial.quote}"</p>
        <p className="text-accent-cyan font-montserrat font-semibold text-xl mb-1">- {testimonial.author}</p>
        <p className="text-indigo-300 text-md font-lato">Formerly: {testimonial.formerly}</p>
    </div>
);

function Testimonials() {
    return (
        <section id="testimonials" className="  py-20 text-white bg-cover bg-no-repeat" style={{ backgroundImage: 'url("lilacbush.jpg")'}}>
            <div className="container mx-auto px-4">
            <h2 className="text-5xl font-montserrat font-bold text-center mb-12 relative z-5 p-3 bg-gradient-to-br from-dark-purple-start/70 to-dark-purple-end/70 rounded-lg shadow-2xl backdrop-blur-sm">Endorsements</h2>
            <div className=" flex flex-col items-center justify-center space-y-10 md:w-3/4 mx-auto ">
                {testimonials.map((test, index) => (
                    <TestimonialCard key={index} testimonial={test} />
                ))}
            </div>
            </div>
        </section>
    );
}

export default Testimonials;
