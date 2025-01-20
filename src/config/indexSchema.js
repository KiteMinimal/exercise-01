// src/models/user.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  profileImage: {
    type: String,
  },
  email: {
    type: String,
  },
  bio: {
    type: String,
  },
  gender: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
