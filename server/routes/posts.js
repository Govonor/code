const express = require('express');
const router = express.Router();
const { getAllPosts } = require('../controllers/postController');

// Route to get all posts
router.get('/', getAllPosts);

module.exports = router;
