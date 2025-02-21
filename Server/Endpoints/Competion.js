const compDetails = require("../Models/Competion");
const UserDetails = require("../Models/User");

const createCompetionFunction = async function (req, res) {
  const comp = new compDetails({
    name: req.body.name,
    passcode: req.body.passcode,
    type: req.body.type,
    amount: req.body.amount,
    owner: req.userId,
  });
  await comp.save();
  res.status(200).json({
    msg: "Done",
    comp: comp,
  });
};

const joinCompetionFunction = async function (req, res) {
  try {
    const comp = await compDetails.findOne({ name: req.body.name });

    if (!comp) {
      return res.status(402).json({
        msg: "Competition not found",
      });
    }

    if (comp.passcode == req.body.passcode) {
      return res.status(200).json({
        msg: "Found",
        comp: comp,
      });
    }

    return res.status(401).json({
      msg: "Incorrect passcode",
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Server error",
      error: error.message,
    });
  }
};

const competiondone = async function (req, res) {
  try {
    const comp = await compDetails.findOne({ name: req.body.name });
    if (!comp) {
      return res.status(402).json({
        msg: "Competition not found",
      });
    }

    const user = await UserDetails.findById(req.userId, "UserName");
    if (!user) {
      return res.status(404).json({
        msg: "User not found",
      });
    }

    comp.array.push({ Solver: user.UserName });
    await comp.save();
    return res.status(200).json({
      msg: "Done",
      comp: comp,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Server error",
      error: error.message,
    });
  }
};

const myCompetions = async function (req, res) {
  try {
    const comps = await compDetails.find({ owner: req.userId });
    return res.status(200).json({
      msg: "Done",
      comps: comps,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Server error",
      error: error.message,
    });
  }
};

module.exports = {
  createCompetionFunction,
  joinCompetionFunction,
  competiondone,
  myCompetions,
};
