import type { AboutSectionProps } from "../types";

const features = [
    'Leading frontend development for multiple applications from scratch, implementing scalable and modular architectures',
    'Integrating REST and GraphQL APIs efficiently with advanced state management using Redux Toolkit and React Query',
    'Delivering complex features such as authentication systems, voice and barcode search, real-time attendance tracking, and AI-powered recruitment functionalities.',
    'Optimizing UI rendering and implementing role-based access controls, improving both performance and workflow efficiency.',
    'Managing projects end-to-end, from design and component development to deployment and production support.'
]

const AboutSection = ({ stats }: AboutSectionProps) => {
    return (
        <section id="about" className="py-[70px] md:py-[100px] bg-[#0a0a0a] text-white">
            <div className="max-w-[1200px] mx-auto px-[5%]">
                <h2 className="text-4xl font-semibold mb-12 relative inline-block">
                    About Me
                    <span className="absolute bottom-[-8px] left-0 w-[60px] h-[4px] bg-gradient-to-r from-primary to-secondary rounded-[2px]"></span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-16">
                    <div className="about-text">
                        <p className="text-gray-200 mb-6 text-lg">
                            Hi, I’m Prashant Jawale, a Frontend Engineer with 4+ years of experience building scalable and high-performance web and cross-platform mobile applications using React, React Native, and Next.js. I’ve successfully delivered over 9 production-grade applications across domains like healthcare, e-commerce, wellness, travel, digital marketing and HR.
                        </p>

                        <div className="mb-5">
                            {features?.map((val, index) => (
                                <div key={index} className="flex items-start mb-2">
                                    {/* Perfect circle dot */}
                                    <span className="w-2.5 h-2.5 bg-gray-200 mt-2 rounded-full flex-shrink-0 mt-0.5 mr-2" />
                                    <span className="text-gray-200">{val}</span>
                                </div>
                            ))}
                        </div>

                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                                <h3 className="text-4xl font-bold text-[#f6543b] mb-2">{stat.number}</h3>
                                <p className="text-gray-200 text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
