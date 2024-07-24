require('dotenv').config(); //to use .env variables
const mysql = require('mysql2'); // to conect nodejs with mysql

const db = mysql.createConnection({//create new conection
  host: process.env.DB_HOST, //call to eviroment vars
  user: process.env.DB_USER,
  password:  process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    process.exit(1); // Salir del proceso si hay un error de conexión
  }
  console.log('Conectado a la base de datos MySQL');
});

module.exports = db;
