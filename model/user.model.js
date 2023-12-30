const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: String,
    passsword: String,
    role: {
        type: String
    }
})

const user = mongoose.model("user",userSchema)

module.exports = {user}