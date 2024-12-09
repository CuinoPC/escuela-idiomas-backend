const db = require('../database/db'); // Importar la conexión a la base de datos

// Asignar una materia a un estudiante
exports.assignSubjectToStudent = (studentId, subjectId, callback) => {
  const query = 'INSERT INTO student_subjects (student_id, subject_id) VALUES (?, ?)';
  db.query(query, [studentId, subjectId], callback);
};

// Obtener todas las materias de un estudiante
exports.getSubjectsByStudentId = (studentId, callback) => {
  const query = `
    SELECT subjects.id, subjects.name
    FROM subjects
    JOIN student_subjects ON subjects.id = student_subjects.subject_id
    WHERE student_subjects.student_id = ?`;
  db.query(query, [studentId], callback);
};
