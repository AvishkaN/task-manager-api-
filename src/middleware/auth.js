const jwt = require("jsonwebtoken");
const User = require("../model/user");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    console.log("token", token);
    console.log("token", token);

    const decoded = jwt.verify(token, "jwt_secret");

    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    console.log("user", user);

    if (!user) {
      throw new Error("cant find this user");
    }

    req.user = user;

    next();
  } catch (error) {
    res.status(401).send(error.message);
  }
};

module.exports = auth;
