const normalizeBaseUrl = (value) => String(value || '').replace(/\/$/, '');

const isLocalHostname = (hostname) =>
  hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '::1';

const resolveConfiguredUrl = (value) => {
  const normalizedValue = normalizeBaseUrl(value);
  if (!normalizedValue) {
    return '';
  }

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

const buildUrl = (baseUrl, path = '') => {
  const normalizedBase = normalizeBaseUrl(baseUrl);
  const normalizedPath = path ? (path.startsWith('/') ? path : `/${path}`) : '';
  return `${normalizedBase}${normalizedPath}`;
};

export const getClientAppUrl = (path = '') => {
  const configuredUrl = resolveConfiguredUrl(process.env.REACT_APP_CLIENT_URL);
  const fallbackBaseUrl = window.location.origin;
  const baseUrl = configuredUrl || fallbackBaseUrl;

  return buildUrl(baseUrl, path);
};
