import { useState } from "react";
import type { NavbarProps } from "../types";

const Navbar = ({ navLinks }: NavbarProps) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setMobileMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
            <div className="max-w-[1200px] mx-auto px-[5%] flex justify-between items-center h-[70px]">

                <div className="text-2xl font-bold text-[#0a0a0a]">
                    <span>&lt;</span>Prashant_Jawale<span> /&gt;</span>
                </div>

                <ul
                    className={`flex gap-8 list-none ${mobileMenuOpen
                        ? "flex-col absolute top-[70px] left-0 right-0 bg-white p-4 shadow-lg"
                        : "hidden md:flex"
                        }`}
                >
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={`#${link.href}`}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="text-[#52525b] font-medium text-[0.95rem] no-underline relative transition-colors duration-300 hover:text-[#0a0a0a] after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    className="md:hidden text-2xl bg-transparent border-none cursor-pointer text-[#0a0a0a]"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    ☰
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
