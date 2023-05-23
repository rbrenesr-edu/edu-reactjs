//* Rutas del Usuaario / Auth
//* host+/api/auth

const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const {
  loginUsuario,
  crearUsuario,
  revalidarToken,
} = require("../controllers/auth");

router.post(
  "/",
  [
    check("email", "El email es requerido").isEmail(),
    check("password", "El password debe ser de mínimo 6 caracteres").isLength({ min:6 }),
],
  loginUsuario
);

router.post(
  "/new",
  [
    //*middelwares
    check("name", "El nombre es requerido").not().isEmpty(),
    check("email", "El email es requerido").isEmail(),
    check("password", "El password debe ser de mínimo 6 caracteres").isLength({
      min: 6,
    }),
  ],
  crearUsuario
);

router.get("/renew", revalidarToken);

//* Exportación de la ruta
module.exports = router;
