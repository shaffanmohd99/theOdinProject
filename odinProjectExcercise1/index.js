const express = require("express");

const app = express();
app.listen(3000);
app.use(express.static("public")); //create public folder , other are private

app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});
app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});
app.get("/contact-me", (req, res) => {
  res.sendFile("./views/contact-me.html", { root: __dirname });
});

//404 
app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});
