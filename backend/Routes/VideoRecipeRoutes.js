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

const parseJsonField = (value, fallback = []) => {
  if (typeof value !== 'string') return Array.isArray(value) ? value : fallback;
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : fallback;
  } catch {
    return fallback;
  }
};

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
    { name: 'cuisineImage', maxCount: 1 },
    { name: 'images', maxCount: 6 },
    { name: 'stepImages', maxCount: 12 },
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
    const cuisineImage = req.files['cuisineImage'] && req.files['cuisineImage'][0]
      ? `/uploads/${req.files['cuisineImage'][0].filename}`
      : '';
    const stepImages = req.files['stepImages']
      ? req.files['stepImages'].map(file => `/uploads/${file.filename}`)
      : [];
    const video = req.files['video'] && req.files['video'][0]
      ? `/uploads/${req.files['video'][0].filename}`
      : '';
    const preparationSteps = parseJsonField(req.body.preparationSteps, []).map((step, index) => ({
      title: step.title || '',
      instruction: step.instruction || '',
      image: stepImages[index] || step.image || '',
    }));
    const newvideoRecipe = new VideoRecipe({
      title,
      category,
      image,
      images,
      video,
      time,
      cuisine,
      cuisineImage,
      difficulty,
      rating,
      serves,
      ingredients,
      instructions,
      preparationSteps,
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
    { name: 'cuisineImage', maxCount: 1 },
    { name: 'images', maxCount: 6 },
    { name: 'stepImages', maxCount: 12 },
    { name: 'video', maxCount: 1 }
  ]), 
  async (req, res) => {
    const updateData = { ...req.body };

    if (req.files['image']) {
      updateData.image = `/uploads/${req.files['image'][0].filename}`;
    }

    if (req.files['cuisineImage']) {
      updateData.cuisineImage = `/uploads/${req.files['cuisineImage'][0].filename}`;
    }

    if (req.files['images']) {
      updateData.images = req.files['images'].map(file => `/uploads/${file.filename}`);
    }
    if (req.files['stepImages']) {
      const stepImages = req.files['stepImages'].map(file => `/uploads/${file.filename}`);
      const steps = parseJsonField(updateData.preparationSteps, []).map((step, index) => ({
        title: step.title || '',
        instruction: step.instruction || '',
        image: stepImages[index] || step.image || '',
      }));
      updateData.preparationSteps = steps;
    } else if (typeof updateData.preparationSteps === 'string') {
      updateData.preparationSteps = parseJsonField(updateData.preparationSteps, []);
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
