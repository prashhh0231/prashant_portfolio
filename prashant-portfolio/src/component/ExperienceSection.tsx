import type { ExperienceSectionProps } from "../types";

const ExperienceSection = ({ experiences }: ExperienceSectionProps) => {
    return (
        <section id="experience" className="py-[70px] md:py-[100px] bg-white">
            <div className="max-w-[1200px] mx-auto px-[5%]">
                <h2 className="text-4xl font-semibold mb-12 text-[#0a0a0a] relative inline-block">
                    Experience
                    <span className="absolute bottom-[-8px] left-0 w-[60px] h-[4px] bg-gradient-to-r from-primary to-secondary rounded-[2px]"></span>
                </h2>

                <div className="flex flex-col gap-8">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="bg-white border border-black/[0.08] rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:translate-y-[-2px]"
                        >
                            <div className="mb-4">
                                <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-1">
                                    {exp.title}
                                </h3>
                                <div className="text-base text-primary font-medium">
                                    {exp.company}
                                </div>
                                <div className="text-sm text-[#52525b] mb-4">
                                    {exp.dates}
                                    <span className="text-gray-500 ml-5"> {exp.workmode}</span>
                                </div>
                            </div>
                            <p className="text-[#52525b] mb-6 leading-relaxed">
                                {exp.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-1.5 rounded-full text-sm font-medium bg-black/[0.05] border border-black/10 text-[#0a0a0a]"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
