const express = require('express');
const router = express.Router();
const { getProfile, getAll, delete: deleteUser } = require('../controllers/user.controller');
const { auth, admin } = require('../middlewares/auth.middleware');

router.get('/me', auth, getProfile);         // Ver mi perfil
router.get('/', auth, admin, getAll);        // Listar usuarios (admin)
router.delete('/:id', auth, admin, deleteUser); // Eliminar usuario (admin)

module.exports = router;
