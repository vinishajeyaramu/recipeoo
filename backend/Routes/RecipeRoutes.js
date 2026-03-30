const express = require('express');
const Recipe = require('../Model/Recipemodel');
const multer = require('multer');
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
  const recipes = await Recipe.find();
  res.json(recipes);
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
    const newRecipe = new Recipe({
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
    await newRecipe.save();
    res.json(newRecipe);
  }
);

// Update recipe
router.put('/:id', upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'images', maxCount: 6 },
  { name: 'video', maxCount: 1 }
]), async (req, res) => {
  const updateData = { ...req.body };
  if (req.files['image']) {
    updateData.image = `/uploads/${req.files['image'][0].filename}`;
  }
  if (req.files['images']) {
    updateData.images = req.files['images'].map((file) => `/uploads/${file.filename}`);
  }
  if (req.files['video']) {
    updateData.video = `/uploads/${req.files['video'][0].filename}`;
  }
  if ('tags' in updateData) updateData.tags = toList(updateData.tags);
  const recipe = await Recipe.findByIdAndUpdate(req.params.id, updateData, { new: true });
  res.json(recipe);
});

// Delete recipe
router.delete('/:id', async (req, res) => {
  await Recipe.findByIdAndDelete(req.params.id);
  res.json({ message: 'Recipe deleted' });
});

router.get('/title/:title', async (req, res) => {
  const slug = req.params.title;
  const recipes = await Recipe.find();
  const slugify = (str) => str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
  const recipe = recipes.find((item) => slugify(item.title) === slug);

  if (!recipe) {
    return res.status(404).json({ message: 'Recipe not found' });
  }

  res.json(recipe);
});

module.exports = router;
