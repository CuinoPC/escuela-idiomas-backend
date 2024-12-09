const gradeModel = require('../models/gradeModel');

// Asignar una calificación a un estudiante
exports.assignGrade = (req, res) => {
  const { studentId, subjectId, grade } = req.body;

  gradeModel.assignGrade(studentId, subjectId, grade, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error al asignar la calificación', error: err });
    }
    res.status(201).json({ message: 'Calificación asignada correctamente' });
  });
};

// Obtener las calificaciones de un estudiante
exports.getGradesByStudentId = (req, res) => {
  const studentId = req.params.studentId;

  gradeModel.getGradesByStudentId(studentId, (err, grades) => {
    if (err) {
      return res.status(500).json({ message: 'Error al obtener las calificaciones', error: err });
    }
    res.status(200).json(grades);
  });
};

// Actualizar calificación de un estudiante (solo para profesores)
exports.updateGrade = (req, res) => {
  const { studentId, subjectId, grade } = req.body;

  gradeModel.updateGrade(studentId, subjectId, grade, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error al actualizar la calificación', error: err });
    }
    res.status(200).json({ message: 'Calificación actualizada correctamente' });
  });
};
