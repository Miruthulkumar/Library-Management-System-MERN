const express = require("express"); // Importing the Express framework to create the server and handle routing
const app = express(); // Initialize an Express application and assign it to the constant 'app'
const PORT = 4000; // Define the port number on which the server will listen for incoming requests

const connectDb = require("./db"); // Import the connectDb function from the db.js file to establish a database connection
connectDb(); // Call the connectDb function to connect to the MongoDB database

// Import the Todo schema/model from the todoschema.js file to interact with the todos collection in MongoDB
const Book = require("./bookSchema");
app.use(express.json()); // Middleware to parse incoming JSON payloads in request bodies

//get all books
app.get("/library/books", async (req, res) => {
  try {
    const allBooks = await Book.find();
    res.status(200).json(allBooks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//get books by id
app.get("/library/books/:id", (req, res) => {});

//get book by name
app.get("/library/books/name/:name", (req, res) => {});

//add book
app.post("/library/books/add", async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//update a book by id
app.put("/library/books/update/:id", (req, res) => {});

//delete a book by id
app.delete("/library/books/delete/:id", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server Running at PORT ${PORT}`);
});
