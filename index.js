require('dotenv').config(); //to use .env variables
const express = require('express');
const app = express();
const port = process.env.PORT;

// Middleware para parsear JSON
app.use(express.json());

// Importar las rutas
const routes = require('./routes'); //we indicates routes directory

// Usar las rutas
app.use('/', routes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
