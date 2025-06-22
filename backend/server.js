const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const AuthRoutes = require("./Routes/AuthRoutes");
const app = express();
app.use(express.json());
app.use(cors());
const BookRoutes = require("./Routes/BookRoutes");

mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log("Db is connected successfully");
  })
  .catch((err) => console.log(err));
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/", AuthRoutes);
app.use("/", BookRoutes);
