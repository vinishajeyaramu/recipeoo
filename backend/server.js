require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};
connectDB();

app.use('/api/cards', require('./Routes/RecipeCardRoutes'));
app.use('/api/recipes', require('./Routes/RecipeRoutes'));
app.use('/api/video-recipes', require('./Routes/VideoRecipeRoutes'));
app.use('/api/video-cards', require('./Routes/VideoCardRoutes'));
app.use('/api/categories', require('./Routes/CategoryRoutes'));
app.use('/api/cuisines', require('./Routes/CuisineRoutes'));
app.use('/api/cuisine', require('./Routes/CuisineRoutes'));
app.use('/api/users', require('./Routes/userauth.routes'));
app.use('/api/blogs', require('./Routes/BlogRoutes'));
app.use('/api/downloads', require('./Routes/DownloadRoutes'));
app.use('/api/google-recipes', require('./Routes/GoogleRecipeSearchRoutes'));

app.get('/', (req, res) => {
  res.send('Backend is Running perfectly');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server running on port ' + PORT));
