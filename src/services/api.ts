// BF6 API Service Configuration

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.example.com';

interface ApiResponse<T> {
  data?: T;
  error?: string;
}

// Generic fetch wrapper with error handling
async function apiFetch<T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    console.error('API Error:', error);
    return { error: error instanceof Error ? error.message : 'An error occurred' };
  }
}

// Player Stats API
export const playerApi = {
  // Get player ID by name
  getPlayerId: async (playerName: string) => {
    return apiFetch(`/bf6/player/?name=${encodeURIComponent(playerName)}`);
  },

  // Get player stats (by name, playerid, or oid)
  getPlayerStats: async (nameOrId: string) => {
    return apiFetch(`/bf6/stats/?name=${encodeURIComponent(nameOrId)}`);
  },

  // Get multiple players' stats (max 128)
  getMultiplePlayers: async (playerIds: string[]) => {
    return apiFetch('/bf6/multiple/', {
      method: 'POST',
      body: JSON.stringify({ playerIds }),
    });
  },
};

// Server API
export const serverApi = {
  // Get servers by name (name is optional, empty string returns all servers)
  getServers: async (serverName: string = '', limit: number = 20) => {
    return apiFetch(`/bf6/servers/?name=${encodeURIComponent(serverName)}&limit=${limit}`);
  },

  // Get detailed server info
  getDetailedServer: async (serverName: string) => {
    return apiFetch(`/bf6/detailedserver/?name=${encodeURIComponent(serverName)}`);
  },
};

// Content API
export const contentApi = {
  // Get store catalog (DLCs)
  getStoreCatalog: async () => {
    return apiFetch('/bf6/storecatalog/');
  },

  // Get game events
  getGameEvents: async () => {
    return apiFetch('/bf6/gameevents/');
  },

  // Get translations (warning: large data)
  getTranslations: async () => {
    return apiFetch('/bf6/translations/');
  },
};

export { API_BASE_URL };
