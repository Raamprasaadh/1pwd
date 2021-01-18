const router = require("express").Router();
const Passwords = require('../models/passwords.model');

router.route('/').get((req,res)=>{
    Passwords.find()
    .then(passwords=>res.json(passwords))
    .catch(err=>res.status(400).json("error:"+err));
});

router.route('/add').post((req,res)=>{
    let name = req.body.name;
    let type = req.body.type;
    let url = req.body.url;
    let userName = req.body.userName;
    let password = req.body.pwd;

    const newPassword = new Passwords({name, type,url,userName,password});

    newPassword.save()
    .then(()=>res.json("Password added successfully"))
    .catch(err => res.status(400).json("error:"+err));
})


module.exports = router;