const express = require('express');
const ejs = require('ejs');
const app = express();
const port = 3000;

// db 연결
const mysql = require('./database')();
const connection = mysql.init();
mysql.db_open(connection);
connection.query('SELECT * FROM user_table',
  function (error, results, fields){
    if (error){
      console.log(error);
    }
    console.log(results);
  });

app.set("view engine", 'ejs');
app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
  console.log('테스트페이지');
  res.render("test1", {});
});

app.listen(port, () => {
  console.log(`서버가 실행됩니다. http://localhost:${port}`);
});


app.route('/user')
  .post((req, res) => {
    res.send('User 생성');
  })
  .get((req, res) => {
    connection.query('SELECT * FROM user_table',
      function (error, results, fields){
        if (error){
          console.log(error);
        }
        console.log(results);
        res.send(results);
      });
  })
  .put((req, res) => {
    res.send('User 수정');
  });

