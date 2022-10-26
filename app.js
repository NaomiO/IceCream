const mysql = require('mysql2');

var connection = mysql.createConnection({
	host : 'localhost',
	database : 'naomi',
	user : 'root',
	password : 'elisheva7'
});

module.exports = connection;