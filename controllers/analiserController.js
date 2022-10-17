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

// @desc Get all Analiser Articles
// @route GET /analiser
// @access Private
const addArticleSection = asyncHandler(async(req, res) => {
    const {title, doi, articleText} = req.body

    //Checking that title and doi have been inputted
    if(!title || !doi || !articleText){
        return res.status(400).json({ message: 'All fields are required'})
    }

    //request an article with the given doi
    const article = await Article.findById(doi).exec()

    //If the doi is wrong, no articles found
    if (!article) {
        return res.status(400).json({ message: 'No articles found'}) 
    }

    article.articleText = articleText

    const updatedArticle = await article.save()

    res.json({ message: `updated article with the title: ${title}`})
})

module.exports = {
    getAnaliserArticles,   
    addArticleSection
    //updateArticle,
    //deleteArticle
}