const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'article',
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log('DB connection succeded.');
    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});
app.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM info', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});
app.get('/article', (req, res) => {
    mysqlConnection.query('SELECT * FROM arti', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});




app.post('/', (req, res) => {
    
    console.log(req.body,"this is req body");
    var det={
      "firstName":req.body.firstName,
      "lastName":req.body.lastName,
      "email":req.body.email,
     "password":req.body.password,
    
    }
      mysqlConnection.query('INSERT INTO info SET ?',det, (err, rows, fields) => {
          if (err){
              console.log(err);
          }   
          else{
            console.log('The solution is: ', rows);
          }
        })
  });
  app.post('/article', (req, res) => {
    
    console.log(req.body,"this is req body");
    var det={
      "articlename":req.body.articlename,
      "content":req.body.content,
      "articleauthor":req.body.content
    
    }
      mysqlConnection.query('INSERT INTO arti SET ?',det, (err, rows, fields) => {
          if (err){
              console.log(err);
          }   
          else{
            console.log('The solution is: ', rows);
          }
        })
  });





  app.listen(3000, () => console.log('Express server is runnig at port no : 3000'));