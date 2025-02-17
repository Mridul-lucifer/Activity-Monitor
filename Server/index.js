require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
const port = 5000;
mongoose.connect(process.env.MongoUri).then(()=>{
    console.log("MongoDB Connected");
}).catch((err)=>{
    console.log(err);
}) 

const {Verfication} = require('./Middlewares/Auth')
const {SignUpFunction,LoginFunction} = require('./Endpoints/signup_login')
const {LeaderBoardFunction} = require('./Endpoints/learder_board');
const {ActivityFunction} = require('./Endpoints/activity')

app.use(express.json())
app.use(cors())

app.post('/signup', SignUpFunction);
app.post('/login', LoginFunction);

app.post('/leaderboard',Verfication , LeaderBoardFunction);
app.post('/activity', Verfication,ActivityFunction)

app.listen(port , ()=>{
    console.log("Server is Runing.... ");
})