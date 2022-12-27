const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const cors = require("cors");
app.use(cors());
const {connectDB, closeDB } = require("./config/db");       //Database setup
const User = require("./models/user");                      //User Schema
const DirectMessage = require("./models/directMessage");    //Direct Message Schema
const {encrypt, decrypt } = require("./encryption");        //Custom Encryption Methods
connectDB();

app.get("/", (req, res) => {
   res.status(200).json("Hello World");
});

app.post("/createuser", jsonParser, (req, res) => {
   return new Promise( resolve => {
      User.findOne({username: req.body.username}, (err, result) => {
         if(err) {
            console.log(err);
            res.json(false);
         }
         else if(!result) {
            let encrypted = encrypt(req.body.password);
            let a = new User({
               username: req.body.username,
               encryptedPassword: encrypted,
               firstName: req.body.firstName,
               lastName: req.body.lastName,
               email: req.body.email
            });
            a.save();
            res.json(true);
         }
         else {
            res.json(false);
         }
      });
   });
});
app.post("/usernameexists", jsonParser, (req, res) =>  {
   User.findOne({username: req.body.username}, (err, result) => {
      if(result && !err) {
         res.send(true);
      }
      else if(!err) {
         res.send(false);
      }
   });
});

app.post("/login", jsonParser, (req, res) => {
   User.findOne({username: req.body.username}, async (err, result) => {
      if(!result) {
         res.send(false);
      } else {
         let decrypted = decrypt(result.encryptedPassword);
         console.log("Decrypted Password on Account: " + decrypted);
         if(req.body.password!=decrypted) {
            res.send(false);
         }
         else{
            res.send(true);
         }
      }
   });
});
app.post("/sendmessage", jsonParser, (req, res) => {
   
});



const port = process.env.PORT || 4000;
app.listen(port, (err) => {
  if(err){return console.log(err);}
  console.log("Express Server listening on port " + port);
});