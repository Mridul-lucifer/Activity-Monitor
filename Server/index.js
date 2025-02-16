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

const {SignUpFunction,LoginFunction} = require('./Endpoints/signup_login')

app.use(express.json())
app.use(cors())

app.post('/signup', SignUpFunction);
app.post('/login', LoginFunction);

// app.post('')


app.listen(port , ()=>{
    console.log("Server is Runing.... ");
})