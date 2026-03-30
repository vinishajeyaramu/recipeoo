const mongoose = require('mongoose');

const videoRecipeModalSchema = new mongoose.Schema({
    title: String,
    category: String,
    time: String,
    cuisine: String,
    serves: String,
    rating: Number,
    difficulty: String,
    image: String,
    description: String,
    description2: String,
    author: String,
    authorImage: String,
    tags: [String],
    type: String,
});
module.exports = mongoose.model('VideoRecipeCard', videoRecipeModalSchema);
