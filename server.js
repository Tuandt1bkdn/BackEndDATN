const express = require("express");
const body_parser = require("body-parser");
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:trueoptionSuccessStatus:200,
};

const app = express();

app.use(cors(corsOptions));

app.use(body_parser.json());

app.use(
  body_parser.urlencoded({
    extended: true,
  })
);
app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/", (req, res) => {
  res.json({
    hello: "hi!",
  });
});

module.exports = app;

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

const connection = require("./Back_End/API/connectdatabase");

connection.connect(function (err) {
  if (err) throw err;
  console.log("Ket noi MySQL thanh cong");
});

const route = require("./Back_End/API/routes");
route(app);
