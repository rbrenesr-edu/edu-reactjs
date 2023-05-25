const { response } = require("express");
const bcryptjs = require('bcryptjs');
const Usuario = require("../models/Usuario");
const { generarJWT } = require('../helpers/jwt');

const loginUsuario = async (req, res = response) => {

  const { email, password } = req.body;

  try {

    //* Verificar si email existe en la BD
    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario no existe con ese email."
      });
    }

    //*Confirmar password
    const validarPassword = bcryptjs.compareSync(password, usuario.password);
    if (!validarPassword) {
      return res.status(400).json({
        ok: false,
        msg: "La autenticación falló!"
      });
    }
    //* Generar el token JWT
    const token = await generarJWT(usuario.id, usuario.name);

    res.status(200).json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
      token
    });


  } catch (error) {
    console.log('error personalizado:  ' + error);
    res.status(500).json({
      ok: false,
      msg: "Verificar con admin"
    });
  }

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

    //* Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    await usuario.save();

    //* Generar el token JWT
    const token = await generarJWT(usuario.id, usuario.name);

    res.status(201).json({
      ok: true,
      msg: "registro",
      uid: usuario.id,
      name: usuario.name,
      token
    });
  } catch (error) {
    console.log('error personalizado:  ' + error);
    res.status(500).json({
      ok: false,
      msg: "Verificar con admin"
    });
  }
};

const revalidarToken = async (req, res = response) => {

  const { uid, name } = req;


  //*Validar si el user uid ya existe en la base de datos
  const usuario = await Usuario.findOne({ _id:uid });

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

module.exports = { loginUsuario, crearUsuario, revalidarToken };
