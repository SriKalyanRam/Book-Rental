const express = require("express");
const BookController = require("../Controller/BookController");
const multer = require("multer");
const { storage } = require("../config/cloudinary");

const upload = multer({ storage });
const router = express.Router();

router.post("/add", upload.single("bookImage"), BookController.addBook);

router.get("/books", BookController.getAllBooks);

module.exports = router;
