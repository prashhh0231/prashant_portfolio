import React from "react";

export interface NavLink {
    href: string;
    label: string;
}

export interface NavbarProps {
    navLinks: NavLink[];
}

export interface Stat {
    number: string;
    label: string;
}

export interface AboutSectionProps {
    stats: Stat[];
}

export interface Experience {
    title: string;
    company: string;
    dates: string;
    workmode: string;
    description: string;
    skills: string[];
}

export interface ExperienceSectionProps {
    experiences: Experience[];
}

export interface SkillCategory {
    category: string;
    items: string[];
}

export interface SkillsSectionProps {
    skills: SkillCategory[];
}

export interface Project {
    name: string;
    domain: string;
    emoji: string;
    image: string;
    description: string[];
    tags: string[];
}

export interface ProjectsSectionProps {
    projects: Project[];
}

export interface ContactInfo {
    icon: React.ReactNode;
    label: string;
    value: string;
}

export interface ContactSectionProps {
    contactInfo: ContactInfo[];
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
