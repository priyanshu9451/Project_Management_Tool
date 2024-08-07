const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String, required:  true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
});

const Users = mongoose.model("User", userSchema);

module.exports = Users;
