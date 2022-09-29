var express = require('express');
var router = express.Router();

var pool = require('../db/database');
var client = require('../db/database');


/* GET home page. */
client.query('SELECT VERSION();', (err, res) => {
	client.end();
	jsonObj = res.rows;
});

router.get('/', function (req, res, next) {

	res.render('index', { title: "Will Gibson's HW3", version: jsonObj[0].version });
});

module.exports = router;