const { response } = require("express");
const { validationResult } = require("express-validator");

const loginUsuario = (req, res = response) => {
  const { email, password } = req.body;
  const errores = validationResult(req);

  if (!errores.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errores: errores.mapped(),
    });
  }

  res.status(200).json({
    ok: true,
    msg: "login",
    email,
    password,
  });
};

const crearUsuario = (req, res = response) => {
  const { name, email, password } = req.body;

  // comentario
  //   if(name.length < 5){
  //      return res.status(400).json( {
  //         ok:false,
  //         msg:"El nombre debe tener al menos 5 letras"
  //     });
  //   }
  // comentario
  const errores = validationResult(req);
  //   console.log(errores);
  if (!errores.isEmpty()) {
    //*Si hay errores
    return res.status(400).json({
      ok: false,
      errores: errores.mapped(),
    });
  }

  res.status(201).json({
    ok: true,
    msg: "registro",
    name,
    email,
    password,
  });
};

const revalidarToken = (req, res = response) => {
  res.status(201).json({
    ok: true,
    msg: "renew",
  });
};

module.exports = { loginUsuario, crearUsuario, revalidarToken };
