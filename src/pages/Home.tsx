import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            BF6 Stats Hub
          </h1>
          <p className="text-xl text-gray-400">
            Track your stats, find servers, and compete with the community
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Link
            to="/player"
            className="bg-gray-800 hover:bg-gray-700 transition-colors p-8 rounded-lg border border-gray-700 hover:border-blue-500"
          >
            <div className="text-4xl mb-4">📊</div>
            <h2 className="text-2xl font-bold mb-2">Player Stats</h2>
            <p className="text-gray-400">
              Search for players and view detailed statistics and performance metrics
            </p>
          </Link>

          <Link
            to="/analytics"
            className="bg-gray-800 hover:bg-gray-700 transition-colors p-8 rounded-lg border border-gray-700 hover:border-purple-500"
          >
            <div className="text-4xl mb-4">📈</div>
            <h2 className="text-2xl font-bold mb-2">Analytics</h2>
            <p className="text-gray-400">
              View historical trends, compare players, and track performance over time
            </p>
          </Link>

          <Link
            to="/servers"
            className="bg-gray-800 hover:bg-gray-700 transition-colors p-8 rounded-lg border border-gray-700 hover:border-blue-500"
          >
            <div className="text-4xl mb-4">🎮</div>
            <h2 className="text-2xl font-bold mb-2">Server Browser</h2>
            <p className="text-gray-400">
              Find active servers, view detailed information, and track your favorites
            </p>
          </Link>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex gap-4 text-sm text-gray-500">
            <span>Real-time Stats</span>
            <span>•</span>
            <span>Server Tracking</span>
            <span>•</span>
            <span>Leaderboards</span>
          </div>
        </div>
      </div>
    </div>
  );
}
