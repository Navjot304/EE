var express = require("express");
var server = express();
var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.ejs");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.ejs");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.ejs");
});

server.use("/",router);

server.use("*",function(req,res){
  res.sendFile(path + "404.ejs");
});

server.listen(3000,function(){
  console.log("Access website at Localhost Port 3000");
});