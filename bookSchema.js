const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: String, required: true },
  publishedyear: { type: Number, required: true },
  location: { type: String, required: true },
  status: {
    type: String,
    enum: ["available", "borrowed"],
    default: "available",
    required: true,
  },
});

module.exports = mongoose.model("Book", bookSchema);
