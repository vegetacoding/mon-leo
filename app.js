const express = require("express");
const app = express();
const path = require("path");

// Set EJS as the view engine
app.set("view engine", "ejs");

// Serve static files from public directory
app.use(express.static("public"));

// Route for the home page
app.get("/", (req, res) => {
  res.render("index");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
