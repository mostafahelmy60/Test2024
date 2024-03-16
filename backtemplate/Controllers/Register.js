const RegModel = require('../Models/Users');
const bcrypt = require('bcrypt');
let Register = async (req,res)=>{
    let foundUser = await RegModel.findOne({email:req.body.email.toLowerCase()});
    if(foundUser) return res.status(200).send({message:"User Already Exist!. Please Login"});
    req.body.email = req.body.email.toLowerCase();
    let salt = await bcrypt.genSalt(10);
    let HashedPass = await bcrypt.hash(req.body.password,salt);
    req.body.password = HashedPass;
    let newUser = new RegModel(req.body);
    await newUser.save();
    return res.send({message:"Added Sucessfully" ,data:newUser});
}

module.exports = Register;