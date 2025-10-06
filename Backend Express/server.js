const express = require("express");
const app = express();
const logTimestamp = require("./middleware/logTimestamp");
const generalLimiter = require("./middleware/rateLimiter");

const connectDb = require("./db");
connectDb();

// const Book = require("./bookSchema");
app.use(express.json());

app.use(logTimestamp);

app.use(generalLimiter);

const bookRoute = require("./routes/booksrouter");
app.use("/library/books", bookRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server Running at PORT ${process.env.PORT}`);
});
