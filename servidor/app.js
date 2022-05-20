var express = require("express");
var cors = require('cors')

var app = express();
const bodyParser = require('body-parser');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/getData", (req, res, next) => {
  //1. coger los params de req.params
  console.log(req.body);

  //2. Llamadas a apis (Google, HIBP, Twitter, ...)


  //3. Devolver los datos
  res.json({...req.body, clave: "valor"});
 });

app.listen(8000, () => {
 console.log("Server running on port 8000");
});