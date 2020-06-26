const mongoose = require('mongoose');
db1=mongoose.connect('mongodb://localhost:27017/library');

const Schema = mongoose.Schema;
const userschema = new Schema({
    username:{ type : String, unique : true},
    email:String,
    password:String,
    dob:String,
    phone:String

});

var Userdata = mongoose.model('userdata',userschema);

module.exports = Userdata;

