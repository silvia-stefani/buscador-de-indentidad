var express = require("express");
var app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/getData", (req, res, next) => {
  res.json({clave: "valor"});
 });

app.listen(8000, () => {
 console.log("Server running on port 8000");
});