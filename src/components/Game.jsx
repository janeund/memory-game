import { useEffect, useState } from 'react';
import Card from './Card.jsx';
import ResultModal from './ResultModal.jsx';
import { createDeck, formatTime } from '../lib/deck.js';
import { useTimer } from '../hooks/useTimer.js';

const MISMATCH_DELAY = 900;

export default function Game({ settings, onNewGame }) {
  const { theme, size } = settings;

  // Bumping `round` deals a fresh deck and resets moves and time
  const [round, setRound] = useState(0);
  const [deck, setDeck] = useState(() => createDeck(theme, size));
  const [open, setOpen] = useState([]); // ids of face-up, not yet matched cards (max 2)
  const [matched, setMatched] = useState(() => new Set());
  const [moves, setMoves] = useState(0);
  const [started, setStarted] = useState(false);

  const finished = matched.size === deck.length;
  const seconds = useTimer(started && !finished, round);

  function restart() {
    setDeck(createDeck(theme, size));
    setOpen([]);
    setMatched(new Set());
    setMoves(0);
    setStarted(false);
    setRound((r) => r + 1);
  }

  function flip(id) {
    if (open.length === 2 || open.includes(id) || matched.has(id)) return;
    if (!started) setStarted(true);

    if (open.length === 0) {
      setOpen([id]);
      return;
    }

    // Second card of the turn: one move; a pair stays face up
    setMoves((m) => m + 1);
    if (deck[open[0]].value === deck[id].value) {
      setMatched((prev) => new Set([...prev, open[0], id]));
      setOpen([]);
    } else {
      setOpen([open[0], id]);
    }
  }

  // Two different cards are open: turn them back after a short look
  useEffect(() => {
    if (open.length !== 2) return undefined;
    const timeout = setTimeout(() => setOpen([]), MISMATCH_DELAY);
    return () => clearTimeout(timeout);
  }, [open]);

  return (
    <div className="page page-light">
      <div className="container-game">
        <header className="header">
          <button type="button" className="logo" onClick={onNewGame} aria-label="memory – back to setup">
            <img src="./logo.svg" alt="" width="150" height="28" />
          </button>
          <div className="buttons">
            <button type="button" className="btn btn-small" onClick={restart}>
              Restart
            </button>
            <button type="button" className="btn btn-small btn-secondary" onClick={onNewGame}>
              New Game
            </button>
          </div>
        </header>

        <main className={`grid grid-${size}`} aria-label={`${size} by ${size} memory grid`}>
          {deck.map((card) => (
            <Card
              key={`${round}-${card.id}`}
              card={card}
              theme={theme}
              isOpen={open.includes(card.id)}
              isMatched={matched.has(card.id)}
              onClick={() => flip(card.id)}
            />
          ))}
        </main>

        <footer className="actions">
          <div className="actions-item">
            <p className="actions-name">Time</p>
            <p className="actions-value" aria-live="off">{formatTime(seconds)}</p>
          </div>
          <div className="actions-item">
            <p className="actions-name">Moves</p>
            <p className="actions-value">{moves}</p>
          </div>
        </footer>
      </div>

      {finished && (
        <ResultModal seconds={seconds} moves={moves} onRestart={restart} onNewGame={onNewGame} />
      )}
    </div>
  );
}
