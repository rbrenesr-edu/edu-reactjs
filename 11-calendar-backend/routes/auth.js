//* Rutas del Usuaario / Auth
//* host+/api/auth

const express = require('express');
const router = express.Router();

 router.get('/', (req, res) => {
  res.json({
    'ok':true
  });    
});

//* Exportación de la ruta
module.exports = router;
