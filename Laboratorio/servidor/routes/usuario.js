//Rutas para producto
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');



// agenda/usuarios
router.post('/', (usuarioController.agregarUsuario));
router.get('/', (usuarioController.listarUsuarios));
router.put('/:id', (usuarioController.actualizarUsuarios));
router.get('/:id', (usuarioController.obtenerUsuario));
router.delete('/:id', (usuarioController.borrarUsuario));

module.exports = router;