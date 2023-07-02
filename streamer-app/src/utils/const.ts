export const baseURL = import.meta.env.VITE_URL || 'localhost:3000';
export const baseURLStreamers = baseURL + '/streamers';
export const getStreamerById = baseURL + `/streamer`;

export const platforms = ['Twitch', 'YouTube', 'TikTok', 'Kick', 'Rumble'];
