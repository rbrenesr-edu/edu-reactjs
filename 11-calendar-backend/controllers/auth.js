const { response } = require("express");

const loginUsuario = (req, res = response) => {
  res.json({
    ok: true,
    msg: "login",
  });
};

const crearUsuario = (req, res = response) => {
  res.json({
    ok: true,
    msg: "registro",
  });
};

const revalidarToken = (req, res = response) => {
  res.json({
    ok: true,
    msg: "renew",
  });
};

module.exports = { loginUsuario, crearUsuario, revalidarToken };
