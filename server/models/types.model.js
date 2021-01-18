const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const typeSchema  = new Schema({
    name:{
        type:String,
        required:true,
        minlength:1
    }
});

const Types = mongoose.model("types",typeSchema);

module.exports= Types;