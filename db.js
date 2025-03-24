const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'user',
    database: 'pi_irrigacao',
    port: 3306,
});
  
connection.connect(err => {
if (err) {
    console.error('Erro na conexão:', err);
} else {
    console.log('Conectado ao MySQL!');
}
});

module.exports = connection;