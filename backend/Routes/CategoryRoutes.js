const express = require('express');
const Category = require('../Model/Categorymodel');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const exists = await Category.findOne({ name: req.body.name });
    if (exists) return res.status(400).json({ error: 'Category already exists' });
    const category = new Category({ name: req.body.name });
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

router.get('/:id',async (req,res)=>{
    try{
        const category = await Category.findById(req.params.id)
        if (!category) return res.status(404).json({error:'Not Found'})
        res.json(category)
    } catch(err) {
        res.status(500).json({error:err.message})
    }
})

router.put('/:id', async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!category) return res.status(404).json({ error: 'Not found' });         
    res.json(category);
  } catch (err) {       
    res.status(500).json({ error: err.message });
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) return res.status(404).json({ error: 'Not found' });
    res.json({ message: 'Category deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;