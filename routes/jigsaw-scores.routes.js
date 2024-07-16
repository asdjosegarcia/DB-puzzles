const express = require('express');
const router = express.Router();
const db = require('./db');

// Obtener todos los registros
router.get('/', (req, res) => {
  db.query('SELECT * FROM JigsawScore', (err, results) => {
    if (err) {
      console.error('Error ejecutando la consulta:eo', err);
      res.status(500).send('Error en el servidor eeoo');
      return;
    }
    res.json(results);
  });
});

// Crear un nuevo registro
router.post('/', (req, res) => {
  const nuevoRegistro = req.body;
  db.query('INSERT INTO tabla SET ?', nuevoRegistro, (err, result) => {
    if (err) {
      console.error('Error ejecutando la consulta:', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    res.status(201).send(`Registro creado con ID: ${result.insertId}`);
  });
});

module.exports = router;
