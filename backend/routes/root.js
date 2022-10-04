const express = require('express')
const router = express.Router()
const path = require('path')

// A get request that relates to http requests
// They recognize regex
// - Only matches if requested file is a forward slash, so that would be the root
// html is optional so they could request just the / or /index without .html or index.html
// function has request and response, in the function we send the file back
router.get('^/$|/index(.html)?', (req, res) => {
    // '..' outside of current folder, within the views folder, looking for the index.html file
    res.sendFile(path.join(__dirname, '../../frontend', 'views', 'index.html'))
}) 

module.exports = router