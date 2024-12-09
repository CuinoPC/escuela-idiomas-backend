// models/subjectModel.js
module.exports = (sequelize, DataTypes) => {
    const Subject = sequelize.define('Subject', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Las materias deben tener nombres únicos
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    });
  
    return Subject;
  };
  