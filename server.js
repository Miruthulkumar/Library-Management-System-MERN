const express = require("express");
const app = express();
const PORT = 4000;

const connectDb = require("./db");
connectDb();

const Book = require("./bookSchema");
app.use(express.json());

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
app.get("/library/books/:id", async (req, res) => {
  try {
    const bookById = await Book.findById(req.params.id);

    if (bookById == null) {
      return res.status(404).json({ error: "Book Not Found" });
    }

    res.status(200).json(bookById);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//get book by name
app.get("/library/books/name/:name", async (req, res) => {
  try {
    const bookByName = await Book.find({ title: req.params.name });

    if (bookByName.length == 0) {
      return res.status(404).json({ error: "Book Not Found" });
    }

    res.status(200).json(bookByName);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

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
app.put("/library/books/update/:id", async (req, res) => {
  try {
    const updateBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (updateBook == null) {
      return res.status(404).send("Book Does not Exist");
    }
    res.status(200).json(updateBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//delete a book by id
app.delete("/library/books/delete/:id", async (req, res) => {
  try {
    const deleteBook = await Book.findByIdAndDelete(req.params.id);
    if (deleteBook == null) {
      return res.status(404).json({ error: "Book Does not Exist" });
    }
    res.status(200).send("Book deleted Successfully");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server Running at PORT ${PORT}`);
});
