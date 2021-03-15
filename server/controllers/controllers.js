const express = require("express");
var connection = require("../models/db");
var model = require("../models/model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwt_decode = require("jwt-decode");

console.log("outsiide controllers");


module.exports = {

  //add new user 
  addnewuser: (req, res) => {
    var params = [req.body.user_id, req.body.first_name,req.body.last_name, req.body.email, req.body.phone_num, req.body.password,req.body.role];
    model.addnewuser(params,function (err, results) {
      
      if (err) {
        console.log("error in add user controller", err);
      }
      console.log("Controllleeeer add user");
      res.json(results);
    });
  },

    //get all complaints at admin side 

    getcomplaint: (req, res) => {
        model.getcomplaint(function (err, results) {
          if (err) {
            console.log("error in complaint controller", err);
          }
          console.log("Controllleeeer get comp");
          res.json(results);
        });
      },
    

      //add complain from client side

      addcomplaint: (req, res) => {
        var params = [req.body.complaint_id, req.body.title,req.body.description, req.body.status, req.body.date, req.body.type,req.body.user_id];
        model.addcomplaint(params,function (err, results) {
          
          if (err) {
            console.log("error in add controller", err);
          }
          console.log("Controllleeeer add comp");
          res.json(results);
        });
      },
    
};