/*
    Event Routes
    /api/events
*/

const { Router } = require('express');
const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require('../controllers/events');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// Todas tienen que pasar por la validación del JWT
router.use( validarJWT ); // Cualquier petición de abajo tiene que pasar por este token

router.get('/', getEventos);

router.post('/', crearEvento);

router.put('/:id', actualizarEvento);

router.delete('/:id', eliminarEvento);

module.exports = router;
