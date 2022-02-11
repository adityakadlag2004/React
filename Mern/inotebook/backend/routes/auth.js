const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");

// Create a User using: POST "/api/auth/". Doesn't require Auth
router.post(
  "/createuser",
  [
    body("email", "Enter valid Email").isEmail(),
    body("name", "Enter valid Name").isLength({ min: 3 }),
    body("password", "Enter valid Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("Enter Valid Parameters");
      return res.status(400).json({ errors: errors.array() });
    } else {
      try {
        //Creating User
        let user = await User.findOne({ email: req.body.email });
        if (user) {
          return res.status(400).json({ error: "User Already Exists" });
        }
        user = await User.create({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        });
        res.json(user);
      } catch (error) {
        console.log(error.message);
        res.status(500).send("Some Error Occured")
      }
    }
  }
);

module.exports = router;
