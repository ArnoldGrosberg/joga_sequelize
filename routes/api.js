const express = require('express');
const router = express.Router();
const apiArticleController = require('../controllers/api/article');
const apiAuthorController = require('../controllers/api/author');

router.get('/article', apiArticleController.getArticleBySlug);
router.get('/author', apiAuthorController.getAuthorBySlug);

module.exports = router;