const express = require('express')
const router = express.Router()
const path = require('path')

router.get('^/$|/index(.html)?', (req, res) => {
<<<<<<< HEAD
    res.sendFile(path.join(__dirname, '..', '..', '/frontend2/public', 'index.html'))
=======
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
>>>>>>> fc279c2bc946cb889d0fea95cb87cdc2ae5d3f8d
})

module.exports = router