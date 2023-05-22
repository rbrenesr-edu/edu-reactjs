//* Rutas del Usuaario / Auth
//* host+/api/auth

const express = require("express");
const router = express.Router();
const {
  loginUsuario,
  crearUsuario,
  revalidarToken,
} = require("../controllers/auth");

router.post("/", loginUsuario);

router.post("/new", crearUsuario);

router.get("/renew", revalidarToken);

//* Exportación de la ruta
module.exports = router;
