const Article = require('../models/Article')
const asyncHandler = require('express-async-handler')

// @desc Get all Analiser Articles
// @route GET /analiser
// @access Private
const getAnaliserArticles = asyncHandler(async(req, res) => {
    const articles = await Article.find({}).lean()
    if (!articles?.length){
        return res.status(400).json({ message: 'No articles found'})
    }

    if (articles.accepted !== true || articles.rejected !== false){
        return res.status(400).json({ message: 'No articles found to be analised'})
    }

    res.json(articles)
})

module.exports = {
    getAnaliserArticles    
    //createNewArticle,
    //updateArticle,
    //deleteArticle
}