const db = require('../database/db'); // Importa la conexión a la base de datos

// Obtener todas las calificaciones de un alumno (por alumno y asignatura)
exports.getGradesByStudentId = (studentId, callback) => {
  db.query(
    'SELECT g.grade, s.name AS subject FROM grades g JOIN subjects s ON g.subject_id = s.id WHERE g.student_id = ?',
    [studentId],
    (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    }
  );
};

// Asignar una calificación a un alumno (por asignatura)
exports.assignGrade = (studentId, subjectId, grade, callback) => {
  db.query(
    'INSERT INTO grades (student_id, subject_id, grade) VALUES (?, ?, ?)',
    [studentId, subjectId, grade],
    (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    }
  );
};

// Actualizar una calificación de un alumno
exports.updateGrade = (studentId, subjectId, grade, callback) => {
  db.query(
    'UPDATE grades SET grade = ? WHERE student_id = ? AND subject_id = ?',
    [grade, studentId, subjectId],
    (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    }
  );
};
