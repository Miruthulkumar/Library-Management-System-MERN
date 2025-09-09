const mongoose = require("mongoose"); // Import the mongoose library to interact with MongoDB databases.

// Function to establish a connection to the MongoDB database asynchronously.
async function connectDb() {
  // Use mongoose.connect() to connect to the MongoDB database using the provided connection string.
  // The connection string includes credentials, cluster address, and options such as retryWrites and appName.
  const connection = await mongoose.connect(
    "mongodb+srv://miruthul:IyLBTWLHTjq9BGmc@cluster0.avtwclw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  // Log a confirmation message to the console once the database connection is successfully established.
  console.log("Database Connected Successfully!");
}

// Export the connectDb function so it can be imported and used in other parts of the application, such as the server file.
module.exports = connectDb;