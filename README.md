# Random Number Game

> A fun number guessing game where players try their luck, guess the correct number, and win coins!

![Screenshot](screenshot.png)

---

## Table of Contents

* [About](#about)
* [Demo](#demo)
* [Features](#features)
* [How to Play](#how-to-play)
* [Controls](#controls)
* [Installation](#installation)
* [Development](#development)
* [Build & Deploy](#build--deploy)
* [Configuration](#configuration)
* [Contributing](#contributing)
* [Roadmap](#roadmap)
* [Known Issues](#known-issues)
* [License](#license)
* [Contact](#contact)

---

## About

**Random Number Game** is a simple and fun web-based guessing game built with HTML, CSS, and JavaScript. Players guess a random number, and if the guess is correct, they earn coins! The game is lightweight, responsive, and easy to play.

---

## Demo

> Live demo: `https://your-live-demo-url.com`

You can also add a GIF/video in the repo (e.g. `assets/demo.gif`) to showcase the gameplay.

---

## Features

* Random number generation every round
* Coin reward system for correct guesses
* Easy-to-use interface
* Works on desktop and mobile
* Option to restart or exit

---

## How to Play

1. Start the game by clicking **Play**.
2. Enter your guess (e.g., a number between 1 and 10).
3. If your guess matches the random number — 🎉 you win coins!
4. If not, try again until you succeed.

**Objective:** Guess the correct number and earn as many coins as possible.

---

## Controls

* **Keyboard/Mouse Input**: Type a number and submit
* **Enter / Submit Button**: Confirm guess
* **R**: Restart game
* **Esc**: Exit game

---

## Installation

### Option A — Run locally

1. Clone the repo:

```bash
git clone https://github.com/yourname/random-number-game.git
cd random-number-game
```

2. Open `index.html` in your browser.

### Option B — Run with a dev server

If you have Node.js installed you can use a static server:

```bash
npm install -g serve
serve .
```

---

## Development

### Project structure (example)

```
/ (root)
├─ index.html
├─ css/
│  └─ styles.css
├─ js/
│  ├─ game.js
│  └─ ui.js
├─ assets/
│  └─ images/
└─ README.md
```

---

## Build & Deploy

If using a bundler (Vite/Parcel/Webpack), add build steps here.

Example:

```bash
npm install
npm run build
```

Deploy `/dist` folder to GitHub Pages, Netlify, or Vercel.

---

## Configuration

You can configure:

* Range of random numbers (default: 1–10)
* Coin reward value
* Maximum guesses allowed

These settings can be changed in `config.js` (or directly in `game.js`).

---

## Contributing

Contributions are welcome!

1. Fork the repo
2. Create a branch: `git checkout -b feature/my-feature`
3. Make changes
4. Commit: `git commit -m "Add feature"`
5. Push and open a PR

---

## Roadmap

* [ ] Add difficulty levels (easy, medium, hard)
* [ ] Add leaderboard (high scores)
* [ ] Add sounds and animations
* [ ] Add multiplayer mode

---

## Known Issues

* Limited to a fixed range of numbers (1–10)
* No save progress between sessions (only coins reset)

---

## License

This project is licensed under the MIT License.

---

## Contact

Created by YOUR\_NAME

* GitHub: [yourname](https://github.com/yourname)
* Email: [you@example.com](mailto:you@example.com)
