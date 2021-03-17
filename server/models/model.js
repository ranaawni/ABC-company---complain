var connection = require("./db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwt_decode = require("jwt-decode");

module.exports = {

  //Add new customer user
// router.post("/addcustomer", async (req, res) => {
//   //Check if email is used!
//   const addCust = await Customer.findOne({
//     $or: [{ email: req.body.email }],
//   });

//   if (addCust) {
//     return res.status(400).send("email used");
//   }

//   //Securing password
//   const saltPassword = await bcrypt.genSalt(10);
//   const securePassword = await bcrypt.hash(req.body.password, saltPassword);

//   const firstname = req.body.firstname;
//   const lastname = req.body.lastname;
//   const email = req.body.email;
//   const phone = req.body.phone;
//   const password = securePassword;

//   //Adding a new customer
//   const newCust = await Customer.create({
//     firstName: firstname,
//     lastName: lastname,
//     email: email,
//     phoneNo: phone,
//     password: password,
//   });
//   try {
//     const saveUser = await newCust.save();
//     res.send({ id: newCust._id });
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

  //add new user 

  addnewuser: (params, callback) => {

  var queryStr = "Insert into user ( first_name, last_name, email, phone_num, password, role ) values (?,?,?,?,?,?)";
  connection.query(queryStr, params, function (err, result) {
    callback(err, result);
    console.log("errror", err);
  });
},

//user login 

 loginuser:(params, callback)=>{
  console.log("model login")
  var queryStr = `SELECT * FROM user WHERE email = ? `;
  connection.query(queryStr , params, function(err , result){
      console.log("login user is" ,result)
      callback(err,result)
  })
},
    // get all complaints
    
    getcomplaint: (callback) => {
        console.log('helloooo')
      var queryStr = "SELECT * FROM complaint  ";
      console.log("Modeeeeeel get");
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

    //edit complaint status from admin 
    editcomplaint: (params, callback) => {
      console.log(params,'edit model')
      var queryStr = `Update complaint set status = ? where complaint_id = ?`;
      connection.query(queryStr, params, function(err, results) {
          callback(err, results)
          console.log("error in edit complaint", err)
      });
    }

    
};
