const User = require("./src/models/User");
const connectDB = require("./src/config/db");
require("dotenv").config();

connectDB();

(async () => {
  await User.create({
    name: "Shop Owner",
    username: "owner",
    password: "owner123", // 🔥 plain password
    role: "OWNER"
  });

  console.log("Owner created with plain password");
  process.exit();
})();
