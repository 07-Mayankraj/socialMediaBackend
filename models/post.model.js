const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title :  String,
    body :  String,
    device :  String,
    userID : String
})

const PostModel = mongoose.model('post',postSchema)

module.exports = PostModel;