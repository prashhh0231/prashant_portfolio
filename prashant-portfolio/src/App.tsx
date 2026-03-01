import { useState, type FormEvent } from "react";
import HeroSection from "./component/HeroSection";
import AboutSection from "./component/AboutSection";
import ExperienceSection from "./component/ExperienceSection";
import SkillsSection from "./component/SkillSection";
import ProjectsSection from "./component/ProjectsSection";
import ContactSection from "./component/ContactSection";
import Navbar from "./component/Navbar";
import type { NavLink, Experience, SkillCategory, Project, Stat, ContactInfo } from "./types";
import { Check, Mail, MapPin, Phone } from "lucide-react";

import marshallImg from './assets/mec.png';
import ampaImg from './assets/ampa.png';
import pimtImg from './assets/pimt.png';
import recruitSmartlyImg from './assets/rs.png';
import embarkzImg from './assets/embarkz.png';
import rankqImg from './assets/rankq.png';


function App() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setMobileMenuOpen(false);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("Thank you for your message! I will get back to you soon.");
        (e.target as HTMLFormElement).reset();
    };

    const navLinks: NavLink[] = [
        { href: "home", label: "Home" },
        { href: "about", label: "About" },
        { href: "experience", label: "Experience" },
        { href: "skills", label: "Skills" },
        { href: "projects", label: "Projects" },
        { href: "contact", label: "Contact" },
    ];

    const experiences: Experience[] = [
        {
            title: "Software Engineer",
            company: "OpsFuse Technologies Private Limited, Pune",
            dates: "Nov 2022 - Sep 2025",
            workmode: 'Remote',
            description:
                "I lead frontend development for three production applications serving healthcare, HR, and wellness domains. I built scalable React and React Native applications from scratch, focusing on modular, reusable architectures that improve maintainability. I optimized UI rendering and state management to enhance performance and workflow efficiency, and implemented role-based access control systems while integrating GraphQL and REST APIs using React Query. Collaborating within Agile sprint cycles, I managed version control with Git and supported seamless production deployments.",
            skills: ["React", "React Native", "Next.js", "Javascript", "Typescript", "Redux", "HTML", "CSS", "Tailwind css", "Shadcn", "+3"],
        },
        {
            title: "Software Engineer",
            company: "E-Zest Solutions Private Limited, Pune",
            dates: "Oct 2021 – Nov 2022",
            workmode: 'Hybrid',
            description:
                "I contributed to the development of more than two production-ready web and mobile applications using React, React Native, and TypeScript. I designed modular and reusable components to improve scalability and maintainability across projects. I developed key features including authentication, product search, barcode scanning, and real-time attendance tracking, while integrating REST and GraphQL APIs with optimized state management. I also ensured responsive UI designs for seamless cross-device compatibility and collaborated closely with backend developers and designers to deliver high-quality features on schedule.",
            skills: ["React", "React Native", "Javascript", "Typescript", "Redux", "HTML", "CSS", "Material UI", "+3"],
        },
    ];

    const skills: SkillCategory[] = [
        {
            category: "Languages",
            items: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
        },
        {
            category: "Frontend Frameworks",
            items: ["React", "React Native", "Next.js"],
        },
        {
            category: "Styling and UI",
            items: ["Tailwind CSS", "Bootstrap", "Material UI", "shadcn/ui"],
        },
        {
            category: "State Management",
            items: ["Redux", "Context API"],
        },
        {
            category: "APIs & Integration",
            items: ["REST API", "GraphQL API"],
        },
        {
            category: "Testing and Quality",
            items: ["Jest", "ESLint"],
        },
        {
            category: "Dev Tools and Build",
            items: ["Git", "Webpack", "Vite", "Prettier"],
        },
        {
            category: "AI & Productivity Tools",
            items: ["ChatGPT", "Github Copilot", "Cursor code editor", "Postman"],
        }
    ];

    const projects: Project[] = [
        {
            name: "Marshall e Campbell",
            domain: "E-commerce",
            emoji: "🚀",
            image: marshallImg,
            description: [
                "E-commerce mobile app enabling online purchases with voice search and barcode/QR scanning.",
                "Developed reusable components and responsive screens.",
                "Integrated REST & GraphQL APIs.",
                "Implemented speech-to-text and scanning features.",
                "Ensured a smooth, production-ready user experience."
            ],
            tags: ["React Native", "TypeScript", "Context API", "GraphQL", "Material UI"],
        },
        {
            name: "Ampa",
            domain: "Health care",
            emoji: "📱",
            image: ampaImg,
            description: [
                "AMPA is a healthcare app for hospitals, allowing doctors to control treatment machines for depression patients and manage patient prescriptions, history, and session data efficiently.",
                "Project creation and setup from scratch in react native.",
                "Developed reusable components, screens, and multiple functionality like creation of patients, treating them using hardware and software communication."
            ],
            tags: ["React", "React native", "Redux", "TypeScript", "REST API", "Tailwind CSS"],
        },
        {
            name: "PIMT (Parent In My Town)",
            domain: "Wellness",
            emoji: "🎨",
            image: pimtImg,
            description: [
                "Developed a React Native app using Typescript for a German client, enabling users to create and join city- and language-based groups for exploring and sharing tours.",
                "Implemented group functionality where users can create, join, and participate in events, fostering a community-driven tour experience.",
                "Utilized Redux Toolkit for centralized state management and Material UI for consistent, responsive styling.",
            ],
            tags: ["React native", "Redux toolkit", "Typescript", "Tailwind css", "REST API"],
        },
        {
            name: "Recruit Smartly – AI Recruitment Platform",
            domain: "HR",
            emoji: "📊",
            image: recruitSmartlyImg,
            description: [
                // "Built a recruitment platform with Next.js from scratch.",
                "Developed responsive UI with Next.js and Tailwind CSS.",
                "Integrated AI-powered resume parsing and skill matching, enabling automatic score generation based on candidate skills and job requirements.",
                "Focused on frontend development, including API integration, state management with React Query, and resolving complex UI/UX bugs for an optimized user experience."
            ],
            tags: ["Next.js", "Redux toolkit", "Typescript", "Shadcn", "REST API"],
        },
        {
            name: "Embarkz",
            domain: "Wellness",
            emoji: "💬",
            image: embarkzImg,
            description: [
                "Created and set up the wellness application from scratch, establishing the project's architecture.",
                "Designed and implemented the user interface and user experience according to Figma designs.",
                "Developed key feature of the application is create wellness goal, reminder feature, breath functionality etc.",
                "Conducted ongoing debugging and troubleshooting to resolve issues and improve application performance."
            ],
            tags: ["React native", "Redux", "Tailwind CSS", "REST API"],
        },
        {
            name: "RankQ",
            domain: "Digital Marketing",
            emoji: "📊",
            image: rankqImg,
            description: [
                "Developed a comprehensive SEO analytics web app to monitor website performance, keyword rankings, and competitor insights.",
                "Integrated third-party SEO tools for website health, crawlability, backlink analysis, and technical audits.",
                "Built real-time dashboards with metrics like domain authority, impressions, CTR, page speed, and on-page optimization.",
                "Enhanced application performance and scalability through modular architecture and reusable components."
            ],
            tags: ["React.js", "Redux", "REST API", "Tailwind CSS", "React Query", "Chart.js"],
        }
    ];
    const stats: Stat[] = [
        { number: "4+", label: "Years Experience" },
        { number: "9", label: "Projects Completed" },
        { number: "4+", label: "Domains Covered" },
        { number: "5+", label: "Technologies" },
    ];

    const contactInfo: ContactInfo[] = [
        { icon: <Mail size={18} />, label: "Email", value: "jawaleprashant830@gmail.com" },
        { icon: <Phone size={18} />, label: "Phone", value: "+91 7559379412" },
        { icon: <MapPin size={18} />, label: "Location", value: "Nagpur, Maharashtra, India" },
        { icon: <Check size={18} />, label: "Availability", value: "Open to work" },
    ];

    return (
        <>
            <Navbar navLinks={navLinks} />
            <HeroSection />
            <AboutSection stats={stats} />
            <ExperienceSection experiences={experiences} />
            <SkillsSection skills={skills} />
            <ProjectsSection projects={projects} />
            <ContactSection contactInfo={contactInfo} handleSubmit={handleSubmit} />
        </>
    );
}

export default App;
