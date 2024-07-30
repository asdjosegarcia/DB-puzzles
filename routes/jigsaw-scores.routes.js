const express = require('express');
const router = express.Router();
const db = require('./db');


router.get('/', (req, res) => { //obtains all  scores
  db.query('SELECT * FROM JigsawScore', (err, results) => {
    if (err) {
      console.error('Error ejecutando la consulta:', err);
      res.status(500).json('Error en el servidor');
      return;
    }
    res.json(results);
  });
});


router.post('/', (req, res) => { // create new score, req data sended by client
  const { map, user, userId, score, secondsPlayed, movementsNumber, mapWin } = req.body; // req.body pase json and  disassemble data on, map,user,userid

  // Verifica que los campos obligatorios no estén vacíos
  if (!user) {//if user has no content.
    return res.status(400).json('El campo "user" es obligatorio'); 
  }

  const newScore = {//obect to insert on database.
    map: map || 0,
    user,
    userId: userId || null,
    score: score || 0,
    secondsPlayed: secondsPlayed || 0,
    movementsNumber: movementsNumber || 0,
    mapWin: mapWin || 0
  };

  const sql = `
    INSERT INTO JigsawScore (map, user, userId, score, secondsPlayed, movementsNumber, mapWin)
    VALUES (?, ?, ?, ?, ?, ?, ?) 
  `;//database SQL to insert

  const values = [
    newScore.map,//values to insert in database
    newScore.user,
    newScore.userId,
    newScore.score,
    newScore.secondsPlayed,
    newScore.movementsNumber,
    newScore.mapWin
  ];

  db.query(sql, values, (err, result) => { //db.query library to execute SQL code in DB, sql variable alocate new SQL code, 
    if (err) {
      console.error('Error ejecutando la consulta:', err); 
      return res.status(500).send('Error en el servidor');
    }
    res.status(201).json(`Registro creado con ID: ${result.insertId}`);
  });
});


//edit score
router.put('/:id', (req, res) => { // obtains id from endpoint
  const { id } = req.params; // obtains endpoint id to update
  const { user  } = req.body; // req.body pase json and  disassemble user

  if (!user) {//if user has no content.
    return res.status(400).json('El campo "user" es obligatorio'); 
  }

  const editedScore = {//obect to edit on database.
    user,
  };

  //UPDATE tweets SET num_comments = num_comments + 1 WHERE tweet_id =1;
  const sql=`UPDATE JigsawScore SET  user = ?  WHERE score_id = ? `//database SQL to insert

  const values = [
    editedScore.user,//values to insert in database
    id
  ];

  db.query(sql, values, (err, result) => { //db.query library to execute SQL code in DB, sql variable alocate new SQL code, 
    if (err) {
      console.error('Error ejecutando la consulta:', err); 
      return res.status(500).send('Error en el servidor');
    }
    res.status(201).json(`Registro actualizado con ID: ${id}`);
  });
});



//delete score
router.delete('/:id', (req, res) => { // obtains id from endpoint
  const { id } = req.params; // obtains endpoint id to update

  const sql=` DELETE FROM JigsawScore WHERE  score_id=?; `//database SQL to insert

  const values = [
    id //id from query parameter
  ];

  db.query(sql, values, (err, result) => { //db.query library to execute SQL code in DB, sql variable alocate new SQL code, 
    if (err) {
      console.error('Error ejecutando la consulta:', err); 
      return res.status(500).send('Error en el servidor');
    }
    res.status(201).json(`Registro eliminado con ID: ${id}`);
  });
});






module.exports = router;
