const express = require('express');
const router = express.Router();

// Importar las rutas
const jigsawScoresRoutes = require('./jigsaw-scores.routes');


// Usar las rutas
router.use('/jigsaw-scores', jigsawScoresRoutes);


module.exports = router;
