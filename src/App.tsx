import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PlayerSearch from './pages/PlayerSearch';
import ServerBrowser from './pages/ServerBrowser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player" element={<PlayerSearch />} />
        <Route path="/servers" element={<ServerBrowser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
