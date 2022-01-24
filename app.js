const express = require("express");
const app = express();

app.set("view engine", "ejs");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

let tipPerPerson = "$0.00";
let totalSum = "$0.00";

app.get("/", (req, res) => {
  res.render("index", {
    tipPerPerson: tipPerPerson,
    totalSum: totalSum
  });
})


app.post("/", (req, res) => {
  console.log(req.body);

  const sumOfBill = Number(req.body.sum);
  console.log(sumOfBill);
  const tipValue = Number(req.body.tipValue[0]);
  console.log(req.body.tipValue[0]);
  const numberOfPeople = Number(req.body.numberOfPeople);
  console.log(numberOfPeople);

  const sumOfTips = sumOfBill * tipValue;

  tipPerPerson = sumOfTips / numberOfPeople;
  totalSum = sumOfBill + sumOfTips;

  res.redirect("/");
})


app.listen(3000, () => {
  console.log("Server started on port 3000");
})
