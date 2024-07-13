# Kaun Banega Crorepati

Kaun Banega Crorepati is an interactive web application that simulates the popular Indian television game show "Kaun Banega Crorepati" (Who Wants to Be a Millionaire). This project is built using React and Vite, providing a fast and modern development experience. Music and sound effects are incorporated to enhance user engagement and create an immersive experience.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)


## Demo

Check out the live demo of the project [here](https://your-demo-link.com).

## Features

- **Interactive Gameplay**: Users can play the game and answer questions to win virtual money.
- **Sound Effects**: Includes music and sound effects to create a realistic game show environment.
- **Responsive Design**: The application is fully responsive and works on various devices, including mobile phones and tablets.
- **Timer**: A countdown timer is implemented to add a sense of urgency to each question.
- **Leaderboard**: Tracks and displays the highest scores achieved by players.

## Installation

To get a local copy of the project up and running, follow these steps:

1. **Clone the repository**:

   git clone https://github.com/the-tejal30/Kaun_Banega_Crorepati.git

2. **Install dependencies**:
   npm install

3. **start the development server**
    npm run dev
This will start the development server and open the application in your default browser.

4. **Technologies Used**
React: A JavaScript library for building user interfaces.
Vite: A fast build tool for modern web projects.
CSS: For styling.
React Router: For routing and navigation.
React-Toastify: For notifications.
react-canvas-confetti: For visual effects.
use-sound: For adding sound effects.

5.**Folder Structure**
The project is structured as follows:

Kaun_Banega_Crorepati/
├── public/
│   └── logo.png
├── src/
│   ├── assets/
│   │   ├── play.mp3
│   │   ├── correct.mp3
│   │   ├── wrong.mp3
│   │   ├── kbc-bg.svg
│   │   └── wait.mp3
│   ├── components/
│   │   ├── Finish/
│   │   │   ├── Finish.jsx
│   │   │   └── Finish.css
│   │   ├── Start/
│   │   │   ├── Start.jsx
│   │   │   └── Start.css
│   │   ├── Timer/
│   │   │   ├── Timer.jsx
│   │   │   └── Timer.css
│   │   ├── Trivia/
│   │   │   ├── Trivia.jsx
│   │   │   └── Trivia.css
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── utils/
│   │   ├── authUtils.js
│   │   └── constants.js
│   ├── App.jsx
│   ├── index.html
│   └── main.jsx
├── .gitignore
├── package.json
├── README.md
└── vite.config.js


