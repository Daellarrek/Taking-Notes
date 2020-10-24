const express = require("express");
const app = express()

let PORT = process.env.PORT || 40545;


app.get("*", function(req, res) {
    res.json(path.join(__dirname, "public/index.html"));
  });
  
  app.get("/notes", function(req, res) {
    res.json(path.join(__dirname, "public/notes.html"));
  });
  

app.listen(PORT, function(){














});