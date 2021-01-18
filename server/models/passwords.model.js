const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const passwordSchema = new Schema({
    name:{
        type:String,
        required : true,
        minlength:3

    },
    type:{
        type:String,
        required:true,
        minlength:3
    },
    url:{
        type:String,
        required:true,
        minlength:10
    },
    userName:{
        type:String,
        required:true,
        minlength:3
    },
    password:{
        type:String,
        required:true,
        minlength:8
    }

});

const Passwords = mongoose.model("password",passwordSchema);

module.exports = Passwords;
