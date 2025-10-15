
const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    title: String,
    artist: String,
    audio: String
})

const noteModel = mongoose.model('Notes', noteSchema)

module.exports = noteModel


