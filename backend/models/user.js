const mongoose = require('mongoose');
const Schema = mongoose.Schema
const Userschema = new Schema({
    name :{
        type : String,
        required : true

    },
    username :{
        type :String,
        reqired : true,
        unique :true,
    },
    email : {
        type :String,
        required : true,
        unique : true,
    },
    password:{
        type : String,
        required : true
    },
    admin :{ 
        type:Boolean,
        required : true
    },


});
const User = mongoose.model('User',Userschema);
module.exports = User ;