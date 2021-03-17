var connection = require("./db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwt_decode = require("jwt-decode");

module.exports = {
  //add new user

  addnewuser: (params, callback) => {
    var queryStr =
      "Insert into user ( first_name, last_name, email, phone_num, password, role ) values (?,?,?,?,?,?)";
    connection.query(queryStr, params, function (err, result) {
      callback(err, result);
      console.log("errror", err);
    });
  },

  //user login

  loginuser: (params, callback) => {
    console.log("model login");
    var queryStr = `SELECT * FROM user WHERE email = ? `;
    connection.query(queryStr, params, function (err, result) {
      console.log("login user is", result);
      callback(err, result);
    });
  },
  // get all complaints

  getcomplaint: (callback) => {
    console.log("helloooo");
    var queryStr = "SELECT * FROM complaint  ";
    console.log("Modeeeeeel get");
    connection.query(queryStr, function (err, result) {
      callback(err, result);
      console.log("errror", err);
    });
  },

  // add complaint
  addcomplaint: (params, callback) => {
    console.log("helloooo");
    var queryStr =
      "Insert into complaint (complaint_id, title, description, status, date, type, user_id ) values (?,?,?,?,?,?,?)";
    connection.query(queryStr, params, function (err, result) {
      callback(err, result);
      console.log("errror", err);
    });
  },

  //edit complaint status from admin
  editcomplaint: (params, callback) => {
    console.log(params, "edit model");
    var queryStr = `Update complaint set status = ? where complaint_id = ?`;
    connection.query(queryStr, params, function (err, results) {
      callback(err, results);
      console.log("error in edit complaint", err);
    });
  },
};
