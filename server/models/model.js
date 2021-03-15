var connection = require("./db");
console.log('outside model')

module.exports = {

  //add new user 

  addnewuser: (params, callback) => {
    console.log('helloooo')
  var queryStr = "Insert into user (user_id, first_name, last_name, email, phone_num, password, role ) values (?,?,?,?,?,?,?)";
  connection.query(queryStr, params, function (err, result) {
    callback(err, result);
    console.log("errror", err);
  });
},
    // get all complaints
    
    getcomplaint: (callback) => {
        console.log('helloooo')
      var queryStr = "SELECT * FROM complaint ";
      console.log("Modeeeeeel");
      connection.query(queryStr, function (err, result) {
        callback(err, result);
        console.log("errror", err);
      });
    },
  
    // add complaint
    addcomplaint: (params, callback) => {
        console.log('helloooo')
      var queryStr = "Insert into complaint (complaint_id, title, description, status, date, type, user_id ) values (?,?,?,?,?,?,?)";
      connection.query(queryStr, params, function (err, result) {
        callback(err, result);
        console.log("errror", err);
      });
    },

    
};
