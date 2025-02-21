const UserDetails = require("../Models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret_key = "wercvbn";

const SignUpFunction = function (req, res) {
  // console.log(req.body);
  const Crypted_Password = bcrypt.hashSync(req.body.password, 8);
  const User = new UserDetails({
    Email: req.body.email,
    UserName: req.body.firstName + "_" + req.body.lastName,
    Age: req.body.age,
    Gender: req.body.gender,
    Password: Crypted_Password,
    Weight: req.body.weight,
  });
  const isUser = UserDetails.findOne({ Email: req.body.Email });
  isUser.then((user) => {
    if (user) {
      res.status(200).json({
        msg: "Already a account ",
      });
    } else {
      User.save().then((user) => {
        const token = jwt.sign({ UserId: user._id }, secret_key);
        return res.status(201).json({
          msg: "Signup Successfull",
          token: token,
        });
      });
    }
  });
};

const LoginFunction = function (req, res) {
  const isUser = UserDetails.findOne({ Email: req.body.email });
  isUser.then((user) => {
    if (!user) {
      res.status(201).json({
        msg: "Recheck Your Email ID ",
      });
    } else {
      if (bcrypt.compareSync(req.body.password, user.Password)) {
        const token = jwt.sign({ UserId: user._id }, secret_key, {
          expiresIn: "1h",
        });
        return res.status(202).json({
          msg: "Login Successfull",
          token: token,
        });
      } else {
        res.status(400).json({
          msg: "Incorrect Password...",
        });
      }
    }
  });
};

module.exports = { SignUpFunction, LoginFunction };
