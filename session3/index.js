const express = require("express");
const app = express();
/*
app.get("/", function(req, res){
    res.send("<h1>Hello user....</h1>");
});
app.get("/name/:name", function(req, res){
    let name = req.params.name;
    res.send("<h1>Hello "+ name +"</h1>");
});

app.get("/search/:phrase", function(req, res){
    let phrase = req.params.phrase;
    let google = "http://google.com/";
    let search = "search?q=";
    let m404 = '/404';
    if(phrase != null)
    {
        res.redirect(google + search + phrase);
    }
    res.redirect('..' + m404);
});
*/
app.use(express.static("../abProjekt_korrektur"));
app.get("/", function(req, res){
    res.redirect("index.html");
});

app.listen(3000, function(){
    console.log("Server is running on port : 3000");
});