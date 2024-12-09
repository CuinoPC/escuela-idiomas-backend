const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// Importar las rutas
const userRoutes = require('./routes/userRoutes');  // Ruta de usuarios
const gradeRoutes = require('./routes/gradeRoutes'); // Ruta de calificaciones
const professorSubjectRoutes = require('./routes/professorSubjectRoutes');
const studentSubjectRoutes = require('./routes/studentSubjectRoutes');
const subjectRoutes = require('./routes/subjectRoutes');

// Middleware
app.use(cors());
app.use(bodyParser.json());  // Para manejar datos JSON en las solicitudes

// Usar las rutas de los controladores
app.use('/api/users', userRoutes);
app.use('/api/grades', gradeRoutes);
app.use('/api/professor_subjects', professorSubjectRoutes);
app.use('/api/student_subjects', studentSubjectRoutes);
app.use('/api/subjects', subjectRoutes);

// Puerto donde correrá la aplicación
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
