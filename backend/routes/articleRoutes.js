const express = require('express')
const router = express.Router()
const articleController = require('../controllers/articleController')

router.route('/')
    .get(articleController.getAllArticles)
    .post(articleController.createNewArticle)
    .patch(articleController.updateArticle)
    .delete(articleController.deleteArticle)

module.exports = router