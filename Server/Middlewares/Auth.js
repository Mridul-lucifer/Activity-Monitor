const secret_key = "wercvbn"
const jwt = require('jsonwebtoken')
const Verfication = async function (req,res,next) {
    let token = req.body.Authorization;
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