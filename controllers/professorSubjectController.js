const professorSubjectModel = require('../models/professorSubjectModel');

// Asignar materia a profesor
exports.assignSubjectToProfessor = (req, res) => {
  const { professorId, subjectId } = req.body;
  
  professorSubjectModel.assignSubjectToProfessor(professorId, subjectId, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error al asignar la materia al profesor', error: err });
    }
    res.status(201).json({ message: 'Materia asignada al profesor correctamente' });
  });
};

// Obtener las materias de un profesor
exports.getSubjectsByProfessor = (req, res) => {
  const professorId = req.params.professorId;

  professorSubjectModel.getSubjectsByProfessor(professorId, (err, subjects) => {
    if (err) {
      return res.status(500).json({ message: 'Error al obtener las materias del profesor', error: err });
    }
    res.status(200).json(subjects);
  });
};
