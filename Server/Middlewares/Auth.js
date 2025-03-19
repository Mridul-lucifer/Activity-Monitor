const secret_key = "wercvbn"
const jwt = require('jsonwebtoken')
const Verfication = async function (req,res,next) {
    // // console.log(req.body);
    console.log(req.body);
    let token = req.body.Authorization;
    console.log(token);
    if(token){
        req.userId = jwt.verify(token , secret_key).UserId;
        next();
    }else{
        res.status(201).json({
            msg : "Not a token"
        }) 
    }
} 
module.exports ={Verfication}