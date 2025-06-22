const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String },
  isbn: { type: String },
  published: { type: Date },
  imageUrl: { type: String },
  price: { type: Number, required: true },
});

const BookModel = mongoose.model("Book", BookSchema);

module.exports = BookModel;
