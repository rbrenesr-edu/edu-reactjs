//* Rutas del Usuaario / Auth
//* host+/api/auth

const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { validarCampos } = require('../middlewares/validarCampos')
const {
  loginUsuario,
  crearUsuario,
  revalidarToken,
} = require("../controllers/auth");
const { validarJWT } = require('../middlewares/validarJWT');

router.post(
  "/",
  [
    check("email", "El email es requerido").isEmail(),
    check("password", "El password debe ser de mínimo 6 caracteres").isLength({ min:6 }),
    validarCampos
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
    validarCampos
  ],
  crearUsuario
);

router.get(
  "/renew"
  ,[ validarJWT ]
 ,revalidarToken);

//* Exportación de la ruta
module.exports = router;
