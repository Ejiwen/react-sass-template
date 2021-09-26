const express = require("express");
const app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

const Fruit = mongoose.model("test", fruitSchema);

const fruit = new Fruit({
  name: "test",
  rating: 10,
  review: "is it work",
});

app.use(express.static("public"));
app.post("/task", (res, req) => {
  fruit.save();
  res.send("works");
});

app.listen(3000, () =>
  console.log("SERVER IS LISTENING NOW AT PORT 3000... !!!")
);
