// routes/subjectRoutes.js
const express = require('express');
const router = express.Router();
const subjectController = require('../controllers/subjectController');

// Ruta para obtener todas las materias
router.get('/', subjectController.getSubjects);

// Asignar una materia a un estudiante (por matrícula y nombre de la materia)
router.post('/assign', subjectController.assignSubjectToStudent);

module.exports = router;