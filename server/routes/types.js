const router = require("express").Router();
const Types = require("../models/types.model");

router.route('/').get((req,res)=>{
Types.find()
.then((types)=>res.json(types))
.catch(err=>res.status(400).json("error:"+err));
})

module.exports = router;