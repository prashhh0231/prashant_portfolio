import type { ProjectsSectionProps } from "../types";

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
    return (
        <section id="projects" className="py-[70px] md:py-[100px] bg-white">
            <div className="max-w-[1200px] mx-auto px-[5%]">
                <h2 className="text-4xl font-semibold mb-12 text-[#0a0a0a] relative inline-block">
                    Projects
                    <span className="absolute bottom-[-8px] left-0 w-[60px] h-[4px] bg-gradient-to-r from-primary to-secondary rounded-[2px]" />
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white border border-black/[0.08] rounded-2xl overflow-hidden transition-all duration-300 hover:translate-y-[-8px] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
                        >
                            <div className="h-[180px] bg-gradient-to-br from-[#f3f4f6] to-[#e5e7eb] flex items-center justify-center text-6xl">
                                {project.emoji}
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-1">
                                    {project.name}
                                </h3>

                                <p className="text-gray-500 text-base mb-1 leading-relaxed">
                                    {project.domain}
                                </p>
                                <p className="text-[#52525b] text-base mb-4 leading-relaxed">
                                    {project.description?.map((desc) => {
                                        return (
                                            <li>{desc}</li>
                                        )
                                    })}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 rounded-full text-xs font-medium bg-black/[0.05] border border-black/10 text-[#0a0a0a]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
