const rawBase =
  process.env.REACT_APP_ADMIN_API_BASE_URL ||
  process.env.REACT_APP_API_BASE_URL ||
  'http://localhost:5000/api';

export const ADMIN_API_BASE_URL = rawBase.replace(/\/$/, '');
export const ADMIN_BACKEND_ORIGIN = ADMIN_API_BASE_URL.replace(/\/api$/, '');

export const getAdminApiUrl = (path = '') => {
  if (!path) return ADMIN_API_BASE_URL;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${ADMIN_API_BASE_URL}${normalized}`;
};

export const getAdminMediaUrl = (value) => {
  if (!value) return '';
  if (typeof value !== 'string') return URL.createObjectURL(value);
  if (value.startsWith('http://') || value.startsWith('https://')) return value;
  return value.startsWith('/uploads') ? `${ADMIN_BACKEND_ORIGIN}${value}` : value;
};
