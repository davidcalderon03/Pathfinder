const mongoose = require("mongoose");

const postSchema = {
    username: String,
    header: String,
    content: String,
    labels: [String]
 };

 module.exports = mongoose.model("Post", postSchema);