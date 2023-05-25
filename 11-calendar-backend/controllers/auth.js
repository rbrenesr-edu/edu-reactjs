const { response } = require("express");
const Usuario = require("../models/Usuario");

const loginUsuario = (req, res = response) => {
  const { email, password } = req.body;

  res.status(200).json({
    ok: true,
    msg: "login",
    email,
    password,
  });
};

const crearUsuario = async (req, res = response) => {
  const { name, email, password } = req.body;

  //* En esta sección es posible hacer validaciones, pero se recomienda usar express-validator directamente en los routes
  //   if(name.length < 5){
  //      return res.status(400).json( {
  //         ok:false,
  //         msg:"El nombre debe tener al menos 5 letras"
  //     });
  //   }
  // comentario

  try {

    //*Validar si el user email ya existe en la base de datos
    let usuario = await Usuario.findOne({ email });

    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: "El email ya se encuentra registrado"
      });
    }


    //* Desde acá se puede ingresar un nuevo usuario.
    usuario = new Usuario(req.body);
    await usuario.save();

    res.status(201).json({
      ok: true,
      msg: "registro",
      uid: usuario.id,
      name: usuario.name,      
    });
  } catch (error) {

    console.log('error personalizado:  ' + error);
     
    res.status(500).json({
      ok: false,
      msg: "Verificar con admin"
    });
  }
};

const revalidarToken = (req, res = response) => {
  return res.status(200).json({
    ok: true,
    msg: "renew",
  });
};

module.exports = { loginUsuario, crearUsuario, revalidarToken };
