const express =require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app =express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/signup.html");
});
app.post("/",function(req,res){
   firstName = req.body.fname;
   lastName = req.body.lname;
   email = req.body.email;
    var data = {
        members : [{
            email_address : email,
            status : "subscribed",
            FNAME: firstName,
            LNAME: lastName

        }]
    }
    var jsonData= JSON.stringify(data);
    var option = {
      url: "https://us4.api.mailchimp.com/3.0/lists/918c462603",
      method: "POST",
      headers: {
        Authorization: "sidharth cf7a66c133c5f6f4273df3b4c775fab5-us4"
      },
      body : jsonData
    };
    request(option,function(error,response,body){
        if(error)
        res.sendFile(__dirname + "/failure.html");
        else{
            if(response.statusCode===200)
            {res.sendFile(__dirname + "/success.html");}
            else{
                res.sendFile(__dirname + "/failure.html");
            }

        }
    });
    
    console.log(firstName,lastName,email);
});
app.post("/failure",function(req,res)
{
    res.redirect("/");
})
app.listen(process.env.PORT|| 3000,function(){
    console.log("server is running of port 3000");
})
//API Keys
//cf7a66c133c5f6f4273df3b4c775fab5-us4
//list id
//918c462603