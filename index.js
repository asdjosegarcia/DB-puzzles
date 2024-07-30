require('dotenv').config(); //to use .env variables
const express = require('express');
const cors = require('cors'); // Importa el paquete cors
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Habilita CORS para todas las rutas
app.use(cors(
  // {
  //   origin: 'https://tu-dominio-permitido.com'
  // }
));

// Importar las rutas
const routes = require('./routes'); //we indicates routes directory

// Usar las rutas
app.use('/', routes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Hello, word!');
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
