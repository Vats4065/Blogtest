const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    img: String,
    title: String,
    description: String,
    category: String,
    // comments: [{
    //     text: String,
    //     username: String
    // }],
    createdby: { type: mongoose.Schema.Types.ObjectId, ref: "user" }
})

const blogS = mongoose.model("blog", blogSchema)

module.exports = { blogS }