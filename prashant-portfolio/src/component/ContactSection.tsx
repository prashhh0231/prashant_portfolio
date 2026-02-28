import type { ContactSectionProps } from "../types";

const ContactSection = ({ contactInfo, handleSubmit }: ContactSectionProps) => {
    return (
        <section
            id="contact"
            className="py-[70px] md:py-[100px] bg-[#0a0a0a] text-white"
        >
            <div className="max-w-[1200px] mx-auto px-[5%]">
                <h2 className="text-4xl font-semibold mb-12 relative inline-block">
                    Let's Work Together
                    <span className="absolute bottom-[-8px] left-0 w-[60px] h-[4px] bg-gradient-to-r from-primary to-secondary rounded-[2px]" />
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16">

                    <div className="flex flex-col gap-6">
                        {contactInfo.map((info, index) => (
                            <div
                                key={index}
                                className="bg-white/[0.05] border border-white/10 rounded-xl p-5 flex items-center gap-4"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[rgba(59,130,246,0.1)] flex items-center justify-center text-xl">
                                    {info.icon}
                                </div>
                                <div>
                                    <h5 className="text-sm text-[#a1a1aa] mb-0.5">
                                        {info.label}
                                    </h5>
                                    <p className="text-base text-white font-medium">
                                        {info.value}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8"
                    >
                        <div className="mb-6">
                            <label className="block text-sm text-[#a1a1aa] mb-2 font-medium">
                                Your Name
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full px-4 py-3.5 rounded-lg border border-white/[0.15] bg-white/[0.05] text-white transition-all duration-300 focus:outline-none focus:border-[#3b82f6]"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm text-[#a1a1aa] mb-2 font-medium">
                                Your Email
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full px-4 py-3.5 rounded-lg border border-white/[0.15] bg-white/[0.05] text-white transition-all duration-300 focus:outline-none focus:border-[#3b82f6]"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm text-[#a1a1aa] mb-2 font-medium">
                                Your Message
                            </label>
                            <textarea
                                required
                                className="w-full px-4 py-3.5 rounded-lg border border-white/[0.15] bg-white/[0.05] text-white min-h-[140px] resize-y focus:outline-none focus:border-[#3b82f6]"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3.5 rounded-lg bg-gradient-to-r from-primary to-secondary font-semibold transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)]"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
