import { useState } from 'react';
import type { GameSettings, GridSize, Theme } from '../types.ts';

interface Option<T> {
  value: T;
  label: string;
}

const THEMES: Option<Theme>[] = [
  { value: 'numbers', label: 'Numbers' },
  { value: 'icons', label: 'Icons' },
];

const SIZES: Option<GridSize>[] = [
  { value: 4, label: '4x4' },
  { value: 6, label: '6x6' },
];

interface OptionGroupProps<T> {
  title: string;
  options: Option<T>[];
  value: T;
  onChange: (value: T) => void;
}

function OptionGroup<T extends string | number>({ title, options, value, onChange }: OptionGroupProps<T>) {
  return (
    <fieldset className="option-group">
      <legend className="heading-secondary">{title}</legend>
      <div className="section-wrapper" role="radiogroup">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={value === option.value}
            className={`tab ${value === option.value ? 'selected' : ''}`}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

interface SetupScreenProps {
  onStart: (settings: GameSettings) => void;
}

export default function SetupScreen({ onStart }: SetupScreenProps) {
  const [theme, setTheme] = useState<Theme>('numbers');
  const [size, setSize] = useState<GridSize>(4);

  return (
    <div className="page page-dark">
      <div className="container">
        <h1 className="heading-main">memory</h1>
        <div className="content">
          <OptionGroup title="Select Theme" options={THEMES} value={theme} onChange={setTheme} />
          <OptionGroup title="Grid Size" options={SIZES} value={size} onChange={setSize} />
          <button className="btn btn-start" type="button" onClick={() => onStart({ theme, size })}>
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
}
