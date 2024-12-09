const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Ruta para registrar un nuevo usuario
router.post('/register', userController.createUser);

// Ruta para obtener todos los usuarios (solo para admins)
router.get('/', userController.getAllUsers);

// Ruta para obtener un usuario por matrícula
router.get('/:matricula', userController.getUserByMatricula);

// Ruta para obtener las asignaturas de un profesor
router.get('/subjects/:professorId', userController.getSubjectsByProfessorId);

// Ruta para actualizar un usuario
router.put('/:matricula', userController.updateUser);

// Ruta para eliminar un usuario
router.delete('/:matricula', userController.deleteUser);

// Ruta para iniciar sesión
router.post('/login', userController.loginUser);

module.exports = router;
