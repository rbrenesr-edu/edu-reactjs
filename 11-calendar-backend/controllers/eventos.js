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

  const eventoId = req.params.id;
  const uid = req.uid;

  try {

    const evento = await Evento.findById(eventoId);

    if (!evento) {
      return res.status(404).json({
        ok: false,
        msg: 'Evento no existe con ese id.',
        eventoId
      });
    }

    if (evento.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: 'No tiene privilegio de editar este evento.'
      });      
    }


    const nuevoEvento = {
      user: uid
    }


    const eventoActualizado = await Evento.findByIdAndUpdate(eventoId, nuevoEvento, { new: true });

    return res.status(200).json({
      ok: true,
      msg: 'actualizarEvento',
      eventoActualizado,
    });


  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Error al procesar actualizarEvento'
    });
  }

}

const eliminarEvento = async (req, res = response) => {

  
  const eventoId = req.params.id;
  const uid = req.uid;

  try {

    const evento = await Evento.findById(eventoId);

    if (!evento) {
      return res.status(404).json({
        ok: false,
        msg: 'Evento no existe con ese id.',
        eventoId
      });
    }

    if (evento.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: 'No tiene privilegio de eliminar este evento.'
      });      
    }



    const eventoEliminado = await Evento.findByIdAndDelete(eventoId);

    return res.status(200).json({
      ok: true,
      msg: 'eliminarEvento',
      eventoEliminado,
    });


  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Error al procesar eliminarEvento'
    });
  }
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
