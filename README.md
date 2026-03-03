<div align="center">
  <img src="./public/favicon.svg" alt="WAYLLE TECH Logo" width="120">
  
  # WAYLLE TECH • Full Stack Engineering Bootcamp
  
  **Transform from beginner to job-ready developer in 45 rigorous days.**
  
  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
  [![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
</div>

<br />

Welcome to the official front-end repository for **WAYLLE TECH**, a premium 45-day Full Stack Developer bootcamp platform. This application is designed with a striking, Apple-inspired minimalist aesthetic, focusing on smooth micro-interactions, cinematic animations, and extremely high conversion potential.

> At WAYLLE TECH, our mission is built right into our name: providing the perfect **WAY** to **L**earn, **L**evelup, and **E**xcel in **TECH**nology.

---

## ✨ Features

- **Cinematic Apple-Inspired UI**: Built completely from scratch using pure CSS and React. Features glassmorphism, dynamic gradients, sticky scroll behaviors, and responsive grid structures.
- **Interactive Syllabus Viewer**: An integrated, split-pane dashboard that dynamically renders curriculum documents, slide decks, and code tutorials directly beside the daily schedule.
- **AI Chatbot Integration**: A floating, custom-built `WAYLLE Bot` widget designed to capture leads and answer immediate user queries regarding pricing, duration, and structure.
- **Lead Generation & Social Proof**: 
  - Sticky "Enroll Now" calls-to-action.
  - FormSubmit AJAX integration for real-time contact forms without page reloads.
  - "Projects Showcase" and "Instructor Profile" grids designed to maximize trust and conversion.
- **SEO & Social Optimization**: 
  - Fully implemented Open Graph and Twitter Card meta tags for rich social media previews.
  - `JSON-LD` structured data to establish the site as a verifiable "Educational Organization" in Google Search results.

## 🚀 Quick Start

To run this project locally, ensure you have Node.js installed, then execute the following commands in your terminal:

```bash
# 1. Clone the repository
git clone https://github.com/Zaheer2801/waylletech.git

# 2. Navigate into the directory
cd waylletech

# 3. Install NPM dependencies
npm install

# 4. Start the Vite development server
npm run dev
```

The application will immediately compile and be available at `http://localhost:5173`.

## 📂 Project Architecture

```
waylletech/
├── public/                 # Static assets (Favicon, placeholder images)
├── src/
│   ├── components/         # Reusable React UI Components
│   │   ├── About.jsx       # Mission statement & word-by-word fade animations
│   │   ├── Chatbot.jsx     # Floating interactive AI assistant
│   │   ├── Contact.jsx     # AJAX FormSubmit integration
│   │   ├── Curriculum.jsx  # Phase breakdown (Frontend, Backend, DBs)
│   │   ├── Hero.jsx        # Landing page splash & primary CTA
│   │   ├── Instructors.jsx # Social proof profiles
│   │   ├── Navbar.jsx      # Sticky navigation with Light/Dark mode toggle
│   │   ├── Projects.jsx    # "What You'll Build" outcome showcase
│   │   ├── Schedule.jsx    # 9-to-6 Daily timetable breakdown
│   │   └── Syllabus.jsx    # 45-Day interactive curriculum tracker
│   ├── data/               
│   │   └── syllabusData.json # Exhaustive raw course data
│   ├── App.jsx             # Root layout and section assembly
│   ├── index.css           # Global theme variables & Apple design tokens
│   └── main.jsx            # React DOM entry point
└── index.html              # Entry HTML with injected SEO & Meta tags
```

## 🎨 Design System

The application utilizes a proprietary design system located within `index.css`. It features a fully integrated **Light/Dark Mode toggle**, controlled by `localStorage` and `data-theme` attributes on the root HTML element.

- **Primary Accent**: Apple Blue (`#2997ff`)
- **Typography**: `Inter`, `-apple-system`, `BlinkMacSystemFont`
- **Animations**: Custom keyframes for continuous SVG gradients (`shineLoop`), typing indicators, intersection fading, and staggered element delays.

---

<div align="center">
  <i>Developed and engineered for WAYLLE TECH. Transform from beginner to job-ready software engineer in 45 rigorous days.</i>
</div>
