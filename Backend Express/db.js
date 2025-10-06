const mongoose = require("mongoose"); // Import the mongoose library to interact with MongoDB databases.
const env = require("dotenv");
env.config();

async function connectDb() {
  const connection = await mongoose.connect(process.env.MongoDB_URL);
  console.log("Database Connected Successfully ✅!");
}

// Export the connectDb function so it can be imported and used in other parts of the application, such as the server file.
module.exports = connectDb;
