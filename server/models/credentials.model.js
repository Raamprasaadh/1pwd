const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const credentialSchema = new Schema({
    password:{
        type:String,
        required:true
    }
});

const Credential = mongoose.model("credentials",credentialSchema);

module.exports = Credential;
