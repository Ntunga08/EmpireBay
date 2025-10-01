const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8000';

async function http(url, options = {}) {
  const res = await fetch(`${API_BASE}${url}`, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`HTTP ${res.status}: ${text}`);
  }
  const contentType = res.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    return res.json();
  }
  return res.text();
}

export const api = {
  // Events
  getEvents: (params) => {
    const q = new URLSearchParams(params || {}).toString();
    return http(`/api/events/${q ? `?${q}` : ''}`);
  },
  getUpcomingEvents: (limit = 6) => http(`/api/events/upcoming?limit=${limit}`),
  // Menu
  getFeaturedMenu: (limit = 4) => http(`/api/menu/featured?limit=${limit}`),
  // Gallery
  getFeaturedGallery: (limit = 6) => http(`/api/gallery/featured?limit=${limit}`),
  getGallery: (params) => {
    const q = new URLSearchParams(params || {}).toString();
    return http(`/api/gallery/${q ? `?${q}` : ''}`);
  },
  // Contact
  postContact: (payload) => http('/api/contact/', { method: 'POST', body: JSON.stringify(payload) }),
  // Booking
  postBooking: (payload) => http('/api/bookings/', { method: 'POST', body: JSON.stringify(payload) }),
};

export default api;


