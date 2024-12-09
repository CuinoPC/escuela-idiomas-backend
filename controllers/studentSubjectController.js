const studentSubjectModel = require('../models/studentSubjectModel');

// Asignar materia a un estudiante
exports.assignSubjectToStudent = (req, res) => {
  const { studentId, subjectId } = req.body;

  studentSubjectModel.assignSubjectToStudent(studentId, subjectId, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error al asignar la materia al estudiante', error: err });
    }
    res.status(201).json({ message: 'Materia asignada correctamente al estudiante' });
  });
};

// Obtener todas las materias de un estudiante
exports.getSubjectsByStudentId = (req, res) => {
  const studentId = req.params.studentId;

  studentSubjectModel.getSubjectsByStudentId(studentId, (err, subjects) => {
    if (err) {
      return res.status(500).json({ message: 'Error al obtener las materias del estudiante', error: err });
    }
    res.status(200).json(subjects);
  });
};
