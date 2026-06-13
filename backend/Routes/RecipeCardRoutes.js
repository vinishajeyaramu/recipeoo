const express = require('express');
const Card = require('../Model/RecipeCard');
const multer = require('multer');
const router = express.Router();
const upload = multer({ dest: 'uploads/' });
const toList = (value) =>
  typeof value === 'string'
    ? value.split(',').map((item) => item.trim()).filter(Boolean)
    : Array.isArray(value)
      ? value
      : [];

// Get all cards
router.get('/', async (req, res) => {
  const cards = await Card.find();
  res.json(cards);
});

const cardUpload = upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'cuisineImage', maxCount: 1 },
]);

// Add card
router.post('/', cardUpload, async (req, res) => {
  const { title, category, time, cuisine, difficulty, rating, serves, description, description2, author, authorImage, type } = req.body;
  const image = req.files?.image?.[0] ? `/uploads/${req.files.image[0].filename}` : '';
  const cuisineImage = req.files?.cuisineImage?.[0] ? `/uploads/${req.files.cuisineImage[0].filename}` : '';
  const newCard = new Card({
    title,
    category,
    time,
    cuisine,
    cuisineImage,
    difficulty,
    rating,
    serves,
    description,
    description2,
    author,
    authorImage,
    tags: toList(req.body.tags),
    image,
    type
  });
  await newCard.save();
  res.json(newCard);
});

// Update card
router.put('/:id', cardUpload, async (req, res) => {
  const updateData = { ...req.body };
  if (req.files?.image?.[0]) updateData.image = `/uploads/${req.files.image[0].filename}`;
  if (req.files?.cuisineImage?.[0]) updateData.cuisineImage = `/uploads/${req.files.cuisineImage[0].filename}`;
  if ('tags' in updateData) updateData.tags = toList(updateData.tags);
  const card = await Card.findByIdAndUpdate(req.params.id, updateData, { new: true });
  res.json(card);
});

// Delete card
router.delete('/:id', async (req, res) => {
  await Card.findByIdAndDelete(req.params.id);
  res.json({ message: 'Card deleted' });
});

// Get card by slugified title
router.get('/title/:title', async (req, res) => {
  const slug = req.params.title;
  // Convert stored title to slug for comparison
  const slugify = str => str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
  const card = await Card.findOne().where('title').equals(new RegExp(`^${slug.replace(/[-]/g, '\\s+')}$`, 'i'));
  // If not found by regex, try slug comparison
  if (!card) {
    const allCards = await Card.find();
    const found = allCards.find(c => slugify(c.title) === slug);
    if (found) return res.json(found);
    return res.status(404).json({ message: 'Recipe not found' });
  }
  res.json(card);
});

router.get('/:id', async (req, res) => {
  const card = await Card.findById(req.params.id);
  if (!card) {
    return res.status(404).json({ message: 'Recipe card not found' });
  }
  res.json(card);
});

module.exports = router;
