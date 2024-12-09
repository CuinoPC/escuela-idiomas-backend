const express = require('express');
const router = express.Router();
const gradeController = require('../controllers/gradeController');

// Rutas para las calificaciones
router.get('/student/:studentId', gradeController.getGradesByStudentId); // Obtener calificaciones de un alumno
router.post('/assign', gradeController.assignGrade); // Asignar una calificación a un alumno
router.put('/update', gradeController.updateGrade); // Actualizar la calificación de un alumno

module.exports = router;
