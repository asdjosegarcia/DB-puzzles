const express = require('express');
const router = express.Router();

// Importar las rutas
const registrosRoutes = require('./registros');

// Usar las rutas
router.use('/registros', registrosRoutes);

module.exports = router;
