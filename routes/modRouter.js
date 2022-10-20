const express = require('express')
const router = express.Router()
const moderatorController = require('../controllers/moderatorController')

router.route('/')
    .get(moderatorController.getModeratorArticles)
    .patch(moderatorController.addToModerated)


module.exports = router