const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const passwordRoute = require("./routes/password");
const typeRoute = require("./routes/types");
const credentialRoute = require('./routes/credential');

const uri = "mongodb://localhost/1pwd";
const port = process.env.port||3001;


mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true})
.then(console.log("DB connected Successfully"))
.catch(err=>console.error(err));

const app = express();

app.use(cors());
app.use(express.json());

app.use('/password', passwordRoute);
app.use('/type',typeRoute);
app.use('/credential', credentialRoute);

app.listen(port,()=>{
    console.log(`1pwd server running on port ${port}`);
})