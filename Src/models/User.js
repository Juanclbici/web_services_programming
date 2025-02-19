const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Importar la conexión

// Definir el modelo de usuario
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    timestamps: true // Agrega createdAt y updatedAt automáticamente
});

module.exports = User;