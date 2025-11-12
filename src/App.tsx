import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PlayerSearch from './pages/PlayerSearch';
import ServerBrowser from './pages/ServerBrowser';
import PlayerAnalytics from './pages/PlayerAnalytics';
import Leaderboard from './pages/Leaderboard';
import HeadToHead from './pages/HeadToHead';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
