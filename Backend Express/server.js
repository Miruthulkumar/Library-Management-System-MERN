const express = require("express");
const app = express();
const PORT = 4000;

const connectDb = require("./db");
connectDb();

// const Book = require("./bookSchema");
app.use(express.json());

const bookRoute = require("./routes/booksrouter");
app.use("/library/books", bookRoute);

app.listen(PORT, () => {
  console.log(`Server Running at PORT ${PORT}`);
});
