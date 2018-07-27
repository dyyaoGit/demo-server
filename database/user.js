const mongoose = require("mongoose");

const user = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    }
}, {versionKey: false})

module.exports = mongoose.model("user", user)