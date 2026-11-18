export type Theme = 'numbers' | 'icons';
export type GridSize = 4 | 6;

export interface GameSettings {
  theme: Theme;
  size: GridSize;
}

export interface CardData {
  id: number;
  value: string | number;
}
