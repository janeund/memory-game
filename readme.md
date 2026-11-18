# Memory Game App

Memory game application is designed to test player's mnemonic skills in a fun way. User can choose between game theme (numbers or icons) and grid size (4x4 or 6x6).

👉🏻 [Live Demo](https://janeund.github.io/memory-game/)

## Technologies Used

- React 18 (function components and hooks)
- Vite
- CSS (custom properties, Grid, Flexbox, 3D card flip)
- Font Awesome icons

## Features

- Setting the theme to use numbers or icons within the tiles
- Choosing to play on either a 6x6 or 4x4 grid
- Counting moves (one move per pair of opened tiles)
- Timer that starts on the first flip and stops when the game is won
- Restarting with a freshly shuffled grid, or setting up a new game
- Results modal with time and moves
- Responsive layout for mobile, tablet and desktop
- Keyboard accessible: tiles and options are real buttons

## Project Structure

```
src/
  App.jsx                 setup screen or game
  components/
    SetupScreen.jsx       theme and grid size selection
    Game.jsx              game state: deck, open cards, matches, moves
    Card.jsx              single flip card
    ResultModal.jsx       end of game results
  hooks/useTimer.js       seconds counter
  lib/deck.js             shuffling and deck generation
```

## Start Locally

Clone repository

```bash
git clone https://github.com/janeund/memory-game
cd memory-game
```

Install dependencies

```bash
npm install
```

Start local server via Vite

```bash
npm run dev
```
