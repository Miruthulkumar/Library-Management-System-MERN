const express = require("express"); // Importing the Express framework to create the server and handle routing
const app = express(); // Initialize an Express application and assign it to the constant 'app'
const PORT = 4000; // Define the port number on which the server will listen for incoming requests

const connectDb = require("./db"); // Import the connectDb function from the db.js file to establish a database connection
connectDb(); // Call the connectDb function to connect to the MongoDB database



app.get("/");

app.listen(PORT, () => {
  console.log(`Server Running at PORT ${PORT}`);
});
