const express = require('express');
const multer = require('multer');
const router = express.Router();
const VideoRecipe = require('../Model/VideoRecipeCardModel');

const upload = multer({ dest: 'uploads/' });
const toList = (value) =>
  typeof value === 'string'
    ? value.split(',').map((item) => item.trim()).filter(Boolean)
    : Array.isArray(value)
      ? value
      : [];

router.get('/', async (req, res) => {
  const items = await VideoRecipe.find().lean();
  res.json(items);
});

router.post('/', upload.fields([{ name: 'image' }, { name: 'thumbnail' }, { name: 'video' }]), async (req, res) => {
  const { title, category, time, cuisine, difficulty, rating, serves, description, description2, author, authorImage } = req.body;
  const imageFile = req.files.image?.[0] || req.files.thumbnail?.[0];
  const image = imageFile ? `/uploads/${imageFile.filename}` : '';
  const video = req.files.video?.[0] ? `/uploads/${req.files.video[0].filename}` : '';
  const created = await VideoRecipe.create({
    title, category, time, cuisine, difficulty, rating, serves, description, description2, author, authorImage, tags: toList(req.body.tags), image, video
  });
  res.json(created);
});

router.put('/:id', upload.fields([{ name: 'image' }, { name: 'thumbnail' }, { name: 'video' }]), async (req, res) => {
  const data = { ...req.body };
  const imageFile = req.files.image?.[0] || req.files.thumbnail?.[0];
  if (imageFile) data.image = `/uploads/${imageFile.filename}`;
  if (req.files.video) data.video = `/uploads/${req.files.video[0].filename}`;
  if ('tags' in data) data.tags = toList(data.tags);
  const updated = await VideoRecipe.findByIdAndUpdate(req.params.id, data, { new: true });
  res.json(updated);
});

router.delete('/:id', async (req, res) => {
  await VideoRecipe.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

module.exports = router;
