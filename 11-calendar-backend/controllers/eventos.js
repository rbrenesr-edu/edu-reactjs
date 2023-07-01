const { response } = require("express");
const bcryptjs = require('bcryptjs');
const Usuario = require("../models/Usuario");
const { generarJWT } = require('../helpers/jwt');

const getEventos = async (req, res = response) => {

  return res.status(200).json({
    ok: true,
    msj: 'getEventos'
  });

}

const crearEvento = async (req, res = response) => {

  //Verificar que tenga el evento
  console.log(req.body);

  return res.status(200).json({
    ok: true,
    msj: 'crearEvento'
  });

}

const actualizarEvento = async (req, res = response) => {

  return res.status(200).json({
    ok: true,
    msj: 'actualizarEvento'
  });

}

const eliminarEvento = async (req, res = response) => {

  return res.status(200).json({
    ok: true,
    msj: 'eliminarEvento'
  });

}

const revalidarToken = async (req, res = response) => {

  const { uid, name } = req;

  //*Validar si el user uid ya existe en la base de datos??
  const usuario = await Usuario.findOne({ _id: uid });

  if (!usuario) {
    return res.status(400).json({
      ok: false,
      msg: "UID usuario no registrado"
    });
  }

  //* Generar el token JWT
  const token = await generarJWT(usuario.id, usuario.name);


  return res.status(200).json({
    ok: true,
    token
  });
};

module.exports = { getEventos, crearEvento, actualizarEvento, eliminarEvento, revalidarToken };
