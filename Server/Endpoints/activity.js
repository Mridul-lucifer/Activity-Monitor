const UserDetails = require('../Models/User')
const ActivityFunction = async function (req,res) {
    console.log(req.userId+" "+req.body.Calories);
    
    res.status(200).json({
        msg : "Successfully Completed"
    }) 
}
module.exports = {ActivityFunction}