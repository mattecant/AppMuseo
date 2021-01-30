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
        console.log(`POST: ${req.url} \tremote:${req.ip}: `);
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
        console.log(`POST: ${req.url} \tremote:${req.ip}: `);
        console.log(row);
        if(err){ 
            console.err("err");
            res.status(500).send(err);
            throw err;
        }
        if(row.length==0)
            res.send({
                nome:'ERROR',
                info:[{
                    tipo:'titolo',
                    data:'Errore nella ricerca'
                },{
                    tipo:'immagine',
                    data:"res://outline_error_outline_black_48"
                },{
                    tipo:'testo',
                    data:"Non è stato possibile trovare l'oggetto cercato, si prega di riprovare più tardi"
                }]
            });
        else{
            console.log(row);
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
            console.log('error')
            res.status(500).send(err);
            throw err;
        }
        console.log(row[0]);
        res.send(row[0]);
    })
})

const port=3000;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});