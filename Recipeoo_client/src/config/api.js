const normalizeBaseUrl = (value) => String(value || '').replace(/\/$/, '');

export const API_BASE_URL = normalizeBaseUrl(
  process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000'
);

export const getApiUrl = (path) =>
  `${API_BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;

export const getAssetUrl = (path) => {
  if (!path) return '';
  if (/^https?:\/\//i.test(path)) return path;
  return `${API_BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;
};

export const getAdminAppUrl = () => {
  if (process.env.REACT_APP_ADMIN_URL) {
    return process.env.REACT_APP_ADMIN_URL;
  }

  const { protocol, hostname } = window.location;
  return `${protocol}//${hostname}:3002/admin`;
};
