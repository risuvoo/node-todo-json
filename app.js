require("dotenv").config();
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("hello from express.js");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(` listening on port  ${port}`);
});
