# Portfolio Website Specification

## Project Overview
- **Project name**: Prashant Jawale - Frontend Developer Portfolio
- **Type**: Single-page portfolio website
- **Core functionality**: Showcase skills, experience, projects, and contact info for a Frontend Developer
- **Target users**: Recruiters, potential clients, collaborators

---

## UI/UX Specification

### Layout Structure
- **Navigation**: Fixed top navbar with name on left, nav links on right
- **Sections**: Alternating white/dark background pattern
  - Section 1 (Hero): White background
  - Section 2 (About): Dark background (#0a0a0a)
  - Section 3 (Experience): White background
  - Section 4 (Skills): Dark background (#0a0a0a)
  - Section 5 (Projects): White background
  - Section 6 (Contact): Dark background (#0a0a0a)
- **Responsive breakpoints**:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

### Visual Design

#### Color Palette
- **Primary (Dark)**: #0a0a0a
- **Secondary (White)**: #ffffff
- **Accent**: #3b82f6 (blue)
- **Accent Secondary**: #8b5cf6 (purple)
- **Text Primary (dark bg)**: #ffffff
- **Text Secondary (dark bg)**: #a1a1aa
- **Text Primary (light bg)**: #0a0a0a
- **Text Secondary (light bg)**: #52525b
- **Badge BG (dark)**: rgba(59, 130, 246, 0.1)
- **Badge Border (dark)**: rgba(59, 130, 246, 0.3)
- **Badge BG (light)**: rgba(0, 0, 0, 0.05)
- **Badge Border (light)**: rgba(0, 0, 0, 0.1)

#### Typography
- **Font Family**: "Outfit" (Google Fonts)
- **Headings**: 
  - H1: 4rem (64px), font-weight: 700
  - H2: 2.5rem (40px), font-weight: 600
  - H3: 1.5rem (24px), font-weight: 600
- **Body**: 1rem (16px), font-weight: 400
- **Small**: 0.875rem (14px)

#### Spacing
- **Section padding**: 100px vertical, 5% horizontal
- **Container max-width**: 1200px
- **Card padding**: 24px
- **Gap between elements**: 16px - 32px

### Components

#### 1. Navigation Bar
- Fixed position, backdrop blur effect
- Left: Name with accent color </Prashant>
- Right: Nav links (Home, About, Experience, Skills, Projects, Contact)
- Hover: Accent color underline animation

#### 2. Hero Section
- Split layout: 60% text left, 40% image right
- Left side:
  - Large heading: "Hey, this is Prashant Jawale - Frontend developer"
  - Subtitle with gradient text effect
  - CTA buttons
- Right side:
  - Circular design element (gray circle #374151 inside white circle)
  - Developer image centered between circles
  - Subtle floating animation on circles

#### 3. About Section
- Dark background
- Section heading with accent underline
- Two column layout: Text description + stats cards

#### 4. Experience Section
- White background
- Timeline-style layout
- Each experience card:
  - Bold large designation (e.g., "Senior Frontend Developer")
  - Small company name
  - Small light colored dates (Jan 2023 - Present)
  - Description paragraph
  - Skills as badges below

#### 5. Skills Section
- Dark background
- Category-based grid layout
- Categories:
  - Frontend Frameworks (React, Vue, Angular, Next.js, Svelte)
  - Styling and UI (CSS3, SCSS, Tailwind, Bootstrap, Framer Motion)
  - State Management (Redux, Zustand, Jotai, Context API)
  - Testing and Quality (Jest, React Testing Library, Cypress, ESLint)
  - Dev Tools and Build (Git, Webpack, Vite, Docker, CI/CD)
  - Backend and Database (Node.js, MongoDB, PostgreSQL, REST APIs, GraphQL)
- Each skill displayed as pill/badge

#### 6. Projects Section
- White background
- Section heading
- Grid of project cards (3 columns desktop, 2 tablet, 1 mobile)
- Each card:
  - Project name (bold)
  - Small description
  - Tech stack badges
  - Hover: subtle lift effect

#### 7. Contact Section
- Dark background
- Heading: "Let's Work Together"
- Two column layout:
  - Left: Contact info cards (Email, Phone, Location, Availability)
  - Right: Contact form (Name, Email, Message, Submit button)

---

## Functionality Specification

### Core Features
1. Smooth scroll navigation
2. Responsive design for all devices
3. Hover animations on interactive elements
4. Form validation (basic)
5. Smooth scroll to sections on nav click

### User Interactions
- Nav links scroll to respective sections
- Project cards have hover lift effect
- Skill badges have subtle hover animation
- Form has focus states
- Buttons have hover/active states

---

## Acceptance Criteria
1. All 7 sections visible and properly styled
2. Alternating white/dark background pattern works
3. Navigation links scroll to correct sections
4. Responsive on mobile, tablet, and desktop
5. All sections have proper spacing and typography
6. Skills displayed in categorized badges
7. Project cards display properly with badges
8. Contact form is functional (visual only, no backend)
