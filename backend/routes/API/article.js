// routes/api/books.js

const express = require('express');
const router = express.Router();

// Load Book model
const Article = require('../../models/Article');

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('Article route testing!'));

// @route GET api/books
// @description Get all books
// @access Public
router.get('/', (req, res) => {
    Article.find()
    .then(article => res.json(article))
    .catch(err => res.status(404).json({ nobooksfound: 'No Books found' }));
});

// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get('/:id', (req, res) => {
    Article.findById(req.params.id)
    .then(article => res.json(article))
    .catch(err => res.status(404).json({ nobookfound: 'No Book found' }));
});

// @route GET api/books
// @description add/save book
// @access Public
router.post('/', (req, res) => {
    Article.create(req.body)
    .then(article => res.json({ msg: 'Book added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this book' }));
});

// @route GET api/books/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
    Article.findByIdAndUpdate(req.params.id, req.body)
    .then(article => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
    Article.findByIdAndRemove(req.params.id, req.body)
    .then(article => res.json({ mgs: 'Book entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a book' }));
});

module.exports = router;