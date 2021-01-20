const bcrypt = require('bcryptjs');
const router = require('express').Router();
const Credential = require('../models/credentials.model');


router.route('/').get((req,res)=>{
    Credential.find()
    .then((credential)=>res.json(credential))
    .catch(err=>{res.json("error:"+err)});
});

router.route('/signin').post((req,res)=>{
    //bcrypt the password
    
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(req.body.password,salt,(err,hash)=>{
            if(err){
                throw err;
            }
            else
            {
                const newCredential = new Credential({
                    password:hash
                });
                newCredential.save()
               .then(()=>res.json("Only password has been set"))
               .catch(err=>res.status(400).json("error:"+err));
            }
        })
    })
    
    
});

router.route('/login').post((req,res)=>{
    //bcrypt and findone
    Credential.find()
                .then(data=>{
                    
                    
                    bcrypt.compare(req.body.password,data[0].password)
                    .then(isMatch=>{
                        if(!isMatch)
                        {
                            res.status(400).json("error:wrong password");
                        }
                        else{
                            res.json("login:success");
                        }
                    })
                    
                    
                })                     
                .catch(err=>res.status(400).json("error:"+err));

});
    


module.exports = router;