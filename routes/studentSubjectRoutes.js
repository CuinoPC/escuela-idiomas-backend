const express = require('express');
const router = express.Router();
const studentSubjectController = require('../controllers/studentSubjectController');

// Ruta para asignar una materia a un estudiante
router.post('/assign', studentSubjectController.assignSubjectToStudent);

// Ruta para obtener las materias de un estudiante
router.get('/student/:studentId', studentSubjectController.getSubjectsByStudentId);

module.exports = router;
