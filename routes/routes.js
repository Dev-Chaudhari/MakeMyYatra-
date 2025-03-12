const express=require('express');
const path = require('path');
const cors=  require('cors');
const Route =  express();
//Route.use(cors({origin:'*' ,methods:['POST','GET','PUT','DELETE','PATCH'], allowedHeaders:['Authorization']}));
Route.use(express.static(path.join(__dirname , '../views')));
Route.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../views','homepage.html'));
});


Route.get('/homepage',(req , res)=>{
    res.sendFile(path.join(__dirname , '../views','homepage.html'));
});
module.exports =Route;