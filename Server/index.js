require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 5000;
mongoose
  .connect("mongodb+srv://sumanyu301:kotlakhurd@cluster0.itcpgws.mongodb.net/HealtyHive")
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const { Verfication } = require("./Middlewares/Auth");
const { SignUpFunction, LoginFunction } = require("./Endpoints/signup_login");
const { LeaderBoardFunction } = require("./Endpoints/learder_board");
const { ActivityFunction } = require("./Endpoints/activity");

const {createCompetionFunction,joinCompetionFunction} = require("./Endpoints/Competion")

app.use(express.json());
app.use(cors());

app.post("/signup", SignUpFunction);
app.post("/login", LoginFunction);

app.post("/leaderboard", Verfication, LeaderBoardFunction);
app.post("/activity", Verfication, ActivityFunction);


app.post("/createcompetion" , Verfication,createCompetionFunction);
app.post("/joincompetion", Verfication,joinCompetionFunction)

app.listen(port, () => {
  console.log("Server is Runing.... ");
});
