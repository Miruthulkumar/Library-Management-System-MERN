const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

async function connectDb() {
  try {
    await mongoose.connect(process.env.MongoDB_URL);
    console.log("Database Connected Successfully ✅!");
  } catch (err) {
    console.error("DB connection error:", err);
    process.exit(1);
  }
}

module.exports = connectDb;