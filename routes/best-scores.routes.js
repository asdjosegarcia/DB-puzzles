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
    //   console.log('results:', results);
      res.json(results);
    });
  });

module.exports = router;



router.get('/:id', (req, res) => { //get top 10 scores based on map id
  const { id } = req.params; // obtains endpoint id to update
  const { user  } = req.body; // req.body pase json and  disassemble user




  const values = [
    id
  ];

  const sql='SELECT * FROM JigsawScore WHERE map=? ORDER BY score DESC LIMIT 10;'

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error ejecutando la consulta:', err);
      res.status(500).send('Error en el servidor');
      return;
    }


  //   console.log('results:', results);
    res.json(results);
  });
});

module.exports = router;

