const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    image: { type: String },
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobileNo: { type: String, required: true },
    password: { type: Object, required: true },
    gender: { type: String, required: true },
    alternateMob: { type: String },
    hintName: { type: Number },
    role: { type: String, required: true },
  },
  {
    versionKey: false,
    timesStamp: true,
  }
);

const UserModel = mongoose.model("user", UserSchema);

module.exports = { UserModel };
