const express=require("express");
var mysql= require('mysql');

let app=express();
app.use("/static",express.static('static'));
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'museo_informatica',
    password : 'museo_informatica',
    database : 'museo_informatica',
  });

console.log(connection.connect());


app.get('/oggettiInMuseo',(req,res)=>{
    connection.query(`\
        SELECT id \
        FROM Oggetti`,
    (err,row,fie)=>{
        console.log(`POST: /oggettiMuseo \tremote:${req.ip}`)
        if(err){ 
            res.status(500).send(err);
            throw err;
        }
        console.log(row);
        res.send(row.map(r=>r.id));
    })
})

app.get('/cercaOggetti',(req,res)=>{
    connection.query(`\
        SELECT id \
        FROM Oggetti \
        WHERE nome LIKE ?`,
    [
        "%"+req.query.q+"%"
    ],(err,row,fie)=>{
        console.log(`POST: ${req.url} \tremote:${req.ip}: `);
        if(err){ 
            res.status(500).send(err);
            throw err;
        }
        console.log(row);
        res.send(row.map(r=>r.id));
    })
})

app.get('/descrivi',(req,res)=>{ 
    connection.query(`\
        SELECT nome tipo,'' data \
        FROM Oggetti where id= ? \
        UNION (\
            SELECT tipo,info from Descrizioni \
            WHERE oggetto=? \
            ORDER BY posizione\
        )`,
    [
        req.query.id,
        req.query.id
    ],(err,row,fie)=>{
        console.log(`POST: /descrivi \tremote:${req.ip}`)
        if(err){ 
            res.status(500).send(err);
            throw err;
        }
        if(row.length==0)
            res.send({
                nome:'ERROR',
                info:[{
                    tipo:'Titolo',
                    data:'Impossibile trovare l\' oggetto cercato'
                }]
            });
        else{
            res.send({
                'nome':row.shift().tipo,
                'info':row
            });
        }
    })
})

app.get('/infoOggetto',(req,res)=>{
    connection.query(`\
        SELECT nome,img \
        FROM Oggetti \
        WHERE id=?`,
    [
        req.query.id
    ],(err,row,fie)=>{
        console.log(`POST: /infoOggetto \tremote:${req.ip}`)
        if(err){ 
            res.status(500).send(err);
            throw err;
        }
        console.log(row);
        res.send(row);
    })
})

const port=3000;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});