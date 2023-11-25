require("dotenv").config();
const User = require("../models/User");
const { createSecretToken } = require("../utils/SecretToken");
const bcrypt = require("bcrypt");
const CustomError = require("../utils/errors/CustomError");
const Admin = require("../models/admin");


module.exports.Signup = async (req, res, next) => {
  console.log(req.body);
  const userDetails = {
    username: req.body.username,
    password: req.body.password,
    phonenumber: parseInt(req.body.phonenumber),
  };
  try {
    const existingUser = await User.findOne({ username: userDetails.username });
    console.log(existingUser)
    if (existingUser) {
      throw new CustomError(400, "User already exists");
    }

    const newUser = new User(userDetails);
    await newUser.save();
    const token = createSecretToken(newUser._id);
    res.status(201).json({ status: true, token });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports.verifyToken = (req, res) => {
  res.json({ status: true, message: "Token verified", user: req.user });
};

module.exports.Login = async (req, res, next) => {
  const userDetails = {
    username: req.body.username,
    password: req.body.password,
  };

  try {
    const user = await User.findOne({ username: userDetails.username });
    if (!user) {
      throw new CustomError(401, "Unauthorizzed: username does not exist");
    }
    const passwordMatch = await bcrypt.compare(
      userDetails.password,
      user.password
    );

    if (!passwordMatch) {
      throw new CustomError(401, "Unauthorized: Incorrect Password");
    }
    const token = createSecretToken(user._id);
    res.status(201).json({ status: true, token, user });
  } catch (error) {
    console.log(error);
    next(error);
  }
  
};


module.exports.SuperAdminLogin = async (req, res, next) => {
  const userDetails = {
    adminName: req.body.adminName,
    password: req.body.password,
  };

  try {
    const admin = await Admin.findOne({ adminName: userDetails.adminName });
    if (!admin) {
      throw new CustomError(401, "Unauthorizzed: username does not exist");
    }
    const passwordMatch = await bcrypt.compare(
      userDetails.password,
      admin.password
    );

    if (!passwordMatch) {
      throw new CustomError(401, "Unauthorized: Incorrect Password");
    }
    const token = createSecretToken(admin._id);
    res.status(201).json({ status: true, token, admin });
  } catch (error) {
    console.log(error);
    next(error);
  }

};
