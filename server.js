const express = require("express");
const bodyParser = require("body-parser");

const db = require("./config/database");
const ResultRouter = require("./routes/ResultRouter");



const cors = require("cors");
const app = express();
try {
  db.authenticate();
  console.log("Connetion has been establixhed successfully");
} catch (error) {
  console.log("Unable to connect to the database: ", error);
}

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(cors());
app.use(express.json());



app.use("/api", ResultRouter);


app.listen(1111, () => console.log("Server running on port 1111"));
