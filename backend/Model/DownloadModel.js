const mongoose = require('mongoose');

const downloadSchema = new mongoose.Schema(
  {
    recipeId: String,
    recipeTitle: { type: String, required: true },
    category: String,
    itemType: String,
    format: {
      type: String,
      enum: ['jpg', 'pdf'],
      required: true,
    },
    userId: String,
    userName: String,
    userEmail: String,
    snapshot: mongoose.Schema.Types.Mixed,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Download', downloadSchema);
