const express = require("express");
const app = express()
const path = require("path")

let PORT = process.env.PORT || 40545;


app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });
  
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
  });
  

app.listen(PORT, function(){














});