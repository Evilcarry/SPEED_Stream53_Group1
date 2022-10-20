const Article = require('../models/Article')
const asyncHandler = require('express-async-handler')

// @desc Get all Moderator Articles
// @route GET /moderator
// @access Private
const getModeratorArticles = asyncHandler(async(req, res) => {
    const condition = {"accepted": "false", "rejected" : "false"}
    const articles = await Article.find(condition).lean()
    if (!articles?.length){
        return res.status(400).json({ message: 'No articles found'})
    }
    res.json(articles)
})

// @desc update article to show that it has been moderated
// @route PATCH /moderator
// @access Private
const addToModerated = asyncHandler(async(req, res) => {
    const {accepted, rejected, doi} = req.body

    //Checking that title, doi and articleText have been inputted
    if(typeof accepted !== 'boolean' || !doi || typeof rejected !== 'boolean'){
        return res.status(400).json({ message: 'All fields are required'})
    }

    //request an article with the given doi
    const article = await Article.findOne({doi}).exec()

    //If the doi is wrong, no articles found
    if (!article) {
        return res.status(400).json({ message: 'No articles found'}) 
    }

    if (accepted){
        article.accepted = accepted
    }else if (rejected){
        article.rejected = rejected
    }

    const updatedArticle = await article.save()

    res.json(`'${updatedArticle.accepted, updatedArticle.rejected}' updated`)
})

module.exports = {
    getModeratorArticles,   
    addToModerated
}