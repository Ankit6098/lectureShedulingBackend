const User = require("../models/User");

// create
module.exports.createUser = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const user = await User.create({
      name: name,
      email: email,
      phone: phone,
    });
    if (user) {
      return res.status(200).json({
        message: "User Created!",
        user: user,
      });
    }
    return res.status(400).json({
      message: "User not created",
    });
  } catch (error) {
    return res.status(402).json({
      message: "Error user not created!",
      error: error,
    });
  }
};

// get user by id
module.exports.getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (user) {
      return res.status(200).json({
        message: "user found!",
        user: user,
      });
    }
    return res.status(404).json({
      message: "user not found!",
    });
  } catch (error) {
    return res.status(402).json({
      message: "Error user not found!",
      error: error,
    });
  }
};

// get all user
module.exports.getAllUsers = async (req, res) => {
  try {
    const user = await User.find({});
    if (user) {
      return res.status(200).json({
        message: "Course found!",
        user: user,
      });
    }
    return res.status(404).json({
      message: "Course not found!",
    });
  } catch (error) {
    return res.status(402).json({
      message: "Error Course not found!",
      error: error,
    });
  }
};
