const express = require("express");
const UserModel = require("../Models/AuthModel");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { email, name, password } = req.body;
  console.log("POST /Register - body :", req.body);
  try {
    const isemail = await UserModel.findOne({ email });
    if (isemail) {
      return res.status(201).json({ message: "User Already exist" });
    }

    const hashpass = await bcrypt.hash(password, 10);
    const user = await UserModel.create({
      email,
      name,
      password: hashpass,
    });
    res.status(201).json({ message: "User registered successfully", user });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  console.log("Login body :", req.body);
  try {
    const isemail = await UserModel.findOne({ email });
    if (!isemail) {
      return res.status(202).json({ message: "User does not exists" });
    }
    const isMatch = await bcrypt.compare(password, isemail.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const payload = { id: isemail._id, role: isemail.role };
    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1hr" });
    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: isemail._id,
        email: isemail.email,
        Name: isemail.name,
        role: isemail.role,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err });
  }
};
