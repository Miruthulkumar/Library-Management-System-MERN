const rateLimit = require("express-rate-limit");

const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: {
    message:
      "Too many requests from this IP, please try again after 15 minutes.",
  },
  standardHeaders: true, // return rate limit info in headers
  legacyHeaders: false, //avoids sending depreceated information in response headers
});


module.exports = generalLimiter;