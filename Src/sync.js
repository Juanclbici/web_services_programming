const sequelize = require('./database');
const User = require('./models/User');

(async () => {
    try {
        await sequelize.sync({ force: true }); // Elimina y recrea las tablas
        console.log("✅ Base de datos sincronizada correctamente.");
        process.exit();
    } catch (error) {
        console.error("❌ Error al sincronizar la base de datos:", error);
        process.exit(1);
    }
})();