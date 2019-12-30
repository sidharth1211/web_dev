const express = require("express");
const bodyParser= require("body-parser");

const app = express();
var tasks=[];
var workItems =[];
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extented:true}));
app.use(express.static("public"));
app.get("/",function(req,res){
    var today= new Date();
    
    var options = {
        weekday: "long",
        day:"numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);
    res.render("list",{listTitle:day, newListItems: tasks});

});
app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work",newListItems: workItems});
})

app.post("/",function(req,res)
{
    var task = req.body.newItem;
    console.log(req.body.list);
   if(req.body.list==="Work")
   {
     workItems.push(task);
     res.redirect("/work");
   }
   else{
         tasks.push(task);
         res.redirect("/");
   }
});

app.listen(3000,function(){
    console.log("server is running on port 3000");
});