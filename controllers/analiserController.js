const Article = require('../models/Article')
const asyncHandler = require('express-async-handler')

// @desc Get all Analiser Articles
// @route GET /analiser
// @access Private
const getAnaliserArticles = asyncHandler(async(req, res) => {
    const condition = {"accepted": "true", "rejected" : "false", "isAnalised" : "false" }
    const articles = await Article.find(condition).lean()
    if (!articles?.length){
        return res.status(400).json({ message: 'No articles found'})
    }

    res.json(articles)
})

// @desc update article
// @route PATCH /analiser
// @access Private
const addArticleSection = asyncHandler(async(req, res) => {
    const {title, doi, articleText} = req.body

    //Checking that title, doi and articleText have been inputted
    if(!title || !doi || !articleText){
        return res.status(400).json({ message: 'All fields are required'})
    }

    //request an article with the given doi
    const article = await Article.findOne({doi}).exec()

    //If the doi is wrong, no articles found
    if (!article) {
        return res.status(400).json({ message: 'No articles found'}) 
    }

    article.articleText = articleText
    article.isAnalised = true

    const updatedArticle = await article.save()

    res.json(`'${updatedArticle.articleText}' updated`)
})

module.exports = {
    getAnaliserArticles,   
    addArticleSection
    //updateArticle,
    //deleteArticle
}