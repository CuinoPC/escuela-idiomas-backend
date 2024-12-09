const userModel = require('../models/userModel');  // Asegúrate de que el modelo esté importado correctamente

// Crear nuevo usuario (Profesor o Estudiante)
exports.createUser = (req, res) => {
    const { name, matricula, role, password } = req.body;
    const newUser = { name, matricula, role, password };

    userModel.createUser(newUser, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al registrar el usuario', error: err });
        }
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    });
};

// Modificar la información de un usuario
exports.updateUser = (req, res) => {
    const matricula = req.params.matricula;
    const updatedUser = req.body; // Los datos a modificar deben venir en el cuerpo de la solicitud

    userModel.updateUser(matricula, updatedUser, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al actualizar el usuario', error: err });
        }
        res.status(200).json({ message: 'Usuario actualizado exitosamente' });
    });
};

// Eliminar un usuario (inactivo)
exports.deleteUser = (req, res) => {
    const matricula = req.params.matricula;

    userModel.deleteUser(matricula, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al eliminar el usuario', error: err });
        }
        res.status(200).json({ message: 'Usuario eliminado exitosamente' });
    });
};

// Obtener todos los usuarios
exports.getAllUsers = (req, res) => {
    userModel.getUsers((err, users) => {
        if (err) {
            return res.status(500).json({ message: 'Error al obtener los usuarios', error: err });
        }
        res.status(200).json(users);
    });
};

// Obtener un usuario por matrícula (para modificar, ver o eliminar)
exports.getUserByMatricula = (req, res) => {
    const matricula = req.params.matricula;
    userModel.getUserByMatricula(matricula, (err, user) => {
        if (err) {
            return res.status(500).json({ message: 'Error al obtener los datos del usuario', error: err });
        }
        res.status(200).json(user);
    });
};

// Lógica para login
exports.loginUser = (req, res) => {
    const { matricula, password } = req.body;

    // Buscar usuario por matrícula
    userModel.getUserByMatricula(matricula, (err, users) => {
        if (err) {
            return res.status(500).json({ message: 'Error al obtener el usuario', error: err });
        }
        if (users.length === 0) {
            return res.status(401).json({ message: 'Usuario no encontrado' });
        }

        const user = users[0];

        // Verificar si la contraseña coincide
        if (user.password !== password) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        // Si las credenciales son correctas, devolver el rol
        res.status(200).json({
            message: 'Autenticación exitosa',
            user: {
                matricula: user.matricula,
                role: user.role,  // Devuelves el rol para la redirección
            }
        });
    });
};

// Obtener las asignaturas de un profesor
exports.getSubjectsByProfessorId = (req, res) => {
    const professorId = req.params.professorId;

    userModel.getSubjectsByProfessorId(professorId, (err, subjects) => {
        if (err) {
            return res.status(500).json({ message: 'Error al obtener las asignaturas del profesor', error: err });
        }
        res.status(200).json(subjects);
    });
};