import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PlayerSearch from './pages/PlayerSearch';
import ServerBrowser from './pages/ServerBrowser';
import PlayerAnalytics from './pages/PlayerAnalytics';
import Leaderboard from './pages/Leaderboard';
import HeadToHead from './pages/HeadToHead';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player" element={<PlayerSearch />} />
        <Route path="/servers" element={<ServerBrowser />} />
        <Route path="/analytics" element={<PlayerAnalytics />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/head-to-head" element={<HeadToHead />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
