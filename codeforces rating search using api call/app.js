var express = require("express");

var app = express();

var request = require("request");

app.get("/result/:varname",function(req,res){
    console.log(req.params.varname);
    var z=req.params.varname;
    var x="https://codeforces.com/api/user.rating?handle="+z;
    request(x,function(error,response,body){
        if(!error && response.statusCode==200)
        {
            var parsedata = JSON.parse(body);

            // for(var i=0;i<10;i++)
            // console.log(parsedata["result"][i]);

            var len = parsedata["result"].length;
            console.log(len);
            
            res.render("home.ejs",{parsedata : parsedata, len : len});
            // res.send("check console");
        }
    });
})

app.listen(3000,function(){
    console.log("server is started anand bhai");
})