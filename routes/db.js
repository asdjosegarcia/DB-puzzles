require('dotenv').config(); //to use .env variables
const mysql = require('mysql2'); // to conect nodejs with mysql
const fs = require('fs');

// const db = mysql.createConnection({//create new conection
//   host: process.env.DB_HOST, //call to eviroment vars
//   user: process.env.DB_USER,
//   port: process.env.DB_PORT,
//   password:  process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   ssl: {
//     // Lee el certificado desde el archivo
//     ca: fs.readFileSync(process.env.DB_CA_CERT_PATH),
//   },

// });
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  // ssl: {
  //   // Lee el certificado desde el archivo
  //   ca: fs.readFileSync(process.env.DB_CA_CERT_PATH),
  // },
  connectTimeout: 10000 // 10 segundos
});

db.connect(err => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    process.exit(1); // Salir del proceso si hay un error de conexión
  }
  console.log('Conectado a la base de datos MySQL');
});

module.exports = db;
