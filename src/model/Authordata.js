const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/library');

const Schema = mongoose.Schema
const Authorschema = new Schema({
    name : String,
    work:String,
    genre: String,
    image: String
});

var Authordata = mongoose.model('authordata',Authorschema);

module.exports = Authordata;