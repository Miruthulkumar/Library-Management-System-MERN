const express = require("express");
const app = express();
const logTimestamp = require("./middleware/logTimestamp");
const generalLimiter = require("./middleware/rateLimiter");
const helmet = require("helmet");
const responseTime = require("response-time");

const connectDb = require("./db");
connectDb();

app.use(express.json());

app.use(helmet());

app.use(logTimestamp);

app.use(generalLimiter);

app.use(responseTime());

const bookRoute = require("./routes/booksrouter");
app.use("/library/books", bookRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server Running at PORT ${process.env.PORT}`);
});
