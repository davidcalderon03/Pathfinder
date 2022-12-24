const mongoose = require("mongoose");

const directMessageSchema = {
    usernameSender: String,
    usernameReceiver: String,
    messageContent: String
 }

module.exports = mongoose.model("DirectMessage", directMessageSchema);