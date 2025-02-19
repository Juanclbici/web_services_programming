const { Sequelize } = require('sequelize');

// Configuración de la base de datos SQLite (cambia a MySQL/PostgreSQL si es necesario)
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite' // Archivo de base de datos SQLite
});

// Verificar la conexión
(async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Conexión a la base de datos establecida con éxito.');
    } catch (error) {
        console.error('❌ Error al conectar a la base de datos:', error);
    }
})();

module.exports = sequelize;