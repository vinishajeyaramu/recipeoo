const express = require('express');
const Recipe = require('../Model/VideoRecipeModel');
const multer = require('multer');
const VideoRecipe = require('../Model/VideoRecipeModel');
const router = express.Router();
const upload = multer({ dest: 'uploads/' });
const toList = (value) =>
  typeof value === 'string'
    ? value.split(',').map((item) => item.trim()).filter(Boolean)
    : Array.isArray(value)
      ? value
      : [];

// Get all recipes
router.get('/', async (req, res) => {
  const videorecipes = await VideoRecipe.find();
  res.json(videorecipes);
});

// Add recipe with multiple images and a video
router.post(
  '/',
  upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'images', maxCount: 6 },
    { name: 'video', maxCount: 1 }
  ]),
  async (req, res) => {
    const { title, category, time, cuisine, difficulty, rating, serves, ingredients, instructions, description, description2, author, authorImage, videoUrl, type } = req.body;
    const image = req.files['image'] && req.files['image'][0]
      ? `/uploads/${req.files['image'][0].filename}`
      : '';
    const images = req.files['images']
      ? req.files['images'].map(file => `/uploads/${file.filename}`)
      : [];
    const video = req.files['video'] && req.files['video'][0]
      ? `/uploads/${req.files['video'][0].filename}`
      : '';
    const newvideoRecipe = new VideoRecipe({
      title,
      category,
      image,
      images,
      video,
      time,
      cuisine,
      difficulty,
      rating,
      serves,
      ingredients,
      instructions,
      description,
      description2,
      author,
      authorImage,
      tags: toList(req.body.tags),
      videoUrl,
      type,
    });
    await newvideoRecipe.save();
    res.json(newvideoRecipe);
  }
);

// Update recipe
router.put('/:id', 
  upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'images', maxCount: 6 },
    { name: 'video', maxCount: 1 }
  ]), 
  async (req, res) => {
    const updateData = { ...req.body };

    if (req.files['image']) {
      updateData.image = `/uploads/${req.files['image'][0].filename}`;
    }

    if (req.files['images']) {
      updateData.images = req.files['images'].map(file => `/uploads/${file.filename}`);
    }

    if (req.files['video']) {
      updateData.video = `/uploads/${req.files['video'][0].filename}`;
    }
    if ('tags' in updateData) updateData.tags = toList(updateData.tags);

    const recipe = await VideoRecipe.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json(recipe);
});

// Delete recipe
router.delete('/:id', async (req, res) => {
  await VideoRecipe.findByIdAndDelete(req.params.id);
  res.json({ message: 'Video Recipe deleted' });
});

module.exports = router;
