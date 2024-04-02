const LogModel = require('../Models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 

let Login = async(req,res)=>{
    let foundUser = await LogModel.findOne({email:req.body.email.toLowerCase()});
    if(!foundUser) return res.status(200).send({message:"Invalid Email / Password"});
    let isPassTrue = await bcrypt.compare(req.body.password, foundUser.password);
    if(!isPassTrue) return res.status(200).send({message:"Invalid Email / Password"});
    let myToken = await jwt.sign({id:foundUser._id, role:foundUser.role},'mmhsecret60');
    res.header("x-auth-token", myToken);
    return res.status(200).send({message:"Logged-In Sucessfully"})
}

module.exports = Login;