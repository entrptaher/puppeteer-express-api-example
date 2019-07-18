const express = require("express");

const { create, title, remove } = require("./lib/controllers");

const app = express();
const port = process.env.PORT || 4000;

// Routes
app.get("/create", create);
app.get("/title/:id/:url", title);
app.get("/remove/:id", remove);

app.listen(port, function() {
  console.log(`Example app listening on ${port}!`);
});
