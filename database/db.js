const mysql = require('mysql2');

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',           
  password: '12345', 
  database: 'escuela'                                  
});

// Verifica la conexión
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err.message);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});

// Exportar la conexión para usarla en otros archivos
module.exports = connection;
