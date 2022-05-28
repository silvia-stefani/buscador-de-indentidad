var express = require("express");
var cors = require('cors');
var config = require('./config');


const {apigoogle} = require("./apigoogle");
const {apitwitter} = require("./apitwitter");
const {apihibp} = require("./apihibp");

var app = express();
const bodyParser = require('body-parser');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/getData", async (req, res, next) => {
  //1. coger los params de req.params
  console.log(req.body);

  //2. Llamadas a apis (Google, HIBP, Twitter, ...)
  let hibpans;
  let googleans = {}; //await apigoogle("Enrique Barra Arias");
  let twitterans = {}; //await apitwitter("Enrique");
  try{
    //hibpans = await apihibp("enrique.barra.arias@gmail.com");
    //hibpans = await apihibp("barraorion");
    hibpans = await apihibp("65978599");
  } catch(err){
    console.log(err);
    hibpans = err;
  }
  

  //3. Devolver los datos
  res.json({ google: googleans, twitter: twitterans, hibp: hibpans});
 });

app.listen(config.web.port, () => {
 console.log("Server running on port " + config.web.port);
});