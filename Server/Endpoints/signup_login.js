const UserDetails = require("../Models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const signUpSchema = require("../Middlewares/zodAuthenticatio").signUpSchema;
const loginSchema = require("../Middlewares/zodAuthenticatio").loginSchema;

const secret_key = "wercvbn";

const SignUpFunction = function (req, res) {
  // Validate request body
  const validation = signUpSchema.safeParse(req.body);
  if (!validation.success) {
    return res
      .status(400)
      .json({ msg: "Invalid input", errors: validation.error.errors });
  }

  const Crypted_Password = bcrypt.hashSync(req.body.password, 8);
  const User = new UserDetails({
    Email: req.body.email,
    UserName: req.body.firstName + "_" + req.body.lastName,
    Age: req.body.age,
    Gender: req.body.gender,
    Password: Crypted_Password,
    Weight: req.body.weight,
  });

  const isUser = UserDetails.findOne({ Email: req.body.email });
  isUser.then((user) => {
    if (user) {
      res.status(200).json({
        msg: "Already an account",
      });
    } else {
      User.save().then((user) => {
        const token = jwt.sign({ UserId: user._id }, secret_key);
        return res.status(201).json({
          msg: "Signup Successful",
          token: token,
          gender: user.Gender,
          weight: user.Weight,
        });
      });
    }
  });
};

const LoginFunction = function (req, res) {
  // Validate request body
  const validation = loginSchema.safeParse(req.body);
  if (!validation.success) {
    return res
      .status(400)
      .json({ msg: "Invalid input", errors: validation.error.errors });
  }

  const isUser = UserDetails.findOne({ Email: req.body.email });
  isUser
    .then((user) => {
      if (!user) {
        return res.status(201).json({
          msg: "Recheck Your Email ID",
        });
      }

      if (bcrypt.compareSync(req.body.password, user.Password)) {
        const token = jwt.sign({ UserId: user._id }, secret_key);
        return res.status(202).json({
          msg: "Login Successful",
          token: token,
          gender: user.Gender, // Changed from isUser.Gender
          weight: user.Weight, 
        });
      } else {
        return res.status(400).json({
          msg: "Incorrect Password...",
        });
      }
    })
    .catch((error) => {
      return res.status(500).json({
        msg: "Server error",
        error: error.message,
      });
    });
};

module.exports = { SignUpFunction, LoginFunction };
