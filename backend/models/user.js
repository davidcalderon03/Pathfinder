const mongoose = require("mongoose");

const userSchema = {
    username: String,
    encryptedPassword: String,
    firstName: String,
    lastName: String,
    email: String,
    startedOn: Date,
    friends: [String]
 };

 module.exports = mongoose.model("User", userSchema);