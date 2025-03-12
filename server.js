
const mysql = require('mysql2');
const express= require('express');
const path = require('path');
const cors =require('cors');
const Route = require('./routes/routes.js');
const port = 3000;
const server = express();
server.listen(port, function(err)
{

if(err)
    console.error("Failed to listen in port", err);
else
    console.log(`Database is listening in port http://localhost:${port}`)
});

const conn = mysql.createConnection(
    {
        'host':'localhost',
        'user':'root',
        'password':'1234',
        'database':'MakeMyYatra'
    }
);
conn.connect( function(err){
    if(err) {
        console.error("Cannot establish connection");
        console.error(err);
    }
    else
    {
        console.log("Connection to database established");

    }
});
server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use('/', Route);


server.use(express.static(path.join(__dirname,'views')));