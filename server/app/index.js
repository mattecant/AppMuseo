const express=require("express");
var mysql= require('mysql');
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'museo_informatica',
    password : 'museo_informatica',
    database : 'museo_informatica',
  });
let app=express();
connection.connect();

app.use("/static",express.static('static'));

app.get('/oggettiInMuseo',(req,res)=>{
    connection.query('SELECT id FROM OGGETTI',(err,row,fields)=>{
        if(err) res.status(501).send("ERROR");
        console.log(row);
    });
})

app.get('/cercaOggetti',(req,res)=>{
    connection.query('SELECT *')
})

app.get('/descrivi',(req,res)=>{
    connection.query('SELECT *')
})

app.get('/infoOggetto',(req,res)=>{
    connection.query('SELECT *')
})

const port=3000;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });