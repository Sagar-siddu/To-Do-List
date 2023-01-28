const express = require("express");
const bp = require("body-parser");
const date = require(__dirname + "/date.js");
console.log(date());
const app = express();
app.set('view engine', 'ejs');
app.use(bp.urlencoded({
  extended: true
}));
app.use(express.static("public"));

let items = [];
let witems = [];

app.get("/", function(req, res) {
  day = date();
  res.render("list", {
    Title: day,
    newitem: items
  });
})

app.post("/", function(req, res) {
  let item = req.body.new;
  if (req.body.list === "Work") {
    witems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
})

app.get("/work", function(req, res) {
  res.render("list", {
    Title: "Work list",
    newitem: witems
  });
})

app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000");
})
