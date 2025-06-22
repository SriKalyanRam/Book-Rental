const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const BookModel = require("../Models/BookModel");

exports.addBook = async (req, res) => {
  try {
    const { title, author, genre, isbn, published, price } = req.body;
    const imageUrl = req.file.path;

    const newBook = new BookModel({
      title,
      author,
      genre,
      isbn,
      published,
      imageUrl,
      price,
    });

    await newBook.save();
    res.status(201).json({ message: "Book added", book: newBook });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error saving book" });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const books = await BookModel.find();
    res.status(200).json(books);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ error: "Failed to fetch books" });
  }
};
