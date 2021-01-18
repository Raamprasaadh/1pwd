const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


const uri = "mongodb://localhost/1pwd";
const port = process.env.port||3001;


mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true})
.then(console.log("DB connected Successfully"))
.catch(err=>console.error(err));

const app = express();

app.use(cors());
app.use(express.json());

app.listen(port,()=>{
    console.log(`1pwd server running on port ${port}`);
})