class UserRepository {
    findUserById(id) {
      return { id, name: "Usuario de prueba" }; // Simulación de consulta a la base de datos
    }
  }
  
  module.exports = UserRepository;