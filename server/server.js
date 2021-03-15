const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const path = require("path");
const connection = require("./models/db");
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/public")));
app.use(cors());
// app.use("/", router.router);

app.get("/", function (req, res) {
    res.send("Home Page");
  });
  
  const PORT = process.env.PORT;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}. http://localhost:8000/`);
  });
  
