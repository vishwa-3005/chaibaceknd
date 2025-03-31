require("dotenv").config();

const express = require("express");
const app = express(); //Creates an Express application. The express() function is a top-level function exported by the express module

const port = 4000;
const github = {
  message: "Not Found",
  documentation_url: "https://docs.github.com/rest",
  status: "404",
};

app.get("/", (req, res) => {
  res.send("hello buddy !!");
});

app.get("/about", (req, res) => {
  res.send("this is about us page");
});

app.get("/youtube", (req, res) => {
  res.send("<h1>Chai aur Code</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`exaple app running on port ${port}`);
});

app.get("/github", (req, res) => {
  res.json(github);
});
//The .listen() method in Express.js starts the server and makes it listen for incoming requests on a specified port.
