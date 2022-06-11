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

app.get("/getData", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/getData", async (req, res, next) => {
  //1. coger los params de req.params
  console.log(req.body);

  //2. Llamadas a apis (Google, HIBP, Twitter, ...)
  let hibpans;
  let twitterans;
  let googlename
  let googledni;
  let googletlf;
  let googleemail;
  //GOOGLE
  if(req.body.name!==undefined){
    googlename = await apigoogle(req.body.name);
  }
  if(req.body.dni!==undefined) {
    googledni = await apigoogle(req.body.dni);
  }
  if(req.body.tlf!==undefined){
    googletlf = await apigoogle(req.body.tlf);
  }
  if(req.body.email!==undefined) {
    googleemail = await apigoogle(req.body.email);
  }
  //TWITTER
  try{
    if(req.body.name!==undefined) {
      twitterans = await apitwitter(req.body.name);
    }
  } catch(err){
    console.log(err);
    twitterans = err;
  }
  //HIBP
  try{
    if(req.body.email!==undefined) {
      hibpans = await apihibp(req.body.email);
      //hibpans = await apihibp("barraorion");
      //hibpans = await apihibp("65978599");
    }
  } catch(err){
    console.log(err);
    hibpans = err;
  }
  

  //3. Devolver los datos
  //res.json({ googlename, googledni, googleemail, googletlf, twitterans, hibpans});
  res.json({ hibpans, googlename }); 
});

app.listen(config.web.port, () => {
 console.log("Server running on port " + config.web.port);
});