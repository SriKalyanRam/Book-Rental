import React, { useState } from "react";
import axios from "axios";
import "../Styles/Addbook.css"

function AddBook() {
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    genre: "",
    isbn: "",
    published: "",
    price: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setBookData({
      ...bookData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(bookData).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append("bookImage", image);

    try {
      const response = await axios.post("http://localhost:3002/add", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage("✅ Book added successfully!");
      setBookData({
        title: "",
        author: "",
        genre: "",
        isbn: "",
        published: "",
        price: "",
      });
      setImage(null);
      setPreview(null);
    } catch (error) {
      console.error("Error adding book:", error);
      setMessage("❌ Failed to add book");
    }
  };

  return (
    <div  className="divv">
      <h2>Add a New Book</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          name="title"
          value={bookData.title}
          onChange={handleChange}
          placeholder="Title"
          required
        /><br /><br />

        <input
          type="text"
          name="author"
          value={bookData.author}
          onChange={handleChange}
          placeholder="Author"
          required
        /><br /><br />

        <input
          type="text"
          name="genre"
          value={bookData.genre}
          onChange={handleChange}
          placeholder="Genre"
        /><br /><br />

        <input
          type="text"
          name="isbn"
          value={bookData.isbn}
          onChange={handleChange}
          placeholder="ISBN"
        /><br /><br />

        <input
          type="date"
          name="published"
          value={bookData.published}
          onChange={handleChange}
        /><br /><br />

        <input
          type="number"
          name="price"
          value={bookData.price}
          onChange={handleChange}
          placeholder="Price"
          step="0.01"
          required
        /><br /><br />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        /><br /><br />

        {preview && (
          <img
            src={preview}
            alt="Preview"
            
          />
        )}<br />

        <button className="divvv"  type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
