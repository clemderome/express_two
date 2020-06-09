const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Biboudamour0.',
    database: 'company'
})

connection.connect(function(err){
    (err)? console.log(err+' No connect'): console.log(connection + 'ok');
});

module.exports = connection;
