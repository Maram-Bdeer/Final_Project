const multer = require('multer');
const csv= require('fast-csv');
const fs=require('fs');
const express=require('express');
const app=express();

global.__basedir=__dirname;
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,__basedir,'/upload/')
    },
    filename:(req,file,cb)=>{
        cb(null , file.filename + "-" + Date.now+"-"+file.originalname)
    }


});

const csvFilter=(req,file,cb)=>{
    if(file.mimetype.includes("csv")){
        cb(null,true)
    } else{
        cb("Please Upload Only CSV Files :", false)
    }
};

const upload=multer({storage:storage ,fileFilter:csvFilter})