const mysql = require('mysql2'); // to conect nodejs with mysql

const db = mysql.createConnection({//create new conection
  host: 'localhost',
  user: 'admin',
  password: 'Admin#1234',
  database: 'puzzles_db'
});

db.connect(err => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    process.exit(1); // Salir del proceso si hay un error de conexión
  }
  console.log('Conectado a la base de datos MySQL');
});

module.exports = db;
