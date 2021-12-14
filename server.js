require("dotenv").config();
const express = require("express");
var MssqlExport = require('mssql')
const fs = require('fs');
const mysql = require('mysql2/promise')
const upload = require('express-fileupload');
const app = express();
const schemaShot = require('schema-shot')
const all =  require("./controllers/userController.js");
const { isTypedArray } = require("util/types");

<<<<<<< HEAD
=======

const ConnectionFactory=require('./factoryDP/ConnectionFactory');
const txt = require('./factoryDP/txt');

const Csv=ConnectionFactory.typesfiles('Csv');
const Json=ConnectionFactory.typesfiles('Json');
const Txt=ConnectionFactory.typesfiles('Txt');

Csv.connectiondb();
Json.connectiondb();
Txt.connectiondb();





>>>>>>> 46f946552c0730a3f7f070a0222ebcd8d5156aa6
class importFile{

  constructor(){

  
  }

static ImportFile() {
  
app.use(express.json()); 

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'index.html')
})

app.post('/', (req, res) =>{
    if (req.files) {
        console.log(req.files)
        var file = req.files.file
        var file = req.files.file
        var filename = file.name
        console.log(filename)

        file.mv('./Uploads/' + filename, function (err){
            if(err){
                res.send(err)
            } else {
                res.send("File Uploaded")
            }
        })
    }
})
}
}




class ExportFiles{

constructor()
{

}
static ExportFile(params) {
  
var databaseConfig = {
  user: 'username',
  password: 'pass',
  server: 'servername',
  database: 'dbname',
  requestTimeout: 320000,
  pool: {
      max: 20,
      min: 12,
      idleTimeoutMillis: 30000
  }
};

var options = {
  ignoreList: ["sysdiagrams"], 
  tables: [],                  
  outputDirectory: 'somedir',
  log: true, 
  header: false      
};

function MssqlExport(dbconfig, options)
{
  console.log("All done successfully!");
  process.exit(0);
  console.log(err.toString());
  process.exit(-1);
};
}
}
 app.get('/', (req, res) => {
   res.status(200).send('Ok');
 }); 

app.use("/user", require("./routes/userRouters"));
 
app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Something went rely wrong",
  });
});

app.route('/users').get( (req, res) => {

  res.status(200).send(all.getAllUsers());
  
}); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
