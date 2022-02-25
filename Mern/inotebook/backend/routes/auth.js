const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "THE_DEMO_JWT_SECRET";
var fetchUser = require("../middleware/fetchUser");

//ROUTE:1 Create a User using: POST "/api/auth/". Doesn't require Auth
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
        const salt = await bcrypt.genSalt(10);

        var secPass = await bcrypt.hash(req.body.password, salt);
        let user = await User.findOne({ email: req.body.email });
        if (user) {
          return res.status(400).json({ error: "User Already Exists" });
        }
        user = await User.create({
          name: req.body.name,
          email: req.body.email,
          password: secPass,
        });
        const data = {
          user: {
            id: user.id,
          },
        };
        const authToken = jwt.sign(data, JWT_SECRET);
        res.send(authToken);
      } catch (error) {
        console.log(error.message);
        res.status(500).send("Some Error Occured");
      }
    }
  }
);

//ROUTE:2 Login a User using: POST "/api/auth/login". Doesn't require Auth
router.post(
  "/login",
  [
    body("email", "Enter valid Email").isEmail(),
    body("password", "Password Cannot be Blank").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("Enter Valid Parameters");
      return res.status(400).json({ errors: errors.array() });
    } else {
      const { email, password } = req.body;
      try {
        let user = await User.findOne({ email });
        
        if (!user) {
          return res
            .status(400)
            .json({ error: "Please Enter Correct Credentials" });
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
          return res
            .status(400)
            .json({ error: "Please Enter Correct Credentials" });
        } else {
          const data = {
            user: {
              id: user.id,
            },
          };
          const authToken = jwt.sign(data, JWT_SECRET);
          res.send(authToken);
        }
      } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error Occured");
      }
    }
  }
);

//ROUTE:3 Get User Details: POST "/api/auth/getuser".Login Required
router.post("/getuser", fetchUser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error Occured");
  }
});

module.exports = router;
