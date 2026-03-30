const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ['Card', 'Blog'],
      required: true,
    },
    title: { type: String, required: true },
    category: String,
    heroImage: String,
    galleryImages: [String],
    author: String,
    publishedAt: String,
    comments: String,
    readTime: String,
    excerpt: String,
    intro: String,
    sectionOneTitle: String,
    sectionOneBody: String,
    sectionTwoTitle: String,
    sectionTwoBody: String,
    tipsTitle: String,
    tipsList: [String],
    conclusion: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Blog', blogSchema);
