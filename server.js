const express = require("express");
const bodyParser = require("body-parser");

const DtmRouter = require("./routes/DtmRouter");

const cors = require("cors");
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello! Node.js Send message MS Notify!!!");
});

app.use("/api", DtmRouter);

app.listen(3200, () => console.log("Server running on port 3200"));
