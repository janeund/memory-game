import { useState } from 'react';
import SetupScreen from './components/SetupScreen.jsx';
import Game from './components/Game.jsx';

export default function App() {
  // null while choosing options, { theme, size } once a game is running
  const [settings, setSettings] = useState(null);

  if (!settings) {
    return <SetupScreen onStart={setSettings} />;
  }

  return <Game settings={settings} onNewGame={() => setSettings(null)} />;
}
