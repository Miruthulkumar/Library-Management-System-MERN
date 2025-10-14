const mongoose = require("mongoose");

const userSchemaforLMS = new mongoose.Schema({
  userId: { type: String, unique: true, default: () => new mongoose.Types.ObjectId() },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["Admin", "User"], required: true },
});

const User = mongoose.model("user", userSchemaforLMS);

module.exports = User;