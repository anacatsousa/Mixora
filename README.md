# Mixora

A fictional e-commerce web application built to simulate a modern online shopping experience, integrating dynamic product data from the [Platzi Fake Store API](https://fakeapi.platzi.com/en). Built as a **study project** focused on practicing React and SCSS in a real-world app context.

<br>
  
[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-4CAF50?style=for-the-badge&logo=vercel)](https://mixora-store.vercel.app/)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)

<br>

## About

**Mixora** is a fictional e-commerce store built to practice React concepts in a realistic project setting — components, state management, routing, and API consumption. The UI was designed in Figma before development, and styled with SCSS using the BEM methodology.

Product data is fetched dynamically from the [Platzi Fake Store API](https://fakeapi.platzi.com/en), simulating a real shopping experience with product listings and detail pages.

<br>

## Features

- Dynamic product data fetched from an external REST API
- Client-side navigation with React Router
- Global state management with React Context
- Custom hooks for reusable data fetching logic
- Fully responsive layout (mobile, tablet, desktop)
- Modular SCSS styling with BEM methodology
- Built with accessibility in mind (keyboard navigation, ARIA attributes, and screen reader support)

<br>

## Project Structure

```
Mixora/
└── mixora/
    ├── public/
    ├── src/
    │   ├── assets/        # Images and static resources
    │   ├── components/    # Reusable UI components
    │   ├── context/       # React Context for global state
    │   ├── hooks/         # Custom React hooks
    │   ├── pages/         # Page-level components
    │   ├── scss/          # SCSS partials and styles
    │   └── main.jsx       # App entry point
    ├── index.html
    ├── package.json
    └── vite.config.js
```

<br>

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm

### Running locally

1. Clone the repository:

```bash
git clone https://github.com/anacatsousa/Mixora.git
cd Mixora/mixora
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

<br>

## Dependencies

| Package           | Version | Purpose             |
| ----------------- | ------- | ------------------- |
| react + react-dom | ^19.1.0 | UI library          |
| react-router      | ^7.7.1  | Client-side routing |
| sass              | ^1.90.0 | SCSS compilation    |

<br>

## API

Product data is provided by the [Platzi Fake Store API](https://fakeapi.platzi.com/en) — a free REST API for e-commerce prototyping.

<br>

## License

This project is licensed under the [MIT License](LICENSE).

<br>

Made by [Catarina Sousa](https://github.com/anacatsousa)
