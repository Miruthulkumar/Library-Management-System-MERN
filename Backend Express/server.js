const express = require("express");
const helmet = require("helmet");
const responseTime = require("response-time");
const logTimestamp = require("./middleware/logTimestamp");
const generalLimiter = require("./middleware/rateLimiter");

const connectDb = require("./db");
connectDb();

const bookRoute = require("./routes/booksrouter");
const userRoute = require("./routes/userRouter");

const app = express();

app.use(express.json());
app.use(helmet());
app.use(logTimestamp);
app.use(generalLimiter);
app.use(responseTime());

app.use("/library/books", bookRoute);
app.use("/library/user", userRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server Running at PORT ${process.env.PORT}`);
});