const express = require('express');
const router = express.Router();
const { create, getAll, getAvailable, adopt, delete: deletePet } = require('../controllers/pet.controller');
const { auth, admin } = require('../middlewares/auth.middleware');

// Solo admin puede agregar o borrar mascotas
router.post('/', auth, admin, create);
router.delete('/:id', auth, admin, deletePet);

// Ver mascotas
router.get('/', getAll);                  // Todas
router.get('/available', getAvailable);   // Solo disponibles

// Adoptar mascota (usuario logueado)
router.put('/:id/adopt', auth, adopt);

module.exports = router;
