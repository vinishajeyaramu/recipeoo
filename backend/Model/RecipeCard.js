const mongoose = require('mongoose');
const CardSchema = new mongoose.Schema({
  title: String,
  category: String,
  image: String,
  time: String,
  cuisine: String,
  difficulty: String,
  rating: String,
  serves: String,
  description: String,
  description2: String,
  author: String,
  authorImage: String,
  tags: [String],
  type: String,
});
module.exports = mongoose.model('Card', CardSchema);
