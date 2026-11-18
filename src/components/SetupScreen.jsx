import { useState } from 'react';

const THEMES = [
  { value: 'numbers', label: 'Numbers' },
  { value: 'icons', label: 'Icons' },
];

const SIZES = [
  { value: 4, label: '4x4' },
  { value: 6, label: '6x6' },
];

function OptionGroup({ title, options, value, onChange }) {
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

export default function SetupScreen({ onStart }) {
  const [theme, setTheme] = useState('numbers');
  const [size, setSize] = useState(4);

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
