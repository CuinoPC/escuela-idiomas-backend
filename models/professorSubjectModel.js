const db = require('../database/db');

// Asignar materia a profesor
exports.assignSubjectToProfessor = (professorId, subjectId, callback) => {
  const query = 'INSERT INTO professor_subjects (professor_id, subject_id) VALUES (?, ?)';
  db.query(query, [professorId, subjectId], callback);
};

// Obtener las materias de un profesor
exports.getSubjectsByProfessor = (professorId, callback) => {
  const query = 'SELECT subjects.name FROM subjects JOIN professor_subjects ON subjects.id = professor_subjects.subject_id WHERE professor_subjects.professor_id = ?';
  db.query(query, [professorId], callback);
};
