const mysql = require("mysql");
const express = require("express");
const app = express();
const con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "form"
});
//connect to the database
con.connect(function(error){
    if(error) {
        throw error
        }else {
            console.log("connected to the database successfully");
        }
});
app.get("/formdetails",function(req,res){
    con.query('select * from formdetails',(err,result,fields)=>{
        if(err) throw (err);
        console.log(result);
        res.send(result);
    })
})
//set app port
app.listen(3000);