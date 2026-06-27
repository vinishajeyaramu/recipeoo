const express = require('express');
const multer = require('multer');
const Blog = require('../Model/BlogModel');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

const blogUpload = upload.fields([
  { name: 'cardImage', maxCount: 1 },
  { name: 'heroImage', maxCount: 1 },
  { name: 'galleryImages', maxCount: 8 },
]);

const parseJsonField = (value, fallback = []) => {
  if (typeof value !== 'string') return Array.isArray(value) ? value : fallback;
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : fallback;
  } catch {
    return fallback;
  }
};

const buildBlogPayload = (req) => {
  const payload = { ...req.body };

  if (req.files?.cardImage?.[0]) {
    payload.cardImage = `/uploads/${req.files.cardImage[0].filename}`;
  }

  if (req.files?.heroImage?.[0]) {
    payload.heroImage = `/uploads/${req.files.heroImage[0].filename}`;
  }

  if (req.files?.galleryImages?.length) {
    payload.galleryImages = req.files.galleryImages.map((file) => `/uploads/${file.filename}`);
  }

  if (typeof payload.tipsList === 'string') {
    payload.tipsList = payload.tipsList
      .split('\n')
      .map((item) => item.trim())
      .filter(Boolean);
  }

  payload.openingSections = parseJsonField(payload.openingSections);
  payload.numberedSections = parseJsonField(payload.numberedSections);
  payload.pointedSections = parseJsonField(payload.pointedSections);
  payload.contentSections = parseJsonField(payload.contentSections);
  payload.numberedTips = parseJsonField(payload.numberedTips);
  payload.bulletTips = parseJsonField(payload.bulletTips);

  return payload;
};

router.get('/', async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 }).lean();
  res.json(blogs);
});

router.post('/', blogUpload, async (req, res) => {
  const payload = buildBlogPayload(req);
  const created = await Blog.create(payload);
  res.status(201).json(created);
});

router.put('/:id', blogUpload, async (req, res) => {
  const payload = buildBlogPayload(req);
  const updated = await Blog.findByIdAndUpdate(req.params.id, payload, { new: true });
  res.json(updated);
});

router.delete('/:id', async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ message: 'Blog deleted' });
});

module.exports = router;
