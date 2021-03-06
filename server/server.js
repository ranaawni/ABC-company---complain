const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const router = require("./routes/routes");
const cors = require("cors");
const app = express();
const connection = require("./models/db");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/public")));

app.use(cors());

app.use("/", router.router);

app.get("/", function (req, res) {
  res.send("Home Page");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}. http://localhost:8000/`);
});
