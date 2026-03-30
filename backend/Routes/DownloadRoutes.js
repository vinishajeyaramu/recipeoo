const express = require('express');
const Download = require('../Model/DownloadModel');

const router = express.Router();

router.get('/', async (req, res) => {
  const downloads = await Download.find().sort({ createdAt: -1 }).lean();
  res.json(downloads);
});

router.post('/', async (req, res) => {
  const created = await Download.create(req.body);
  res.status(201).json(created);
});

module.exports = router;
