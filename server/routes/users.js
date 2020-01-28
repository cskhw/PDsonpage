var express = require('express');
var router = express.Router();
var mysql = require('../../config/database')
var connection = mysql.init();

mysql.test_open(connection);



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id: 1, username: "somebody"},
    {id: 2, username: "somebody_else"}
  ]);
});


module.exports = router;
