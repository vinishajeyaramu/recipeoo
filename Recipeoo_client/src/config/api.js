const normalizeBaseUrl = (value) => String(value || '').replace(/\/$/, '');

const isLocalHostname = (hostname) =>
  hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '::1';

const resolveConfiguredUrl = (value) => {
  const normalizedValue = normalizeBaseUrl(value);
  if (!normalizedValue) return '';

  try {
    const parsedUrl = new URL(normalizedValue, window.location.origin);
    if (isLocalHostname(parsedUrl.hostname) && !isLocalHostname(window.location.hostname)) {
      return '';
    }

    return normalizeBaseUrl(parsedUrl.toString());
  } catch {
    return normalizedValue.startsWith('/') ? normalizedValue : '';
  }
};

const buildAppUrl = (baseUrl, path = '') => {
  const normalizedPath = path ? (path.startsWith('/') ? path : `/${path}`) : '';
  return `${normalizeBaseUrl(baseUrl)}${normalizedPath}`;
};

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
  const configuredUrl = resolveConfiguredUrl(process.env.REACT_APP_ADMIN_URL);
  if (configuredUrl) {
    return configuredUrl;
  }

  return buildAppUrl(window.location.origin, '/admin');
};
