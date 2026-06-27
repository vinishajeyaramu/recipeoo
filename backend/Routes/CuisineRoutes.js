const express = require('express');
const multer = require('multer');
const Cuisine = require('../Model/CuisineModel');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

const buildCuisinePayload = (req, existingCuisine = {}) => {
  const payload = {
    name: (req.body.name || '').trim(),
  };

  if (req.files?.image?.[0]) {
    payload.image = `/uploads/${req.files.image[0].filename}`;
  } else if (existingCuisine.image) {
    payload.image = existingCuisine.image;
  }

  return payload;
};

router.get('/', async (req, res) => {
  try {
    const cuisines = await Cuisine.find().sort({ name: 1 });
    res.json(cuisines);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', upload.fields([{ name: 'image', maxCount: 1 }]), async (req, res) => {
  try {
    const name = (req.body.name || '').trim();
    if (!name) {
      return res.status(400).json({ error: 'Cuisine name required' });
    }

    const exists = await Cuisine.findOne({ name });
    if (exists) {
      return res.status(400).json({ error: 'Cuisine already exists' });
    }

    const cuisine = new Cuisine(buildCuisinePayload(req));
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

router.put('/:id', upload.fields([{ name: 'image', maxCount: 1 }]), async (req, res) => {
  try {
    const existingCuisine = await Cuisine.findById(req.params.id);
    if (!existingCuisine) {
      return res.status(404).json({ error: 'Not found' });
    }

    const name = (req.body.name || '').trim();
    if (!name) {
      return res.status(400).json({ error: 'Cuisine name required' });
    }

    const cuisine = await Cuisine.findByIdAndUpdate(
      req.params.id,
      buildCuisinePayload(req, existingCuisine),
      { new: true, runValidators: true }
    );

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
