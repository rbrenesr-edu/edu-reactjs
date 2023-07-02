const { response } = require("express");
const { generarJWT } = require('../helpers/jwt');
const bcryptjs = require('bcryptjs');
const Usuario = require("../models/Usuario");
const Evento = require('../models/Evento');

const getEventos = async (req, res = response) => {

  const eventos = await Evento.find()
  .populate('user', 'name');

  return res.status(200).json({
    ok: true,
    msj: 'getEventos',
    eventos
  });

}

const crearEvento = async (req, res = response) => {

  const evento = new Evento(req.body);
  evento.user = req.uid;

  try {

    const eventoGuardado = await evento.save();

    res.status(200).json({
      ok: true,
      msg: 'Evento guardado.',
      evento: eventoGuardado
    });


  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Error al procesar crearEvento'
    });

  }


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
