const express = require('express')
const router = express.Router()
const analiserController = require('../controllers/analiserController')

router.route('/')
    .get(analiserController.getAnaliserArticles)
    .patch(analiserController.addArticleSection)
    //.patch(analiserController.updateArticle)
    //.delete(analiserController.deleteArticle)

module.exports = router