//Prove01 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("pages/prove01/from", {
    title: "Prove Assignment 1",
    path: "/prove01", // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
  });
});

router.post("/submit", (req, res, next) => {
  //   console.log(req.body);
  console.log(req.body.input1);
  console.log(req.body.input2);
  res.render("pages/prove01/display", {
    title: "Prove Assignment 1",
    path: "/prove01", // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    input1: req.body.input1,
    input2: req.body.input2
  });
});

module.exports = router;
