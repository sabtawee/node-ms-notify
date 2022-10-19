const express = require("express");
const bodyParser = require("body-parser");

// const db = require("./config/database");
const ResultRouter = require("./routes/ResultRouter");
const DtmRouter = require("./routes/DtmRouter");

const cors = require("cors");
const app = express();

// try {
//   db.authenticate();
//   console.log("Connetion has been establixhed successfully");
// } catch (error) {
//   console.log("Unable to connect to the database: ", error);
// }

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello! Node.js Send message MS Notify!!!");
});

app.use("/api", ResultRouter);
app.use("/api", DtmRouter);

app.listen(3200, () => console.log("Server running on port 3200"));
