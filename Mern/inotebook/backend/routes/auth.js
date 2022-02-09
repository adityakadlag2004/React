const express = require("express");
const router = express.Router();
const User = require("../models/User");

//Create a User :- POST on /api/auth

router.post("/", (req, res) => {
  console.log(req.body)
  const user = User(req.body)
  user.save()
  // user.save((err, result) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log(result);
  //   }
  // });
  res.send(user);
})

module.exports = router;
