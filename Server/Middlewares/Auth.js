const secret_key = "wercvbn";
const jwt = require("jsonwebtoken");

const Verfication = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];
    try {
      const decoded = jwt.verify(token, secret_key);
      req.userId = decoded.UserId;
      next();
    } catch (err) {
      return res.status(401).json({ msg: "Unauthorized: Invalid token" });
    }
  } else {
    return res.status(401).json({ msg: "Unauthorized: No token provided" });
  }
};

module.exports = { Verfication };
