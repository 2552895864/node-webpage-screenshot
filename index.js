const express = require("express");
const bodyParser = require("body-parser");
const router = require("./router/index.js");
const PORT = 1337;

const app = express();

app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With, Cache-Control, Pragma, Referer, User-Agent"
  );
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("X-Powered-By", " 3.2.1");
  if (req.method == "OPTIONS") res.send(200);
  else next();
});

app.use(bodyParser.json({ limit: "10mb" }));

app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "10mb",
  })
);

app.use("/", router());

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});
