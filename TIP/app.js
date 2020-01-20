//jshint esversion:6
const express = require("express");

const app = express();

app.use(express.static("public"));
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/login.html");
});

app.post("/", function (req, res) {
    res.sendFile(__dirname+"/loginSuccess.html");
    });
app.get("/signup", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});
    
app.post("/signup", function (req, res) {
    res.sendFile(__dirname+"/signupSuccess.html");
});
app.listen(process.env.PORT || 3000, function () {
    console.log("server is running of port 3000");
});
