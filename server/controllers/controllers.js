const express = require("express");
var connection = require("../models/db");
var model = require("../models/model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwt_decode = require("jwt-decode");

module.exports = {

  //add new user 
  addnewuser: async (req, res) => {
    console.log(req,'req from add new user controller')
    var role = req.body.role;
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    console.log(req.body.firstname,"first name from new user controller")
    var params = [req.body.firstname,req.body.lastname, req.body.email, req.body.phone, hashedPassword,req.body.role];
    model.addnewuser(params,function (err, results) {
      
      if (err) {
        console.log("error in add user controller", err);
      }
      console.log("Controllleeeer add user");
      res.send(results);
    });
  },

  //login user 

  loginuser: async (req, res) => {
    var params = [req.body.email, req.body.password];
    var password = req.body.password;
    var email = req.body.email;

    model.loginuser(params, async function (err, result) {
      // console.log("database password from login controller",result[0].password)
      if (result.length > 0) {
        var id = result[0].user_id;
        var role = result[0].role;
        var userPassword = result[0].password;
        // var userEmail = result[0].email;
        // console.log('user email from login controller',userEmail );
        console.log('user id from login controller',id)
        console.log('role from login controller',role)
        console.log("login body password from login controller",password)

        //check if the password is correct
        const validpass =  bcrypt.compare(password, userPassword);
        console.log(validpass,'check valid user')
        if (!validpass) return res.status(400).send("Password not correct");

        //Authentication
        const accessToken = jwt.sign(
          {id :id },
          `${process.env.JWT_KEY}`
        );
        console.log("tooken from login controller", accessToken);

        res.json({ user_id: id, email: email, accessToken: accessToken });
      } else {
        res.send("User doesn't exist");
      }
    });
  },

    //get all complaints at admin side 

    getcomplaint: (req, res) => {
        model.getcomplaint(function (err, results) {
          if (err) {
            console.log("error in complaint controller", err);
          }
          console.log("Controllleeeer get comp");
          res.send(results);
        });
      },
    

      //add complain from client side

      addcomplaint: (req, res) => {
        console.log(req,'req from add comp controllers')
        var params = [req.body.complaint_id, req.body.title,req.body.description, req.body.status, req.body.date, req.body.type,req.body.customerId];
        model.addcomplaint(params,function (err, results) {
          
          if (err) {
            console.log("error in add controller", err);
          }
          console.log("Controllleeeer add comp");
          res.json(results);
        });
      },

      //update status for one complaint from admin
      editcomplaint: function(req, res){
        console.log(req,'req edit controller')
        var params = [req.body.status,req.params.complaint_id];
        model.editcomplaint(params, function(err,results) {
          if (err) {console.log("error updateone at complaint controller",err)}
          console.log(req.body.complaint_id)
          res.send('complaint updated')
        });
      },
    
};