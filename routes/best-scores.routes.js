const express = require('express');
const router = express.Router();
const db = require('./db');


router.get('/', (req, res) => { //obtains all  scores
    db.query('SELECT * FROM JigsawScore ORDER BY score DESC LIMIT 10;  ', (err, results) => {
      if (err) {
        console.error('Error ejecutando la consulta:', err);
        res.status(500).send('Error en el servidor');
        return;
      }
      console.log('Resultados:', results);
      res.json(results);
    });
  });

module.exports = router;
