const Article = require('../models/Article')
const asyncHandler = require('express-async-handler')

// @desc Get all articles
// @route GET /article
// @access Private
const getAllArticles = asyncHandler(async(req, res) => {
    const condition = {"accepted": "true", "rejected" : "false", "isAnalised" : "true" }
    const articles = await Article.find(condition).lean()
    if (!articles?.length){
        return res.status(400).json({ message: 'No articles found'})
    }
    res.json(articles)
})

// @desc Create new article
// @route POST /article
// @access Private
const createNewArticle = asyncHandler(async(req, res) => {
    const {title, author, journalName, yearOfPublication, volumeNumber, pages, doi} = req.body
    
    //confirming data
    if ( !title || !author || !journalName || !yearOfPublication || !volumeNumber || !pages || !doi){
        return res.status(400).json({ message: 'All fields are required'})
    }
    
    // Check for duplicates
    const duplicate = await Article.findOne({ doi }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate article'})
    }

    const articleObject = {title, author, journalName, yearOfPublication, volumeNumber, pages, doi }

    // create and store new Article
    const article = await Article.create(articleObject)

    if (article) {
        res.status(201).json({ message: `New article created with the title: ${title}`})
    }else{
        res.status(400).json({ message: 'invalid article data received'})
    }
})

// @desc Update an article
// @route Patch /article
// @access Private
const updateArticle = asyncHandler(async(req, res) => {
    const {id, title, author, journalName, yearOfPublication, volumeNumber, pages, doi, accepted, rejected, isAnalised } = req.body

    //confirm data
    if (!id ||!title || !author || !journalName || !yearOfPublication || !volumeNumber || !pages || !doi || typeof accepted !== 'boolean' || typeof rejected !== 'boolean' || typeof isAnalised !== 'boolean'){
        return res.status(400).json({ message: 'All fields are required'})
    }

    const article = await Article.findById(id).exec()

    //check for no article found
    if (!article) {
        return res.status(400).json({ message: 'No articles found'}) 
    }

    //check for duplicate 
    const duplicate = await Article.findOne({doi}).lean().exec()
    // Allow updates to the original article
    if (duplicate && duplicate?._id.toString() !== id){
        return res.status(409).json({ message: 'Duplicate doi'})
    }

    article.title = title
    article.author = author
    article.journalName = journalName
    article.yearOfPublication = yearOfPublication
    article.volumeNumber = volumeNumber
    article.pages = pages
    article.doi = doi

    if (accepted) {
        article.accepted = accepted
    }
    if (rejected){
        article.rejected = rejected
    }
    if (isAnalised){
        article.isAnalised = isAnalised
    }
    
    const updatedArticle = await article.save()

    res.json({ message: `updated article with the title: ${title}`})
})

// @desc Delete an article
// @route DELETE /article
// @access Private
const deleteArticle = asyncHandler(async(req, res) => {
    const { doi } = req.body

    if (!doi){
        return res.status(400).json({message: 'DOI required'})
    }

    const article = await Article.findOne({ doi }).exec()

    if (!article){
        return res.status(400).json({message: 'article not found'})
    }

    const result = await article.deleteOne()

    const reply = `Article ${result.title} with submitter ID ${result._id} deleted`

    res.json(reply)
})

module.exports = {
    getAllArticles,
    createNewArticle,
    updateArticle,
    deleteArticle
}