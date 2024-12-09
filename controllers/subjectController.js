// controllers/subjectController.js
const { Subject } = require('../models/subjectModel');

// Obtener todas las materias (idiomas)
// controllers/subjectController.js
exports.getSubjects = async (req, res) => {
    try {
      const subjects = await Subject.findAll();
      res.json(subjects);  // Regresa la lista de materias
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener las materias', error });
    }
  };
  

// Asignar una materia a un estudiante
exports.assignSubjectToStudent = async (req, res) => {
    const { matricula, subjectName } = req.body;
    try {
      const student = await User.findOne({ where: { matricula, role: 'alumno' } });
      if (!student) return res.status(404).json({ message: 'Estudiante no encontrado' });
  
      const subject = await Subject.findOne({ where: { name: subjectName } });
      if (!subject) return res.status(404).json({ message: 'Materia no encontrada' });
  
      const existingAssignment = await StudentSubject.findOne({
        where: { studentId: student.id, subjectId: subject.id },
      });
      if (existingAssignment) return res.status(400).json({ message: 'Materia ya asignada' });
  
      await StudentSubject.create({ studentId: student.id, subjectId: subject.id });
      res.status(200).json({ message: 'Materia asignada correctamente' });
    } catch (error) {
      res.status(500).json({ message: 'Error al asignar la materia', error });
    }
  };
  
