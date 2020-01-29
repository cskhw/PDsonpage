var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'asd433535',
  port:3306,
  database:'ialab'
})



/* GET users listing. */
router.get('/', function(req, res, next) {
  connection.query('select * from topic', function(err, rows){
    if(err) throw err;
    console.log(rows)
    res.json(rows);
  })
});


module.exports = router;
