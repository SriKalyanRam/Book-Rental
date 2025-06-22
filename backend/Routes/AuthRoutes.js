const express = require("express");
const AuthController = require("../Controller/AuthController");

const router = express.Router();

const { AuthToken, AuthRole } = require("../Middleware/AuthJWt");

router.post("/Register", AuthController.register);
router.post("/Login", AuthController.login);

router.get("/admin/dashboard", AuthToken, AuthRole("admin"), (req, res) => {
  res.json({ message: "Welcome, admin!", user: req.user });
});

router.get("Home", AuthToken, AuthRole("user"), (req, res) => {
  res.json({ message: "Welcome, user!", user: req.user });
});

module.exports = router;
