const mysql = require("mysql");
const connection = mysql.createPool({
    host: "us-cdbr-east-03.cleardb.com",
    user: "b1975620186c36",
    password: "7aa4ae51",
    database: "heroku_b727c40cfeb9a9e",
  });
  
  connection.query("select 1 + 1", (err, rows) => {
    if (err) throw err;
    console.log("Connected! , hello");
  });
  
  module.exports = connection;
  