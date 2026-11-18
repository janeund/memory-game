// Font Awesome icon names (fa-solid). 18 are needed for a 6x6 grid.
export const ICONS = [
  'plane', 'star', 'lemon', 'tree', 'umbrella', 'pen',
  'cloud', 'mountain-sun', 'anchor', 'bicycle', 'bolt', 'bug',
  'car', 'futbol', 'heart', 'moon', 'music', 'snowflake',
];

// Fisher–Yates shuffle, returns a new array
export function shuffle(items) {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Pick `count` different values for the chosen theme
function pickValues(theme, count) {
  if (theme === 'icons') return shuffle(ICONS).slice(0, count);
  // Numbers: distinct values, so every value appears exactly twice
  const numbers = Array.from({ length: 99 }, (_, i) => i + 1);
  return shuffle(numbers).slice(0, count);
}

// Build a shuffled deck of pairs for a size x size grid
export function createDeck(theme, size) {
  const values = pickValues(theme, (size * size) / 2);
  return shuffle([...values, ...values]).map((value, id) => ({ id, value }));
}

export function formatTime(totalSec) {
  const min = String(Math.floor(totalSec / 60)).padStart(2, '0');
  const sec = String(totalSec % 60).padStart(2, '0');
  return `${min}:${sec}`;
}
