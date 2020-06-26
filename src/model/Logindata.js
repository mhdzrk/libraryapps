const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/library')

const Schema = mongoose.Schema

let userSchema = new Schema({
    username:String,
    password:String
})

let Logindata = mongoose.model('logindata',userSchema);
module.exports = Logindata;