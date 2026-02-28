import type { SkillsSectionProps } from "../types";

const SkillsSection = ({ skills }: SkillsSectionProps) => {
    return (
        <section
            id="skills"
            className="py-[70px] md:py-[100px] bg-[#0a0a0a] text-white"
        >
            <div className="max-w-[1200px] mx-auto px-[5%]">
                <h2 className="text-4xl font-semibold mb-12 relative inline-block">
                    Skills
                    <span className="absolute bottom-[-8px] left-0 w-[60px] h-[4px] bg-gradient-to-r from-primary to-secondary rounded-[2px]"></span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6"
                        >
                            <h4 className="text-lg font-semibold mb-4 text-orangeTxt">
                                {skill.category}
                            </h4>

                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 rounded-full text-sm font-medium bg-[rgba(59,130,246,0.1)] border border-[rgba(246,59,59,0.3)] text-white transition-all duration-300 hover:bg-[#3b82f6] hover:border-[#3b82f6] hover:scale-105"
                                    >
                                        {item}
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

export default SkillsSection;
