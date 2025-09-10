const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    username: String,
    password: String
})

const userModels = mongoose.model('user', userSchema)

module.exports = userModels