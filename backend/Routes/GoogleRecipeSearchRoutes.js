const express = require('express');
const https = require('https');

const router = express.Router();

const buildSearchUrl = (ingredients) => {
  const params = new URLSearchParams({
    key: process.env.GOOGLE_SEARCH_API_KEY || '',
    cx: process.env.GOOGLE_SEARCH_ENGINE_ID || '',
    q: `${ingredients} recipe`,
    num: '5',
    safe: 'active',
  });

  return `https://www.googleapis.com/customsearch/v1?${params.toString()}`;
};

const fetchJson = (url) =>
  new Promise((resolve, reject) => {
    https
      .get(url, (response) => {
        let raw = '';

        response.on('data', (chunk) => {
          raw += chunk;
        });

        response.on('end', () => {
          try {
            const data = JSON.parse(raw);

            if (response.statusCode >= 400) {
              reject(new Error(data?.error?.message || 'Google search request failed'));
              return;
            }

            resolve(data);
          } catch (error) {
            reject(error);
          }
        });
      })
      .on('error', reject);
  });

router.get('/search', async (req, res) => {
  const ingredients = String(req.query.ingredients || '').trim();

  if (!ingredients) {
    return res.status(400).json({ message: 'Ingredients query is required.' });
  }

  if (!process.env.GOOGLE_SEARCH_API_KEY || !process.env.GOOGLE_SEARCH_ENGINE_ID) {
    return res.status(503).json({
      message: 'Google search is not configured yet.',
      needsSetup: true,
    });
  }

  try {
    const data = await fetchJson(buildSearchUrl(ingredients));
    const items = Array.isArray(data.items) ? data.items : [];

    const results = items.map((item, index) => ({
      id: item.cacheId || item.link || `google-${index}`,
      title: item.title,
      link: item.link,
      snippet: item.snippet,
      source: item.displayLink,
      image: item.pagemap?.cse_image?.[0]?.src || '',
      thumbnail: item.pagemap?.cse_thumbnail?.[0]?.src || '',
      sourceType: 'google',
    }));

    return res.json(results);
  } catch (error) {
    return res.status(500).json({
      message: 'Unable to fetch Google recipe suggestions.',
      error: error.message,
    });
  }
});

module.exports = router;
