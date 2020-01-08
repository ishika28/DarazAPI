const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const User = require("../models/register");

//route for getting all register
router.post("/", function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    console.log(email);
    console.log(password);

  User.findOne({
    
    register_email:email,
    register_password:password
  })
    .exec()
    .then(function(result) {
        if(result == null){
            res.json("Invalid credentials")
        }else{
      res.json({Success:"Success",email:email});
        }
    })
    .catch(function(e) {
      res.send(e);
    });
});


module.exports = router;
