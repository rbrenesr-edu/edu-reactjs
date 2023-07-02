const { response } = require('express');
const jwt = require('jsonwebtoken');


const validarJWT = (req, res = response, netx) => {

    //* x-token en headers
    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición.'
        })
    }

    try {
        const payload = jwt.verify(token, process.env.SECRET_JWT_SEED);

        req.uid = payload.uid;
        req.name = payload.name;

    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido.'
        });
    }

    netx();


}

module.exports = { validarJWT }