const express = require('express');
const router = express.Router();

// Importar las rutas
const jigsawScoresRoutes = require('./jigsaw-scores.routes');
const bestScores = require('./best-scores.routes');



// Usar las rutas
router.use('/jigsaw-scores', jigsawScoresRoutes);
router.use('/jigsaw-scores/best-scores', bestScores);



module.exports = router;
