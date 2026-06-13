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
    cardImage: String,
    heroImage: String,
    galleryImages: [String],
    author: String,
    publishedAt: String,
    comments: String,
    readTime: String,
    excerpt: String,
    intro: String,
    openingSections: [
      {
        heading: String,
        text: String,
      },
    ],
    numberedSections: [
      {
        heading: String,
        items: [String],
      },
    ],
    pointedSections: [
      {
        heading: String,
        items: [String],
      },
    ],
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
