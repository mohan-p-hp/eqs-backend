const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  username: { type: String, unique: true },
  password: String, // plain text now
  role: { type: String, enum: ["OWNER", "EMPLOYEE"] },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", userSchema);
