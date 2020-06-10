const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Biboudamour0.',
    database: 'company'
})

module.exports = connection;
