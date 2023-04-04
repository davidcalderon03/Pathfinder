const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());
const {connectDB, closeDB } = require("./config/db");       //Database setup
const User = require("./models/user");                      //User Schema
const DirectMessage = require("./models/directMessage");    //Direct Message Schema
const Post = require("./models/post");
const {encrypt, decrypt } = require("./encryption");        //Custom Encryption Methods
connectDB();

app.get("/", (req, res) => {
   res.status(200).json("Hello World");
});

app.post("/createuser", (req, res) => {
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
app.post("/usernameexists", (req, res) =>  {
   User.findOne({username: req.body.username}, (err, result) => {
      if(result && !err) {
         res.send(true);
      }
      else if(!err) {
         res.send(false);
      }
   });
});

app.post("/login", (req, res) => {
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
app.post("/createpost", (req, res) => {
   User.findOne({username: req.body.username}, async (err, result) => {
      if(!result) {
         res.send(false);
      } else {
         let p = new Post({
            username: req.body.username,
            header: req.body.header,
            content: req.body.content,
            labels: req.body.labels.length === 1 && req.body.labels[0] === "" ? ["Untitled"] : req.body.labels
         });
         p.save();
         res.send(true);
      }
   });
});

app.get("/posts", (req, res) => {
   Post.find({}, (err, results) => {
      if (err) {
         res.status(404).send("Not successful");
      } else if (results.length === 0) {
         res.status(200).send([]);
      } else {
         res.send(results);
      }
   });
});
app.post("/posts", (req, res) => {
   Post.find({
      username: {$regex : new RegExp(".*" + (req.body.username ? req.body.username : "") + ".*", "i")}, //only query if it exists
      header: {$regex : new RegExp(".*" + (req.body.header ? req.body.header : "") + ".*", "i")}        //only query if it exists
   }, (err, results) => {
      if (err) {
         res.status(404).send("Not successful");
      } else if (results.length === 0) {
         res.send([]);
      } else {
         if (req.body.labels && req.body.labels.length > 0) {
            for (let i = 0; i < results.length; i++) {
               let matchFound = false;
               results[i].labels.forEach(resLabel => {
                  req.body.labels.forEach(reqLabel => {
                     if (resLabel.match(".*" + reqLabel + ".*")) {
                        matchFound = true;
                     }
                  });
               });
               if (!matchFound) {
                  results.splice(i, 1);
                  i--;
               }
            }
         }
         res.send(results);
      }
   });
});


app.get("/finduser/:username", (req, res) => {
   User.find({ username: {$regex : new RegExp("^" + req.params.username.toLowerCase(), "i")}}, (err, results) => {
      if (err){
         res.status(404).send("Not working");
      } else {
         res.send(results);
      }
   });
});




app.post("/sendmessage", (req, res) => {
   
});


const port = process.env.PORT || 4000;
app.listen(port, (err) => {
  if(err){return console.log(err);}
  console.log("Express Server listening on port " + port);
});


// Post.deleteMany({}, ()=> {});