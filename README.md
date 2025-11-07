# Portfolio Website

A single-page portfolio built with React, TypeScript, and Vite. The site highlights experience, featured projects, and technical skills with motion-driven interactions and a polished visual style.

## 🚀 Tech Stack
- React 18 + TypeScript
- Vite 4 for the development toolchain
- Framer Motion for micro-interactions
- Three.js (selective scenes) and modern CSS (glassmorphism theme)

## 📌 Key Sections
- **Welcome / Hero** – Responsive hero with info chips, CTA buttons, and a portrait image optimized for desktop and mobile.
- **Projects & Skills** – Combined section featuring project carousels, tech tags, and skill highlights in a tabbed layout.
- **Timeline** – Education and experience milestones with animated cards.
- **Contact** – Contact information and social links in an interactive layout.

## 🗃️ Project Structure
```
src/
├── components/
│   ├── Welcome.tsx
│   ├── SkillsProjects.tsx
│   ├── Timeline.tsx
│   ├── Contact.tsx
│   └── ...
├── styles/
│   ├── Welcome.css
│   ├── SkillsProjects.css
│   ├── Timeline.css
│   └── ...
└── assets/
    └── (images, models, icons)
```

## 🧭 Development
```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## ✅ Recent Updates
- Simplified hero info chips to single-line pills.
- Replaced the 3D avatar with a static portrait and refined image positioning.
- Tuned responsive behavior across hero, projects, and skills sections.
- Updated asset set for projects and social links.

## 🎯 Next Steps
- Sync project descriptions with latest resume content.
- Integrate live GitHub data for project statistics.
- Add entrance animations for each section on scroll.

## 📄 License
This project is currently private and not licensed for redistribution.