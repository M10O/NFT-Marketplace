const express = require("express");
const res = require("express/lib/response");
const app = express();
const hbs = require("hbs");
const mongoose = require("mongoose");
const path = require("path");
const user = require('./routs/mongo');
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect('mongodb://localhost/wp_project')
.then(()=>{
    console.log("Database Connected Successfully");
})
.catch(()=>{
    console.log("Failed");
})
app.set("view engine","hbs");
const public_call=path.join(__dirname,'/public');
app.use(express.static(public_call));
app.get("/", (req, res)=>{
    res.render("index.hbs")
})
app.get("/signup.hbs", (req, res)=>{
    res.render("signup.hbs")
})
app.use(express.json());
app.use('/',user);
app.listen("3000",()=>{
    console.log("Server running on 2020")

})