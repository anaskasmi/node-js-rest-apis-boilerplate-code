//packages
const express = require('express');
const { set } = require('mongoose');
//models
const Post = require('../models/Post');
//controllers
const postsController = require('../controllers/postsController');
//config
const router = express.Router();


router.get('/', postsController.getAllPosts)
router.post('/', postsController.savePost)
router.get('/:id', postsController.getPostById)
router.delete('/:id', postsController.deletePostById)
router.patch('/:id', postsController.updatePostById)

module.exports = router;