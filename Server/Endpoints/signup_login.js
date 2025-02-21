const UserDetails = require("../Models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
  signUpSchema,
  loginSchema,
} = require("../Middlewares/zodAuthenticatio");

const secret_key = "wercvbn";

const SignUpFunction = async (req, res) => {
  try {
    // Validate request body
    const validation = signUpSchema.safeParse(req.body);
    if (!validation.success) {
      return res
        .status(400)
        .json({ msg: "Invalid input", errors: validation.error.errors });
    }

    // Normalize email
    const normalizedEmail = req.body.email.toLowerCase().trim();

    const Crypted_Password = bcrypt.hashSync(req.body.password, 8);
    const User = new UserDetails({
      Email: normalizedEmail, // Store normalized email
      UserName: `${req.body.firstName}_${req.body.lastName}`,
      Age: req.body.age,
      Gender: req.body.gender,
      Password: Crypted_Password,
      Weight: req.body.weight,
    });

    const user = await UserDetails.findOne({ Email: normalizedEmail });
    if (user) {
      return res.status(200).json({ msg: "Already an account" });
    }

    const savedUser = await User.save();
    const token = jwt.sign({ UserId: savedUser._id }, secret_key);
    return res.status(201).json({
      msg: "Signup Successful",
      token: token,
      gender: savedUser.Gender,
      weight: savedUser.Weight,
    });
  } catch (error) {
    console.error("SignUp Error:", error);
    return res.status(500).json({ msg: "Server error during signup" });
  }
};

const LoginFunction = async (req, res) => {
  try {
    // Validate request body
    const validation = loginSchema.safeParse(req.body);
    if (!validation.success) {
      return res
        .status(400)
        .json({ msg: "Invalid input", errors: validation.error.errors });
    }

    // Normalize email
    const normalizedEmail = req.body.email.toLowerCase().trim();

    const user = await UserDetails.findOne({ Email: normalizedEmail });

    if (!user) {
      return res.status(201).json({
        msg: "Recheck Your Email ID",
      });
    }

    if (bcrypt.compareSync(req.body.password, user.Password)) {
      const token = jwt.sign({ UserId: user._id }, secret_key, {
        expiresIn: "1h",
      });
      return res.status(202).json({
        msg: "Login Successful",
        token: token,
        gender: user.Gender,
        weight: user.Weight,
      });
    }

    return res.status(400).json({
      msg: "Incorrect Password...",
    });
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({ msg: "Server error during login" });
  }
};

module.exports = { SignUpFunction, LoginFunction };
