/**
 * events routes
 * /api/events
 */


const express = require("express");
const router = express.Router();

const { getEventos, crearEvento, actualizarEvento, eliminarEvento,} = require("../controllers/eventos");

const { check } = require("express-validator");
const { validarCampos } = require('../middlewares/validarCampos');
const { isDate } = require('../helpers/isDate');
const { validarJWT } = require('../middlewares/validarJWT');

/**
 * Cuando en todas las peticiones es necesario utilizar un meddleware, se puede eliminar de cada peticion:
    router.get(
    '/', 
    [validarJWT], ******************* <===
    getEventos
    );
    
    Y utilizar con un solo llamado con router.use(  );

 */

    router.use(validarJWT);


router.get(
    '/',     
    getEventos
    );
router.post(
    '/',     
    [
        check('title', 'El título es obligatorio').not().isEmpty(),
        check('start', 'Fecha inicio es obligatorio').custom( isDate ),
        check('end', 'Fecha fin es obligatorio').custom( isDate ),
        validarCampos
    ],
    crearEvento
    );
router.put(
    '/:id',    
    [
        check('title', 'El título es obligatorio').not().isEmpty(),
        check('start', 'Fecha inicio es obligatorio').custom( isDate ),
        check('end', 'Fecha fin es obligatorio').custom( isDate ),
        check('id','Id no es valido.').isMongoId(),
        validarCampos
    ], 
    actualizarEvento
    );
router.delete(
    '/:id',     
    eliminarEvento
    );


//* Exportación de la ruta
module.exports = router;
