const express = require("express");
const UserRouter = express.Router();

const { getUser, addUser } = require("../Controllers/user.controller");

UserRouter.get("/", getUser);
UserRouter.post("/add", addUser);

module.exports = { UserRouter };
