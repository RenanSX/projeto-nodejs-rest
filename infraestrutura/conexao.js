const mysql = require('mysql');

const conexao = mysql.createConnection({
    hots: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'agendapetshop'
});

module.exports = conexao;