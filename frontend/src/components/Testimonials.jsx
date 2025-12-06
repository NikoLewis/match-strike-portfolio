import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';

const testimonials = [
    {
        quote: "I worked with Niko and her team on their C4Q final project, acting as one of their technical mentors. They built the CultureVault web app from scratch in just a few months. I helped them plan out their work and prioritize tasks accordingly.\n\nEach time we met up, Niko was prepared with several thoughtful questions and a genuine drive to learn. She would quickly pick up technical concepts related to databases and system diagramming, then clearly articulate these new ideas to the rest of her team.\n\nShe has a knack for taking high-level ideas and translating them into tangible products. I saw this in her work when she seamlessly integrated a media widget into the CultureVault site using Spotify's public APIs—a concept we had discussed just a week before.\n\nI was most impressed with the reveal of the finished product at Demo Day. Her team gave the cleanest, most engaging presentation of the night. Niko was calm and composed on stage, engaging the audience with infectious enthusiasm fueled by her passion for her work.\n\nNiko is a determined and focused developer with infectious enthusiasm. I would be happy to work with her again in the future.",
        author: "Kevin Stewart",
        title: "Senior Software Engineer",
        company: "Figma",
        formerly: "Senior Software Engineer @LinkedIn",
        shortExcerpt: "Each time we met up, Niko was prepared with several thoughtful questions and a genuine drive to learn. She would quickly pick up technical concepts related to databases and system diagramming, then clearly articulate these new ideas to the rest of her team.\n\nShe has a knack for taking high-level ideas and translating them into tangible products. I saw this in her work when she seamlessly integrated a media widget into the CultureVault site using Spotify's public APIs—a concept we had discussed just a week before.",
        isReadMore: true,
    },
    {
        quote: "Niko is a brilliant student with great passion for programming. She learns fast and knows how to turn her ideas into productive code. During the time I mentored her, she not only demonstrated great ability in learning new technologies, but also showed strong leadership when building team projects. She is a promising woman in tech and will be a great software engineer.",
        author: "Xiangbing Ji",
        title: "Senior Software Engineer",
        company: "Google",
        formerly: "Technical Mentor @Pursuit",
        isReadMore: false,
    },
    {
        quote: "Niko is curious and tenacious. She's not afraid to dig into the details and is very proactive in reaching out for help. Throughout the year as I volunteered at Pursuit, Niko's face was one of the few I could reliably expect to see every week working through programming concepts, DSA studies, and projects to get a head start on upcoming lessons.",
        author: "Justin Greet",
        title: "Co-founder",
        company: "BeamJobs",
        formerly: "Software Engineer @Google",
        isReadMore: false,
    },
    {
        quote: "Niko is the most resourceful person I know. Her knowledge of any subject is seemingly limitless. Her people skills are exceptional, and her troubleshooting abilities are the best I've seen. She is an asset to any environment and brings both technical excellence and human connection to every project.",
        author: "Yami Aaun",
        title: "Broadcast Specialist",
        company: "ABCNews",
        formerly: "Learning Management System Assistant Admin @Perscholas",
        isReadMore: false,
    },
    {
        quote: "Niko always delivers. When she delivers, you know it will be clear and well-executed. She constantly pushes herself to learn more and uses technology to bridge the gap between the virtual and real worlds. Plus, she is one of the funniest people I have ever met and can make even the most mundane tasks a pleasure. Any dev team would be fortunate to have Niko as a great addition.",
        author: "Michael Dinall",
        title: "Software Engineer",
        company: "Showtime",
        formerly: "Software Engineer @Chief",
        isReadMore: false,
    },
];

const TestimonialCard = ({ testimonial }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            setIsModalOpen(false);
        }
    };

    return (
        <>
            <div className="bg-gray-800 bg-opacity-70 p-4 sm:p-6 lg:p-8 rounded-lg shadow-xl border border-accent-pink/30 transform transition-all duration-300 hover:shadow-2xl hover:border-accent-cyan/50 h-full flex flex-col">
                {testimonial.isReadMore ? (
                    <>
                        <p className="text-base sm:text-lg md:text-xl italic text-gray-200 mb-4 sm:mb-6 font-lato leading-relaxed flex-grow">
                            "{testimonial.shortExcerpt.replace(/\n/g, '\n\n')}"
                        </p>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="text-accent-cyan hover:text-accent-pink transition-colors duration-300 font-montserrat font-semibold text-xs sm:text-sm text-left mb-4"
                        >
                            Read More →
                        </button>
                    </>
                ) : (
                    <p className="text-base sm:text-lg md:text-xl italic text-gray-200 mb-4 sm:mb-6 font-lato leading-relaxed flex-grow">
                        "{testimonial.quote}"
                    </p>
                )}
                <div className="space-y-2">
                    <p className="text-accent-cyan font-montserrat font-semibold text-lg sm:text-xl">- {testimonial.author}</p>
                    <p className="text-indigo-300 text-sm sm:text-base font-lato">{testimonial.title} @ {testimonial.company}</p>
                    <p className="text-gray-400 text-xs sm:text-sm font-lato">Formerly: {testimonial.formerly}</p>
                </div>
            </div>
            {testimonial.isReadMore && isModalOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
                    onClick={handleBackdropClick}
                >
                    <div className="bg-gray-900 rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-accent-cyan/30">
                        <div className="sticky top-0 flex justify-between items-start p-4 sm:p-6 bg-gradient-to-r from-dark-purple-start to-dark-purple-end border-b border-accent-cyan/30 gap-4">
                            <div className="flex-1 min-w-0">
                                <h2 className="text-xl sm:text-2xl font-montserrat font-bold text-accent-cyan line-clamp-2">{testimonial.author}</h2>
                                <p className="text-indigo-300 text-xs sm:text-sm font-lato mt-1">{testimonial.title} @ {testimonial.company}</p>
                                <p className="text-gray-400 text-xs font-lato mt-1">Formerly: {testimonial.formerly}</p>
                            </div>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-accent-pink hover:text-accent-cyan transition-colors duration-300 flex-shrink-0"
                            >
                                <MdClose size={28} />
                            </button>
                        </div>
                        <div className="p-4 sm:p-8">
                            <p className="text-base sm:text-lg italic text-gray-200 font-lato leading-relaxed whitespace-pre-wrap mb-6">
                                "{testimonial.quote}"
                            </p>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-6 py-2 bg-accent-cyan text-dark-purple-start rounded-md font-bold hover:bg-accent-pink transition-colors duration-300 text-sm sm:text-base"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

function Testimonials() {
    return (
        <section id="testimonials" className="py-12 sm:py-16 lg:py-20 text-white bg-cover bg-no-repeat" style={{ backgroundImage: 'url("lilacbush.jpg")'}}>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-bold text-center mb-8 sm:mb-12 relative z-5 p-3 sm:p-4 bg-gradient-to-br from-dark-purple-start/70 to-dark-purple-end/70 rounded-lg shadow-2xl backdrop-blur-sm">Endorsements</h2>
                <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 lg:space-y-10 w-full lg:w-3/4 mx-auto">
                    {testimonials.map((test, index) => (
                        <TestimonialCard key={index} testimonial={test} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
