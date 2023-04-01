const { UserModel } = require("../Models/user.model");

async function getUser(req, res) {
  try {
    const users = await UserModel.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(400).json({ error });
  }
}

async function addUser(req, res) {
  try {
    const newUser = new UserModel(req.body);
    await newUser.save();
    res.status(200).json({ newUser });
  } catch (error) {
    res.status(400).json({ error });
  }
}

module.exports = { getUser, addUser };
