const express = require('express');
const Cuisine = require('../Model/CuisineModel');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const cuisines = await Cuisine.find().sort({ name: 1 });
    res.json(cuisines);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const name = (req.body.name || '').trim();
    if (!name) {
      return res.status(400).json({ error: 'Cuisine name required' });
    }

    const exists = await Cuisine.findOne({ name });
    if (exists) {
      return res.status(400).json({ error: 'Cuisine already exists' });
    }

    const cuisine = new Cuisine({ name });
    await cuisine.save();
    res.status(201).json(cuisine);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const cuisine = await Cuisine.findById(req.params.id);
    if (!cuisine) {
      return res.status(404).json({ error: 'Not found' });
    }
    res.json(cuisine);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const name = (req.body.name || '').trim();
    const cuisine = await Cuisine.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true, runValidators: true }
    );

    if (!cuisine) {
      return res.status(404).json({ error: 'Not found' });
    }

    res.json(cuisine);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const cuisine = await Cuisine.findByIdAndDelete(req.params.id);
    if (!cuisine) {
      return res.status(404).json({ error: 'Not found' });
    }
    res.json({ message: 'Cuisine deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
