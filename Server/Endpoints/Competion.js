const compDetails = require("../Models/Competion");

const createCompetionFunction = async function (req,res) {
    // console.log(req.body);
    const comp = new compDetails({
        name : req.body.name,
        passcode : req.body.passcode,
        type : req.body.type,
        amount : req.body.amount,
        owner : req.userId
    });
    comp.save()
    res.status(200).json({
        msg : "Done",
        comp : comp
    })
}
const joinCompetionFunction = async function (req, res) {
    console.log(req.body);
    try {
      const comp = await compDetails.findOne({ name: req.body.name });
      
      if (!comp) {
        // If competition is not found
        return res.status(402).json({
          msg: "Competition not found",
        });
      }
  
      // If competition is found, check passcode
      if (comp.passcode == req.body.passcode) {
        return res.status(200).json({
          msg: "Found",
          comp: comp,
        });
      }
  
      // If passcode doesn't match
      return res.status(401).json({
        msg: "Incorrect passcode",
      });
  
    } catch (error) {
      // If there's an error during the database operation
      return res.status(500).json({
        msg: "Server error",
        error: error.message,
      });
    }
  };
  

module.exports = {createCompetionFunction,joinCompetionFunction}