const express=require('express');
const mysql = require('mysql');
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:''
});
db.connect(err=>{
    if(err){
        throw err;
    }
    console.log('Mysql Connected')
})
const app=express();
app.get('createDb',(req,res)=>{
    let sql='create database';
    db.query(sql,(err,result)=>{
        res.send('database creates');
    });
});
app.listen('3000',() =>{
    console.log('Server stated on port 3000');
})