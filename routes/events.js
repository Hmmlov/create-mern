/* 
    Event Routes

    /api/events

*/

const { Router} = require('express');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { valdiarJWT } = require('../middlewares/valdiar-jwt');
const { validarCampos } = require('../middlewares/validar-campos');
const {check} = require('express-validator');
const { isDate } = require('../helpers/isDate');
const router = Router();


// Todas tienen que pasar por la validación del JWT
router.use(valdiarJWT);  // para mantener todas las rutas debajo de esta protegidas y que requieren del  token para poder acceder, en caso de querer alguna publica, se coloca el router abajo de esa y será automaticamente publica.
// Obtener eventos
router.get('/', getEventos );

// Crear un nuevo evento
router.post(
    '/',
    [
        check('title', 'El Titulo es Obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom( isDate ),
        check('end', 'Fecha de fin es obligatoria').custom( isDate ),
        validarCampos
    ],
    crearEvento
);

// Actualizar evento
router.put('/:id', actualizarEvento);

// Eliminar evento
router.delete('/:id', eliminarEvento);

module.exports = router;

