import type { CardData, Theme } from '../types.ts';

interface CardProps {
  card: CardData;
  theme: Theme;
  isOpen: boolean;
  isMatched: boolean;
  onClick: () => void;
}

// Open (just picked) cards are orange, matched pairs turn light blue
export default function Card({ card, theme, isOpen, isMatched, onClick }: CardProps) {
  const faceUp = isOpen || isMatched;
  const state = isMatched ? 'matched' : isOpen ? 'active' : '';

  return (
    <button
      type="button"
      className={`card ${faceUp ? 'flipped' : ''} ${state}`}
      onClick={onClick}
      disabled={isMatched}
      aria-label={faceUp ? `Card ${card.value}` : 'Hidden card'}
    >
      <span className="front-face" />
      <span className="back-face">
        {theme === 'icons' ? <i className={`fa-solid fa-${card.value}`} aria-hidden="true" /> : card.value}
      </span>
    </button>
  );
}
