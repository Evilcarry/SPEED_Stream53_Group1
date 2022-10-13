const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

//All required at the moment, accepted will be used to check if it was rejected or not.
const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    journalName: {
        type: String,
        required: true
    },
    yearOfPublication: {
        type: String,
        required: true
    },
    volumeNumber: {
        type: String,
        required: true
    },
    pages: {
        type: String,
        required: true
    },
    doi: {
        type: String,
        required: true
    },
    accepted: {
        type: Boolean,
        default: false
    },
    rejected: {
        type: Boolean,
        default: false
    },
    isAnalised: {
        type: Boolean,
        default: false
    }
})

articleSchema.plugin(AutoIncrement, {
    inc_field: 'priority', 
    id: 'prioNum',
    start_seq: 1000
})
module.exports = mongoose.model('Article', articleSchema)