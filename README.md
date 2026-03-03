<p align="center">
  <img src="https://raw.githubusercontent.com/Zaheer2801/waylletech/main/public/favicon.svg" alt="WAYLLE TECH Logo" width="150" style="margin-bottom: 20px;">
</p>

<h1 align="center">WAYLLE TECH - Full Stack Engineering Bootcamp</h1>

<p align="center">
  <b>A premium, interactive curriculum tracking platform and landing page built with React & Vite.</b><br>
  Transforming beginners into job-ready developers in 45 rigorous days.
</p>

<p align="center">
  <a href="https://github.com/Zaheer2801/waylletech/stargazers"><img src="https://img.shields.io/github/stars/Zaheer2801/waylletech?style=for-the-badge&color=2997ff" alt="Stars"></a>
  <a href="https://github.com/Zaheer2801/waylletech/network/members"><img src="https://img.shields.io/github/forks/Zaheer2801/waylletech?style=for-the-badge&color=2997ff" alt="Forks"></a>
  <a href="https://github.com/Zaheer2801/waylletech/issues"><img src="https://img.shields.io/github/issues/Zaheer2801/waylletech?style=for-the-badge&color=2997ff" alt="Issues"></a>
  <a href="https://github.com/Zaheer2801/waylletech/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-2997ff?style=for-the-badge" alt="License"></a>
</p>

<p align="center">
  <a href="#-about-the-project">About The Project</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-preview">Preview</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-project-architecture">Architecture</a>
</p>

---

## 🚀 About The Project

Welcome to the official front-end repository for **WAYLLE TECH**, a premium 45-day Full Stack Developer bootcamp platform. This application is meticulously designed with a striking, Apple-inspired minimalist aesthetic, focusing on smooth micro-interactions, cinematic animations, and extremely high conversion potential.

> At WAYLLE TECH, our mission is built right into our name: providing the perfect **WAY** to **L**earn, **L**evelup, and **E**xcel in **TECH**nology.

### Key Highlights
- **Cinematic Apple-Inspired UI**: Built completely from scratch using pure CSS and React. Features glassmorphism, dynamic gradients, sticky scroll behaviors, and responsive grid structures.
- **Interactive Syllabus Viewer**: An integrated, split-pane dashboard that dynamically renders curriculum documents, slide decks, and code tutorials directly beside the daily schedule.
- **AI Chatbot Integration**: A floating, custom-built `WAYLLE Bot` widget designed to capture leads and answer immediate user queries regarding pricing, duration, and structure.
- **Lead Generation & Social Proof**: Sticky "Enroll Now" calls-to-action, FormSubmit AJAX integration for real-time contact forms, and instructor validation grids designed to maximize trust.

---

## 💻 Tech Stack

This project is built using modern web development technologies to ensure blazing-fast performance and a fully responsive experience across all devices.

| Category | Technologies |
| :--- | :--- |
| **Core** | ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) |
| **Styling** | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) (Custom Apple-inspired Design System) |
| **Build Tool** | ![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E) |
| **Icons** | ![Lucide](https://img.shields.io/badge/Lucide_Icons-F87171?style=for-the-badge&logo=lucide&logoColor=white) |

---

## 🎥 Preview

Take a quick look at the application in action. Notice the smooth transitions, glassmorphism UI elements, and overall premium feel:

<div align="center">
  <img src="https://raw.githubusercontent.com/Zaheer2801/waylletech/main/public/preview.webp" alt="WAYLLE TECH Preview Animation" width="100%" style="border-radius: 12px; box-shadow: 0 8px 30px rgba(0,0,0,0.12);">
</div>

---

## 🛠 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have the latest version of Node.js installed on your machine.
```sh
npm install npm@latest -g
```

### Installation

1. **Clone the repo**
   ```sh
   git clone https://github.com/Zaheer2801/waylletech.git
   ```
2. **Navigate to the directory**
   ```sh
   cd waylletech
   ```
3. **Install NPM packages**
   ```sh
   npm install
   ```
4. **Start the development server**
   ```sh
   npm run dev
   ```
5. **Open in Browser**
   Navigate to `http://localhost:5173` to view the application.

---

## 📂 Project Architecture

```graphql
waylletech/
├── public/                 # Static assets (Favicon, preview videos, etc.)
├── src/
│   ├── components/         # Modular & Reusable React UI Components
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

---

## 🎨 Design System & Aesthetics

The application utilizes a proprietary design system located within `index.css`. It features a fully integrated **Light/Dark Mode toggle**, controlled by `localStorage` and `data-theme` attributes on the root HTML element.

- **Primary Accent Phase**: Apple Blue (`#2997ff`)
- **Typography**: `Inter`, `-apple-system`, `BlinkMacSystemFont`
- **Micro-interactions**: Custom keyframes for continuous SVG gradients (`shineLoop`), typing indicators, intersection fading, and staggered element delays to create a premium, "living" interface feel.

---

## 📬 Contact

**Zaheer Shaik** - [zshaik2801@gmail.com](mailto:zshaik2801@gmail.com)

Project Link: [https://github.com/Zaheer2801/waylletech](https://github.com/Zaheer2801/waylletech)

<br />

<p align="center">
  <i>Developed and engineered for WAYLLE TECH. Transform from beginner to job-ready software engineer in 45 rigorous days.</i>
</p>
