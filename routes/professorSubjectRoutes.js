const express = require('express');
const router = express.Router();
const professorSubjectController = require('../controllers/professorSubjectController');

// Asignar materia a profesor
router.post('/assign', professorSubjectController.assignSubjectToProfessor);

// Obtener materias de un profesor
router.get('/:professorId', professorSubjectController.getSubjectsByProfessor);

module.exports = router;
