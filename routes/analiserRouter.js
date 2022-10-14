const express = require('express')
const router = express.Router()
const analiserController = require('../controllers/analiserController')

router.route('/')
    .get(analiserController.getAnaliserArticles)
    //.post(analiserController.createNewArticle)
    //.patch(analiserController.updateArticle)
    //.delete(analiserController.deleteArticle)

module.exports = router