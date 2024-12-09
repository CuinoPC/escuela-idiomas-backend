const db = require('../database/db'); // Importa la conexión de la base de datos

// Función para crear un nuevo usuario
exports.createUser = (newUser, callback) => {
    const query = 'INSERT INTO users (name, matricula, role, password) VALUES (?, ?, ?, ?)';
    db.query(query, [newUser.name, newUser.matricula, newUser.role, newUser.password], callback);
};

// Función para actualizar la información de un usuario
exports.updateUser = (matricula, updatedUser, callback) => {
    const query = 'UPDATE users SET name = ?, role = ?, password = ? WHERE matricula = ?';
    db.query(query, [updatedUser.name, updatedUser.role, updatedUser.password, matricula], callback);
};

// Función para eliminar un usuario
exports.deleteUser = (matricula, callback) => {
    const query = 'DELETE FROM users WHERE matricula = ?';
    db.query(query, [matricula], callback);
};

// Función para obtener todos los usuarios
exports.getUsers = (callback) => {
    const query = 'SELECT * FROM users';
    db.query(query, callback);
};

// Función para obtener un usuario por matrícula
exports.getUserByMatricula = (matricula, callback) => {
    const query = 'SELECT * FROM users WHERE matricula = ? LIMIT 1'; // Limitar a un solo usuario
    db.query(query, [matricula], (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result); // Resultado será un arreglo con un solo usuario
        }
    });
};

// Obtener todas las asignaturas que imparte un profesor
exports.getSubjectsByProfessorId = (professorId, callback) => {
    db.query(
        'SELECT s.name AS subject FROM professor_subjects ps JOIN subjects s ON ps.subject_id = s.id WHERE ps.professor_id = ?',
        [professorId],
        (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, results);
        }
    );
};
