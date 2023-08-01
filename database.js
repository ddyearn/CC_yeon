const mysql = require('mysql');

module.exports = function () {
  return {
    init: function() {
      return mysql.createConnection({
        host: 'localhost',
        port: '3306',
        user: 'yeon',
        password: 'codecrain',
        database: 'testdb'
      })
    },

    db_open: function (con) {
      con.connect(function (err) {
        if (err) {
          console.error('mysql connection error :' + err);
        } else {
          console.info('mysql is connected successfully.');
        }
      })
    }
  }
};