
const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({extended:true})); //necessray to access variable name from index.html
app.get("/", function(req, res)
{
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req,res)
{
   
    var height = Number(req.body.ht);
    var weight = Number(req.body.wt);
    var bmi=weight/height;
    console.log(bmi);
     var result;
    if(bmi< 18.5)
    {
        result="Underweight";
    }
    else if(bmi>=18.5 && bmi<=24.9)
    {
        result="Normal";
    }
    else if(bmi>=25.0 && bmi<=29.9)
    {
        result="Overweight";
    }
    else
    {
        result ="Very Overweight";
    }

    res.send(result);



})

app.listen(3000, function()
{
    console.log("success");
})