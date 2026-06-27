const mongoose = require('mongoose');

const cuisineSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, trim: true },
  image: { type: String, default: '' },
});

module.exports = mongoose.model('Cuisine', cuisineSchema);
