const mongoose = require('mongoose');

let UsersSchema = new mongoose.Schema({
    name:String,
    birthdate:Date,
    email:String,
    password:String,
    role:String
})

module.exports = mongoose.model("users",UsersSchema);