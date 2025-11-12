import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PlayerSearch from './pages/PlayerSearch';
import ServerBrowser from './pages/ServerBrowser';
import PlayerAnalytics from './pages/PlayerAnalytics';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player" element={<PlayerSearch />} />
        <Route path="/servers" element={<ServerBrowser />} />
        <Route path="/analytics" element={<PlayerAnalytics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
