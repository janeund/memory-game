import { useState } from 'react';
import SetupScreen from './components/SetupScreen.tsx';
import Game from './components/Game.tsx';
import type { GameSettings } from './types.ts';

export default function App() {
  // null while choosing options, { theme, size } once a game is running
  const [settings, setSettings] = useState<GameSettings | null>(null);

  if (!settings) {
    return <SetupScreen onStart={setSettings} />;
  }

  return <Game settings={settings} onNewGame={() => setSettings(null)} />;
}
