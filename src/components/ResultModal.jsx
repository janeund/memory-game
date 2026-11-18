import { useEffect, useRef } from 'react';
import { formatTime } from '../lib/deck.js';

export default function ResultModal({ seconds, moves, onRestart, onNewGame }) {
  const restartRef = useRef(null);

  useEffect(() => {
    restartRef.current?.focus();
  }, []);

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-heading">
      <div className="modal-inner">
        <h2 id="modal-heading" className="modal-heading">You did it!</h2>
        <p className="modal-text">Game over! Here’s how you got on…</p>
        <div className="actions actions-modal">
          <div className="actions-item">
            <p className="actions-name">Time Elapsed</p>
            <p className="actions-value">{formatTime(seconds)}</p>
          </div>
          <div className="actions-item">
            <p className="actions-name">Moves Taken</p>
            <p className="actions-value">{moves} Moves</p>
          </div>
        </div>
        <div className="buttons buttons-modal">
          <button ref={restartRef} type="button" className="btn btn-modal" onClick={onRestart}>
            Restart
          </button>
          <button type="button" className="btn btn-secondary btn-modal" onClick={onNewGame}>
            Setup New Game
          </button>
        </div>
      </div>
    </div>
  );
}
